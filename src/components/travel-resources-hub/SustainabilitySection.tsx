'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Particle = {
  top: number;
  left: number;
  duration: number;
  delay: number;
};

const SustainabilitySection = () => {
  const [particlePositions, setParticlePositions] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate only on client to avoid hydration mismatch
    const particles = Array(6).fill(null).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2
    }));
    setParticlePositions(particles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2 p-8 lg:p-12"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl p-6 shadow-xl"
                >
                  <div className="relative h-80 sm:h-96 lg:h-80 rounded-xl overflow-hidden">
                    <Image
                      src="https://i.pinimg.com/736x/cb/26/09/cb2609425a766be08dffbaa421bbfe99.jpg" 
                      alt="Sustainable Earth Globe"
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* Floating particles */}
                    {particlePositions.map((position, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          top: `${position.top}%`,
                          left: `${position.left}%`,
                        }}
                        animate={{
                          y: [-10, 10],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: position.duration,
                          repeat: Infinity,
                          delay: position.delay,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:w-1/2 p-8 lg:p-12 text-white"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-6 leading-tight"
              >
                A Note on Sustainability
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl font-roboto font-normal leading-relaxed mb-8 text-blue-50"
              >
                For the longest time, travel and sustainability were at odds. However, there&apos;s been a major shift. Today, the travel industry is dedicated to ensuring an eco-friendly experience that meets travelers&apos; demands and promotes a healthy planet. If you&apos;d like more information,{' '}
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="underline font-semibold cursor-pointer hover:text-yellow-300 transition-colors duration-300"
                >
                  connect with a travel advisor
                </motion.span>{' '}
                to hear about the brands who have earned top certifications for their environmental advocacy.
              </motion.p>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="flex space-x-4"
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SustainabilitySection;
