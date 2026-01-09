import React, { useState } from 'react';
import { FaCheck, FaMobileAlt, FaDesktop, FaCreditCard, FaChartLine } from "react-icons/fa";

// 1. Data Object (Content matches source image exactly)
const products = [
    {
        id: "clover-flex",
        title: "Clover Flex",
        buttonLabel: "Mobile POS",
        icon: <FaMobileAlt />,
        // Text Source:
        description: "Compact and powerful, the Clover Flex is your on-the-go POS system. With the ability to process swipes, dips, and mobile payments, it fits perfectly in fast-paced business environments.",
        features: [
            "Process swipes, dips, and mobile payments",
            "Compact handheld design",
            "Perfect for fast-paced environments"
        ],
        imageSrc: "/clover.png",
    },
    {
        id: "clover-station",
        title: "Clover Station",
        buttonLabel: "Countertop Solution",
        icon: <FaDesktop />,
        // Text Source:
        description: "Need a countertop solution? Clover Station is the most powerful POS we offer, featuring a large touchscreen, encrypted swiper, and robust features for high-volume merchants.",
        features: [
            "Large touchscreen display",
            "Encrypted swiper security",
            "Robust high-volume features"
        ],
        imageSrc: "/cloverstation.avif",
    },
    {
        id: "payanywhere",
        title: "PayAnywhere Devices",
        buttonLabel: "Versatile Terminals",
        icon: <FaCreditCard />,
        // Text Source:
        description: "The PayAnywhere terminals are perfect for businesses on the move. From the Smart Terminal Mini to the Smart POS+, these devices ensure you never miss a sale.",
        features: [
            "Smart Terminal Mini & Smart POS+",
            "Perfect for businesses on the move",
            "Never miss a sale reliability"
        ],
        imageSrc: "/devices.avif",
    },
    {
        id: "union-pos",
        title: "Union POS",
        buttonLabel: "High Volume",
        icon: <FaChartLine />,
        // Text Source:
        description: "The only point of sale built exclusively for high volume businesses. Manage orders, sales, and payments in one place with powerful cloud-based software, transparent payment processing, and plenty more under the hood.",
        features: [
            "Built exclusively for high volume",
            "Powerful cloud-based software",
            "Transparent payment processing"
        ],
        imageSrc: "/unionpos.avif",
    }
];

const FeaturedItems = () => {
    const [activeTabId, setActiveTabId] = useState("clover-flex");
    const activeContent = products.find((item) => item.id === activeTabId) || products[0];

    return (
        <section className="w-full py-24 bg-[#4686BC] font-outfit relative overflow-hidden">

            {/* BACKGROUND GLOW EFFECTS (To make the glass card visible) */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#48A64D]/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <div className="mb-12 max-w-3xl">
                    <span className="text-[#a8e6a8] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Hardware & Software
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[0.95] mb-6">
                        Featured Products
                    </h2>
                    <p className="text-xl text-blue-100 font-light">
                        Select a device below to see how we power your transactions.
                    </p>
                </div>

                {/* 1. GLASS TABS NAVIGATION */}
                <div className="flex flex-wrap gap-3 mb-8 border-b border-white/10 pb-1">
                    {products.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTabId(item.id)}
                            className={`
                                px-6 py-4 rounded-t-xl font-bold cursor-pointer text-sm md:text-base transition-all duration-300 border-t border-x border-b-0 flex items-center gap-2 backdrop-blur-md
                                ${activeTabId === item.id
                                    ? "bg-white/20 text-white border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-105 mb-[-1px] pb-5 z-20" // Active Glass
                                    : "bg-white/5 text-blue-200 border-white/5 hover:bg-white/10 hover:text-white mb-0" // Inactive Glass
                                }
                            `}
                        >
                            {item.icon}
                            {item.buttonLabel}
                        </button>
                    ))}
                </div>

                {/* 2. INNER COMPONENT (The Glass Card) */}
                {/* Instead of solid white, we use bg-white/10 with backdrop-blur */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-b-3xl rounded-tr-3xl p-6 md:p-12 shadow-2xl min-h-[500px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                        {/* LEFT COLUMN: Text Content (Span 7) */}
                        <div className="lg:col-span-7 order-2 lg:order-1">

                            {/* Title with Glowing Accent Border */}
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 pl-4 border-l-4 border-[#48A64D] drop-shadow-md">
                                {activeContent.title}
                            </h3>

                            <p className="text-lg text-blue-50 leading-relaxed mb-8 font-light">
                                {activeContent.description}
                            </p>

                            {/* Feature List - Darker translucent box for contrast */}
                            <div className="bg-black/20 p-6 rounded-2xl border border-white/5 shadow-inner">
                                <h4 className="font-bold text-blue-200 text-xs uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                                    Key Features
                                </h4>
                                <ul className="grid grid-cols-1 gap-3">
                                    {activeContent.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm font-bold text-white">
                                            <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-[#48A64D] text-white shadow-lg">
                                                <FaCheck size={10} />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Image (Span 5) */}
                        <div className="lg:col-span-5 order-1 lg:order-2 w-full h-full flex items-center justify-center">
                            {/* Image Container with White Border to separate it from the blue glass */}
                            <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 group transform hover:rotate-1 transition-all duration-500">
                                <img
                                    src={activeContent.imageSrc}
                                    alt={activeContent.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Inner Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4686BC]/40 to-transparent pointer-events-none"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-4 left-4 bg-[#4686BC] px-4 py-2 rounded-lg shadow-lg border border-white/20">
                                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                                        Available Now
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturedItems;