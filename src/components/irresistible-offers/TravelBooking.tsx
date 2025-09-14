'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Heart, Users, Ship, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const TravelBooking = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const hoverVariants: Variants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants: Variants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2
      }
    }
  };

  const cards = [
    {
      id: 1,
      title: "Romance, Perfectly Planned",
      description: "From destination weddings and honeymoons to couples' retreats, let us help you design a romantic escape that is perfect for your love story.",
      buttonText: "Browse Adults Only Deals",
      icon: <Heart className="w-6 h-6" />,
      image: "https://i.pinimg.com/736x/36/ef/e9/36efe93c6dead7b79e5be86fc09eb29e.jpg",
      gradient: "from-pink-400/20 to-orange-400/20"
    },
    {
      id: 2,
      title: "A Trip the Whole Family Will Love",
      description: "Planning a vacation everyone can enjoy can get complex. We'll help you find family-friendly resorts, destinations, and experiences that balance fun, relaxation, and quality time together.",
      buttonText: "Browse Family Deals",
      icon: <Users className="w-6 h-6" />,
      image: "https://i.pinimg.com/1200x/85/d6/75/85d675ad17d7547a475a92aa7d9155b9.jpg",
      gradient: "from-cyan-400/20 to-blue-400/20"
    },
    {
      id: 3,
      title: "Cruise into Memories",
      description: "From river voyages to ocean adventures, discover cruise offers that deliver comfort, convenience, and unforgettable moments.",
      buttonText: "Browse Cruise Deals",
      icon: <Ship className="w-6 h-6" />,
      image: "https://i.pinimg.com/1200x/10/5d/da/105ddaddbe464377a49151165cb86562.jpg",
      gradient: "from-blue-500/20 to-indigo-500/20"
    }
  ];

  return (
    <div className="  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <motion.div 
                variants={hoverVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} z-10`} />
                  <Image
                    fill
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 text-blue-600">
                      {card.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1">
                    {card.description}
                  </p>

                  {/* Button */}
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="inline-flex items-center justify-between w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 group"
                  >
                    <span>{card.buttonText}</span>
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default TravelBooking;
