'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { Search, MapPin } from 'lucide-react'

const TravelHomepage = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [isSearchFocused, setIsSearchFocused] = useState(false)
    const searchRef = useRef<HTMLDivElement>(null)

    const destinations = [
        'Cancun',
        'Los Cabos',
        'Riviera Maya',
        'Aruba',
        'Jamaica',
        'St. Lucia',
        'Dominican Republic'
    ]

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchFocused(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const circleVariants: Variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const destinationVariants: Variants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3
            }
        },
        exit: {
            y: -20,
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }
    }

    return (
        <div className="relative min-h-screen w-full ">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/demo.jpg"
                    alt="Tropical Paradise"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                {/* Overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-28 sm:pt-16 md:pt-20 px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-4xl mx-auto"
                >
                    {/* Circular Announcement */}
                    <motion.div
                        variants={circleVariants}
                        className="flex justify-center mb-8 sm:mb-12 md:mb-16"
                    >
                        <div className="relative">
                            <div className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[400px] lg:h-[400px] bg-white/50 backdrop-blur-sm rounded-full flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 shadow-2xl">
                                <motion.h1
                                    variants={itemVariants}
                                    className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-2 sm:mb-4 leading-tight"
                                >
                                    WELCOME TO <br />
                                    <span className="text-blue-600">TRAVEL O FRIEND</span>
                                </motion.h1>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-6 font-roboto"
                                >
                                    Your trusted companion for <br />
                                    trip planning, local guides, <br />
                                    and unforgettable journeys.
                                </motion.p>
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-600 hover:bg-blue-700 font-poppins text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg"
                                >
                                    LEARN MORE
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Search Bar */}
                    <div ref={searchRef} className="relative px-2 sm:px-4">
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center"
                        >
                            <div className="relative w-full max-w-2xl">
                                <div className="bg-white rounded-full shadow-2xl overflow-hidden">
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            placeholder="Where to?"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onFocus={() => setIsSearchFocused(true)}
                                            className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-0 border-0"
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-blue-500 hover:bg-blue-600 text-white p-2 sm:p-4 m-1 sm:m-2 rounded-full transition-all duration-300"
                                        >
                                            <Search className="w-4 h-4 sm:w-6 sm:h-6" />
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Destinations Dropdown */}
                        <AnimatePresence>
                            {isSearchFocused && (
                                <motion.div
                                    variants={destinationVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="absolute z-50 top-full left-0 right-0 mt-2 w-full max-w-2xl mx-auto"
                                >
                                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-4 sm:p-6 mx-2">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                                            Popular destinations
                                        </h3>
                                        <div className="space-y-2">
                                            {destinations.map((destination, index) => (
                                                <motion.div
                                                    key={destination}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    whileHover={{
                                                        scale: 1.02,
                                                        backgroundColor: "rgb(239 246 255)"
                                                    }}
                                                    className="flex items-center space-x-3 p-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md"
                                                >
                                                    <div className="bg-blue-500 p-1.5 sm:p-2 rounded-full">
                                                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                                    </div>
                                                    <span className="text-sm sm:text-base text-gray-700 font-medium">
                                                        {destination}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default TravelHomepage