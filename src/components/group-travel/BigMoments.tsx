'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const BigMoments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Image Section */}
          <motion.div 
            className="order-2 lg:order-1 w-full max-w-2xl mx-auto lg:max-w-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-gradient-to-br from-blue-100 to-blue-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                  {/* Main Image */}
                  <Image
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Elegant celebration table with desserts and drinks"
                    className="w-full h-full object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="order-1 lg:order-2 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {/* Heading */}
            <motion.div 
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-gray-900 leading-tight">
                Big Moments Deserve{' '}
                <span className="text-blue-600 font-poppins relative inline-block">
                  Big Perks
                  <motion.div 
                    className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 bg-blue-200 rounded"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </h1>
              
              <motion.p 
                className="text-base sm:text-lg font-roboto font-normal lg:text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                When you bring everyone together, the rewards add up. For a limited time, enjoy{' '}
                <span className="font-bold text-blue-600">$500 off</span> your group getaway—just one of the many advantages of planning group travel with Envoyage.
              </motion.p>
            </motion.div>

            {/* Features List */}
            <motion.div 
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-lg sm:text-xl font-poppins font-bold text-gray-900 mb-3 sm:mb-4">
                Here&apos;s what you can expect:
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  'Dedicated group travel advisors from start to finish',
                  'A custom website to keep all the details organized',
                  'Flexible payment options for your convenience'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </motion.div>
                    <p className="text-base font-roboto font-light sm:text-lg text-gray-700 leading-relaxed">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits and CTA */}
            <motion.div 
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <p className="text-base font-roboto font-normal sm:text-lg text-gray-700">
                Plus, when you book as a group, gain access to upgrades, exclusive perks, and special extras.
              </p>
              
              <p className="text-xs sm:text-sm font-roboto font-normal text-gray-600 border-b border-gray-300 pb-2 inline-block">
                Terms and conditions apply.
              </p>

              <motion.button
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg transition-all duration-300 text-base sm:text-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm font-poppins font-bold sm:text-base">CONNECT WITH A TRAVEL ADVISOR</span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BigMoments;
