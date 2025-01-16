import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Add your form submission logic here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section 
      id="contact" 
      className="bg-slate-800 scroll-mt-[52px] min-h-[calc(100vh-52px)] -mb-[52px]"
    >
      <div className="max-w-4xl mx-auto px-4 py-20 w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Contact Me
        </h2>
        <p className="text-center text-slate-300 mb-12">
          Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder:text-slate-400 border ${
                errors.name ? 'border-red-500' : 'border-slate-600'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.name && (
              <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder:text-slate-400 border ${
                errors.email ? 'border-red-500' : 'border-slate-600'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.email && (
              <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder:text-slate-400 border ${
                errors.message ? 'border-red-500' : 'border-slate-600'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.message && (
              <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white rounded-lg
                     hover:bg-blue-600 transition-colors duration-300 font-medium"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 pt-8 border-t border-slate-600">
          <a
            href="mailto:your.email@example.com"
            className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;