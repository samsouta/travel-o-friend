'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Users, Calendar, MapPin, Building2 } from 'lucide-react';

const TravelServices = () => {
  const services = [
    {
      id: 'weddings',
      title: 'Weddings',
      description:
        'From selecting the perfect setting to coordinating guest travel and excursions, our group travel advisors will bring your dream celebration to life. Organize it all with a complimentary custom website to handle invitations and bookings.',
      icon: <Users className="w-8 h-8" />,
      bgImage:
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      delay: 0,
    },
    {
      id: 'celebrations',
      title: 'Celebrations', 
      description:
        "Whether it's a big birthday, anniversary, or reunion, our group travel advisors will curate a one-of-a-kind escape with the perfect venue, tailored itineraries, and seamless coordination.",
      icon: <Calendar className="w-8 h-8" />,
      bgImage:
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      delay: 0.2,
    },
    {
      id: 'meetings',
      title: 'Meetings',
      description:
        'Inspire your team, meet new clients, work hard, and play. From team building getaways to incentive trips and off-site meetings, our group travel advisors ensure every detail is handled and a fresh setting is chosen to spark new ideas.',
      icon: <Building2 className="w-8 h-8" />,
      bgImage:
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
      delay: 0.4,
    },
    {
      id: 'organizations',
      title: 'Organizations',
      description:
        'Planning a school trip, volunteer getaway, or faith-based retreat? Your Envoyage group travel advisor will manage flights, stays, and custom itineraries designed to bring your group closer together while you further your mission.',
      icon: <MapPin className="w-8 h-8" />,
      bgImage:
        'https://i.pinimg.com/736x/dd/67/2a/dd672a7da498f53528e6405a5e7c7434.jpg',
      delay: 0.6,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const hoverVariants: Variants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-blue-900 mb-6">
            Group Travel Services
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto font-roboto font-normal leading-relaxed">
            Create unforgettable experiences with our specialized group travel
            solutions
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              custom={index}
              style={{ height: index % 2 === 0 ? '500px' : '550px' }}
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.bgImage})` }}
                variants={hoverVariants}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-transparent" />

              <motion.div
                className="relative h-full flex flex-col justify-end p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: service.delay + 0.3, duration: 0.6 }}
              >
                <motion.div
                  className="mb-4 p-3 bg-white/20 backdrop-blur-sm rounded-full w-fit"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>

                <motion.h2
                  className="text-3xl md:text-4xl font-poppins font-bold mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: service.delay + 0.5, duration: 0.6 }}
                >
                  {service.title}
                </motion.h2>

                <motion.p
                  className="text-lg leading-relaxed font-roboto font-normal mb-6 text-blue-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: service.delay + 0.7, duration: 0.6 }}
                >
                  {service.description}
                </motion.p>

                <motion.button
                  className="flex items-center font-poppins font-bold gap-2 text-lg text-white hover:text-blue-200 transition-colors w-fit group"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: service.delay + 0.9, duration: 0.6 }}
                >
                  LEARN MORE
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </motion.button>
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  background:
                    'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 197, 253, 0.2))',
                }}
              />
            </motion.div>
          ))}
        </div>

        
      </motion.div>
    </div>
  );
};

export default TravelServices;
