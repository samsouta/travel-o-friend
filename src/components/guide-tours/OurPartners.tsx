'use client'

import React from 'react'
import { motion , Variants } from 'framer-motion'
import Image from 'next/image'

interface Partner {
  id: number
  name: string
  logo: string
  description: string
  specialties: string[]
}

const partners: Partner[] = [
  {
    id: 1,
    name: 'AAT Kings',
    logo: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/Logo_AATKings_0.jpg?updatedAt=1757757539686',
    description: 'Discover Australia and New Zealand with AAT Kings, the pioneers of outback exploration. With a century of adventure behind them, AAT Kings makes your journey to the Land Down Under thrilling, care-free, and culturally immersive.',
    specialties: ['Australia Tours', 'New Zealand', 'Outback Adventures']
  },
  {
    id: 2,
    name: 'Blue-Roads Touring Company',
    logo: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/blue-roads-255x120.jpg?updatedAt=1757757602052',
    description: 'Blue-Roads Touring Company has offered intimate small group tours for 25 years. Travel like scenic route in destinations like the UK, Ireland, Europe and Asia with Blue-Roads tours.',
    specialties: ['Small Group Tours', 'Europe', 'Asia']
  },
  {
    id: 3,
    name: 'Brendan Vacations',
    logo: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/brendan-vacations-255x120.jpg?updatedAt=1757757670642',
    description: 'Brendan Vacations offers only the best escorted motorcoach tours, independent vacations, and river cruises to top destinations. Travel the US and Canada, journey to Africa and Egypt, South America or Central America.',
    specialties: ['River Cruises', 'Motorcoach Tours', 'Independent Travel']
  },
  {
    id: 4,
    name: 'CIE Tours',
    logo: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/CIE-Tours-updated-logo-255x120.png?updatedAt=1757757746305',
    description: 'CIE Tours has been crafting high quality, unique itineraries since 1932. Expert local tour directors greet you to warm welcomes, local lore and exclusive access in Ireland, Britain, Iceland and Italy.',
    specialties: ['Ireland Tours', 'Britain', 'Iceland']
  },
  {
    id: 5,
    name: 'Collette',
    logo: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/collette%20logo%202022_seablu_255x120.png?updatedAt=1757757801232',
    description: 'Collette Inclusive tours offer you more value for your money while delivering those incredible moments that make travel special. See Africa, Asia, Europe, North America and more with Collette.',
    specialties: ['Inclusive Tours', 'Global Destinations', 'Value Travel']
  },
  {
    id: 6,
    name: 'Contiki',
    logo: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/contiki-255x120-rev.jpg?updatedAt=1757757918100',
    description: 'Contiki Tours offers vacation tour packages for the 18-35 year old travelers seeking adventures in places like Africa, Asia, Europe, and North America.',
    specialties: ['Young Travelers', '18-35 Years', 'Adventure Travel']
  },
  {
    id: 7,
    name: 'Cosmos',
    logo: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/cosmos-255x120.jpg?updatedAt=1757757960153',
    description: 'Cosmos Tours offers clean, comfortable and attractive touring vacations for value-minded travelers traveling to places like Africa, Australia, Europe and South America.',
    specialties: ['Value Tours', 'Multiple Continents', 'Comfortable Travel']
  },
  {
    id: 8,
    name: 'G Adventures',
    logo: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/255x120_GAdv.jpg?updatedAt=1757758007375',
    description: 'Whether you\'re a solo traveler, family explorer, or active soul, G Adventures has a trip for you. Discover your next journey, no matter your style.',
    specialties: ['Small Groups', 'Adventure Travel', 'Sustainable Tourism']
  },
  {
    id: 9,
    name: 'Globus',
    logo: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/globus-255x120-rev.jpg?updatedAt=1757758096617',
    description: 'For over 80 years, Globus Tours has been showing travelers the world escorted by highly knowledgeable tour directors. See destinations such as Europe, U.S., Canada, South America, Asia, Africa, Hawaii and the South Pacific.',
    specialties: ['Escorted Tours', '80+ Years Experience', 'Worldwide Destinations']
  },
  {
    id: 10,
    name: 'Insight Vacations',
    logo: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/insight-vacations-255x120.jpg?updatedAt=1757758154748',
    description: 'Experience remarkable cultures and faraway lands with Insight Vacations. Take your wanderlust to places like North Africa and the Eastern Mediterranean, Europe, and Canada for a lifetime of memories.',
    specialties: ['Cultural Experiences', 'Premium Travel', 'Memorable Journeys']
  },
  {
    id: 11,
    name: 'Intrepid Travel',
    logo: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/255x120_Intrepid.png?updatedAt=1757758219655',
    description: 'Intrepid Travel offers small group style of travel, so you\'ll travel the local way, eat the local way and sleep the local way. Tour fascinating destinations in Antarctica, Greenland, Africa, Central America, or the Middle East.',
    specialties: ['Small Groups', 'Local Experiences', 'Off-the-beaten-path']
  },
  {
    id: 12,
    name: 'On The Go Tours',
    logo: 'https://ik.imagekit.io/deceuior6/Travel%20O%20friend/12097.png?updatedAt=1757758321623',
    description: 'With tailor-made adventures and escorted group tours for every travel style. On The Go is your go to for breathtaking experiences. Discover the world with safaris, adrenaline tours, hiking, sailing and so much more.',
    specialties: ['Tailor-made', 'Adventure Tours', 'Diverse Experiences']
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const cardHoverVariants: Variants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  },
  tap: {
    scale: 0.98
  }
}

const OurPartners = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100 to-transparent rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-6"
          >
            Our Partners
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We collaborate with industry-leading travel companies to bring you extraordinary experiences and unforgettable journeys around the world.
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="group"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300 h-full flex flex-col backdrop-blur-sm bg-white/90"
              >
                {/* Logo Section */}
                <div className="mb-6">
                  <div className="w-full h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden mb-4 group-hover:from-blue-100 group-hover:to-blue-150 transition-all duration-300">
                    <Image
                      width={100}
                      height={100}
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <motion.h3
                    className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {partner.name}
                  </motion.h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {partner.description}
                </p>

                {/* Specialties Tags */}
                <div className="flex flex-wrap gap-2">
                  {partner.specialties.slice(0, 3).map((specialty, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full hover:bg-blue-200 transition-colors duration-200"
                    >
                      {specialty}
                    </motion.span>
                  ))}
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-blue-600/10 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.div
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    className="bg-blue-600 text-white px-6 py-2 font-poppins cursor-pointer rounded-full text-sm font-medium shadow-lg"
                  >
                    Learn More
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore All Partnerships
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default OurPartners