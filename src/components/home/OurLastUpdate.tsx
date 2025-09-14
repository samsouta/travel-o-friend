'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

interface UpdateCard {
  id: number;
  title: string;
  buttonText: string;
  image: string;
  gradient: string;
}

const updates: UpdateCard[] = [
  {
    id: 1,
    title: 'Irresistible Offers',
    buttonText: 'BROWSE DEALS',
    image: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/Crianc%CC%A7a%20brincando%20e%20espirrando%20na%20piscina%20no%20vera%CC%83o%20Linda%20crianc%CC%A7a%20pulando%20na%20piscina%20se%20divertindo%20_%20imagem%20Premium%20gerada%20com%20IA.jpeg?updatedAt=1757693663250', 
    gradient: 'from-blue-900/80 to-blue-600/80'
  },
  {
    id: 2,
    title: 'Destination Weddings',
    buttonText: 'SAY "I DO"',
    image: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/%E1%84%8B%E1%85%A2%E1%84%83%E1%85%A1%E1%86%B7%E1%84%89%E1%85%B3%E1%84%82%E1%85%A2%E1%86%B8%20_%20%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%AE%E1%84%89%E1%85%B3%E1%84%82%E1%85%A2%E1%86%B8_%E1%84%8B%E1%85%B0%E1%84%83%E1%85%B5%E1%86%BC%E1%84%89%E1%85%B3%E1%84%82%E1%85%A2%E1%86%B8_%E1%84%8F%E1%85%A5%E1%84%91%E1%85%B3%E1%86%AF%E1%84%89%E1%85%B3%E1%84%82%E1%85%A2%E1%86%B8%20(@aedam_snap)%20_%20Instagram%20photos%20and%20videos.jpeg?updatedAt=1757693845369', 
    gradient: 'from-blue-800/80 to-cyan-600/80'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
  tap: { scale: 0.95 }
};

const imageVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

const OurLastUpdate: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-slate-800 mb-4">
            Our Latest{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text font-poppins text-transparent">
              Updates
            </span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {updates.map((update: UpdateCard, index: number) => (
            <motion.div
              key={update.id}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl bg-white">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    variants={imageVariants}
                    initial="initial"
                    whileHover="hover"
                    className="w-full h-full"
                  >
                    <Image
                      src={update.image}
                      alt={update.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${update.gradient} opacity-70 group-hover:opacity-60 transition-opacity duration-300`}
                  />

                  {/* Animated Overlay Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'linear'
                    }}
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-white mb-6 leading-tight">
                      {update.title}
                    </h3>

                    <motion.button
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-roboto font-bold text-sm sm:text-base tracking-wider rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm border border-blue-400/30"
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {update.buttonText}
                      <motion.svg
                        className="ml-3 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </motion.svg>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  initial={false}
                  whileHover={{
                    background: [
                      'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                      'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)'
                    ]
                  }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Card Shadow */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 -z-10 blur-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 opacity-20 blur-xl"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute top-40 right-20 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-300 opacity-30 blur-sm"
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
      </motion.div>
    </div>
  );
};

export default OurLastUpdate;
