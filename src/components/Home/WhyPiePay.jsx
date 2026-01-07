import React, { useState } from 'react';
import { FaPlus, FaMinus, FaArrowRight } from 'react-icons/fa';

const WhyPiePay = () => {
    // Track active panel (default to middle one for visual balance, or first)
    const [active, setActive] = useState('02');

    const features = [
        {
            id: "01",
            title: "Affordable and Transparent Pricing",
            text: "With our PiePay Payment Solutions, we focus on providing transparent, fair pricing. We aim to help you save money on processing fees with competitive rates and no hidden costs. This allows your business to thrive without worrying about surprise fees eating into your profits."
        },
        {
            id: "02",
            title: "Flexible, High-Tech POS Systems",
            text: "Whether you run a café, a retail store, or an online shop, our range of Clover and Pay Anywhere devices adapt to your business needs, offering everything from mobile payments to countertop solutions. Perfect for today’s fast-moving business environment."
        },
        {
            id: "03",
            title: "Built to Grow Your Business",
            text: "Access business insights, track sales, and manage inventory from anywhere with our cloud-based software. From customer loyalty programs to recurring billing, GetPiePay has all the tools you need to scale."
        }
    ];

    return (
        <section className="w-full py-16 bg-white font-outfit border-b border-gray-100">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header - Aligned with AboutSection aesthetics */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
                    <div>
                        <span className="text-[#4686BC] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                            The Advantage
                        </span>
                        {/* Matched to AboutSection: text-5xl md:text-6xl */}
                        <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight leading-[0.95]">
                            Why GetPiePay?
                        </h2>
                    </div>
                    {/* Matched to AboutSection: text-xl (Intro size) */}
                    <p className="max-w-md text-gray-500 text-xl font-light leading-relaxed text-right md:text-left">
                        Experience the payment infrastructure designed for the modern economy.
                    </p>
                </div>

                {/* The Horizontal Accordion Container - Height fixed to 500px to match */}
                <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] gap-2 lg:gap-0">

                    {features.map((item) => {
                        const isActive = active === item.id;

                        return (
                            <div
                                key={item.id}
                                onMouseEnter={() => setActive(item.id)}
                                className={`
                                    relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-default
                                    ${isActive ? 'lg:flex-[3] bg-gray-50' : 'lg:flex-[1] bg-white hover:bg-gray-50'}
                                    border border-gray-100 lg:border-l-0 first:lg:border-l
                                    flex flex-col justify-between p-8 group
                                `}
                            >

                                {/* 1. Top Identifier */}
                                <div className="flex justify-between items-start w-full">
                                    <span className={`text-xl font-mono font-bold transition-colors duration-300 ${isActive ? 'text-[#4686BC]' : 'text-gray-300'}`}>
                                        {item.id}
                                    </span>

                                    {/* Icon indicator for active state */}
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300
                                        ${isActive ? 'bg-[#4686BC] border-[#4686BC] text-white rotate-0' : 'border-gray-200 text-gray-300 -rotate-90'}`}>
                                        <FaArrowRight size={12} />
                                    </div>
                                </div>

                                {/* 2. Content Area */}
                                <div className="relative mt-8 lg:mt-0 z-10">

                                    {/* Vertical Title (Visible when collapsed on Desktop) */}
                                    <div className={`
                                        hidden lg:block absolute bottom-0 left-0 origin-bottom-left -rotate-90 translate-x-8 w-[400px]
                                        transition-opacity duration-300
                                        ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                                    `}>
                                        <h3 className="text-2xl font-bold text-gray-400 whitespace-nowrap">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Main Content (Visible when active) */}
                                    <div className={`
                                        transition-all duration-500 transform
                                        ${isActive ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-4 lg:absolute lg:bottom-0'}
                                    `}>
                                        {/* Matched Title Size */}
                                        <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                                            {item.title}
                                        </h3>

                                        {/* Decorative Line - Matched w-20 */}
                                        <div className="w-20 h-1 bg-[#4686BC] mb-6"></div>

                                        {/* Matched Body Text Size: text-lg */}
                                        <p className="text-gray-600 text-lg leading-relaxed max-w-xl font-light">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>

                                {/* Background Decor (Only visible on active) */}
                                {isActive && (
                                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#4686BC]/5 rounded-full blur-3xl pointer-events-none"></div>
                                )}
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default WhyPiePay;