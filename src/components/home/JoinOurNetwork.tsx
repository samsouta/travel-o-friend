'use client';

import React from 'react';
import { motion ,Variants } from 'framer-motion'
import Image from 'next/image';

const JoinOurNetwork = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const buttonVariants: Variants = {
    rest: { scale: 1, boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)" },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="relative overflow-hidden mt-6">
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300 rounded-full opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 leading-tight mb-6"
                initial={{ backgroundSize: "0% 100%" }}
                whileInView={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{
                  background: "linear-gradient(90deg, transparent 0%, #3B82F6 0%, #3B82F6 100%, transparent 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent"
                }}
              >
                Winner of the World Travel Awards
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-medium text-blue-600 mb-4">
                United States&apos; Leading Travel Agency
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-gray-700 font-poppins font-light leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                We are honored to be named United States&apos; Leading Travel Agency at the 31st annual World Travel Awards.
                Thank you for trusting us with crafting your incredible vacations.
              </p>
            </motion.div>
          </div>

          {/* Right Content - Award Badge */}
          <motion.div
            className="flex-shrink-0"
            variants={badgeVariants}
          >
            <div className="relative">
              <motion.div
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64"
                whileHover={{ 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <Image
                  src="https://ik.imagekit.io/deceuior6/Travel%20O%20friend/371x523%20(1).png?updatedAt=1757738803513"
                  alt="World Travel Awards Badge"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              
              {/* Floating elements around badge */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-2xl overflow-hidden"
          variants={itemVariants}
        >
          <div className="px-6 sm:px-8 lg:px-12 py-8 lg:py-12 text-center">
            <motion.h3 
              className="text-2xl sm:text-3xl font-poppins font-medium text-white mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Are you a travel advisor or agency looking to become a member of Envoyage?
            </motion.h3>
            
            <motion.button
              className="bg-white text-blue-600 font-poppins font-bold text-lg px-8 py-4 rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <span className="flex items-center justify-center gap-2">
                JOIN OUR NETWORK
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </motion.button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-16 h-16 bg-blue-300 rounded-full opacity-20"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JoinOurNetwork;