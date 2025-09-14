'use client';

import React from 'react';
import { motion ,Variants } from 'framer-motion'
import Image from 'next/image';

interface VacationType {
  id: number;
  title: string;
  description: string;
  image: string;
  gradient: string;
}

const vacationTypes: VacationType[] = [
  {
    id: 1,
    title: "Cruise",
    description: "From river sails to ocean encounters, see the world by water on a captivating cruise.",
    image: "https://i.pinimg.com/1200x/d2/c8/74/d2c8745b1d8b016738f36e4260bb8ff6.jpg",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    id: 2,
    title: "Tours",
    description: "Embark on immersive escapes and authentic insider encounters with locally-guided tours.",
    image: "https://i.pinimg.com/1200x/f9/4c/58/f94c5898fcc5227a6b969b303bf8a1b6.jpg",
    gradient: "from-blue-500 to-blue-700"
  },
  {
    id: 3,
    title: "Luxury",
    description: "Exclusive resorts, indulgent experiences, and unparalleled service on a luxury getaway.",
    image: "https://i.pinimg.com/1200x/cc/36/5e/cc365e5630db30443406e76e426dfaad.jpg",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    id: 4,
    title: "Adults Only",
    description: "Choose your own adventure filled with romance, adventure, nightlife, and so much more.",
    image: "https://i.pinimg.com/736x/d3/60/9b/d3609b009b9cf68b54e2e29534f26f54.jpg",
    gradient: "from-blue-300 to-blue-500"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const hoverVariants: Variants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const SponsoredVacations = () => {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8  min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-blue-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sponsored Vacations
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {vacationTypes.map((vacation, index) => (
            <motion.div
              key={vacation.id}
              className="group cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${vacation.gradient} shadow-lg hover:shadow-2xl transition-all duration-500 h-96 sm:h-80 lg:h-96`}
                variants={hoverVariants}
              >
                {/* Background Image */}
                <Image
                  src={vacation.image}
                  alt={vacation.title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
                
                {/* Background Image Overlay */}
                <div className="absolute inset-0 bg-black/20 z-10" />
                
                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className="relative z-20 p-6 h-full flex flex-col justify-end text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                      {vacation.title}
                    </h3>
                    <p className="text-sm md:text-base font-roboto leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {vacation.description}
                    </p>
                  </motion.div>

                  {/* Hover Button */}
                  <motion.button
                    className="mt-6 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-poppins font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                    initial={{ y: 20 }}
                    whileHover={{ 
                      y: 0,
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.25)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Explore Now
                  </motion.button>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-white/0 rounded-2xl group-hover:border-white/30 transition-all duration-500"
                  whileHover={{
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    scale: 1.02
                  }}
                />

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                <motion.div
                  className="absolute bottom-20 left-4 w-2 h-2 bg-white/20 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};

export default SponsoredVacations;