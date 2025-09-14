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
                            src="https://i.pinimg.com/1200x/8f/41/fb/8f41fbc9b3f7e997a361e3d149939275.jpg"
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
                            Travel Deeper, Discover More
                        </h2>

                        <p className="text-lg text-gray-800 font-roboto font-light leading-relaxed">
                            Envoyage guided tours offer immersive experiences shaped by local insight and elevated ease. From skip-the-line access to iconic landmarks to meaningful moments off the beaten path, every detail is thoughtfully handled—lodging, transport, and expert guides included. Whether you&apos;re traveling solo, with family, or seeking adults-only adventures, your Envoyage advisor will match you with a tour that brings each destination vividly to life.
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
