"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How much baggage can I bring and at what cost?",
    answer: "Baggage allowances vary by airline and ticket type. Typically, economy class allows one carry-on bag (up to 7-10kg) and checked baggage (20-23kg). Additional fees apply for excess baggage, usually ranging from $25-100 per bag depending on the route and airline."
  },
  {
    id: 2,
    question: "How early should I arrive for my flight?",
    answer: "For domestic flights, arrive 2 hours before departure. For international flights, arrive 3 hours early. During peak travel seasons or at busy airports, consider arriving even earlier to account for longer security lines and check-in processes."
  },
  {
    id: 3,
    question: "Do I need a passport and/or a visa?",
    answer: "Passport requirements depend on your destination and nationality. For international travel, a valid passport is typically required. Visa requirements vary by country - some destinations offer visa-free entry, others require advance application. Check with the embassy or consulate of your destination country."
  },
  {
    id: 4,
    question: "When will REAL ID be enforced?",
    answer: "REAL ID enforcement for domestic air travel began on May 3, 2023. If you're 18 or older, you need a REAL ID-compliant driver's license, enhanced driver's license, or another acceptable form of ID (like a passport) to fly domestically within the United States."
  },
  {
    id: 5,
    question: "Do I need travel insurance?",
    answer: "While not mandatory, travel insurance is highly recommended. It can cover trip cancellations, medical emergencies, lost luggage, and other unexpected events. Consider your destination, trip cost, and personal circumstances when deciding on coverage levels."
  },
  {
    id: 6,
    question: "What identification is required for hotel check-in?",
    answer: "Most hotels require a government-issued photo ID (driver's license, passport, or state ID) and a credit card for incidentals. Some hotels may accept debit cards, but credit cards are preferred for the security deposit. International travelers should present their passport."
  },
  {
    id: 7,
    question: "How can I get a copy of my travel documents?",
    answer: "Keep digital copies of important documents in cloud storage (Google Drive, iCloud) and email them to yourself. For physical copies, store them separately from originals. Many airlines and booking platforms also allow you to access your itineraries and tickets through their mobile apps or websites."
  }
];

const TravelFAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl my-14 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Important Information
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <motion.button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-6 sm:px-8 sm:py-7 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-200 group"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                      <HelpCircle className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200 pr-4">
                    {item.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 sm:px-8 sm:pb-7"
                    >
                      <div className="pl-14 pr-4">
                        <div className="h-px bg-gradient-to-r from-blue-200 to-transparent mb-6"></div>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 font-roboto font-light text-lg">
            Have more questions? Contact our support team for assistance.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TravelFAQ;