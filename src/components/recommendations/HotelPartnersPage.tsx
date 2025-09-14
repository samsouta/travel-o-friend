"use client"; // if using Next.js App Router

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface Hotel {
  id: number;
  name: string;
  logo: string;
  description: string;
  category: string;
}

const HotelPartnersPage: React.FC = () => {
  const [filterValue, setFilterValue] = useState<string>("All");
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);

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
  {
    "id": 9,
    "name": "Gran Meliá Hotels & Resorts",
    "logo": "https://www.melia.com/images/logo-gran-melia-hotels-resorts.svg",
    "description": "Gran Meliá Hotels & Resorts evoke the essence of Spanish culture: simple pleasures and an understated elegance. Discover their resorts in Madrid, Tenerife, Palma de Mallorca, Rome, Argentina, and beyond.",
    "category": "Luxury"
  },
  {
    "id": 10,
    "name": "Grand Palladium Hotels & Resorts",
    "logo": "https://www.palladiumhotelgroup.com/themes/custom/phg_theme/logo.svg",
    "description": "Take your all-inclusive luxury beach vacation to the next level with Infinite Indulgence at Grand Palladium Hotels & Resorts in Mexico, Jamaica, and the Dominican Republic.",
    "category": "All-Inclusive"
  },
  {
    "id": 11,
    "name": "Hard Rock Hotels & Resorts",
    "logo": "https://www.hardrockhotels.com/assets/images/header-logo.svg",
    "description": "Vacation like a rock star at Hard Rock Hotels. Turn your vacation into an experience at locations in the heart of vibrant cities, leading tourist destinations, and beautiful beaches. From casinos to the spa, a Hard Rock Hotel vacation will give you the rock star treatment.",
    "category": "Entertainment"
  },
  {
    "id": 12,
    "name": "Hilton All-Inclusive Resorts",
    "logo": "https://www.hilton.com/en/static-assets/assets/svg/hilton-logo-blue.svg",
    "description": "Let Envisaye curate your getaway with luxurious accommodations, attentive service, and gourmet dining at the award winning Hilton All-Inclusive Resorts.",
    "category": "All-Inclusive"
  },
  {
    "id": 13,
    "name": "Hilton Hotels",
    "logo": "https://www.hilton.com/en/static-assets/assets/svg/hilton-logo-blue.svg",
    "description": "Hilton Hotels & Resorts are leaders in hospitality. Travel the world and stay at resorts where you can calm your mind, recharge your body, and return with memories you'll carry with you for a lifetime.",
    "category": "Business"
  },
  {
    "id": 14,
    "name": "Hoteles Xcaret",
    "logo": "https://www.hotelxcaret.com/wp-content/uploads/2021/05/logo_xcaret_hoteles.svg",
    "description": "Hoteles Xcaret's All-Fun Inclusive® is inspired by Mexican traditions, art and culture. Enjoy unlimited access to eight Grupo Xcaret parks, while surrounded by lush jungle trails, idyllic coves, and white sand beaches.",
    "category": "All-Inclusive"
  },
  {
    "id": 15,
    "name": "Hyatt Hotels & Resorts",
    "logo": "https://newsroom.hyatt.com/assets/hyatt_logo.svg",
    "description": "Experience the world's leading destinations at Hyatt Hotels & Resorts. Whether you want to explore the city or relax by the beach, Hyatt Hotels & Resorts offer accommodations for families and adults-only travelers.",
    "category": "Business"
  },
  {
    "id": 16,
    "name": "Hyatt Zilara and Hyatt Ziva",
    "logo": "https://www.resortsbyhyatt.com/wp-content/themes/amresorts/assets/images/logo.svg",
    "description": "The ultimate in luxury has arrived on the stunning shores of Jamaica and Cancun. At the adults-only Hyatt Zilara and all-ages Hyatt Ziva, look for the extraordinary.",
    "category": "All-Inclusive"
  }
]

  useEffect(() => {
    const filtered =
      filterValue === "All"
        ? hotelData
        : hotelData.filter((hotel) => hotel.category === filterValue);
    setFilteredHotels(filtered);
  }, [filterValue]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-blue-900 mb-6">
            Hotel and Resort Partners
          </h1>
          <p className="text-lg text-gray-700 font-roboto font-light max-w-4xl mx-auto leading-relaxed">
            From fun family escapes to refined adults-only hideaways, these
            hotels deliver unparalleled experiences for their guests with upscale
            amenities, impeccable service, and elegant accommodations. Start
            searching for your next personalized hotel experience at these
            hand-selected brands.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex justify-end mb-12">
          <div className="relative">
            <label htmlFor="filter" className="text-sm font-poppins text-gray-600 mr-3">
              Filter Hotels
            </label>
            <div className="relative inline-block">
              <select
                id="filter"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                className="appearance-none font-roboto bg-white border border-blue-200 rounded-lg px-4 py-2 pr-8 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm cursor-pointer"
              >
                <option value="All">All</option>
                <option value="Luxury">Luxury</option>
                <option value="All-Inclusive">All-Inclusive</option>
                <option value="Resort">Resort</option>
                <option value="Business">Business</option>
                <option value="Family">Family</option>
                <option value="Adults-Only">Adults-Only</option>
                <option value="Entertainment">Entertainment</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-600 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredHotels.map((hotel, index) => (
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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 font-poppins text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:scale-105 hover:shadow-xl">
            Explore All Partners
          </button>
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

export default HotelPartnersPage;
