import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
  HiCheckCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "../data/portfolioData";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_AUTO_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_TEMPLATE_ID;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) => {
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // 1️⃣ Send mail to YOU
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              subject: formData.subject,
              message: formData.message,
              reply_to: formData.email,
            },
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Main email failed");
      }

      // 2️⃣ Send AUTO REPLY to USER
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_AUTO_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
          },
        }),
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <HiMail size={24} />,
      label: "Email",
      value: personalInfo.email,
      link: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`,
    },
    {
      icon: <HiPhone size={24} />,
      label: "Phone",
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
    },
    {
      icon: <HiLocationMarker size={24} />,
      label: "Location",
      value: personalInfo.location,
      link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalInfo.location)}`,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      link: personalInfo.socialLinks.github,
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      link: personalInfo.socialLinks.linkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <SectionWrapper id="contact" className="bg-dark-50/50 dark:bg-dark-900/50">
      <h2 className="section-heading">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <p className="section-subheading">
        Have a project in mind or just want to say hello? Feel free to reach
        out!
      </p>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-display font-bold text-dark-900 dark:text-white mb-2">
              Let's work together
            </h3>
            <p className="text-dark-500 dark:text-dark-400 leading-relaxed">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.link}
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className="flex items-center gap-4 p-4 glass-card hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-primary-500/25 transition-shadow">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-dark-500 dark:text-dark-400">
                    {info.label}
                  </p>
                  <p className="font-medium text-dark-800 dark:text-dark-200">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <p className="text-sm font-medium text-dark-500 dark:text-dark-400 mb-3 uppercase tracking-wider">
              Follow Me
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 
                             hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white 
                             transition-all duration-300"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 
                             text-dark-900 dark:text-white placeholder-dark-400 
                             focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 
                             text-dark-900 dark:text-white placeholder-dark-400 
                             focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 
                           text-dark-900 dark:text-white placeholder-dark-400 
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 outline-none"
                placeholder="Project Discussion"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 
                           text-dark-900 dark:text-white placeholder-dark-400 
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                submitStatus === "success"
                  ? "bg-green-500 shadow-lg shadow-green-500/25"
                  : "bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30"
              } ${isSubmitting ? "opacity-80 cursor-not-allowed" : ""}`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {submitStatus === "success" ? (
                <>
                  <HiCheckCircle size={22} />
                  Message Sent!
                </>
              ) : (
                <>
                  <HiPaperAirplane size={20} className="rotate-90" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </>
              )}
            </motion.button>

            {submitStatus === "error" && (
              <p className="text-sm text-red-500">
                Message failed to send. Verify your EmailJS template ID in
                `VITE_EMAILJS_TEMPLATE_ID` and try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
