import nodemailer from 'nodemailer';

// Simple in-memory rate limiter for serverless instance / dev server
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  const clientData = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };

  if (now > clientData.resetTime) {
    clientData.count = 1;
    clientData.resetTime = now + RATE_LIMIT_WINDOW_MS;
  } else {
    clientData.count += 1;
  }

  rateLimitMap.set(ip, clientData);

  // Periodic cleanup of stale entries
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) rateLimitMap.delete(key);
    }
  }

  return clientData.count <= MAX_REQUESTS_PER_WINDOW;
}

// Helper to escape HTML to prevent XSS in HTML email template
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Helper to parse JSON body if req.body is a string or stream
async function parseRequestBody(req) {
  if (req.body) {
    if (typeof req.body === 'string') {
      try {
        return JSON.parse(req.body);
      } catch {
        return {};
      }
    }
    if (typeof req.body === 'object') {
      return req.body;
    }
  }

  return new Promise((resolve) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        resolve({});
      }
    });
    req.on('error', () => resolve({}));
  });
}

export default async function handler(req, res) {
  // Set CORS / Content-Type headers
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
  }

  // Determine client IP for rate limiting
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
             req.socket?.remoteAddress ||
             'unknown-ip';

  if (!checkRateLimit(ip)) {
    res.statusCode = 429;
    return res.end(JSON.stringify({
      success: false,
      error: 'TOO MANY REQUESTS // PLEASE WAIT A FEW MINUTES BEFORE TRYING AGAIN'
    }));
  }

  const body = await parseRequestBody(req);
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  // Server-side validation
  if (!name) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ success: false, error: 'NAME IS REQUIRED' }));
  }

  if (name.length > 100) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ success: false, error: 'NAME MUST NOT EXCEED 100 CHARACTERS' }));
  }

  if (!email) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ success: false, error: 'EMAIL IS REQUIRED' }));
  }

  if (email.length > 254) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ success: false, error: 'EMAIL MUST NOT EXCEED 254 CHARACTERS' }));
  }

  // Prevent email header injection (newline characters in email field)
  if (/[\r\n]/.test(email)) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ success: false, error: 'INVALID EMAIL ADDRESS FORMAT' }));
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ success: false, error: 'INVALID EMAIL ADDRESS FORMAT' }));
  }

  if (!message) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ success: false, error: 'MESSAGE IS REQUIRED' }));
  }

  if (message.length > 5000) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ success: false, error: 'MESSAGE MUST NOT EXCEED 5000 CHARACTERS' }));
  }

  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
  const smtpUser = process.env.SMTP_USER || 'omairkkhann@gmail.com';
  const smtpPass = process.env.SMTP_PASS;
  const targetEmail = process.env.CONTACT_EMAIL || 'omairkkhann@gmail.com';

  if (!smtpPass || smtpPass.startsWith('<')) {
    console.error('[Contact API Error] SMTP_PASS is missing or configured with a placeholder in .env.');
    res.statusCode = 500;
    return res.end(JSON.stringify({
      success: false,
      error: 'UNABLE TO SEND MESSAGE // PLEASE TRY AGAIN'
    }));
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const emailSubject = `New Portfolio Contact — ${name}`;
    const emailText = `NEW PORTFOLIO CONTACT

Name:
${name}

Email:
${email}

Message:
${message}

Submitted from:
Portfolio website`;

    const emailHtml = `
<div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #050505; background-color: #f9f9f7; border: 1px solid #e5e5e5; border-radius: 12px;">
  <h2 style="color: #050505; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #84cc16; padding-bottom: 12px; margin-top: 0;">
    NEW PORTFOLIO CONTACT
  </h2>
  <div style="margin-top: 20px; font-size: 15px; line-height: 1.6;">
    <p style="margin: 8px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #0284c7; text-decoration: underline;">${escapeHtml(email)}</a></p>
    <p style="margin: 16px 0 6px 0;"><strong>Message:</strong></p>
    <div style="background-color: #ffffff; padding: 16px; border-radius: 8px; border-left: 4px solid #84cc16; white-space: pre-wrap; font-family: inherit; color: #222222; font-size: 14px; line-height: 1.6;">${escapeHtml(message)}</div>
  </div>
  <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0 12px 0;" />
  <p style="font-size: 12px; color: #666666; margin: 0;">
    Submitted from: Portfolio website
  </p>
</div>
`;

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: targetEmail,
      replyTo: email,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    res.statusCode = 200;
    return res.end(JSON.stringify({
      success: true,
      message: 'Message sent successfully.',
      messageId: info.messageId
    }));
  } catch (err) {
    console.error('[Contact API Nodemailer Error]:', err);
    res.statusCode = 500;
    return res.end(JSON.stringify({
      success: false,
      error: 'UNABLE TO SEND MESSAGE // PLEASE TRY AGAIN'
    }));
  }
}


