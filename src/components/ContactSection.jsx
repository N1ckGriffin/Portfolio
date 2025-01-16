import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  // Remove unused state

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://formspree.io/f/xyzzayeq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
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
    if (submitStatus) {
      setSubmitStatus('');
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ngriffin2020@gmail.com');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section 
      id="contact" 
      className="bg-slate-800 scroll-mt-[52px] min-h-[calc(100vh-52px)] -mb-[52px] relative"
    >
      {/* Toast Notification */}
      <div
        className={`fixed top-20 right-4 bg-slate-700 text-white px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 z-50 ${
          showToast ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        Email Copied to Clipboard
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20 w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Contact Me
        </h2>
        <p className="text-center text-slate-300 mb-12">
          Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
        </p>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500 text-green-100 rounded-lg">
            Thank you! Your message has been sent successfully. I'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500 text-red-100 rounded-lg">
            Sorry, there was an error sending your message. Please try again later.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder:text-slate-400 border ${
                errors.name ? 'border-red-500' : 'border-slate-600'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed`}
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
              disabled={isSubmitting}
              className={`w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder:text-slate-400 border ${
                errors.email ? 'border-red-500' : 'border-slate-600'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed`}
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
              disabled={isSubmitting}
              rows="5"
              className={`w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder:text-slate-400 border ${
                errors.message ? 'border-red-500' : 'border-slate-600'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed`}
            />
            {errors.message && (
              <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white rounded-lg
                     hover:bg-blue-600 transition-colors duration-300 font-medium
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 pt-8 border-t border-slate-600">
          <button
            onClick={copyEmail}
            className="text-slate-300 hover:text-blue-400 transition-colors duration-300 relative"
            aria-label="Copy email address"
          >
            <Mail size={24} />
          </button>
          <a
            href="https://github.com/N1ckGriffin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nicholasmgriffin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;