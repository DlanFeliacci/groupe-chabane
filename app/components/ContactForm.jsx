"use client";
import { useState, useEffect } from 'react';

const ContactForm = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  // Add useEffect to handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Only numbers for phone
      const numbersOnly = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numbersOnly
      }));
    } else if (name === 'name' || name === 'subject') {
      // Only letters, spaces, and special characters like hyphens or apostrophes
      const textOnly = value.replace(/[^a-zA-Z\s'-]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: textOnly
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        cache: 'no-store',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' }
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: error.message || 'An error occurred. Please try again later.' }
      });
    }
  };

  // Don't render the form until client-side hydration is complete
  if (!mounted) {
    return null;
  }

  return (
    <div id="contact" className="w-full max-w-2xl mx-auto p-8">
      <h2 className="text-[#dbccc0] text-4xl mb-8 ">Contact Us</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              pattern="[A-Za-z\s\-']*"
              className="w-full px-4 py-3 bg-transparent border border-[#dbccc0] text-[#dbccc0] placeholder-[#dbccc0]/60 focus:outline-none focus:border-[#cea678] transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-transparent border border-[#dbccc0] text-[#dbccc0] placeholder-[#dbccc0]/60 focus:outline-none focus:border-[#cea678] transition-colors"
            />
          </div>
        </div>
        
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Tel"
            required
            pattern="[0-9]*"
            className="w-full px-4 py-3 bg-transparent border border-[#dbccc0] text-[#dbccc0] placeholder-[#dbccc0]/60 focus:outline-none focus:border-[#cea678] transition-colors"
          />
        </div>
        
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            pattern="[A-Za-z\s\-']*"
            className="w-full px-4 py-3 bg-transparent border border-[#dbccc0] text-[#dbccc0] placeholder-[#dbccc0]/60 focus:outline-none focus:border-[#cea678] transition-colors"
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="6"
            className="w-full px-4 py-3 bg-transparent border border-[#dbccc0] text-[#dbccc0] placeholder-[#dbccc0]/60 focus:outline-none focus:border-[#cea678] transition-colors resize-none"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={status.submitting}
            className="px-8 py-3 bg-[#dbccc0] text-[#0f0f0f] uppercase text-sm font-semibold rounded-full hover:bg-[#cea678] transition-colors disabled:opacity-50"
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {status.info.msg && (
          <div className={`mt-4 text-sm ${status.info.error ? 'text-red-500' : 'text-green-500'}`}>
            {status.info.msg}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm; 