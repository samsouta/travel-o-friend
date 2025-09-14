"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    GoogleMap,
    Marker,
    useJsApiLoader,
} from "@react-google-maps/api";
import { ChevronDown, MapPin, Plus, Minus, Info } from "lucide-react";

type CountryStatus =
    | "No Visa Required"
    | "Visa on Arrival"
    | "eVisa or eTA required"
    | "Paper Visa Required"
    | "Entry Restricted";

const TravelUpdates = () => {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [mapZoom, setMapZoom] = useState(2);
    const [mapCenter, setMapCenter] = useState({ lat: 20, lng: 0 });

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    });

    const countries: Record<
        CountryStatus,
        { count: number; color: string; description: string }
    > = {
        "No Visa Required": {
            count: 129,
            color: "#10B981",
            description: "You don't need a visa to travel to this destination.",
        },
        "Visa on Arrival": {
            count: 24,
            color: "#84CC16",
            description: "Get your visa at the airport when you arrive.",
        },
        "eVisa or eTA required": {
            count: 41,
            color: "#F59E0B",
            description: "You need an online eVisa before traveling.",
        },
        "Paper Visa Required": {
            count: 17,
            color: "#EF4444",
            description: "You must apply for a visa at the embassy.",
        },
        "Entry Restricted": {
            count: 1,
            color: "#DC2626",
            description: "Travel is restricted to specific cases only.",
        },
    };

    const countryData: { name: string; lat: number; lng: number; status: CountryStatus }[] = [
        { name: "Canada", lat: 56, lng: -106, status: "No Visa Required" },
        { name: "United States", lat: 37, lng: -95, status: "No Visa Required" },
        { name: "Brazil", lat: -14, lng: -51, status: "No Visa Required" },
        { name: "United Kingdom", lat: 55, lng: -3, status: "No Visa Required" },
        { name: "France", lat: 46, lng: 2, status: "No Visa Required" },
        { name: "Germany", lat: 51, lng: 10, status: "No Visa Required" },
        { name: "Russia", lat: 61, lng: 105, status: "Paper Visa Required" },
        { name: "Egypt", lat: 26, lng: 30, status: "Visa on Arrival" },
        { name: "South Africa", lat: -30, lng: 25, status: "No Visa Required" },
        { name: "Australia", lat: -25, lng: 133, status: "eVisa or eTA required" },
        { name: "New Zealand", lat: -40, lng: 174, status: "No Visa Required" },
    ];

    const getCountryColor = (status: string) =>
        status in countries ? (countries as any)[status].color : "#94A3B8";

    return (
        <div className="min-h-screen p-4 md:p-6 lg:p-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto"
            >
                {/* Header */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8"
                >
                    Live Travel Updates
                </motion.h1>

                {/* Controls */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-4 mb-6 justify-center items-center"
                >
                    <div className="flex items-center gap-2 bg-white rounded-lg shadow-md px-4 py-2 border border-blue-200">
                        <MapPin className="text-blue-600" size={18} />
                        <span className="text-sm text-gray-600">Passport:</span>
                        <select className="border-none outline-none text-blue-900 font-medium bg-transparent">
                            <option>United States</option>
                        </select>
                        <ChevronDown className="text-blue-600" size={16} />
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">Covid-19 Vaccinated?</span>
                        <Info className="text-blue-600" size={16} />
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">No</span>
                            <div className="w-10 h-6 bg-blue-600 rounded-full p-1 cursor-pointer">
                                <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                            </div>
                            <span className="text-sm font-medium text-blue-900">Yes</span>
                        </div>
                    </div>
                </motion.div>

                {/* Map Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative bg-white rounded-xl shadow-xl overflow-hidden mb-6"
                >
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{ width: "100%", height: "500px" }}
                            center={mapCenter}
                            zoom={mapZoom}
                            options={{ disableDefaultUI: true }}
                        >
                            {countryData.map((country) => (
                                <Marker
                                    key={country.name}
                                    position={{ lat: country.lat, lng: country.lng }}
                                    icon={{
                                        path: google.maps.SymbolPath.CIRCLE,
                                        scale: 8,
                                        fillColor: getCountryColor(country.status),
                                        fillOpacity: 1,
                                        strokeWeight: 1,
                                        strokeColor: "#fff",
                                    }}
                                    onClick={() => {
                                        setSelectedCountry(country.name);
                                        setMapCenter({ lat: country.lat, lng: country.lng });
                                    }}
                                />
                            ))}

                            {/* Custom Info Popup */}
                            <AnimatePresence>
                                {selectedCountry && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="absolute top-1/4 right-8 bg-white rounded-lg shadow-xl p-4 max-w-xs z-10"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-blue-900">{selectedCountry}</h3>
                                            <button
                                                onClick={() => setSelectedCountry(null)}
                                                className="text-gray-400 hover:text-gray-600"
                                            >
                                                ×
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-3">
                                            {
                                                countries[
                                                    countryData.find((c) => c.name === selectedCountry)!.status
                                                ].description
                                            }
                                        </p>

                                        <button className="text-blue-600 text-sm underline hover:text-blue-800">
                                            More details
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </GoogleMap>
                    ) : (
                        <p className="text-center py-20">Loading map...</p>
                    )}

                    {/* Zoom Controls */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                        <button
                            onClick={() => setMapZoom((prev) => Math.min(prev + 1, 10))}
                            className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors"
                        >
                            <Plus size={16} className="text-blue-600" />
                        </button>
                        <button
                            onClick={() => setMapZoom((prev) => Math.max(prev - 1, 1))}
                            className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors"
                        >
                            <Minus size={16} className="text-blue-600" />
                        </button>
                    </div>
                </motion.div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-xl shadow-xl p-6"
                >
                    <h2 className="text-xl font-bold text-blue-900 mb-4">Map legend</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {Object.entries(countries).map(([status, data], index) => (
                            <motion.div
                                key={status}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="flex flex-col p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div
                                        className="w-6 h-6 rounded"
                                        style={{ backgroundColor: data.color }}
                                    ></div>
                                    <span className="font-bold text-2xl text-gray-900">
                                        {data.count}
                                    </span>
                                </div>
                                <h3 className="font-medium text-blue-900 mb-2">{status}</h3>
                                <p className="text-sm text-gray-600">{data.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-6"
                >
                    <span className="text-sm text-gray-500">powered by </span>
                    <span className="text-sm font-medium text-blue-600">Google Maps</span>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TravelUpdates;
