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
        // Using your local asset path
        imageSrc: "/src/assets/clover.png",
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
        imageSrc: "src/assets/cloverstation.avif",
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
        imageSrc: "src/assets/devices.avif",
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
        imageSrc: "src/assets/unionpos.avif",
    }
];

const FeaturedItems = () => {
    const [activeTabId, setActiveTabId] = useState("clover-flex");
    const activeContent = products.find((item) => item.id === activeTabId) || products[0];

    return (
        <section className="w-full py-24 bg-white font-outfit border-b border-gray-100">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="mb-12 max-w-3xl">
                    <span className="text-[#4686BC] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Hardware & Software
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[0.95] mb-6">
                        Featured Products
                    </h2>
                    <p className="text-xl text-gray-500 font-light">
                        Select a device below to see how we power your transactions.
                    </p>
                </div>

                {/* 1. TABS NAVIGATION */}
                <div className="flex flex-wrap gap-3 mb-10 border-b border-gray-100 pb-1">
                    {products.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTabId(item.id)}
                            className={`
                                px-6 py-4 rounded-t-lg font-bold text-sm md:text-base transition-all duration-300 border-t-2 border-x-2 border-b-0 flex items-center gap-2
                                ${activeTabId === item.id
                                    ? "bg-[#4686BC] text-white border-[#4686BC] shadow-lg scale-105 mb-[-2px] pb-5 z-10" // Active Styles
                                    : "bg-gray-50 text-gray-400 border-gray-100 hover:bg-white hover:border-[#4686BC] hover:text-[#4686BC] mb-0" // Inactive Styles
                                }
                            `}
                        >
                            {item.icon}
                            {item.buttonLabel}
                        </button>
                    ))}
                </div>

                {/* 2. CONTENT PANEL (Split Layout) */}
                <div className="bg-gray-50 rounded-b-2xl rounded-tr-2xl p-6 md:p-12 border border-gray-100 min-h-[500px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                        {/* LEFT COLUMN: Text Content (Span 7) */}
                        <div className="lg:col-span-7 order-2 lg:order-1">
                            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 pl-4 border-l-4 border-[#48A64D]">
                                {activeContent.title}
                            </h3>

                            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                                {activeContent.description}
                            </p>

                            {/* Feature List */}
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                                    Key Features
                                </h4>
                                <ul className="grid grid-cols-1 gap-3">
                                    {activeContent.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm font-bold text-gray-700">
                                            <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-blue-50 text-[#4686BC]">
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
                            <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                                {/* Image Tag */}
                                <img
                                    src={activeContent.imageSrc}
                                    alt={activeContent.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Gradient Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4686BC]/20 to-transparent pointer-events-none"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                    <span className="text-xs font-bold text-[#4686BC] uppercase tracking-wider">
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