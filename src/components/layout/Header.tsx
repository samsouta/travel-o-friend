"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, PlaneTakeoff, X } from 'lucide-react'
import { motion } from 'framer-motion'
import HeaderDropDown from './HeaderDropDown'
import { navigationLinks } from '@/data/mockData'
import { useRouter } from 'next/navigation'
import TravelExpertFinder from '../ui/TravelExpertFinder'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavigation = (href: string) => {
        router.push(href);
        setIsMobileMenuOpen(false);
    };

    const handleStateSelect = (state: string) => {
        console.log('Selected state:', state);
    };

    const handleDestinationSelect = (destination: string) => {
        console.log('Selected destination:', destination);
    };

    const handleSearch = (searchType: 'nearMe' | 'destination', value: string) => {
        console.log('Search:', searchType, value);
        // Add your search logic here
        setIsModalOpen(false);
    };


    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-white' : 'bg-transparent'}`}>
                {/* pc navbar  */}
                <nav className='container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
                    <Link href='/' className='flex items-center gap-2 cursor-pointer'>
                        <Image
                            src='https://ik.imagekit.io/deceuior6/PHOTO/315927429_107067755493996_727230065770587137_n-removebg-preview.png'
                            alt='Travel O Friend Logo'
                            width={40}
                            height={40}
                            className='w-[40px] sm:w-[50px]'
                            priority
                        />
                        <span className={`text-lg sm:text-xl font-medium font-poppins ${scrolled ? 'text-gray-600' : 'text-white'}`}>Travel O Friend</span>
                    </Link>

                    <motion.div
                        className='hidden lg:flex items-center gap-4 xl:gap-8'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='flex items-center gap-4 xl:gap-6'>
                            {navigationLinks.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className="relative flex items-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.dropdown ? (
                                        <motion.div
                                            whileHover={{ y: -2 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <HeaderDropDown
                                                label={item.title}
                                                onSelect={handleNavigation}
                                                options={item.options || []}
                                                triggerClassName={`${scrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600 transition-colors text-sm xl:text-base flex items-center font-poppins font-medium`}
                                                contentClassName='min-w-[200px] mt-2'
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            whileHover={{ y: -2 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <Link
                                                href={item.href}
                                                className={`${scrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600 font-poppins font-medium transition-all py-2 text-sm xl:text-base inline-flex items-center relative group`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <span className="relative">
                                                    {item.title}
                                                    <motion.span
                                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-width duration-300"
                                                        transition={{ duration: 0.3 }}
                                                        layout
                                                    />
                                                </span>
                                            </Link>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <button
                        className='group hidden lg:inline-flex relative items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-0.5 transition-all duration-300 ease-out text-center text-sm sm:text-base'
                        onClick={() => setIsModalOpen(true)}
                    >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative flex items-center gap-2 font-poppins font-semibold">
                            Find An Advisor
                            <motion.div
                                animate={{
                                    x: [0, 10, 0],
                                    y: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <PlaneTakeoff className="w-6 h-6" />
                            </motion.div>
                        </span>
                    </button>

                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden ${scrolled || isMobileMenuOpen ? 'text-gray-600' : 'text-white'} focus:outline-none `}
                        aria-label='Toggle menu'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            rotate: isMobileMenuOpen ? 180 : 0
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 " />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </motion.button>
                </nav>

                {/* Mobile Menu */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className={`lg:hidden bg-white absolute top-full left-0 right-0 shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                >
                    <div className='container mx-auto px-4 py-4 flex flex-col gap-4'>
                        {navigationLinks.map((link, index) => {
                            return (
                                <motion.div
                                    key={link.id}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={
                                        isMobileMenuOpen
                                            ? { opacity: 1, x: 0 }
                                            : { opacity: 0, x: -50 }
                                    }
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 100,
                                    }}
                                    className="border-b border-gray-100 last:border-b-0"
                                >
                                    {link.dropdown ? (
                                        <div className="relative">
                                            <motion.button
                                                onClick={() => setIsOpen(!isOpen)}
                                                className="w-full flex items-center font-poppins justify-between py-4 px-2 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base font-medium"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {link.title}
                                                <motion.span
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                </motion.span>
                                            </motion.button>

                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                    height: isOpen ? "auto" : 0,
                                                    opacity: isOpen ? 1 : 0
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: "easeInOut"
                                                }}
                                                className="overflow-hidden bg-gray-50"
                                            >
                                                <div className="px-4 py-2 space-y-2">
                                                    {link.options?.map((option) => (
                                                        <motion.div
                                                            key={option.href}
                                                            whileHover={{ scale: 1.02, x: 10 }}
                                                            whileTap={{ scale: 0.98 }}
                                                        >
                                                            <Link
                                                                href={option.href}
                                                                className="block py-2 text-sm font-roboto font-light text-gray-600 hover:text-blue-600 transition-colors"
                                                                onClick={() => {
                                                                    setIsOpen(false);
                                                                    setIsMobileMenuOpen(false);
                                                                }}
                                                            >
                                                                {option?.name}
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>
                                    ) : (
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="block w-full px-2 py-4 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base font-medium relative group"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <span className="relative inline-block">
                                                    {link.title}
                                                    <motion.span
                                                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full"
                                                        transition={{ duration: 0.2 }}
                                                        layout
                                                    />
                                                </span>
                                            </Link>
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                        >
                            <Link
                                href='/contact'
                                className='group lg:hidden relative flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 shadow-lg hover:shadow-blue-500/50 transition-all duration-500 ease-out text-center text-base sm:text-lg w-full'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <motion.span
                                    className="absolute inset-0 w-full h-full bg-white/30"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileHover={{ scale: 1.5, opacity: 0.2 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.span
                                    onClick={() => setIsModalOpen(true)}
                                    className="relative flex items-center gap-3 font-poppins font-semibold"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Find An Advisor
                                    <motion.div
                                        animate={{
                                            x: [0, 10, 0],
                                            y: [0, -5, 0]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <PlaneTakeoff className="w-6 h-6" />
                                    </motion.div>
                                </motion.span>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </header>

            {/* // Model  */}
            <TravelExpertFinder
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onStateSelect={handleStateSelect}
                onDestinationSelect={handleDestinationSelect}
                onSearch={handleSearch}
            />
        </>
    )
}

export default Header