"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FindYourExpert = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-200 to-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://i.pinimg.com/736x/04/39/6f/04396f9b743735d88963fb6693264e37.jpg"
              alt="Travel Expert"
              width={800}
              height={400}
              priority
              className="w-full h-[400px] object-cover"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-poppins font-bold text-blue-900 leading-tight"
            >
              Your Expert for the Perfect Journey
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 font-roboto font-light leading-relaxed"
            >
              From finding the best Caribbean all-inclusive to discovering
              out-of-the-box adventures, our travel advisors offer exceptional
              planning knowledge and access to extraordinary experiences. With
              personalized, one-on-one service, our travel specialists will
              conveniently connect with you online, by phone or in person (if
              local to your area).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white font-poppins px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
              >
                FIND YOUR EXPERT
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"
      />
    </section>
  );
};

export default FindYourExpert;
