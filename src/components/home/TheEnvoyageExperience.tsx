'use client'
import React from 'react'
import { motion ,Variants } from 'framer-motion'

const TheEnvoyageExperience = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const buttonVariants: Variants = {
    hover: { scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' },
    tap: { scale: 0.97 },
  }

  return (
    <section className="relative my-9 lg:my-0">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="space-y-6">
                <motion.span
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-roboto font-normal bg-blue-50 text-blue-600 border border-blue-100"
                  variants={itemVariants}
                >
                  ✈️ Premium Travel Experience
                </motion.span>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-gray-900 leading-tight"
                  variants={itemVariants}
                >
                  The{' '}
                  <motion.span
                    className="text-blue-600"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Envoyage
                  </motion.span>{' '}
                  Experience
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl font-roboto font-light text-gray-600 leading-relaxed"
                  variants={itemVariants}
                >
                  Our exceptional travel experts elevate every journey through
                  meticulous planning and award-winning service, providing access
                  to extraordinary moments while ensuring steadfast support from
                  first dream to final return.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  variants={itemVariants}
                >
                  <motion.button
                    className="px-8 py-4 bg-blue-600 text-white font-bold font-poppins rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Start Your Journey
                  </motion.button>

                  <motion.button
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold font-poppins rounded-lg hover:bg-gray-50 transition-all duration-300"
                    whileHover={{ borderColor: '#2563eb', color: '#2563eb' }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Expert Card */}
            <motion.div className="relative" variants={itemVariants}>
              <motion.div
                className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-10">
                  <motion.div
                    className="flex items-center space-x-4 mb-6"
                    variants={itemVariants}
                  >
                    <motion.div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </motion.div>
                    <div>
                      <motion.h3
                        className="text-2xl font-poppins font-bold text-gray-900"
                        whileHover={{ color: '#2563eb' }}
                      >
                        Find Your Expert
                      </motion.h3>
                      <motion.p className="text-gray-500 font-poppins font-light" variants={itemVariants}>
                        Meet Our Advisors
                      </motion.p>
                    </div>
                  </motion.div>

                  <motion.div className="space-y-4" variants={itemVariants}>
                    {[
                      'Personalized Travel Planning',
                      '24/7 Premium Support',
                      'Exclusive Access & Benefits',
                    ].map((text, index) => (
                      <div
                        key={index}
                        className="flex items-center font-roboto font-light space-x-3 text-gray-600"
                      >
                        <motion.div
                          className="w-2 h-2 bg-blue-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        />
                        <span>{text}</span>
                      </div>
                    ))}
                  </motion.div>

                  <motion.button
                    className="w-full mt-8 px-6 py-3 bg-blue-600 text-white font-bold font-poppins rounded-lg hover:shadow-lg transition-all duration-300"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Connect with an Expert
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200"
            variants={containerVariants}
          >
            {[
              { number: '50K+', label: 'Happy Travelers' },
              { number: '120+', label: 'Destinations' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </motion.div>
                <div className="text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TheEnvoyageExperience
