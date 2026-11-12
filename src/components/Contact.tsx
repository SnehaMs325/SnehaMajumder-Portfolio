
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Send } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Linkedin,
  Github: FaGithub,
};

export const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const { contact, personalInfo } = portfolioData;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("sending");

    try {
      const accessKey = import.meta.env
        .VITE_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Web3Forms access key is missing.");
      }

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name,
            email,
            message,
            subject: "New message from Sneha Portfolio",
            from_name: "Sneha Portfolio",
            botcheck: "",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Message could not be sent."
        );
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  const inputClassName =
    "w-full rounded-xl border border-border bg-background " +
    "px-4 py-3 text-foreground outline-none " +
    "placeholder:text-muted-foreground/60 " +
    "transition-colors focus:border-primary " +
    "focus:ring-2 focus:ring-primary/10";

  return (
    <section
      id="contact"
      className="section-padding-tight relative overflow-hidden bg-background text-foreground"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto w-full max-w-5xl"
        >
          {/* Section heading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-primary"
          >
            05 / Get in touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="about-heading-glow mb-5 text-4xl font-black tracking-tight md:text-6xl"
          >
            Let's{" "}
            <span className="about-heading-accent italic text-primary">
              connect.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {contact.subtitle}
          </motion.p>

          {/* Existing social links */}
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
            {contact.socials.map((social, index) => {
              const IconComponent =
                iconMap[social.icon] || Mail;

              const isEmail = social.href.startsWith("mailto:");

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={
                    isEmail
                      ? undefined
                      : "noopener noreferrer"
                  }
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : {}
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.04, y: -5 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative flex min-h-[160px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-colors duration-300 hover:border-primary/60"
                >
                  <div className="pointer-events-none absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <motion.div
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="relative z-10 mb-4"
                  >
                    <IconComponent className="h-9 w-9 text-primary" />
                  </motion.div>

                  <span className="about-stats-font relative z-10 text-lg font-bold text-foreground">
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10"
          >
            <h3 className="about-stats-font mb-2 text-2xl font-bold md:text-3xl">
              Send me a message
            </h3>

            <p className="mb-8 text-sm text-muted-foreground">
              Have an idea, a question, or just want to say
              hello? Drop a message below.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    maxLength={100}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (status !== "sending")
                        setStatus("idle");
                    }}
                    placeholder="Your name"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    maxLength={254}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status !== "sending")
                        setStatus("idle");
                    }}
                    placeholder="you@example.com"
                    className={inputClassName}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  maxLength={5000}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (status !== "sending")
                      setStatus("idle");
                  }}
                  placeholder="Tell me what's on your mind..."
                  className={`${inputClassName} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "sending"
                  ? "Sending..."
                  : "Send Message"}

                {status !== "sending" && (
                  <Send size={17} />
                )}
              </button>

              <div aria-live="polite" role="status">
                {status === "success" && (
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">
                    Message sent successfully! Thank you
                    for reaching out.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">
                    Something went wrong. Please try
                    again or use the Email link above.
                  </p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              isInView
                ? { opacity: 1 }
                : {}
            }
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-t border-border pt-8 text-center"
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}{" "}
              {personalInfo.name}. Designed & built with
              curiosity and creativity.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
