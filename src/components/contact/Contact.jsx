import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ContactScene } from "./ContactScene";
import { initContactAnimations } from "../../animations/contactAnimations";

export const Contact = () => {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const subtextRef = useRef(null);
  const formField1Ref = useRef(null);
  const formField2Ref = useRef(null);
  const formField3Ref = useRef(null);
  const formField4Ref = useRef(null);
  const objectRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useLayoutEffect(() => {
    const ctx = initContactAnimations({
      containerRef,
      linesRef: {
        current: [line1Ref.current, line2Ref.current, line3Ref.current],
      },
      subtextRef,
      formFieldsRef: {
        current: [
          formField1Ref.current,
          formField2Ref.current,
          formField3Ref.current,
          formField4Ref.current,
        ],
      },
      objectRef,
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
    if (submitError) {
      setSubmitError("");
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "NAME IS REQUIRED";
    if (!formData.email.trim()) {
      newErrors.email = "EMAIL IS REQUIRED";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "INVALID EMAIL FORMAT";
    }
    if (!formData.message.trim()) newErrors.message = "MESSAGE IS REQUIRED";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(
          data.error || "UNABLE TO SEND MESSAGE // PLEASE TRY AGAIN"
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError("UNABLE TO SEND MESSAGE // PLEASE TRY AGAIN");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative w-full min-h-screen bg-[#F4F4F0] text-[#050505] py-28 px-6 sm:px-12 lg:px-20 overflow-hidden select-none border-t border-[rgba(0,0,0,0.1)]"
    >
      {/* Upper-Right Decorative 3D Scene Wrapper */}
      <div
        ref={objectRef}
        className="absolute top-10 right-4 sm:right-16 w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] pointer-events-none z-10 opacity-90"
      >
        <ContactScene />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: Oversized Line-by-Line Heading & Supporting Subtext */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#84cc16]"></span>
            <span className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-[#666666]">
              [ 06 // INITIATE COLLABORATION ]
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="reveal-mask">
              <h2
                ref={line1Ref}
                className="reveal-line text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold font-heading tracking-tighter uppercase leading-[0.85] text-[#050505]"
              >
                LET'S
              </h2>
            </div>
            <div className="reveal-mask">
              <h2
                ref={line2Ref}
                className="reveal-line text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold font-heading tracking-tighter uppercase leading-[0.85] accent-gradient-text"
              >
                GET IN
              </h2>
            </div>
            <div className="reveal-mask">
              <h2
                ref={line3Ref}
                className="reveal-line text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold font-heading tracking-tighter uppercase leading-[0.85] text-[#050505]"
              >
                TOUCH
              </h2>
            </div>
          </div>

          <p
            ref={subtextRef}
            className="max-w-md text-base sm:text-lg text-[#444444] font-light leading-relaxed pt-4"
          >
            Have a product, interactive interface, or spatial digital experience
            worth building? Send a message to start the conversation.
          </p>
        </div>

        {/* RIGHT COLUMN: Minimal Premium Contact Form */}
        <div className="lg:col-span-6 lg:pt-12 w-full">
          {isSubmitted ? (
            <div className="p-8 sm:p-12 rounded-3xl bg-[#050505] text-[#F4F4F0] flex flex-col items-start gap-4 shadow-2xl">
              <span className="w-3 h-3 rounded-full bg-[#84cc16] animate-pulse"></span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                MESSAGE SENT // THANK YOU
              </h3>
              <p className="text-sm text-[#A0A0A0] font-light leading-relaxed">
                Your transmission has been logged. I will respond to your
                inquiry within 24 business hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setSubmitError("");
                  setFormData({ name: "", email: "", message: "" });
                }}
                className="mt-4 text-xs font-heading tracking-widest text-[#84cc16] uppercase hover:underline"
              >
                SEND ANOTHER MESSAGE →
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 w-full max-w-xl"
            >
              {submitError && (
                <div className="p-4 rounded-2xl bg-[#e11d48]/10 border border-[#e11d48]/30 text-[#e11d48] font-heading text-xs font-semibold tracking-wider uppercase">
                  [ ERROR ] {submitError}
                </div>
              )}

              {/* Field 1: Name */}
              <div
                ref={formField1Ref}
                className="flex flex-col gap-2 border-b border-[#050505]/20 pb-2 focus-within:border-[#050505] transition-colors duration-300"
              >
                <label
                  htmlFor="contact-name"
                  className="font-heading text-xs tracking-[0.2em] uppercase text-[#666666]"
                >
                  YOUR NAME *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Umair khan"
                  className="w-full bg-transparent text-lg font-heading text-[#050505] placeholder-[#999999] focus:outline-none py-1"
                />
                {errors.name && (
                  <span className="text-[11px] font-heading tracking-wider text-[#e11d48] uppercase">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Field 2: Email */}
              <div
                ref={formField2Ref}
                className="flex flex-col gap-2 border-b border-[#050505]/20 pb-2 focus-within:border-[#050505] transition-colors duration-300"
              >
                <label
                  htmlFor="contact-email"
                  className="font-heading text-xs tracking-[0.2em] uppercase text-[#666666]"
                >
                  EMAIL ADDRESS *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="umair@gmail.com"
                  className="w-full bg-transparent text-lg font-heading text-[#050505] placeholder-[#999999] focus:outline-none py-1"
                />
                {errors.email && (
                  <span className="text-[11px] font-heading tracking-wider text-[#e11d48] uppercase">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Field 3: Message */}
              <div
                ref={formField3Ref}
                className="flex flex-col gap-2 border-b border-[#050505]/20 pb-2 focus-within:border-[#050505] transition-colors duration-300"
              >
                <label
                  htmlFor="contact-message"
                  className="font-heading text-xs tracking-[0.2em] uppercase text-[#666666]"
                >
                  PROJECT DETAILS / MESSAGE *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your vision, timeline, and goals..."
                  className="w-full bg-transparent text-base font-heading text-[#050505] placeholder-[#999999] focus:outline-none py-1 resize-none"
                />
                {errors.message && (
                  <span className="text-[11px] font-heading tracking-wider text-[#e11d48] uppercase">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Field 4: Submit Button */}
              <div ref={formField4Ref} className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#050505] text-[#F4F4F0] font-heading text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#84cc16] hover:text-[#050505] transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
                  {!isSubmitting && (
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
