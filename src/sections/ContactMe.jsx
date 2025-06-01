import React, { useState } from 'react';
import ilustration from '../assets/images/ilustration.png';


const ContactMe = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "497629ca-e155-4913-acfe-aad43783308a",
        ...formData
      })
    });

    const result = await response.json();
    if (result.success) {
      setStatus('Your message has been sent successfully!');
      setFormData({ fullname: '', email: '', message: '' });
      setShowPopup(true);
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact">
      <div className='container mx-auto p-10 '>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='section-title'>Contact Me</h4>
          <p className='text-sm text-center mt-4 leading-6'>
            A creative developer & designer passionate about crafting
            user-focused digital experiences — open to collaboration in web
            development and design projects. Let’s connect and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-3 items-stretch">
          {/* Kolom kiri: Ilustrasi */}
          <div className="flex justify-center items-center">
            <img
              src={ilustration}
              alt="Contact Illustration"
              className="object-contain w-full h-full max-w-sm"
            />
          </div>

          {/* Kolom kanan: Form */}
          <div className="flex flex-col justify-center">
            <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">
              Contact Form
            </h5>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                className="input-box"
                autoComplete="off"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-box"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={3}
                className="input-box"
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="action-btn btn-scale-anim">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-medium mb-4">{status}</p>
            <button
              className="px-4 py-2 bg-purple-400 text-white rounded"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactMe;
