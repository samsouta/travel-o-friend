"use client"
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';

interface Advisor {
  id: number;
  name: string;
  location: string;
  image: string;
}

const advisors: Advisor[] = [
  {
    id: 1,
    name: "Li Wei",
    location: "Greensburg, PA",
    image: "https://i.pinimg.com/736x/59/f7/61/59f76117bb98955e1ec56f6d77ec7b69.jpg"
  },
  {
    id: 2,
    name: "Jocelyn Brambach", 
    location: "Long Island/New York / New Jersey/ Baltimore, NY",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Mandy Cloud",
    location: "Colmar, PA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Debra Ferrara",
    location: "Wyckoff, NJ",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Donna Graziano",
    location: "Manorville, NY",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Nazli Ilie",
    location: "Montvale, NJ",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

export default function TravelAdvisorDirectory() {
  const [currentPage, setCurrentPage] = useState(1);
  const advisorsPerPage = 6;
  const totalPages = Math.ceil(advisors.length / advisorsPerPage);

  const getCurrentAdvisors = () => {
    const startIndex = (currentPage - 1) * advisorsPerPage;
    return advisors.slice(startIndex, startIndex + advisorsPerPage);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants: Variants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <div className=" py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Connect with a Group Travel Advisor
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our group travel advisors are available both in-person and virtually, 
            so you can easily start planning your next group getaway.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12"
        >
          {getCurrentAdvisors().map((advisor) => (
            <motion.div
              key={advisor.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl border border-blue-100 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-20 h-20 flex-shrink-0"
                >
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    className="rounded-full object-cover ring-4 ring-blue-100 shadow-md"
                    fill
                    sizes="80px"
                  />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {advisor.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {advisor.location}
                  </p>
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm border-b-2 border-transparent hover:border-blue-600 transition-all duration-300"
                  >
                    More about me
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-2"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all duration-200"
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </motion.button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <motion.button
              key={page}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg font-semibold transition-all duration-200 shadow-sm ${
                currentPage === page
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300'
              }`}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all duration-200 font-medium"
            aria-label="Next page"
          >
            Next ›
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all duration-200 font-medium"
            aria-label="Last page"
          >
            Last »
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}