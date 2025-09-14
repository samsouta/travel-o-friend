"use client"
import Image from 'next/image';
import React from 'react';
import { useState, useEffect } from 'react';

const TravelRecommendations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/30 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-16">
        <div 
          className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Image Section */}
          <div 
            className={`relative group transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform rotate-1"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2" style={{ height: '600px' }}>
              <Image
                src="https://i.pinimg.com/1200x/96/e9/83/96e98365ee81b945367567d5c6fc99e5.jpg"
                alt="Tropical paradise with couple dining on beach"
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div 
            className={`space-y-8 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-6">
              <div className="relative">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-gray-900 leading-tight">
                  Our Recommendations
                </h2>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
              
              <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
              
              <p className="text-lg sm:text-xl font-roboto text-gray-600 leading-relaxed max-w-2xl">
                These featured partners have been hand-selected for their unwavering commitment to the traveler experience, exceptional innovation, and a passion for creating meaningful journeys. Enjoy personalized service and seamless planning from our travel advisors at these trusted brands.
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-4 pt-4">
              {[
                { text: 'HOTELS & RESORTS', delay: 0 },
                { text: 'CRUISE LINES', delay: 100 },
                { text: 'TOUR OPERATORS', delay: 200 }
              ].map((button, index) => (
                <div
                  key={button.text}
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${600 + button.delay}ms` }}
                >
                  <button
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-poppins font-bold text-sm tracking-wide rounded-xl overflow-hidden transition-all duration-300 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    onMouseLeave={() => setHoveredButton(null)}
                    style={{
                      transform: hoveredButton === index ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: hoveredButton === index 
                        ? '0 10px 40px rgba(59, 130, 246, 0.4)' 
                        : '0 4px 20px rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                      {button.text}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelRecommendations;