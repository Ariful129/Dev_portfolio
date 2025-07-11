import React, { useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const { isDarkMode } = useTheme();
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs.sendForm(
      'service_0nacv3q',
      'template_4sczgkc',
      form.current,
      'IYwItwHhX1ujo4guI'
    )
    .then(() => {
      setSuccess(true);
      form.current.reset();
    }, () => {
      setError(true);
    });
  };

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12 flex items-center justify-center">
      <div className="max-w-2xl w-full space-y-8">

        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-xl lg:text-2xl font-bold">
            <span className="text-red-500">Contact</span>
          </h1>
          <div className={`w-20 h-1 mx-auto ${isDarkMode ? 'bg-red-600' : 'bg-red-500'}`}></div>
          <p className={`text-base lg:text-lg max-w-xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Feel free to get in touch. Your message will be sent directly to my inbox.
          </p>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className={`space-y-6 p-6 rounded-xl border shadow-md ${
          isDarkMode 
            ? 'bg-slate-800/50 border-slate-700' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="space-y-2">
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Name
            </label>
            <input
              type="text"
              name="from_name"
              required
              className={`w-full px-4 py-2 rounded-lg border ${
                isDarkMode 
                  ? 'bg-slate-700 text-gray-100 border-slate-600 placeholder-gray-400' 
                  : 'bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-400'
              }`}
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Email
            </label>
            <input
              type="email"
              name="from_email"
              required
              className={`w-full px-4 py-2 rounded-lg border ${
                isDarkMode 
                  ? 'bg-slate-700 text-gray-100 border-slate-600 placeholder-gray-400' 
                  : 'bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-400'
              }`}
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Message
            </label>
            <textarea
              name="message"
              required
              rows="5"
              className={`w-full px-4 py-2 rounded-lg border ${
                isDarkMode 
                  ? 'bg-slate-700 text-gray-100 border-slate-600 placeholder-gray-400' 
                  : 'bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-400'
              }`}
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg w-full"
          >
            Send Message
          </button>

          {success && (
            <p className="text-green-500 text-sm mt-2 text-center">Message sent successfully!</p>
          )}
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
