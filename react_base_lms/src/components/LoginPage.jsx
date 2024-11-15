// components/LoginPage.js
import React from 'react';
import InputField from './InputField';
import Button from './Button';
import LinkText from './LinkText';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        
        <div className="flex justify-center mb-5">
          <img src={logo} alt="Logo" className="w-15 h-15" /> 
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Sign-in to EduLearn</h2>

        <span className="text-sm text-gray-600 mb-2">Email</span>
        <InputField
          type="email"
          placeholder="example@mail.com"
          icon={<FaEnvelope />}
        />

        <span className="text-sm text-gray-600 mb-2">Password</span>
        <div className="mt-4">
          <InputField
            type="password"
            placeholder="********"
            icon={<FaLock />}
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Remember me</span>
          </label>
          <LinkText text="Forgot Password?" link="/forgot-password" />
        </div>

        <div className="mt-6">
          <button
            onClick={() => navigate('/courses')}
            className="flex w-[100%] h-[50px] justify-center items-center bg-[#1677ff] rounded-lg shadow-[0_2px_0_0_rgba(5,145,255,0.1)] text-white text-[18px] hover:bg-[#1366cc] focus:outline-none"
          >
            <div className="flex gap-[8px] items-center">
              <div
                className="w-[16px] h-[16px] bg-cover"
              />
              <span>{"Sign-in"}</span>
            </div>
          </button>
        </div>

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
