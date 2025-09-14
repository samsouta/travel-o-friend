"use client"
import React from 'react';
import Image from 'next/image';

const TravelerTips = () => {
  const tips = [
    {
      id: 1,
      title: "Travel Checklist",
      description: "Preparing for a relaxing vacation can ironically be stress-inducing. But, being prepared and having a checklist goes a long way. From making sure your passport is valid to remembering to pack your phone charger, here's the ultimate travel checklist to bolster confidence ahead of your trip.",
      image: "https://i.pinimg.com/736x/f8/e5/01/f8e501a52d9c48aa02264f6a659b11b5.jpg",
      buttonText: "Learn More"
    },
    {
      id: 2,
      title: "Last-Minute Packing",
      description: "Putting off packing is almost a travel pastime, but a travel advisor can only help so much—the packing is on you! If you realize you haven't packed the night before a trip, don't panic. You can still travel with confidence with these essential last-minute packing tips.",
      image: "https://i.pinimg.com/736x/a2/69/9f/a2699f7a7d93ae3d933fcec26edc3221.jpg",
      buttonText: "Learn More"
    },
    {
      id: 3,
      title: "Traveling with Kids",
      description: "From point A to point B, traveling with kids can be a chaotic journey. But, it's always worth it. An amazing family experience shouldn't be ignored just because it seems like the most stressful thing you can imagine. There are ways to travel right with little ones.",
      image: "https://i.pinimg.com/736x/cb/79/54/cb7954fd53071d04d39fdb8f751c1ee4.jpg",
      buttonText: "Learn More"
    },
    {
      id: 4,
      title: "Why Use a Travel Advisor",
      description: "With an endless scroll of choices today, expert advice can be just the thing you need to make a decision. Travel advisors are not just selling travel; they're sharing their passion. With expert insights, perks, peace of mind, and more, they bring a human touch to help you see the world better.",
      image: "https://i.pinimg.com/1200x/1a/8d/ec/1a8dec8d87d67b0e4de712ced5228266.jpg",
      buttonText: "Learn More"
    },
    {
      id: 5,
      title: "Foods to Avoid Before a Flight",
      description: "As much as we all love to travel, the flying part isn't always fun—and sometimes it's not fun on the stomach. As it turns out, flying across the sky at several thousand feet in the air isn't natural on the body. But there are ways you can improve your in-flight experience by what you consume beforehand.",
      image: "https://i.pinimg.com/736x/39/ab/6c/39ab6cc18b132ca82d1ac7a1d8ae1b10.jpg",
      buttonText: "Learn More"
    },
    {
      id: 6,
      title: "The Benefits of Booking Last-Minute",
      description: "Ever wake up feeling like you just need a vacation? Who ever said you couldn't just go? Planning ahead may lead to a more robust experience, but there is a thrill to spontaneity that is truly unmatched. Plus, there are some other perks of booking that last-minute getaway that you simply can't plan.",
      image: "https://i.pinimg.com/736x/67/23/a1/6723a13c013b4882914c7fa6ad9fd4d5.jpg",
      buttonText: "Learn More"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-blue-900 mb-4">
          Traveler Tips
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={tip.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-blue-100"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-poppins font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors duration-200">
                  {tip.title}
                </h3>
                
                <p className="text-gray-600 font-roboto font-normal text-sm leading-relaxed mb-6 line-clamp-4">
                  {tip.description}
                </p>

                {/* Learn More Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md hover:shadow-lg">
                  {tip.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1025px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default TravelerTips;