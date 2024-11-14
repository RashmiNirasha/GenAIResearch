import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">

        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-center sm:text-left mb-10">Contact Information</h3>
          <p className="flex items-center gap-2 text-lg">
            <FaPhone className='text-[#1677ff]'/> 
            Phone Numbers: <span className='font-bold'>+94 071-234-5678, +94 077-123-4567</span>
          </p>
          <p className="flex items-center gap-2 text-lg">
            <FaEnvelope className='text-[#1677ff]'/> 
            E-mail Address: <span className='font-bold'>edulearn@gmail.com</span>
          </p>
          <p className="flex items-center gap-2 text-lg">
            <FaMapMarkerAlt className='text-[#1677ff]'/> 
            Physical Location: <span className='font-bold'>123, EduLearn, School Road, Colombo 07</span>
          </p>

          <div className="flex gap-6 mt-6 justify-center sm:justify-start">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#1677ff] hover:text-yellow-500 transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#1677ff] hover:text-yellow-500 transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#1677ff] hover:text-yellow-500 transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="w-full h-full bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${require('../assets/heroimg.webp')})` }}
          >
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
