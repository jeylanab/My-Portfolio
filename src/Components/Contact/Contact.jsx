import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../../constants/index";
import { useTheme } from "../../Utils/ThemeContext";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const contactDetails = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
];

const socialLinks = [
  { Icon: Github, href: personalInfo.socialLinks.github, label: "GitHub" },
  { Icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: "LinkedIn" },
  { Icon: Twitter, href: personalInfo.socialLinks.twitter, label: "Twitter" },
];

const Contact = () => {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Replace with actual email integration (EmailJS, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 2000));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl font-body text-sm border outline-none transition-all duration-200 ${
    isDark
      ? "bg-dark-surface border-dark-border text-white placeholder-slate-600 focus:border-primary/50 focus:bg-dark-muted/30"
      : "bg-light-surface border-light-border text-slate-900 placeholder-slate-400 focus:border-primary/50"
  }`;

  return (
    <section
      id="contact"
      className={`relative py-24 overflow-hidden ${isDark ? "bg-dark" : "bg-light-surface"}`}
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            // Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`section-title ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`font-body text-base max-w-xl mx-auto ${isDark ? "text-slate-400" : "text-slate-500"}`}
          >
            Have a project in mind, want to collaborate, or just say hi? I'd love to hear from you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Availability status */}
            <div
              className={`glass-card p-6 border ${isDark ? "border-dark-border" : "border-light-border"}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ boxShadow: "0 0 8px #00ff88" }} />
                <span className="font-mono text-sm text-primary font-semibold">Available for work</span>
              </div>
              <p className={`font-body text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Currently open to full-time roles, freelance projects, and exciting collaborations.
              </p>
            </div>

            {/* Contact details */}
            <div className={`glass-card p-6 border ${isDark ? "border-dark-border" : "border-light-border"} flex flex-col gap-4`}>
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className={`font-mono text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>{label}</p>
                    <p className={`font-body text-sm font-medium group-hover:text-primary transition-colors ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className={`glass-card p-6 border ${isDark ? "border-dark-border" : "border-light-border"}`}>
              <p className={`font-mono text-xs tracking-widest uppercase mb-4 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-200 ${
                      isDark
                        ? "border-dark-border text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/5"
                        : "border-light-border text-slate-500 hover:text-primary"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`lg:col-span-3 glass-card p-8 border ${isDark ? "border-dark-border" : "border-light-border"}`}
          >
            <h3 className={`font-display font-bold text-xl mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block font-mono text-xs mb-1.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={`block font-mono text-xs mb-1.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={`block font-mono text-xs mb-1.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project collaboration / Job opportunity / ..."
                  className={inputClass}
                />
              </div>

              <div>
                <label className={`block font-mono text-xs mb-1.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or what you'd like to discuss..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                className="btn-primary flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <>✅ Message Sent!</>
                ) : sending ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="inline-block w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
