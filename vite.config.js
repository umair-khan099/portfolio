import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function apiContactPlugin() {
  return {
    name: 'api-contact-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        const env = loadEnv(server.config.mode, process.cwd(), '');
        Object.assign(process.env, env);

        if (!req.body && req.method === 'POST') {
          try {
            const chunks = [];
            for await (const chunk of req) {
              chunks.push(chunk);
            }
            const raw = Buffer.concat(chunks).toString('utf-8');
            req.body = raw ? JSON.parse(raw) : {};
          } catch {
            req.body = {};
          }
        }

        try {
          const { default: handler } = await server.ssrLoadModule('/api/contact.js');
          await handler(req, res);
        } catch (err) {
          console.error('Error executing /api/contact handler:', err);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: err.message }));
        }
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), apiContactPlugin()],
  server: {
    port: 3000,
    open: false
  }
});

