'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-black/30 to-white">

      <motion.section 
        className="relative py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <motion.div 
              className="relative"
              {...fadeInLeft}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Snorkeling with tropical fish in crystal clear water"
                  width={2070}
                  height={1380}
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              className="space-y-6"
              {...fadeInRight}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Get to the Heart of Your Destination
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                There&apos;s nothing like arriving in a new place—but it&apos;s what you do once you&apos;re there that brings it to life. Sightseeing tours and curated excursions add rich layers of culture, connection, and adventure to your journey. Dive deep into the Caribbean with vibrant city tours in Santo Domingo or San Juan. Explore Hawaii&apos;s wild side through snorkeling, hiking, and nature walks. Savor Europe through hands-on cooking classes and local food tours. Or trace ancient footsteps across Asia&apos;s most storied landscapes. With Envoyage, sightseeing isn&apos;t a checklist—it&apos;s a doorway to deeper discovery.
              </p>
              <motion.button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-sm transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONNECT WITH AN ADVISOR
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Explore Like a Local Section */}
      <motion.section 
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
                Explore Like a Local
              </h2>
              <p className="text-lg opacity-90 leading-relaxed">
                Authentic moments are what define unforgettable travel. That&apos;s why excursions through Envoyage are designed to go beyond the expected. With local experts, you&apos;ll uncover hidden gems, gain meaningful insight, and experience your destination with the kind of warmth and depth that only a local connection can bring.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="relative"
              {...fadeInRight}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://i.pinimg.com/1200x/d7/f4/3f/d7f43fefa4a981726e7db82e9f817108.jpg"
                  alt="Tourists exploring European architecture with Notre Dame Cathedral"
                  width={2070}
                  height={1380}
                  className="w-full h-80 lg:h-96 object-cover object-bottom"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Top Things to Do in the Caribbean Section */}
      <motion.section 
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://i.pinimg.com/736x/89/cc/c5/89ccc5c7f7c0d723283863bb42170793.jpg"
                  alt="Swimming pig in crystal clear Caribbean waters"
                  width={2070}
                  height={1380}
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              className="text-white space-y-6 order-1 lg:order-2"
              {...fadeInRight}
            >
              <h2 className="text-3xl lg:text-4xl font-bold">
                Top Things to Do in the Caribbean
              </h2>
              <p className="text-lg opacity-90 leading-relaxed mb-6">
                The <span className="text-blue-300 underline">Caribbean</span> is one of the world&apos;s most visited destinations. The numerous beaches, nearly perfect weather, and turquoise sea horizons have us packing our bags just thinking about it. But there&apos;s so much more to these islands than meets the eye. Take a look at some of the best Caribbean excursions you can enjoy on your next trip to paradise.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Experience San Juan</h3>
                  <p className="text-gray-300 text-sm">
                    Enjoy a walking tour of Puerto Rico&apos;s capital down streets lined with Spanish-colonial buildings and indulge on Puerto Rican delicacies, like mofongo and empanadillas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Race Through the Countryside in <span className="text-blue-300 underline">Punta Cana</span></h3>
                  <p className="text-gray-300 text-sm">
                    Hop in a dune buggy and hit the backroads through Dominican Republic farmlands and rainforest, stopping to sample locally-grown chocolate tea and enjoy the beauty of Macao Beach.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Climb Waterfalls in <span className="text-blue-300 underline">Jamaica</span></h3>
                  <p className="text-gray-300 text-sm">
                    Head east towards Dunns River Falls or south for YS Falls and spend the day hiking and floating in the cool pools of these natural beauties.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Swim with the Pigs in the <span className="text-blue-300 underline">Bahamas</span></h3>
                  <p className="text-gray-300 text-sm">
                    If you&apos;ll be visiting the island of Exuma, be sure to jump in the water with the famous local pigs, who take to the sea like fish.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Make Chocolate in <span className="text-blue-300 underline">Saint Lucia</span></h3>
                  <p className="text-gray-300 text-sm">
                    Discover the wonder that is chocolate on this bean to bar tour, where you&apos;ll learn how the delicacy is grown on the island and create your own chocolate bar.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;