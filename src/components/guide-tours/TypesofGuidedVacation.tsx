'use client'

import React from 'react'
import { motion , Variants } from 'framer-motion'
import Image from 'next/image'

interface TourType {
  id: string
  title: string
  image: string
  description: string
  features: string[]
}

const tourTypes: TourType[] = [
  {
    id: 'adventure',
    title: 'Adventure',
    image: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/Category_Adventure_Landing.jpg?updatedAt=1757757116585',
    description: 'Thrilling outdoor experiences for the adventurous soul',
    features: ['Mountain biking', 'Rock climbing', 'Hiking trails', 'Extreme sports']
  },
  {
    id: 'general',
    title: 'General',
    image: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/Category_GeneralTours_Landing.jpg?updatedAt=1757757175739',
    description: 'Classic sightseeing tours perfect for all travelers',
    features: ['Cultural sites', 'Historic landmarks', 'Local cuisine', 'Photography']
  },
  {
    id: 'small-group',
    title: 'Small Group',
    image: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/Category_SmallGroupTours_Landing.jpg?updatedAt=1757757219936',
    description: 'Intimate group experiences with personalized attention',
    features: ['Max 8 people', 'Personal guide', 'Flexible itinerary', 'Local insights']
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
}

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8
    }
  }
}

const TypesofGuidedVacation: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            variants={titleVariants}
          >
            Types of{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Guided Vacation Tours
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={titleVariants}
          >
            Explore guided tours and connect with a travel advisor to curate your next journey.
          </motion.p>
        </motion.div>

        {/* Tours Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {tourTypes.map((tour) => (
            <motion.div
              key={tour.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-blue-100"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/20 to-transparent z-10"
                  initial={{ opacity: 0.4 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <motion.h3 
                  className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-white z-20"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {tour.title}
                </motion.h3>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <motion.p 
                  className="text-gray-600 text-base leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {tour.description}
                </motion.p>

                {/* Features List */}
                <motion.ul 
                  className="space-y-2 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {tour.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-sm text-gray-700"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Explore {tour.title} Tours
                </motion.button>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with Travel Advisor
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default TypesofGuidedVacation