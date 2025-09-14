"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
};

const fadeInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-black/30 to-white overflow-hidden">
      <div className="container mt-16 lg:mt-0 mx-auto px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Image */}
        <motion.div
          variants={fadeInLeft}
          initial="initial"
          animate="animate"
          className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://i.pinimg.com/1200x/f4/94/ba/f494baeace4fc5b544ee4ae7153e1973.jpg"
            alt="Travel workspace with laptop and mobile devices"
            fill
            priority
            className="object-cover"
          />

          {/* Floating elements */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full opacity-20"
          />
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-6 left-6 w-8 h-8 bg-white rounded-lg opacity-30"
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          variants={fadeInRight}
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-gray-900 leading-tight"
          >
            Traveler Resources <br />
            <span className="text-blue-600 ">Hub</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-5 text-gray-600 font-roboto font-normal text-base sm:text-lg leading-relaxed"
          >
            <p>
              Take control of your next adventure by traveling smarter, not harder. At Envoyage, we empower travelers with the resources they need to explore the world with confidence.
            </p>
            <p>
              Having up-to-date information is so important as you book your trip and while you&apos;re traveling. That’s why we gathered vital resources here for you.
            </p>
            <p>
              Don&apos;t see what you&apos;re looking for? Our travel advisors are ready to help you travel confidently and responsibly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 123, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-poppins font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 text-base sm:text-lg uppercase tracking-wide"
            >
              Connect With A Travel Advisor
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 20 }, scale: { repeat: Infinity, duration: 8 } }}
        className="absolute top-1/4 left-10 w-20 h-20 border-2 border-blue-200 rounded-full opacity-30"
      />
      <motion.div
        animate={{ rotate: -360, y: [-20, 20, -20] }}
        transition={{ rotate: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 6 } }}
        className="absolute bottom-1/4 right-10 w-16 h-16 bg-blue-100 rounded-lg opacity-40"
      />
    </section>
  );
};

export default Hero;
