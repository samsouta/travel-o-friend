'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Phone, Users, User, Mail, Headphones, Clock } from 'lucide-react'
import Image from 'next/image'
import JoinOurNetwork from '@/components/home/JoinOurNetwork'

const Contact = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2, ease: 'easeInOut' }
    }
  }

  const buttonVariants: Variants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  }

  const contactMethods = [
    { icon: Phone, title: 'New Bookings', description: 'Ready to pack your bags for a vacation? Call us to connect with a travel consultant who will craft a trip just for you.', phone: '1-888-342-2068', action: 'CALL NOW' },
    { icon: Users, title: 'Group Bookings', description: 'Our group advisors specialize in weddings, as well as social, meeting and incentive groups.', phone: '1-201-778-1366', action: 'CALL NOW' },
    { icon: User, title: 'Connect With an Advisor', description: 'Work with an advisor close to you or based on destination expertise, or find contact info for your advisor.', action: 'FIND AN ADVISOR' },
    { icon: Mail, title: 'Connect By Email', description: 'Send us a message. Our travel advisors will contact you within 1 business day.', action: 'REQUEST INFO' },
    { icon: Headphones, title: 'Customer Service', description: 'Need help with your Envoyage experience? Contact our Customer Service team.', action: 'CONTACT US' },
    { icon: Clock, title: 'After Hours Support', description: 'Traveling within 48 hours or having an emergency? Contact our After Hours Customer Support.', phone: '888-360-2735', action: 'EMERGENCY SUPPORT' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with image background */}
      <motion.section
        className="relative h-[70vh] flex items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://ik.imagekit.io/deceuior6/Travel%20O%20friend/cartoon-man-with-headset-laptop_1187092-43272%20(1).jpg?updatedAt=1757741522469"
          alt="Contact Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay*/}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-3xl px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6"
            variants={itemVariants}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-100 font-roboto font-normal leading-relaxed"
            variants={itemVariants}
          >
            Have more questions? Our advisors are ready to help you plan your
            dream journey or answer any inquiries.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-3">
                    <method.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {method.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{method.description}</p>
                {method.phone && (
                  <p className="mb-4 text-blue-600 font-semibold">
                    {method.phone}
                  </p>
                )}
                <motion.button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {method.action}
                </motion.button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Our expert travel advisors are standing by to help you create
            unforgettable memories.
          </motion.p>
          <motion.button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section>

      {/* // join our network */}
      <JoinOurNetwork />
    </div>
  )
}

export default Contact
