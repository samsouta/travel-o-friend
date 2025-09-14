'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AirlineWebsite = () => {
  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div 
        className="relative bg-gradient-to-b from-black/30 to-white min-h-screen flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-6"
              {...fadeInLeft}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Take to the Sky with Our Airfare Experts
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                From complex itineraries to multiple international destinations, we&apos;re your ally for booking airline tickets. Our air experts specialize in booking all types of flights, whether you&apos;re looking to save for round-the-world, once-in-a-lifetime trips, as well as first and business class airfares. But beyond booking airline tickets, we make sure you&apos;ll also receive the best service. When you take flight with us, you can count on our unmatched reliability and service, both on the ground and in the sky.
              </p>
              <motion.button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-sm transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONNECT WITH AN ADVISOR
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="relative"
              {...fadeInRight}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-96">
                <Image 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  alt="Airplane flying above clouds"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Class Above the Rest Section */}
      <motion.div 
        className="py-20 bg-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="text-white space-y-6"
              {...fadeInLeft}
            >
              <h2 className="text-3xl lg:text-4xl font-bold">
                A Class Above the Rest
              </h2>
              <p className="text-lg opacity-90 leading-relaxed">
                We believe in more than just getting you from point A to point B. We believe that the journey is just as important as the destination. Our airfare specialists don&apos;t just find you a cheap flight &ndash; they help you enjoy the extra space found in an Economy Plus seat or truly indulge on a first-class suite in the sky. Our airfare specialists know airline classes like the back of their hand, and they&apos;ll find your ideal seat on the plane at the best prices.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="relative"
              {...fadeInRight}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Passenger looking out airplane window"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Airline Services Section */}
      <motion.div 
        className="py-20 bg-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <motion.div 
              className="relative order-2 lg:order-1"
              {...fadeInLeft}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-96">
                <Image 
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Flight attendant serving passengers"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              className="text-white space-y-8 order-1 lg:order-2"
              {...fadeInRight}
            >
              <h2 className="text-3xl lg:text-4xl font-bold">
                An Airline for Every Type of Flight
              </h2>
              <p className="text-lg opacity-90 leading-relaxed">
                We work with all the major airlines around the world to ensure we can get you where you need to go, how you want to go. Take a look at some of the top airlines and the destinations they&apos;ll fly you to. For information on baggage policies, visit our Baggage fees page.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">Domestic Flair</h3>
                  <p className="opacity-90">
                    When you want to keep your getaway close to home, the USA&apos;s major airlines such as Delta, American, and United are ready to welcome you aboard.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">European Flair</h3>
                  <p className="opacity-90">
                    Enjoy free checked bags and inflight meals on flights across the pond with our international favorite like British Airways and Lufthansa.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">Long Haul Luxury</h3>
                  <p className="opacity-90">
                    When it comes to flights that are 15+ hours, trust giants like Qantas, Emirates, Etihad, and British Airways to carry you there in style.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AirlineWebsite;