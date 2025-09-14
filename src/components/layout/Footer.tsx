"use client";

import React, { useState, useEffect, ReactNode } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Plane,
  Globe,
  Heart,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";

interface MotionDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

interface FloatingIconProps {
  children: ReactNode;
  delay?: number;
}

interface PulseIconProps {
  children: React.ReactNode;
}

const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`${className} transition-all ease-out duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDuration: `${duration}s` }}
    >
      {children}
    </div>
  );
};

const FloatingIcon: React.FC<FloatingIconProps> = ({ children, delay = 0 }) => {
  return (
    <div
      className="animate-bounce"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: "3s",
      }}
    >
      {children}
    </div>
  );
};

const PulseIcon: React.FC<PulseIconProps> = ({ children }) => {
  return <span className="animate-pulse inline-block">{children}</span>;
};

export default function TravelFooter() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-16 bg-gradient-to-br from-blue-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements ******************************** */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-green-300 rounded-full animate-spin"></div>
      </div>
      {/* Animated Background Elements End ******************************** */}

      {/* Floating Travel Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-1/4 opacity-20">
          <FloatingIcon delay={0}>
            <Plane className="w-8 h-8 text-white transform rotate-45" />
          </FloatingIcon>
        </div>
        <div className="absolute top-24 right-1/4 opacity-20">
          <FloatingIcon delay={1}>
            <Globe className="w-6 h-6 text-yellow-300" />
          </FloatingIcon>
        </div>
        <div className="absolute bottom-32 left-1/3 opacity-20">
          <FloatingIcon delay={2}>
            <MapPin className="w-7 h-7 text-pink-300" />
          </FloatingIcon>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <MotionDiv className="space-y-4" delay={0.1}>
            <div className="flex items-center space-x-2 mb-4">
                 <Image
                  src='https://ik.imagekit.io/deceuior6/PHOTO/315927429_107067755493996_727230065770587137_n-removebg-preview.png'
                  alt='Travel O Friend Logo'
                  width={40}
                  height={40}
                  className='w-[40px] sm:w-[50px]'
                  priority
                />
              <h3 className="text-2xl font-poppins font-bold bg-gradient-to-r from-blue-400 to-blue-100 bg-clip-text text-transparent">
                Travel O Friend
              </h3>
            </div>
            <p className="text-gray-300 font-roboto font-light leading-relaxed">
              Your trusted companion for unforgettable journeys. Discover the
              world with us and create memories that last a lifetime.
            </p>
            <div className="flex items-center space-x-2 text-blue-300">
              <Heart className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-roboto font-medium">Made with love for travelers</span>
            </div>
          </MotionDiv>

          {/* Quick Links */}
          <MotionDiv className="space-y-4" delay={0.2}>
            <h4 className="text-xl font-semibold text-blue-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "Contact Us",
                "Find a Travel Advisor", 
                "Traveler Resources Hub",
                "Our Recommendations",
                "Frequently Asked Questions",
                "Gift Cards",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-300 transition-all duration-300 hover:translate-x-2 inline-block transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Destinations */}
          <MotionDiv className="space-y-4" delay={0.25}>
            <h4 className="text-xl font-semibold text-blue-300 mb-4">
              DESTINATIONS
            </h4>
            <ul className="space-y-3">
              {[
                "USA",
                "Canada",
                "Mexico",
                "Caribbean",
                "Europe",
                "Central America",
                "South America", 
                "South Pacific",
                "Australia",
                "Indian Ocean",
                "Asia",
                "Africa",
                "Middle East",
                "Antarctica"
              ].map((destination, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-300 transition-all duration-300 hover:translate-x-2 inline-block transform"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Services */}
          <MotionDiv className="space-y-4" delay={0.3}>
            <h4 className="text-xl font-semibold text-blue-300 mb-4">
              VACATION TYPES
            </h4>
            <ul className="space-y-3">
              {[
                "Adults Only",
                "All Inclusive", 
                "Beach",
                "Casino",
                "Exotic",
                "Family",
                "Golf & Spa",
                "Honeymoon",
                "Last Minute",
                "Luxury",
                "My Time",
                "Pride",
                "Cruises",
                "Guided Tours",
                "Group Travel"
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-300 transition-all duration-300 hover:translate-x-2 inline-block transform"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Contact Info */}
          <MotionDiv className="space-y-4" delay={0.4}>
            <h4 className="text-xl font-semibold text-blue-300 mb-4">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-blue-300 p-2 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">
                    SS 6/6 , PJ, Malaysia
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="bg-green-600 p-2 rounded-full group-hover:bg-blue-500 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <p className="text-gray-300">+60 123-456-789</p>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="bg-red-600 p-2 rounded-full group-hover:bg-blue-500 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <p className="text-gray-300">support@travelofriend.com</p>
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* Divider */}
        <MotionDiv delay={0.5}>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>
        </MotionDiv>

        {/* Social Links & Newsletter */}
        <MotionDiv
          className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0"
          delay={0.6}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <span className="text-gray-300 font-medium">
              Follow Your Journey:
            </span>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: "hover:bg-blue-600", delay: 0 },
                { icon: Twitter, color: "hover:bg-sky-500", delay: 0.1 },
                { icon: Instagram, color: "hover:bg-pink-600", delay: 0.2 },
                { icon: Youtube, color: "hover:bg-red-600", delay: 0.3 },
              ].map(({ icon: Icon, color, delay }, index) => (
                <div
                  key={index}
                  className={`bg-gray-700 p-3 rounded-full ${color} transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-1`}
                  style={{ transitionDelay: `${delay * 100}ms` }}
                >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <span className="text-gray-300 font-medium whitespace-nowrap">
              Stay Updated:
            </span>
            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-full border border-gray-600 focus:border-yellow-400 focus:outline-none flex-1 sm:w-64 transition-colors duration-300"
              />
              <button className="bg-blue-500 text-white px-6 py-2 rounded-r-full hover:from-blue-100  transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </MotionDiv>

        {/* Bottom Bar */}
        <MotionDiv className="mt-8 pt-6 border-t border-gray-700" delay={0.7}>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Travel O Friend. All rights reserved. | Made with
              <PulseIcon>
                <Heart className="w-4 h-4 text-blue-500 inline mx-1" />
              </PulseIcon>
              for Travel
            </p>
            <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </MotionDiv>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 animate-bounce"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}
