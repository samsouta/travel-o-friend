'use client'

import React, { useState, useEffect } from 'react'
import { motion,Variants, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Review {
    id: number
    name: string
    date: string
    rating: number
    text: string
    isAnonymous?: boolean
}

const RecentCustomerReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlay, setIsAutoPlay] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

    const reviews: Review[] = [
        {
            id: 1,
            name: 'Christine T.',
            date: '9/12/2025',
            rating: 5.0,
            text: 'Julie was great in helping us book our trip.'
        },
        {
            id: 2,
            name: 'TRACIE M.',
            date: '9/12/2025',
            rating: 5.0,
            text: 'Jenine carefully listens to my requests and concerns. She thoroughly researches the best, most affordable and safest options for travel. Jenine is patient, knowledgeable and friendly. I look forward to working with her again.'
        },
        {
            id: 3,
            name: 'Anonymous',
            date: '9/12/2025',
            rating: 5.0,
            text: 'Great experience',
            isAnonymous: true
        }
    ]

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (!isAutoPlay) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            )
        }, 2000)

        return () => clearInterval(interval)
    }, [isAutoPlay, reviews.length])

    const nextReview = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevReview = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        )
    }

    const goToReview = (index: number) => {
        setCurrentIndex(index)
    }

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-3 h-3 md:w-4 md:h-4 ${i < Math.floor(rating)
                        ? 'text-blue-500 fill-blue-500'
                        : 'text-gray-300'
                    }`}
            />
        ))
    }

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    const cardVariants: Variants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: { duration: 0.5 }
        }
    }


    return (
        <motion.section
            className="py-8 md:py-16 px-4 bg-gradient-to-br from-blue-50 to-white min-h-[80vh] flex items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
        >
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    className="text-center mb-8 md:mb-16"
                    variants={itemVariants}
                >
                    <motion.h2
                        className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-blue-900 mb-4 md:mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Recent Customer Reviews
                    </motion.h2>

                    <motion.div
                        className="flex items-center justify-center gap-2 md:gap-3 mb-4 flex-wrap"
                        variants={itemVariants}
                    >
                        <span className="text-base md:text-xl text-blue-700 font-semibold">
                            Overall Rating:
                        </span>
                        <div className="flex items-center gap-1">
                            {renderStars(4.9)}
                        </div>
                        <motion.span
                            className="text-xl md:text-3xl font-bold text-blue-600"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            4.9
                        </motion.span>
                    </motion.div>
                </motion.div>

                <div className="relative px-4 md:px-8">
                    {!isMobile && (
                        <>
                            <motion.button
                                onClick={prevReview}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-blue-50 text-blue-600 p-2 md:p-3 rounded-full shadow-lg border border-blue-100 transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                            </motion.button>

                            <motion.button
                                onClick={nextReview}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-blue-50 text-blue-600 p-2 md:p-3 rounded-full shadow-lg border border-blue-100 transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                            </motion.button>
                        </>
                    )}

                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="w-full max-w-2xl mx-auto"
                            >
                                <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl border border-blue-100">
                                    <motion.div
                                        className="flex items-center gap-2 mb-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <div className="flex items-center gap-1">
                                            {renderStars(reviews[currentIndex].rating)}
                                        </div>
                                        <span className="text-blue-600 font-bold text-base md:text-lg">
                                            {reviews[currentIndex].rating.toFixed(1)}
                                        </span>
                                    </motion.div>

                                    <motion.p
                                        className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base lg:text-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        &ldquo;{reviews[currentIndex].text}&rdquo;
                                    </motion.p>

                                    <motion.div
                                        className="flex justify-between items-center pt-4 border-t border-blue-100"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <div>
                                            <div className="font-semibold text-blue-900 text-sm md:text-base">
                                                {reviews[currentIndex].name}
                                            </div>
                                            <div className="text-blue-500 text-xs md:text-sm">
                                                {reviews[currentIndex].date}
                                            </div>
                                        </div>
                                        {reviews[currentIndex].isAnonymous && (
                                            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                                Anonymous
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.div
                        className="flex justify-center gap-2 mt-6 md:mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {reviews.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => goToReview(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-blue-600 w-6'
                                        : 'bg-blue-200 w-2 hover:bg-blue-300'
                                    }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-center mt-8 md:mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <motion.button
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-poppins font-bold text-sm md:text-lg shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View More Reviews
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default RecentCustomerReviews