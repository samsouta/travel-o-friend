'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AssistanceSection = () => {
  return (
    <motion.section 
      className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-white"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Assistance
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-gray-200">
                If you&apos;ve purchased a trip protection plan and need help with a challenging situation while traveling, you can
                connect with Allianz Global Assistance&apos;s team 24 hours a day, almost anywhere in the world.
              </p>
              <p className="text-gray-200">
                In the United States, Canada, Puerto Rico and the US Virgin Islands, call{' '}
                <span className="font-semibold text-white">1-800-654-1908</span>. In all other 
                locations, call collect{' '}
                <span className="font-semibold text-white">1-804-281-5700</span>.
              </p>
            </div>
          </motion.div>

          {/* Life Ring Icon */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-2xl">
                {/* Inner Ring (hole) */}
                <div className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-slate-900 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* White Stripes */}
                <div className="absolute top-4 left-1/2 w-8 h-16 sm:w-12 sm:h-20 bg-white rounded-full transform -translate-x-1/2"></div>
                <div className="absolute bottom-4 left-1/2 w-8 h-16 sm:w-12 sm:h-20 bg-white rounded-full transform -translate-x-1/2"></div>
                <div className="absolute left-4 top-1/2 w-16 h-8 sm:w-20 sm:h-12 bg-white rounded-full transform -translate-y-1/2"></div>
                <div className="absolute right-4 top-1/2 w-16 h-8 sm:w-20 sm:h-12 bg-white rounded-full transform -translate-y-1/2"></div>
                
                {/* Corner Decorative Elements */}
                <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full opacity-80"></div>
                <div className="absolute top-12 right-12 w-2 h-2 bg-white rounded-full opacity-60"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-white rounded-full opacity-80"></div>
                <div className="absolute bottom-12 left-12 w-2 h-2 bg-white rounded-full opacity-60"></div>
              </div>
              
              {/* Floating animation for decorative elements */}
              <motion.div
                className="absolute top-6 right-6 w-3 h-3 bg-blue-300 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  y: [0, 8, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AssistanceSection;