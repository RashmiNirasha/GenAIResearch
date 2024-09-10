// components/SignUpPage.js
import React from 'react';
import InputField from './InputField';
import Button from './Button';
import LinkText from './LinkText';
import { FaEnvelope, FaLock, FaIdBadge } from 'react-icons/fa';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="text-center mb-6">
          <span role="img" aria-label="book" className="text-4xl">📘</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Join EduLearn</h2>

        {/* Email Field */}
        <InputField
          type="email"
          placeholder="example@mail.com"
          icon={<FaEnvelope />}
        />

        {/* Registration Number Field */}
        <div className="mt-4">
          <InputField
            type="text"
            placeholder="2020/IS/123"
            icon={<FaIdBadge />}
          />
        </div>

        {/* Password Field */}
        <div className="mt-4">
          <InputField
            type="password"
            placeholder="********"
            icon={<FaLock />}
          />
        </div>

        {/* Sign Up Button */}
        <div className="mt-6">
          <Button text="Sign Up" onClick={() => {}} />
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-4">
          <p>
            Already have an account? <LinkText text="Sign In" link="/login" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
