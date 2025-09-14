'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TravelInsuranceHero: React.FC = () => {
    return (
        <div className="bg-gradient-to-r from-white to-blue-500 flex items-center">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Section */}
                    <motion.div
                        className="flex-1 max-w-lg mx-auto lg:mx-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                            <Image
                                fill
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Relaxing vacation scene with wooden deck chairs overlooking ocean"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        className="flex-1 text-white max-w-xl"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Simplify the Journey
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl leading-relaxed text-white/90"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            From canceled flights to last-minute changes, give yourself peace of mind with Allianz Travel insurance. It offers convenient and affordable protection, including 24/7 emergency assistance. Plus, you have our travel advisors for one-on-one guidance to help simplify your travel plans even more.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default TravelInsuranceHero;