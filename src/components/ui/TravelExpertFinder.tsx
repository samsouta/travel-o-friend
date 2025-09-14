import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, MapPin, Search, Users } from 'lucide-react';

interface Destination {
  name: string;
  image: string;
  color: string;
}

interface TravelExpertFinderProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  destinations?: Destination[];
  states?: string[];
  onStateSelect?: (state: string) => void;
  onDestinationSelect?: (destination: string) => void;
  onSearch?: (searchType: 'nearMe' | 'destination', value: string) => void;
  showGroupBookingLink?: boolean;
  groupBookingText?: string;
  groupBookingHref?: string;
  className?: string;
}

const TravelExpertFinder: React.FC<TravelExpertFinderProps> = ({
  isOpen,
  onClose,
  title = "Find a Travel Expert",
  destinations = defaultDestinations,
  states = defaultStates,
  onStateSelect,
  onDestinationSelect,
  onSearch,
  showGroupBookingLink = true,
  groupBookingText = "Booking 10 or more rooms?",
  groupBookingHref = "#",
  className = ""
}) => {
  const [activeTab, setActiveTab] = useState<'nearMe' | 'destination'>('nearMe');
  const [selectedState, setSelectedState] = useState('All States');

  const handleStateChange = (newState: string) => {
    setSelectedState(newState);
    onStateSelect?.(newState);
  };

  const handleDestinationClick = (destinationName: string) => {
    onDestinationSelect?.(destinationName);
  };

  const handleSearch = () => {
    if (activeTab === 'nearMe') {
      onSearch?.('nearMe', selectedState);
    }
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 50 }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const tabVariants: Variants = {
    inactive: { scale: 1 },
    active: { scale: 1.05 }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden ${className}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 relative">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <X size={24} />
          </motion.button>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 px-6">
          <div className="flex space-x-1">
            <motion.button
              variants={tabVariants}
              animate={activeTab === 'nearMe' ? 'active' : 'inactive'}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab('nearMe')}
              className={`px-6 py-3 font-semibold rounded-t-lg transition-all ${
                activeTab === 'nearMe'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Experts Near Me
            </motion.button>
            <motion.button
              variants={tabVariants}
              animate={activeTab === 'destination' ? 'active' : 'inactive'}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab('destination')}
              className={`px-6 py-3 font-semibold rounded-t-lg transition-all ${
                activeTab === 'destination'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Destination Experts
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'nearMe' ? (
              <motion.div
                key="nearMe"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <p className="text-gray-700 mb-4">
                    Looking for a travel expert that&apos;s close to you? Select your state.
                  </p>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative max-w-md mx-auto"
                  >
                    <select 
                      value={selectedState}
                      onChange={(e) => handleStateChange(e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-700 bg-white appearance-none cursor-pointer"
                    >
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </motion.div>

                  <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-center justify-center text-sm text-gray-600">
                    <span>💡 Don&apos;t see your state? Select all states or select the state nearest to you.</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSearch}
                    className="w-full max-w-md mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Search className="inline mr-2" size={20} />
                    SEARCH
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="destination"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <p className="text-gray-700">
                    Which destination do you want your travel advisor to specialize in?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {destinations.map((dest, index) => (
                    <motion.div
                      key={dest.name}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      onClick={() => handleDestinationClick(dest.name)}
                      className="bg-white border-2 border-gray-100 rounded-xl p-4 cursor-pointer hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${dest.color} flex items-center justify-center text-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        {dest.image}
                      </div>
                      <h3 className="text-center font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {dest.name}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        {showGroupBookingLink && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="text-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={groupBookingHref}
                className="text-blue-600 hover:text-blue-800 font-semibold underline transition-colors"
              >
                <Users className="inline mr-1" size={18} />
                {groupBookingText}
              </motion.a>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

// Default data - can be customized via props
const defaultDestinations: Destination[] = [
  { name: 'Africa', image: '🦓', color: 'from-orange-400 to-red-500' },
  { name: 'Antarctica', image: '🐧', color: 'from-blue-200 to-cyan-400' },
  { name: 'Asia', image: '🏯', color: 'from-red-400 to-pink-500' },
  { name: 'Australia', image: '🦘', color: 'from-green-400 to-blue-500' },
  { name: 'Canada', image: '🍁', color: 'from-red-500 to-orange-400' },
  { name: 'Caribbean', image: '🏖️', color: 'from-cyan-400 to-blue-500' },
  { name: 'Central America', image: '🌴', color: 'from-green-500 to-teal-400' },
  { name: 'Europe', image: '🏰', color: 'from-purple-400 to-indigo-500' },
  { name: 'Indian Ocean', image: '🏝️', color: 'from-teal-400 to-cyan-500' },
  { name: 'Mexico', image: '🌵', color: 'from-orange-500 to-red-400' },
  { name: 'Middle East', image: '🕌', color: 'from-yellow-400 to-orange-500' },
  { name: 'New Zealand', image: '🥝', color: 'from-green-500 to-emerald-400' },
  { name: 'South America', image: '⛰️', color: 'from-emerald-400 to-cyan-500' },
  { name: 'South Pacific', image: '🌺', color: 'from-pink-400 to-purple-500' },
  { name: 'United States', image: '🗽', color: 'from-blue-500 to-indigo-600' }
];

const defaultStates: string[] = [
  'All States',
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
];


export default TravelExpertFinder;