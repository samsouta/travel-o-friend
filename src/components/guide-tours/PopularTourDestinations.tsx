'use client'
import React from 'react'
import { motion , Variants } from 'framer-motion'

const destinations = [
  {
    id: 1,
    name: 'Africa',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    description: 'Wildlife Safari Adventures',
    size: 'large'
  },
  {
    id: 2,
    name: 'Asia',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Ancient Temples & Culture',
    size: 'medium'
  },
  {
    id: 3,
    name: 'Australia',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Sydney Harbor & Beyond',
    size: 'medium'
  },
  {
    id: 4,
    name: 'Europe',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Historic Cities & Charm',
    size: 'large'
  },
  {
    id: 5,
    name: 'New Zealand',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Pristine Natural Beauty',
    size: 'small'
  },
  {
    id: 6,
    name: 'North America',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Mountain Wilderness',
    size: 'medium'
  },
  {
    id: 7,
    name: 'South America',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Spectacular Waterfalls',
    size: 'small'
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const PopularTourDestinations = () => {
  const getSizeClasses = (size: string, isMobile: boolean = false) => {
    if (isMobile) {
      return 'col-span-1 h-64'
    }
    
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2 h-96 lg:h-[500px]'
      case 'medium':
        return 'col-span-1 row-span-1 h-48 lg:h-60'
      case 'small':
        return 'col-span-1 row-span-1 h-32 lg:h-40'
      default:
        return 'col-span-1 row-span-1 h-48'
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Floating Header */}
        <motion.div
          className="text-center mb-20 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          {/* Background Accent */}
          <motion.div 
            className="absolute inset-0 -z-10"
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl mx-auto" />
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent mb-6 tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Popular Tour
            <br />
            <span className="text-4xl sm:text-5xl font-poppins lg:text-6xl font-light">Destinations</span>
          </motion.h2>
          
          <motion.div 
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-400" />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-400" />
          </motion.div>
          
          <motion.p 
            className="text-xl text-blue-700/70 font-roboto max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Embark on extraordinary journeys to the world&apos;s most breathtaking destinations
          </motion.p>
        </motion.div>

        {/* Modern Asymmetrical Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Mobile Layout - Stack */}
          <div className="block lg:hidden space-y-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                className="relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <div className={`relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-700 ${getSizeClasses(destination.size, true)}`}>
                  <motion.img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <motion.div className="absolute inset-0 bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.h3 className="text-2xl font-bold mb-2">{destination.name}</motion.h3>
                    <motion.p className="text-blue-100 text-sm opacity-90">{destination.description}</motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Layout - Modern Masonry */}
          <div className="hidden lg:grid grid-cols-4 grid-rows-6 gap-6 h-[800px]">
            {/* Africa - Large Hero */}
            <motion.div
              className="col-span-2 row-span-3 relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 h-full">
                <motion.img
                  src={destinations[0].image}
                  alt={destinations[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <motion.div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Featured</span>
                  </motion.div>
                  <motion.h3 className="text-4xl font-bold mb-3">{destinations[0].name}</motion.h3>
                  <motion.p className="text-blue-100 text-lg opacity-90">{destinations[0].description}</motion.p>
                </div>
              </div>
            </motion.div>

            {/* Asia - Top Right */}
            <motion.div
              className="col-span-1 row-span-2 relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.03, rotateX: 2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <motion.img
                  src={destinations[1].image}
                  alt={destinations[1].name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{destinations[1].name}</h3>
                  <p className="text-blue-100 text-sm opacity-90">{destinations[1].description}</p>
                </div>
              </div>
            </motion.div>

            {/* Australia - Far Right */}
            <motion.div
              className="col-span-1 row-span-2 relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.03, rotateY: -2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <motion.img
                  src={destinations[2].image}
                  alt={destinations[2].name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{destinations[2].name}</h3>
                  <p className="text-blue-100 text-sm opacity-90">{destinations[2].description}</p>
                </div>
              </div>
            </motion.div>

            {/* Europe - Large Bottom Left */}
            <motion.div
              className="col-span-2 row-span-3 relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotateY: -2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 h-full">
                <motion.img
                  src={destinations[3].image}
                  alt={destinations[3].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <motion.div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.h3 className="text-4xl font-bold mb-3">{destinations[3].name}</motion.h3>
                  <motion.p className="text-blue-100 text-lg opacity-90">{destinations[3].description}</motion.p>
                </div>
              </div>
            </motion.div>

            {/* New Zealand - Small Top Right */}
            <motion.div
              className="col-span-1 row-span-1 relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-400 h-full">
                <motion.img
                  src={destinations[4].image}
                  alt={destinations[4].name}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h3 className="text-sm font-bold">{destinations[4].name}</h3>
                </div>
              </div>
            </motion.div>

            {/* North America - Medium Right */}
            <motion.div
              className="col-span-1 row-span-2 relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.03, rotateX: -2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <motion.img
                  src={destinations[5].image}
                  alt={destinations[5].name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{destinations[5].name}</h3>
                  <p className="text-blue-100 text-sm opacity-90">{destinations[5].description}</p>
                </div>
              </div>
            </motion.div>

            {/* South America - Small Bottom Right */}
            <motion.div
              className="col-span-1 row-span-1 relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-400 h-full">
                <motion.img
                  src={destinations[6].image}
                  alt={destinations[6].name}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h3 className="text-sm font-bold">{destinations[6].name}</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        
      </div>
    </section>
  )
}

export default PopularTourDestinations