'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Check, Shield, Heart, Package } from 'lucide-react';
import Image from 'next/image';

const TravelInsuranceHero = () => {
  const benefits = [
    { icon: Shield, text: "Reimbursement for canceled trips." },
    { icon: Heart, text: "Medical care in case of emergency." },
    { icon: Package, text: "Replaced lost items." }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const buttonVariants: Variants = {
    hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { scale: 0.95 }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
          alt="Travel background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:space-y-10"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            >
              Travel Insurance: To Buy or Not to Buy?
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl"
            >
              The benefits of travel far outweigh the risks, but this doesn&apos;t mean
              the risks aren&apos;t there. Protect yourself with travel insurance to
              potentially receive:
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4 lg:space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-base font-roboto font-light md:text-lg lg:text-xl text-blue-100 group-hover:text-white transition-colors duration-300">
                    {benefit.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-white mb-8">
                But most of all: peace of mind.
              </p>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-poppins font-bold py-4 px-8 md:px-12 rounded-full text-base md:text-lg lg:text-xl shadow-2xl transform transition-all duration-300 hover:shadow-blue-500/25"
              >
                LEARN MORE
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative order-first lg:order-last"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://i.pinimg.com/736x/6b/1f/9b/6b1f9b98bf7b2193dadf834e54dbcfb6.jpg"
                alt="Travel scene"
                width={500}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TravelInsuranceHero;
