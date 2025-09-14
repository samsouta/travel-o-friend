'use client';

import React from 'react';
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Users, CreditCard, Gift } from 'lucide-react';

const GroupTravelLanding = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        when: "beforeChildren" 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-16 max-w-6xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.p 
            className="text-sm text-gray-600 font-roboto uppercase tracking-wide mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            NEED 10+ HOTEL ROOMS OR 16+ CRUISE CABINS?
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-gray-900 mb-8 leading-tight"
            variants={itemVariants}
          >
            Group Travel Planning Made Effortless
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl font-roboto font-normal text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            At Envoyage, group travel is more than logistics&mdash;it&apos;s about bringing people together
            through meaningful shared experiences. Whether you&apos;re planning a destination
            wedding, milestone celebration, corporate retreat, or family reunion, our group travel
            advisors handle the details, so you can focus on making memories.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Dedicated Experts */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="text-center group cursor-pointer"
          >
            <motion.div 
              className="w-24 h-24 mx-auto mb-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300"
              whileHover={{ rotate: 5 }}
            >
              <Users className="w-12 h-12 text-blue-600" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-4">
              Dedicated Experts
            </h3>
            <p className="text-gray-600 font-roboto font-normal text-lg">
              Leave all the planning to us.
            </p>
          </motion.div>

          {/* Convenient Payments */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="text-center group cursor-pointer"
          >
            <motion.div 
              className="w-24 h-24 mx-auto mb-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300"
              whileHover={{ rotate: 5 }}
            >
              <CreditCard className="w-12 h-12 text-blue-600" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-4">
              Convenient Payments
            </h3>
            <p className="text-gray-600 font-roboto font-normal text-lg">
              We provide flexible options.
            </p>
          </motion.div>

          {/* All the Extras */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="text-center group cursor-pointer"
          >
            <motion.div 
              className="w-24 h-24 mx-auto mb-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300"
              whileHover={{ rotate: 5 }}
            >
              <Gift className="w-12 h-12 text-blue-600" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-4">
              All the Extras
            </h3>
            <p className="text-gray-600 font-roboto font-normal text-lg">
              Enjoy fabulous little upgrades.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GroupTravelLanding;
