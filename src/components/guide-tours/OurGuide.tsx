'use client'

import React from 'react'
import { motion , Variants } from 'framer-motion'
import Image from 'next/image'

interface GuideExpert {
  id: number
  name: string
  location: string
  image: string
}

const guideExperts: GuideExpert[] = [
  {
    id: 1,
    name: 'Jen Melchiorre',
    location: 'Exton, PA',
    image: 'https://i.pinimg.com/736x/ef/49/58/ef4958e367fde7c957606b9431ab054d.jpg'
  },
  {
    id: 2,
    name: 'Janet McLaughlin',
    location: 'Reading, PA',
    image: 'https://i.pinimg.com/736x/f2/11/69/f211696c39a77239d4620239e88ae506.jpg'
  },
  {
    id: 3,
    name: 'Chelsea Kelly',
    location: 'Long Island, NY',
    image: 'https://i.pinimg.com/736x/ce/5f/b0/ce5fb0b4f61ab6d53f8aed51b53f2de2.jpg'
  },
  {
    id: 4,
    name: 'Brooke Brush',
    location: 'Long Island, NY',
    image: 'https://i.pinimg.com/736x/93/1f/7c/931f7ccac0edc17c4967ca8e964d22f7.jpg'
  },
  {
    id: 5,
    name: 'Laurie Kauffer',
    location: 'Bel Air, MD',
    image: 'https://i.pinimg.com/736x/60/a1/71/60a1719d559469dbb6bfa1b6d0890e5e.jpg'
  },
  {
    id: 6,
    name: 'Jazmyn Thomas',
    location: 'Montvale, NJ',
    image: 'https://i.pinimg.com/736x/6c/a0/6f/6ca06fc3291633ffabbfff0b46c9f852.jpg'
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15
    }
  }
}

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const cardHoverVariants: Variants = {
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
}

const imageHoverVariants: Variants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
}

const OurGuide = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Guided Tour Experts
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"
          />
        </motion.div>

        {/* Experts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {guideExperts.map((expert) => (
            <motion.div
              key={expert.id}
              variants={itemVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-blue-200 transition-all duration-300"
              >
                {/* Profile Image */}
                <div className="relative mb-6 mx-auto w-24 h-24 sm:w-28 sm:h-28">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  <motion.div
                    variants={imageHoverVariants}
                    className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-xl"
                  >
                    <Image 
                      src={expert.image}
                      alt={expert.name}
                      fill
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>
                </div>

                {/* Expert Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {expert.name}
                  </h3>
                  <p className="text-slate-500 font-medium flex items-center justify-center gap-1">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {expert.location}
                  </p>
                </div>

                {/* More About Me Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transform transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    More about me
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 text-lg mb-6">
            Ready to explore with our expert guides?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
          >
            Book Your Tour Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default OurGuide