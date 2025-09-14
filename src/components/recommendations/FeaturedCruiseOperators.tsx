"use client"; // if using Next.js App Router

import React from "react";
import Image from "next/image";

interface Hotel {
    id: number;
    name: string;
    logo: string;
    description: string;
    category: string;
}

const FeaturedCruiseOperators: React.FC = () => {

    const hotelData: Hotel[] = [
        {
            "id": 1,
            "name": "Andaz",
            "logo": "https://i.pinimg.com/736x/7a/09/ac/7a09acb86f896087346aca9292a11196.jpg",
            "description": "Andaz Hotels are boutique luxury hotels in Asia, Europe, Latin America and North America. They offer a fresh and stimulating environment in each hotel, with the food and atmosphere inspired by the local culture.",
            "category": "Luxury"
        },
        {
            "id": 2,
            "name": "Aqua Aston Hotels",
            "logo": "https://i.pinimg.com/736x/56/18/89/56188929b4310ce9ab0f1cd9af932279.jpg",
            "description": "Whether you're skiing the mountains of Tahoe or basking on the beaches of Hawaii, Aqua-Aston Hotels offer unique and sustainable travel experiences by the mountains and sea for diverse groups, including families, couples, and LGBTQ travelers.",
            "category": "Resort"
        },
        {
            "id": 3,
            "name": "Atlantis Paradise Island",
            "logo": "https://i.pinimg.com/736x/2c/f9/05/2cf9053eb8135c5389aef0de3b5afcb7.jpg",
            "description": "Experience the tropical atmosphere of the Bahamas, with Atlantis Paradise Island. From a billion places to dine to a 141-acre waterscape of pools, you'll love staying with Atlantis.",
            "category": "Resort"
        },
        {
            "id": 4,
            "name": "Beaches Resorts",
            "logo": "https://i.pinimg.com/1200x/04/ed/e3/04ede3803bd06de9aa06876a55f9493e.jpg",
            "description": "All Inclusive Beaches Resorts provides a truly amazing tropical getaway in Ocho Rios, Negril, and Turks & Caicos.",
            "category": "All-Inclusive"
        },
        {
            "id": 5,
            "name": "Blue Diamond Resorts",
            "logo": "https://i.pinimg.com/474x/c6/5c/b1/c65cb1bd3a871c7c8973993fc1acdad6.jpg",
            "description": "Discover Caribbean getaways with Blue Diamond Hotels. Feel the exhilarating moments of pure relaxation on a vacation getaway of your dreams at our luxurious Blue Diamond Resorts, where a new generation of upscale & modern All-Inclusive resorts are ready for you to experience.",
            "category": "All-Inclusive"
        },
        {
            "id": 6,
            "name": "Breathless Resorts & Spas",
            "logo": "https://i.pinimg.com/1200x/3c/98/8b/3c988bf5cfc5978c727c19bc6e9e4aa7.jpg",
            "description": "Luxury accommodations, delicious food, hours of dried cocktails, and parties that last the night await you at Breathless Resorts & Spas®. Breathless Resorts & Spas® are boutique adults-only resorts in Mexico, the Dominican Republic, and Jamaica.",
            "category": "Adults-Only"
        },
        {
            "id": 7,
            "name": "Dreams Resorts & Spas",
            "logo": "https://i.pinimg.com/1200x/15/38/d7/1538d7bdb962b05715369d9e204c7a11.jpg",
            "description": "Dreams® Resorts & Spas offer vacations for both families and couples. Bask in the sunshine on a beach in Mexico, the Dominican Republic, Costa Rica, Panama, or Puerto Rico. With Envisaye by your side, get more out of your spa and luxury vacation.",
            "category": "Family"
        },
        {
            "id": 8,
            "name": "Fairmont Hotels & Resorts",
            "logo": "https://group.accor.com/-/media/images/brands/logos/fairmont_logo.svg",
            "description": "Visit the world's most sought-after destinations with Atlantis Paradise Hotels & Resorts. Located near some of the world's most spectacular natural wonders and leading cultural sites, Fairmont Hotels & Resorts combine the best of luxury accommodations and unforgettable hospitality.",
            "category": "Luxury"
        },
    ]



    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-poppins font-bold text-blue-900 mb-6">
                        Featured Cruise Operators
                    </h1>
                    <p className="text-lg text-gray-700 font-roboto font-light max-w-4xl mx-auto leading-relaxed">
                        These partners represent the best in cruise experiences with luxury accommodations, exhilarating activities, and unrivaled entertainment. Each partner impresses with exquisite and unique experiences, and our travel advisors will match you with the cruise line that fits your sailing style. Explore the robust listing of cruise partners below and contact your travel advisor to start planning your next voyage.
                    </p>
                </div>

                {/* Hotel Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {hotelData.map((hotel, index) => (
                        <div
                            key={hotel.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100 hover:scale-105 hover:-translate-y-2 transform"
                            style={{
                                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                            }}
                        >
                            {/* Hotel Logo */}
                            <div className="h-32 bg-gradient-to-r from-blue-50 to-white flex items-center justify-center p-6">
                                <div className="relative w-full h-full bg-white rounded-lg flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={hotel.logo}
                                        alt={`${hotel.name} logo`}
                                        width={160}
                                        height={80}
                                        className="object-contain p-2"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = "none";
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Hotel Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">
                                    {hotel.name}
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed mb-4"
                                    style={{
                                        display: "-webkit-box",
                                        WebkitLineClamp: 6,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }}
                                >
                                    {hotel.description}
                                </p>
                                <div className="mt-4">
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                                        {hotel.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
        </div>
    );
};

export default FeaturedCruiseOperators;
