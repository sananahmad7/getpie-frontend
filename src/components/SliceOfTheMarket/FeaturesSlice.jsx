import React from 'react';
import { FaNetworkWired, FaFilter, FaChartPie, FaArrowRight } from "react-icons/fa";

const FeaturesSlice = () => {

    const features = [
        {
            id: "01",
            title: "Local Networking",
            description: "Connect with high-value businesses in your area through our verified local node system.",
            icon: FaNetworkWired,
        },
        {
            id: "02",
            title: "Lead Generation",
            description: "Turn passive traffic into active leads using our automated market-slicing algorithms.",
            icon: FaFilter,
        },
        {
            id: "03",
            title: "Growth Analytics",
            description: "Visualize your market dominance with real-time data and expansion tracking.",
            icon: FaChartPie,
        }
    ];

    return (
        // Reduced vertical padding (py-16 instead of py-24)
        <section className="w-full bg-white font-outfit py-16">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header - More compact margin (mb-10) */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#051B31] mb-2">
                            Your Slice of the Market.
                        </h2>
                        <p className="text-gray-500 text-base">
                            Three steps to transform your local presence.
                        </p>
                    </div>
                    {/* Technical decorative element */}
                    <div className="hidden md:flex items-center gap-2 mb-1">
                        <span className="h-1 w-1 bg-[#4686BC]"></span>
                        <span className="h-1 w-8 bg-[#4686BC]"></span>
                        <span className="h-1 w-1 bg-[#48A64D]"></span>
                    </div>
                </div>

                {/* The Grid - Full width preserved */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-gray-200">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            // Reduced internal padding (p-8 instead of p-10)
                            className="group relative border-r border-b border-t border-gray-200 bg-white p-6 md:p-8 h-full transition-all duration-300 hover:border-[#4686BC] hover:z-10"
                        >
                            {/* 1. Watermark Number - Scaled down slightly */}
                            <div className="absolute top-2 right-4 text-6xl font-bold text-gray-50 opacity-[0.05] group-hover:text-[#4686BC] group-hover:opacity-[0.05] transition-colors duration-500 select-none">
                                {feature.id}
                            </div>

                            {/* 2. Icon Box - Compact (w-12 h-12) */}
                            {/* Default: Green. Hover: Blue. */}
                            <div className="relative z-10 w-12 h-12 border border-[#48A64D] bg-[#48A64D] flex items-center justify-center mb-6 group-hover:bg-[#4686BC] group-hover:border-[#4686BC] transition-colors duration-300">
                                <feature.icon size={20} className="text-white transition-colors duration-300" />
                            </div>

                            {/* 3. Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-[#051B31] mb-3 group-hover:text-[#4686BC] transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                {/* Added padding bottom to prevent overlap with the absolute button */}
                                <p className="text-gray-500 text-sm leading-relaxed mb-10">
                                    {feature.description}
                                </p>
                            </div>

                            {/* 4. Bottom Action Line - Adjusted position for tighter card */}
                            <div className="absolute bottom-6 left-6 md:left-8 flex items-center gap-2 text-xs font-bold text-[#051B31] uppercase tracking-wider group-hover:text-[#48A64D] transition-colors duration-300 cursor-pointer">
                                <span>Learn More</span>
                                <FaArrowRight size={10} />
                            </div>

                            {/* Hover Top Accent Bar */}
                            <div className="absolute top-0 left-0 w-0 h-1 bg-[#48A64D] group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturesSlice;