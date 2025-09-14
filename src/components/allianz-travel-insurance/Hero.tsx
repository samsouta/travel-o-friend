'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AllianzTravelHero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/30 to-white flex items-center justify-center p-4">
      <div className="max-w-7xl w-full mt-20 lg:mt-0 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left side - Image */}
          <motion.div 
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="https://ik.imagekit.io/deceuior6/Travel%20O%20friend/LT_WidgetA_838x557_Allianz%20Co-Op.jpg?updatedAt=1757832522156"
              alt="Allianz Travel Insurance"
              width={600}
              height={450}
              className="object-cover"
            />

          </motion.div>

          {/* Right side - Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Award-Winning Travel Protection
              </h1>
              
              <div className="w-16 h-1 bg-gray-900 mt-4"></div>
            </motion.div>

            <motion.p 
              className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Travel is one of the utmost pleasures of life. That said, there are all kinds of variables that fall outside a traveler&apos;s control—flight schedules, health issues, and weather patterns, to name a few. With benefits and assistance to help with unforeseeable cancellations, delays, medical emergencies, lost belongings and more, you can worry less about what&apos;s outside your control and focus on connecting with your destinations.
            </motion.p>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Get Protected Today
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AllianzTravelHero;