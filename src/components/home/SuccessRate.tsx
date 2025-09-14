import React from 'react';
import { Plane, Lock, Laptop, Shield } from 'lucide-react';

const SuccessRate = () => {
  const features = [
    {
      icon: <Plane className="w-12 h-12 text-blue-400" />,
      title: "Embrace Effortless Travel",
      description: "You bring your inspiration; we bring it to life."
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-400" />,
      title: "Unlock Limitless Possibilities",
      description: "Access exclusive benefits and expert knowledge."
    },
    {
      icon: <Laptop className="w-12 h-12 text-blue-400" />,
      title: "Treasure Tailored Trips",
      description: "Personalized experiences aligned with your unique travel aspirations."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: "Journey with Confidence",
      description: "Seamless travel, even when the unexpected occurs."
    }
  ];

  return (
    <div className=" py-28 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl duration-300 text-center group hover:scale-105 transform transition-transform"
            >
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-800 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessRate;