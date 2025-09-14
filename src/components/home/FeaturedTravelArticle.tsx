'use client'
import React from 'react'
import { motion ,Variants } from 'framer-motion'
import Image from 'next/image'

const FeaturedTravelArticle = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const buttonVariants: Variants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  }

  return (
    <motion.div
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <motion.div 
            className="relative h-[300px] xs:h-[350px] sm:h-[400px] lg:h-full min-h-[400px] overflow-hidden"
            variants={imageVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10" />
            <Image
              src="https://i.pinimg.com/1200x/c0/91/ae/c091aeab121ccf529cba619726848d5e.jpg"
              alt="Women cooking traditional food together"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <motion.div
              className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full z-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Featured Travel Article
              </span>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-white"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-gray-900 leading-tight mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Culinary Travel and Foodie Vacations with{' '}
              <span className="text-blue-600">Janet McLaughlin</span>
            </motion.h2>

            <motion.p 
              className="text-gray-600 font-roboto font-normal text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Food as a Gateway to Culture. With over 15 years in the travel industry, I&apos;ve
              seen a lot of trends come and go. But culinary travel is different. It&apos;s not just
              about eating well, it&apos;s one of the most authentic ways to experience a culture.
            </motion.p>

            <motion.p 
              className="text-gray-600 font-roboto font-light text-xs sm:text-sm lg:text-base mb-6 sm:mb-8"
              variants={itemVariants}
            >
              International cooking and travel shows like Anthony Bourdain&apos;s No Reservations
              have inspired countless food enthusiasts to explore the world through cuisine.
            </motion.p>

            <motion.button
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-poppins font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group w-fit text-sm sm:text-base"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="mr-2">Read Article</span>
              <motion.svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="fixed -z-10 top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-100 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="fixed -z-10 bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-200 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  )
}

export default FeaturedTravelArticle