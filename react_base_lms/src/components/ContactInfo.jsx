// components/ContactInfo.js
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-6">Contact Information</h3>
          <p><FaPhone /> Phone Number: +94 071-234-5678, +94 077-123-4567</p>
          <p className="mt-2"><FaEnvelope /> E-mail Address: edulearn@gmail.com</p>
          <p className="mt-2"><FaMapMarkerAlt /> Physical Location: 123, EduLearn, School Road, Colombo 07</p>
          <div className="mt-4 flex space-x-4">
            <FaFacebook className="text-blue-600" />
            <FaTwitter className="text-blue-400" />
            <FaLinkedin className="text-blue-700" />
          </div>
        </div>
        <div>
          {/* Replace the src with your own map image or embed */}
          <img src="https://via.placeholder.com/600x400" alt="Map" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
