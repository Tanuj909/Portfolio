import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, ExternalLink } from 'lucide-react';
import { sendContactInfo } from '../services/contectService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await sendContactInfo(formData);
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(''), 5000);
    } catch (error) {
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen md:h-screen flex items-center justify-center py-16 md:py-0 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl w-full px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8 md:mb-16 space-y-3">
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
            className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Let's build something amazing together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">

          {/* LEFT: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 lg:pr-12"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform"></div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 relative z-10">Contact Details</h3>

              <div className="space-y-5 sm:space-y-6 relative z-10">
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
                  href="https://www.linkedin.com/in/tanuj-kashyap-909934275"
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
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white shadow-xl relative overflow-hidden transform transition-transform hover:-translate-y-1 duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-400 opacity-20 rounded-full -translate-x-1/3 translate-y-1/3 blur-xl"></div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 relative z-10">Open for Opportunities</h3>
              <p className="text-indigo-100 text-xs sm:text-sm leading-relaxed relative z-10">
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
            className="bg-white rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative"
          >
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-0 left-0 w-full bg-green-500 text-white text-center py-2 rounded-t-2xl sm:rounded-t-[2rem] font-medium text-sm"
              >
                {success}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <InputField
                  label="Name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <InputField
                label="Subject"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none text-slate-700 placeholder-slate-400 text-sm sm:text-base"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 text-white py-3.5 sm:py-4 rounded-xl font-semibold hover:bg-indigo-600 transition-colors duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-slate-900/20 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

// Helper Components
const ContactItem = ({ icon, label, value, href }) => (
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-indigo-100 transition-colors shrink-0">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-xs sm:text-sm font-medium text-slate-500">{label}</p>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-slate-900 font-semibold group-hover:text-indigo-600 transition-colors inline-flex items-center gap-1 break-all sm:break-normal">
          {value}
          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </a>
      ) : (
        <p className="text-sm sm:text-base text-slate-900 font-semibold break-all sm:break-normal">{value}</p>
      )}
    </div>
  </div>
);

const InputField = ({ label, name, placeholder, type = "text", value, onChange, required }) => (
  <div className="space-y-2">
    <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-700 placeholder-slate-400 text-sm sm:text-base"
    />
  </div>
);

export default Contact;