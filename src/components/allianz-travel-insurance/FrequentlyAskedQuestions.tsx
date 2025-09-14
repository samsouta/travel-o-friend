"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // General
  {
    id: 1,
    category: "General",
    question: "I'm experiencing a travel emergency. What should I do?",
    answer: "In case of a travel emergency, contact our 24-Hour Hotline Assistance immediately. They can help coordinate emergency medical care, evacuation, and other urgent travel assistance services covered under your policy."
  },
  {
    id: 2,
    category: "General",
    question: "Why do I need travel insurance?",
    answer: "Travel insurance protects you from unexpected costs that can arise during your trip, such as medical emergencies, trip cancellations, lost luggage, and travel delays. It provides financial protection and peace of mind while traveling."
  },
  {
    id: 3,
    category: "General",
    question: "What is included in non-refundable trip costs?",
    answer: "Non-refundable trip costs typically include prepaid, non-refundable travel expenses such as airline tickets, hotel reservations, tour packages, cruise fares, and other travel arrangements that cannot be refunded if cancelled."
  },
  {
    id: 4,
    category: "General",
    question: "What does travel insurance cover?",
    answer: "Travel insurance typically covers trip cancellation/interruption, medical emergencies, emergency evacuation, lost/stolen luggage, travel delays, and 24-hour assistance services. Coverage varies by plan and provider."
  },
  {
    id: 5,
    category: "General",
    question: "Who is covered by my travel insurance plan?",
    answer: "Coverage typically includes the policyholder and any eligible family members or travel companions listed on the policy. This may include spouse, dependent children, and sometimes domestic partners, depending on the specific plan terms."
  },
  {
    id: 6,
    category: "General",
    question: "Does travel insurance cover pregnancy?",
    answer: "Pregnancy coverage varies by policy. Some plans cover pregnancy-related complications that arise unexpectedly, while routine prenatal care is typically excluded. Pre-existing pregnancy conditions may not be covered unless declared and accepted."
  },
  {
    id: 7,
    category: "General",
    question: "Does my health insurance cover me overseas?",
    answer: "Most domestic health insurance plans provide limited or no coverage outside your home country. Travel medical insurance is recommended to cover medical expenses, emergency evacuation, and repatriation while traveling internationally."
  },
  {
    id: 8,
    category: "General",
    question: "What can the 24-Hour Hotline Assistance do for me?",
    answer: "Our 24-Hour Hotline provides emergency assistance including medical referrals, help with lost documents, emergency cash advances, travel arrangement changes, translation services, and coordination of emergency services worldwide."
  },
  {
    id: 9,
    category: "General",
    question: "Am I able to change my flight through Allianz Travel?",
    answer: "Allianz Travel can assist with flight changes in emergency situations covered by your policy. For routine changes, you'll need to contact your airline directly. Emergency assistance may help coordinate changes due to covered reasons."
  },
  {
    id: 10,
    category: "General",
    question: "How do I call Allianz Travel internationally?",
    answer: "International contact information is provided in your policy documents. You can call collect or use the toll-free numbers available in most countries. Contact details are also available through the mobile app and website."
  },
  {
    id: 11,
    category: "General",
    question: "If I cancel my trip, do I get my money back?",
    answer: "Trip cancellation coverage reimburses non-refundable trip costs if you cancel for a covered reason listed in your policy, such as illness, injury, or other specified circumstances. Cancellation for non-covered reasons is not reimbursed."
  },
  {
    id: 12,
    category: "General",
    question: "Who provides the insurance for these programs?",
    answer: "Insurance is underwritten by Allianz Global Assistance and other partner insurance companies. Specific underwriter information is detailed in your policy documents and terms and conditions."
  },
  {
    id: 13,
    category: "General",
    question: "How do I know what my coverage limits are?",
    answer: "Coverage limits are detailed in your policy certificate and summary of benefits. You can also check your coverage limits through your online account, mobile app, or by contacting customer service."
  },

  // Claims
  {
    id: 14,
    category: "Claims",
    question: "How do I file a claim?",
    answer: "You can file a claim online through your account portal, by phone, or by mail. You'll need your policy number, claim details, and supporting documentation. Submit your claim as soon as possible after the incident."
  },
  {
    id: 15,
    category: "Claims",
    question: "How do I check the status of a claim?",
    answer: "Check your claim status online through your account portal, mobile app, or by calling customer service. You'll receive updates via email and can track progress through each stage of the claims process."
  },
  {
    id: 16,
    category: "Claims",
    question: "How long will it take for my claim to be reviewed?",
    answer: "Most claims are reviewed within 10-15 business days after all required documentation is received. Complex claims may take longer. You'll be notified if additional information is needed."
  },
  {
    id: 17,
    category: "Claims",
    question: "How long does it take to receive payment for a claim?",
    answer: "Once your claim is approved, payment is typically processed within 5-10 business days. Payment method and location may affect delivery time. Electronic payments are generally faster than checks."
  },
  {
    id: 18,
    category: "Claims",
    question: "What is a debit disbursement vs. direct deposit?",
    answer: "Direct deposit puts funds directly into your bank account electronically. Debit disbursement provides a prepaid debit card loaded with your claim amount. Direct deposit is typically faster and more convenient."
  },
  {
    id: 19,
    category: "Claims",
    question: "What name will appear on my bank statement if I elect to use debit disbursement or direct deposit?",
    answer: "The transaction will typically appear as 'Allianz Global Assistance' or a similar company identifier on your bank statement. The exact name may vary depending on the processing system used."
  },
  {
    id: 20,
    category: "Claims",
    question: "Are there limits on electronic claim payments?",
    answer: "Yes, electronic payments may have daily or transaction limits depending on banking regulations and your financial institution's policies. Large claims may be split into multiple payments or sent via check."
  },
  {
    id: 21,
    category: "Claims",
    question: "Can I have my claim payment sent to a business account?",
    answer: "Claim payments are typically sent to personal accounts in the policyholder's name. Business account payments may be possible in certain circumstances with proper documentation and verification."
  },
  {
    id: 22,
    category: "Claims",
    question: "Can I receive a claim payment on my credit card?",
    answer: "Credit card refunds are typically only available if the original payment was made with that credit card. New claim payments are usually processed via direct deposit, debit card, or check."
  },
  {
    id: 23,
    category: "Claims",
    question: "Can I have my claim payment sent to a prepaid card?",
    answer: "Some prepaid cards may accept direct deposits, but this varies by card provider. A debit disbursement card provided by the insurance company is often a more reliable option for claim payments."
  },
  {
    id: 24,
    category: "Claims",
    question: "Can I have the claim payment sent to multiple accounts?",
    answer: "Claim payments are typically sent to a single account. If you need to split the payment, you may need to handle the distribution after receiving the funds in your primary account."
  },
  {
    id: 25,
    category: "Claims",
    question: "I selected electronic payment, but I received a check. Why did this happen?",
    answer: "This may occur due to banking restrictions, verification issues, or if the payment amount exceeds electronic transfer limits. Contact customer service to understand why your payment method was changed."
  },
  {
    id: 26,
    category: "Claims",
    question: "Can I change my preferred payment option?",
    answer: "You may be able to change your payment preference for future claims through your online account or by contacting customer service. Changes may not be possible for claims already in processing."
  },
  {
    id: 27,
    category: "Claims",
    question: "Why do I have to provide my email for claim processing?",
    answer: "Email addresses are required for electronic communications, claim status updates, and document delivery. This ensures faster processing and helps maintain secure communication throughout the claims process."
  },
  {
    id: 28,
    category: "Claims",
    question: "How can I make the claims process go smoothly?",
    answer: "Submit complete documentation promptly, respond quickly to requests for additional information, keep detailed records of expenses, and file your claim as soon as possible after the incident occurs."
  },
  {
    id: 29,
    category: "Claims",
    question: "Why do I need to submit documentation?",
    answer: "Documentation verifies the validity of your claim and helps determine coverage eligibility. Required documents may include receipts, medical reports, police reports, and proof of the incident that led to your claim."
  },
  {
    id: 30,
    category: "Claims",
    question: "Where do I find a list of all the required claim documents?",
    answer: "Required documents are listed in your policy certificate, claims forms, and on the company website. Customer service can also provide a complete list based on your specific claim type."
  },
  {
    id: 31,
    category: "Claims",
    question: "How do I upload additional documentation for my claim?",
    answer: "Additional documents can be uploaded through your online account portal, mobile app, or sent via email to the claims department. Make sure to include your claim number with all submissions."
  },
  {
    id: 32,
    category: "Claims",
    question: "When do I have to turn in my documentation?",
    answer: "Submit documentation as soon as possible, typically within 90 days of the incident or as specified in your policy. Prompt submission helps ensure faster claim processing and prevents potential coverage issues."
  },
  {
    id: 33,
    category: "Claims",
    question: "Why was my claim denied?",
    answer: "Claims may be denied for various reasons including non-covered events, insufficient documentation, late filing, or policy exclusions. You'll receive a detailed explanation of the denial reasons and information about the appeals process."
  },
  {
    id: 34,
    category: "Claims",
    question: "Does it matter if I file a claim by mail, by fax or electronically?",
    answer: "Electronic filing is typically fastest and most secure. Mail and fax are acceptable but may take longer to process. Regardless of method, ensure all required information and documentation are included with your claim."
  },

  // Pre-Existing Medical Condition Coverage
  {
    id: 35,
    category: "Pre-Existing Medical Condition Coverage",
    question: "What is a pre-existing medical condition?",
    answer: "A pre-existing medical condition is typically a health condition for which you received medical treatment, consultation, or medication within a specified period (usually 60-180 days) before your policy effective date."
  },
  {
    id: 36,
    category: "Pre-Existing Medical Condition Coverage",
    question: "If I have a pre-existing medical condition, can I still purchase travel insurance?",
    answer: "Yes, you can still purchase travel insurance with pre-existing conditions. However, coverage for those conditions may require meeting specific criteria such as purchasing within a certain timeframe and being medically able to travel when you buy the policy."
  },

  // Covered Suppliers
  {
    id: 37,
    category: "Covered Suppliers",
    question: "What is supplier default?",
    answer: "Supplier default occurs when a travel supplier (airline, cruise line, tour operator, etc.) ceases operations due to financial insolvency, making it impossible for them to provide the booked travel services."
  },
  {
    id: 38,
    category: "Covered Suppliers",
    question: "How do I determine if I have supplier default coverage?",
    answer: "Check your policy certificate and summary of benefits for supplier default coverage. This benefit covers financial losses when a covered travel supplier defaults, subject to policy terms and conditions."
  }
];

const FrequentlyAskedQuestions: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Claims', 'Pre-Existing Medical Condition Coverage', 'Covered Suppliers'];

  const filteredData = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {filteredData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
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
                  <div className="flex-1">
                    {selectedCategory === 'All' && (
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full mb-2 inline-block">
                        {item.category}
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200 pr-4">
                      {item.question}
                    </h3>
                  </div>
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

export default FrequentlyAskedQuestions;