"use client";

import React from "react";
import { motion, Variants } from 'framer-motion'

const PayOverTime: React.FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const logoVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const buttonHover = {
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: "easeInOut" as any, // TS fix
        },
    };


    const buttonTap = { scale: 0.98 };

    return (
        <motion.div
            className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-7xl w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Logo Section */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        variants={logoVariants}
                    >
                        <div className="relative">
                            {/* Animated background circle */}
                            <motion.div
                                className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-20"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                            {/* Affirm Logo */}
                            <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-blue-100">
                                <motion.div
                                    className="text-6xl font-poppins font-bold text-gray-900 tracking-tight"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    affirm
                                </motion.div>

                                {/* Decorative elements */}
                                <motion.div
                                    className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                                <motion.div
                                    className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-300 rounded-full"
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1,
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div className="space-y-8 relative" variants={itemVariants}>
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-gray-900 leading-tight"
                            variants={itemVariants}
                        >
                            Pay Over Time with{" "}
                            <motion.span
                                className="text-blue-600 inline-block"
                                animate={{
                                    color: ["#2563eb", "#3b82f6", "#1d4ed8", "#2563eb"],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                Affirm
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="space-y-6 text-gray-700 font-roboto font-light text-lg leading-relaxed"
                            variants={itemVariants}
                        >
                            <p>
                                Envoyage has partnered with Affirm to offer flexible payment
                                options, allowing you to book now and pay over time with no late
                                or hidden fees.
                            </p>

                            <p>
                                When you&apos;re ready to book, connect with an advisor and request
                                Affirm as your payment method. Pick the payment plan that works
                                best for you with fixed monthly installments from three, six, 12
                                or 18 months*.
                            </p>

                            <motion.p
                                className="text-sm text-gray-500"
                                variants={itemVariants}
                            >
                                *Subject to eligibility.
                            </motion.p>
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            variants={itemVariants}
                        >
                            <motion.button
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                variants={itemVariants}
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                            >
                                SEE IF YOU PREQUALIFY
                            </motion.button>

                            <motion.button
                                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
                                variants={itemVariants}
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                            >
                                LEARN ABOUT AFFIRM
                            </motion.button>
                        </motion.div>

                        {/* Terms */}
                        <motion.div
                            className="text-sm text-gray-500"
                            variants={itemVariants}
                        >
                            <motion.a
                                href="#"
                                className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
                                whileHover={{ scale: 1.02 }}
                            >
                                Terms and conditions apply.
                            </motion.a>
                        </motion.div>

                        {/* Floating elements */}
                        <div className="absolute top-20 left-10 opacity-10">
                            <motion.div
                                className="w-32 h-32 bg-blue-500 rounded-full"
                                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>

                        <div className="absolute bottom-20 right-10 opacity-10">
                            <motion.div
                                className="w-24 h-24 bg-blue-300 rounded-full"
                                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default PayOverTime;
