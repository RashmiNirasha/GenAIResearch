// components/HeroSection.js
import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-[60vh] flex items-center justify-center" style={{ backgroundImage: `url('../assets/images-removebg-preview.png')` }}>
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Empower Your Learning Journey</h1>
        <p className="text-lg mb-6">Join Thousands of Students in Achieving their Educational Goals</p>
        <Button text="Get Started" onClick={() => {}} />
      </div>
    </section>
  );
};

export default HeroSection;
