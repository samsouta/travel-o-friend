import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-b from-black/30 to-white py-16 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://ik.imagekit.io/deceuior6/Travel%20O%20friend/IrresistibleOffer_Tile.jpg?updatedAt=1757769923989"
                            alt="Travel Expert"
                            width={800}
                            height={400}
                            priority
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-blue-900 leading-tight">
                            The Perfect Journey, Irresistible Offers
                        </h2>

                        <p className="text-lg text-gray-800 font-roboto font-light leading-relaxed">
                            At Envoyage, we believe extraordinary travel experiences should come with equally exceptional value. That’s why our travel advisors curate the best offers for unforgettable journeys—whether you’re after an all-inclusive beach escape, a cultural deep dive, or something delightfully off the beaten path.

                            With personalized, one-on-one service, planning expertise, and access to limited-time offers, we’ll help you travel better—at a price that makes it even sweeter.
                        </p>

                        <div className="pt-4">
                            <button className="bg-blue-600 text-white font-poppins px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
                                CONNECT WITH TRAVEL ADVISOR
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-10 -z-10 transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-10 -z-10 transform -translate-x-1/2 translate-y-1/2" />
        </section>
    );
};

export default Hero;
