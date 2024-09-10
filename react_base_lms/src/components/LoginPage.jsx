// components/LoginPage.js
import React from 'react';
import InputField from './InputField';
import Button from './Button';
import LinkText from './LinkText';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="text-center mb-6">
          <span role="img" aria-label="book" className="text-4xl">📘</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Sign In to EduLearn</h2>

        {/* Email Field */}
        <InputField
          type="email"
          placeholder="example@mail.com"
          icon={<FaEnvelope />}
        />

        {/* Password Field */}
        <div className="mt-4">
          <InputField
            type="password"
            placeholder="********"
            icon={<FaLock />}
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center mt-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Remember me</span>
          </label>
          <LinkText text="Forgot Password?" link="/forgot-password" />
        </div>

        {/* Sign In Button */}
        <div className="mt-6">
          <Button text="Sign In" onClick={() => {}} />
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <p>
            Don't have an account? <LinkText text="Sign Up" link="/sign-up" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
