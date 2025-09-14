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
    name: "Natural Wonders of Costa Rica | Globus Tours ",
    country: "Costa Rica",
    region: "Central America",
    packageName: "Natural Wonders of Costa Rica | Globus Tours",
    duration: "8 nights",
    price: "$2299",
    rating: 4,
    image: "https://ik.imagekit.io/deceuior6/Travel%20O%20friend/Costa%20Rica%20Arenal.jpg?updatedAt=1757756264443",
    gradient: "from-blue-400 to-cyan-400",
    icons: ["plane", "hotel", "car", "coffee"]
  },
  {
    id: 2,
    name: "Hiking in Mexico: Oaxaca's Indigenous Highlands | Intrepid Travel",
    country: " Oaxaca Mexico",
    region: "North America", 
    packageName: "Intrepid Travel",
    duration: "4 nights",
    price: "$1,315",
    rating: 4,
    image: "https://ik.imagekit.io/deceuior6/Travel%20O%20friend/Intrepid-Travel-Mexico-Oaxaca-travellers-dawn-ridge-00035.jpg?updatedAt=1757756390562",
    gradient: "from-teal-400 to-blue-400",
    icons: ["plane", "hotel", "car", "coffee"]
  },
  {
    id: 3,
    name: "Greece Family Holiday | Intrepid Travel",
    country: "Greece,Europe",
    region: "Greece",
    packageName: "Greece Family Holiday Package",
    duration: "4 nights", 
    price: "$1,215",
    rating: 4,
    image: "https://ik.imagekit.io/deceuior6/Travel%20O%20friend/Intrepid%20Greece.png?updatedAt=1757756519762",
    gradient: "from-slate-800 to-slate-600",
    icons: ["plane", "hotel", "coffee"]
  },
  {
    id: 4,
    name: "Croatian Coastal Cruising Split to Dubrovnik | Intrepid Travel",
    country: "Croatia",
    region: "Europe",
    packageName: "Croatian Coastal Cruising",
    duration: "7 nights",
    price: "$3,495",
    rating: 4,
    image: "https://images.unsplash.com/photo-1555990793-da11153b2473?w=800&h=600&fit=crop",
    gradient: "from-slate-800 to-slate-600",
    icons: ["plane", "hotel", "car", "coffee"]
  },
  {
    id: 5,
    name: "National Geographic Journeys: Discover Portugal",
    country: "Portugal",
    region: "Europe",
    packageName: "National Geographic Journeys",
    duration: "7 nights",
    price: "$2,039",
    rating: 4,
    image: "https://images.unsplash.com/photo-1513735492246-483525079686?w=800&h=600&fit=crop",
    gradient: "from-cyan-400 to-blue-400",
    icons: ["plane", "hotel", "car", "coffee"]
  },
  {
    id: 6,
    name: "National Geographic Journeys: Explore Southern Africa | G Adventures",
    country: "South Africa",
    region: "Africa",
    packageName: "National Geographic Journeys",
    duration: "11 nights",
    price: "$4,335",
    rating: 4,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
    gradient: "from-teal-400 to-cyan-400",
    icons: ["plane", "hotel", "car", "coffee"]
  }
]

const iconMap = {
  plane: Plane,
  hotel: Hotel,
  car: Car,
  coffee: Coffee
}

const CurrentOffers = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
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
            <MapPin className="w-4 h-4 font-roboto font-light" />
            Travel Inspiration
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-poppins">
              Current Offers
            </span>
          </h1>
      
        </motion.div>

        {/* Destinations Grid */}
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
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              onHoverStart={() => setHoveredCard(destination.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <motion.img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                {/* Price Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute top-4 right-4 bg-white/95 font-poppins backdrop-blur-sm text-blue-600 px-3 py-2 rounded-full font-medium text-sm shadow-lg"
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
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <motion.h3
                    className="text-xl md:text-2xl font-poppins font-bold text-gray-900 mb-1"
                    animate={hoveredCard === destination.id ? { x: 4 } : { x: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    {destination.name}
                  </motion.h3>
                  <p className="text-sm text-blue-600 font-poppins font-medium uppercase tracking-wide">
                    {destination.region}
                  </p>
                </div>

                <p className="text-gray-500 font-roboto font-normal text-sm mb-4 line-clamp-2">
                  {destination.packageName}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm font-medium">
                    {destination.duration}
                  </span>
                  
                  {/* Service Icons */}
                  <div className="flex items-center gap-2">
                    {destination.icons.map((iconName, i) => {
                      const IconComponent = iconMap[iconName as keyof typeof iconMap]
                      return (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 + i * 0.1 }}
                          className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
                        >
                          <IconComponent className="w-4 h-4" />
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 pointer-events-none"
                animate={hoveredCard === destination.id ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-poppins font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Guided Tours
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CurrentOffers