// src/pages/Contact.jsx
"use client";

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const contactMethods = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      description: 'Professional Network',
      url: 'https://www.linkedin.com/in/chaya-manchanayake-b14621317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      description: 'Code Repository',
      url: 'https://github.com/dashboard',
    },
    {
      icon: <FaEnvelope />,
      name: 'Email',
      description: 'Direct Contact',
      url: 'mailto:chayamanchanayake@gmail.com',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
    setStatus(null);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setStatus('submitting');
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      return;
    }

    console.log('Form data submitted:', formData);
    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="page-container flex items-center justify-center pt-10">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-4xl font-bold text-white fade-in">Contact Me</h1>
        <p className="text-lg text-gray-200 slide-in">
          Feel free to reach out to me via these platforms or the contact form below.
        </p>

        {/* Themed card for contact links */}
        <div className="themed-card border-2 p-6 b-radius overflow-hidden mt-10 mx-auto max-w-2xl slide-in">
          <table className="w-full b-radius slide-in">
            <tbody>
              <tr>
                {contactMethods.map((method, index) => (
                  <td key={method.name} className="p-2">
                    <a
                      href={method.url}
                      target={method.name !== 'Email' ? "_blank" : undefined}
                      rel={method.name !== 'Email' ? "noopener noreferrer" : undefined}
                      className="p-[50px] transition-all duration-300 hover:scale-110 hover:shadow-xl flex flex-col items-center justify-center text-4xl text-black dark:text-white rounded-full"
                      title={method.name}
                    >
                      <span className="mb-2">{method.icon}</span>
                      <span className="text-sm font-semibold">{method.name}</span>
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Contact Form Column */}
        <div className="p-6 b-radius slide-in page-container justify-center">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4 text-left">Send me a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4 text-left flex-1">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Name :
              </label>
              <p></p>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-4 t-radius t-wi-he bg-gray-100 dark:bg-gray-700 text-black dark:text-white border-2 focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'border-transparent'}`}
              />
              <p></p>
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Email :
              </label>
              <p></p>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 t-radius t-wi-he bg-gray-100 dark:bg-gray-700 text-black dark:text-white border-2 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'border-transparent'}`}
              />
              <p></p>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Message :
              </label>
              <p></p>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-2 t-radius ta-wi-he bg-gray-100 dark:bg-gray-700 text-black dark:text-white border-2 focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500' : 'border-transparent'}`}
              ></textarea>
              <p></p>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className={` themed-button justify-center py-2 px-8 b-ra-al font-bold text-white transition-all duration-300 ${status === 'submitting' ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'success' && (
              <p className="mt-4 text-green-500 text-center">Your message has been sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-500 text-center">Please correct the errors in the form.</p>
            )}
          </form>
        </div>
      </div>

      {/* Additional Contact Info */}
      <div className="mt-12 p-6 rounded-2xl slide-in page-container">
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Let's Work Together</h2>
        <p className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. Whether you have a project idea,
          or just want to connect, I'd love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default Contact;