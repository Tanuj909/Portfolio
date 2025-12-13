
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-10 overflow-hidden">
      <div className="max-w-7xl w-full px-6">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Let's build something amazing together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8 lg:pr-12"
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform"></div>

              <h3 className="text-2xl font-bold text-slate-800 mb-6 relative z-10">Contact Details</h3>

              <div className="space-y-6 relative z-10">
                <ContactItem
                  icon={<Mail className="w-5 h-5 text-indigo-600" />}
                  label="Email"
                  value="tanujkashyap913@gmail.com"
                  href="mailto:tanujkashyap913@gmail.com"
                />
                <ContactItem
                  icon={<Linkedin className="w-5 h-5 text-indigo-600" />}
                  label="LinkedIn"
                  value="linkedin.com/in/tanuj"
                  href="linkedin.com/in/tanuj-kashyap-909934275"
                />
                <ContactItem
                  icon={<Github className="w-5 h-5 text-indigo-600" />}
                  label="GitHub"
                  value="github.com/tanuj"
                  href="https://github.com/Tanuj909"
                />
                <ContactItem
                  icon={<MapPin className="w-5 h-5 text-indigo-600" />}
                  label="Location"
                  value="India, Delhi"
                />
              </div>
            </div>

            {/* Decor Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-400 opacity-20 rounded-full -translate-x-1/3 translate-y-1/3 blur-xl"></div>

              <h3 className="text-xl font-bold mb-3 relative z-10">Open for Opportunities</h3>
              <p className="text-indigo-100 text-sm leading-relaxed relative z-10">
                I'm currently available for freelance work and full-time positions.
                If you have a project that needs some creative touch, I'd love to hear about it.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Name" placeholder="John Doe" />
                <InputField label="Email" placeholder="john@example.com" type="email" />
              </div>

              <InputField label="Subject" placeholder="Project Inquiry" />

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none text-slate-700 placeholder-slate-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-semibold hover:bg-indigo-600 transition-colors duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-slate-900/20"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Helper Components
const ContactItem = ({ icon, label, value, href }) => (
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      {href ? (
        <a href={href} className="text-slate-900 font-semibold group-hover:text-indigo-600 transition-colors inline-flex items-center gap-1">
          {value}
          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      ) : (
        <p className="text-slate-900 font-semibold">{value}</p>
      )}
    </div>
  </div>
);

const InputField = ({ label, placeholder, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-700 placeholder-slate-400"
    />
  </div>
);

export default Contact;