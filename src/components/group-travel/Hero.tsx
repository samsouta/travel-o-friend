"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionButton = motion.button;

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://i.pinimg.com/1200x/be/04/18/be0418a6327b478efbb4dea5d95b39ad.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay*/}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Center Content */}
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <MotionH1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-extrabold tracking-tight leading-tight text-white drop-shadow-lg"
        >
          Discover Your Next Adventure
        </MotionH1>

        <MotionP
          variants={itemVariants}
          className="mt-6 text-lg sm:text-xl font-roboto text-gray-200 font-normal leading-relaxed"
        >
          Travel with comfort, style, and unforgettable memories.  
          Let us handle the details while you enjoy the journey. ✈️
        </MotionP>

        <MotionDiv variants={itemVariants} className="mt-10 flex justify-center">
          <MotionButton
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(59,130,246,0.45)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300"
          >
            <span className="relative z-10 flex items-center font-poppins justify-center">
              START PLANNING
              <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <MotionDiv
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </MotionButton>
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};

export default Hero;
