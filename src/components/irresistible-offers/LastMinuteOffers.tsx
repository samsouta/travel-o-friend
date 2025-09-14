'use client'

import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { Plane, Hotel, Car, Coffee, Star, MapPin } from 'lucide-react'

interface Destination {
  id: number
  name: string
  country: string
  region: string
  packageName: string
  duration: string
  price: string
  originalPrice?: string
  rating: number
  image: string
  gradient: string
  icons: string[]
}

const destinations: Destination[] = [
  {
    id: 1,
    name: " Maldives Paradise Escape",
    country: "Maldives",
    region: "South Asia",
    packageName: "Luxury Island Resort Package",
    duration: "5 nights",
    price: "$1899",
    originalPrice: "$2499",
    rating: 5,
    image: "https://i.pinimg.com/1200x/2e/ef/1c/2eef1c117b11978d2f45f8af2d2f2e73.jpg",
    gradient: "from-blue-400 to-sky-400",
    icons: ["plane", "hotel", "coffee"]
  },
  {
    id: 2,
    name: "Swiss Alps Winter Adventure",
    country: "Switzerland",
    region: "Europe",
    packageName: "Alpine Ski Resort Package",
    duration: "6 nights",
    price: "$2,415",
    originalPrice: "$2,899",
    rating: 4,
    image: "https://i.pinimg.com/736x/06/a9/f9/06a9f992ffe0cd48e459585f94f69b5e.jpg",
    gradient: "from-indigo-400 to-blue-500",
    icons: ["plane", "hotel", "car", "coffee"]
  },
  {
    id: 3,
    name: "Bali Beach Retreat Special",
    country: "Indonesia",
    region: "Southeast Asia",
    packageName: "Tropical Paradise Package",
    duration: "7 nights",
    price: "$1,099",
    originalPrice: "$1,599",
    rating: 4,
    image: "https://ik.imagekit.io/deceuior6/Travel%20O%20friend/bali-beach.jpg?updatedAt=1757756519762",
    gradient: "from-sky-400 to-cyan-400",
    icons: ["plane", "hotel", "car", "coffee"]
  },
  {
    id: 4,
    name: "Morocco Desert Safari Experience",
    country: "Morocco",
    region: "North Africa",
    packageName: "Sahara Adventure Package",
    duration: "5 nights",
    price: "$1,295",
    originalPrice: "$1,795",
    rating: 5,
    image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800&h=600&fit=crop",
    gradient: "from-blue-300 to-indigo-400",
    icons: ["plane", "hotel", "car"]
  },
  {
    id: 5,
    name: "Japanese Cherry Blossom Tour",
    country: "Japan",
    region: "East Asia",
    packageName: "Spring Cultural Experience",
    duration: "8 nights",
    price: "$2,799",
    originalPrice: "$3,299",
    rating: 5,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    gradient: "from-sky-400 to-blue-500",
    icons: ["plane", "hotel", "car", "coffee"]
  },
  {
    id: 6,
    name: "New Zealand Adventure Package",
    country: "New Zealand",
    region: "Oceania",
    packageName: "Outdoor Explorer Package",
    duration: "10 nights",
    price: "$3,199",
    originalPrice: "$3,899",
    rating: 4,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    gradient: "from-cyan-400 to-blue-400",
    icons: ["plane", "hotel", "car", "coffee"]
  }
]

const iconMap = {
  plane: Plane,
  hotel: Hotel,
  car: Car,
  coffee: Coffee
}

const LastMinuteOffers = () => {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  }

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto cursor-pointer">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <MapPin className="w-4 h-4" />
            Last Minute Deals
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Last Minute Offers
            </span>
          </h1>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <motion.img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} opacity-20 group-hover:opacity-30`} />
                
                {/* Price */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-blue-600 px-3 py-2 rounded-full font-medium text-sm shadow-lg"
                >
                  from {destination.price}
                  {destination.originalPrice && (
                    <span className="block text-xs text-gray-500 line-through">
                      {destination.originalPrice}
                    </span>
                  )}
                </motion.div>

                {/* Rating */}
                <div className="absolute top-4 left-4 flex items-center gap-1">
                  {[...Array(destination.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                  {destination.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mb-2">
                  {destination.region}
                </p>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{destination.packageName}</p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{destination.duration}</span>
                  <div className="flex items-center gap-2">
                    {destination.icons.map((iconName, i) => {
                      const IconComponent = iconMap[iconName as keyof typeof iconMap]
                      return (
                        <div
                          key={i}
                          className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Last Minute Deals
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default LastMinuteOffers
