"use client"
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import Image from 'next/image';

interface TravelExpert {
  id: number;
  name: string;
  location: string;
  title?: string;
  image: string;
}

const travelExperts: TravelExpert[] = [
  { id: 1, name: 'Lyndsay Roach', location: 'York, PA', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: 2, name: 'Jazmyn Thomas', location: 'Monroeville, PA', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: 3, name: 'Cathy Carpentieri-Gallo', location: 'Franklin Park, PA', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { id: 4, name: 'Ivy Smith', location: 'Montvale, NJ', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { id: 5, name: 'Carol Rivera', location: 'Montvale, NJ', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
  { id: 6, name: 'Kasia Czerwonka', location: 'Woburn, MA', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
  { id: 7, name: 'Lisa Siubis', location: 'Eatontown, NJ', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
  { id: 8, name: 'Nancy Scarola', location: 'Long Island, NY', image: 'https://randomuser.me/api/portraits/women/8.jpg' },
  { id: 9, name: 'Paula Lixie', location: 'Augusta, GA', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
  { id: 10, name: 'Chris Frohlich', location: 'Montvale, NJ', image: 'https://randomuser.me/api/portraits/men/10.jpg' },
  { id: 11, name: 'DebraKalsmith-Sternberg', location: 'Long Island, NY', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
  { id: 12, name: 'Alex Krok', location: 'Montgomery County, PA', image: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { id: 13, name: 'Ryan Cafaro', location: 'Exton, PA', image: 'https://randomuser.me/api/portraits/men/13.jpg' },
  { id: 14, name: 'Hatzel Iraheta Santa', location: 'Group Travel Advisor', title: 'NJ', image: 'https://randomuser.me/api/portraits/men/14.jpg' },
  { id: 15, name: 'Stephanie Strycharz', location: 'King Of Prussia, PA', image: 'https://randomuser.me/api/portraits/women/15.jpg' },
  { id: 16, name: 'Janessa Weinberg', location: 'Group Travel Advisor', title: 'Springfield, MA', image: 'https://randomuser.me/api/portraits/women/16.jpg' },
  { id: 17, name: 'Dorothy Sheehan', location: 'Group Travel Advisor', title: 'Albany, NY', image: 'https://randomuser.me/api/portraits/women/17.jpg' },
  { id: 18, name: 'Donna Graziano', location: 'Group Travel Advisor', title: 'Freeport, NY', image: 'https://randomuser.me/api/portraits/women/18.jpg' },
  { id: 19, name: 'Deb Bosco', location: 'Group Travel Advisor', title: 'Greensburg, PA', image: 'https://randomuser.me/api/portraits/women/19.jpg' },
  { id: 20, name: 'Danielle Lyadri', location: 'Long Island, NY', image: 'https://randomuser.me/api/portraits/women/20.jpg' },
  { id: 21, name: 'Jaime LevineVradenburg', location: 'Group Travel Advisor', title: 'Montvale, NJ', image: 'https://randomuser.me/api/portraits/women/21.jpg' }
];

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
      type: 'spring',
      stiffness: 300,
      damping: 24
    }
  }
};

const TravelExpertsSearch: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const [selectedRange, setSelectedRange] = useState('25 miles');
  const [sortBy, setSortBy] = useState('Default');
  const [filteredExperts, setFilteredExperts] = useState(travelExperts);

  const ranges = ['25 miles', '50 miles', '100 miles', 'No Limit'];

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
    setZipCode(value);
  };

  const handleSort = (sortType: string) => {
    let sorted = [...filteredExperts];
    switch (sortType) {
      case 'Name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Location':
        sorted.sort((a, b) => a.location.localeCompare(b.location));
        break;
      default:
        sorted = [...travelExperts];
    }
    setFilteredExperts(sorted);
  };

  React.useEffect(() => {
    handleSort(sortBy);
  }, [sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Search Travel Experts</h2>
              
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-4">Showing consultants in All States</p>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                  Select another state
                </button>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Expert Location</h3>
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={zipCode}
                  onChange={handleZipCodeChange}
                  maxLength={5}
                  className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Range</h3>
                <div className="grid grid-cols-2 gap-2">
                  {ranges.map((range) => (
                    <motion.button
                      key={range}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedRange(range)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedRange === range
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                      }`}
                    >
                      {range}
                    </motion.button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Please enter a valid 5-digit zip code and then select a range.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Find a Destination Expert</h3>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-teal-500 text-white py-3 rounded-lg font-medium hover:bg-teal-600 transition-colors shadow-md"
                >
                  SELECT A DESTINATION
                </motion.button>
              </div>

              <button className="text-blue-600 text-sm hover:text-blue-800 transition-colors">
                Booking 10 or more rooms?
              </button>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
            >
              <h1 className="text-2xl font-bold text-blue-900">
                Meet {filteredExperts.length} of our travel experts
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort By:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-blue-200 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Default</option>
                    <option>Name</option>
                    <option>Location</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
              </div>
            </motion.div>

            {/* Experts Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredExperts.map((expert) => (
                <motion.div
                  key={expert.id}
                  variants={cardVariants}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white rounded-xl shadow-md border border-blue-50 overflow-hidden group cursor-pointer"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative w-16 h-16 flex-shrink-0"
                      >
                        <Image
                          src={expert.image}
                          alt={expert.name}
                          fill
                          sizes="64px"
                          className="rounded-full object-cover border-2 border-blue-100"
                        />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-blue-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">
                          {expert.name}
                        </h3>
                        <div className="flex items-center text-gray-600 text-sm mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{expert.location}</span>
                        </div>
                        {expert.title && (
                          <p className="text-xs text-gray-500 mb-3">{expert.title}</p>
                        )}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
                        >
                          More about me
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelExpertsSearch;