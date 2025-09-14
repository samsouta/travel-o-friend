'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TravelExpertFinder from '../ui/TravelExpertFinder';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(()=> {
        setIsModalOpen(true)
    },[])
    
    const handleStateSelect = (state: string) => {
        console.log('Selected state:', state);
    };

    const handleDestinationSelect = (destination: string) => {
        console.log('Selected destination:', destination);
    };

    const handleSearch = (searchType: 'nearMe' | 'destination', value: string) => {
        console.log('Search:', searchType, value);
        // Add your search logic here
        setIsModalOpen(false);
    };
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Hero Background */}
            <div className="absolute inset-0">
                <div className="relative w-full h-full">
                    <Image
                        src="https://i.pinimg.com/736x/b1/75/f8/b175f8c6b0084df6c44aeb064cae83f3.jpg"
                        alt="Hero background"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                        style={{
                            filter: 'brightness(50%)'
                        }}
                    />
                </div>
            </div>


            {/* Hero Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-white space-y-8"
                    >
                        <div className="space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight"
                            >
                                Find Your Travel Expert
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className="text-xl md:text-2xl leading-relaxed font-roboto font-light max-w-lg"
                            >
                                Connect with an Envoyage advisor for a personalized, one-on-one travel planning experience.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.9 }}
                            className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex"
                        >
                            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-poppins font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Get Started
                            </button>
                            <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-900 font-poppins font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                                Learn More
                            </button>
                        </motion.div>
                    </motion.div>


                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                        d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
                        fill="rgba(255,255,255,0.1)"
                    />
                </svg>
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 right-10 w-4 h-4 bg-white rounded-full opacity-60 hidden lg:block"
            />

            <motion.div
                animate={{
                    y: [0, 15, 0],
                    x: [0, -8, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute top-1/3 left-20 w-3 h-3 bg-blue-300 rounded-full opacity-70 hidden lg:block"
            />

            <motion.div
                animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-orange-300 rounded-full opacity-80 hidden lg:block"
            />

            {/* // Model  */}
            <TravelExpertFinder
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onStateSelect={handleStateSelect}
                onDestinationSelect={handleDestinationSelect}
                onSearch={handleSearch}
            />
        </div>
    );
};

export default Hero;