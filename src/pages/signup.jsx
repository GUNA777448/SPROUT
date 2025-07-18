import React from 'react';
import SignupForm from '../components/auth/SignupForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Column - Signup Form (60% width) */}
      <div className="w-full md:w-3/5 flex items-center justify-center p-6 md:p-12 bg-gradient-to-br from-green-50 to-white">
        <div className="w-full max-w-md">
          <SignupForm />
        </div>
      </div>
      {/* Right Column - Branding/Visual (40% width, hidden on mobile) */}
      <div className="hidden md:flex md:w-2/5 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
          }}
        />
        {/* Dark Green Overlay */}
        <div className="absolute inset-0 bg-green-900/60" />
        {/* Quote Content */}
        <div className="relative z-10 flex items-center justify-center h-full p-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Cultivating Data,
              <br />
              Harvesting Success.
            </h2>
            <p className="text-xl text-green-100 opacity-90">
              Join the future of precision agriculture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
