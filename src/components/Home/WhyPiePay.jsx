import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';



const WhyPiePay = () => {
    // Track active panel (default to middle one for visual balance, or first)
    const [active, setActive] = useState('02');

    const features = [
        {
            id: "01",
            title: "Affordable and Transparent Pricing",
            text: "With our PiePay Payment Solutions, we focus on providing transparent, fair pricing. We aim to help you save money on processing fees with competitive rates and no hidden costs.",
            img: "/pricing.webp"
        },
        {
            id: "02",
            title: "Flexible, High-Tech POS Systems",
            text: "Whether you run a café, a retail store, or an online shop, our range of Clover and Pay Anywhere devices adapt to your business needs, offering everything from mobile payments to countertop solutions.",
            img: "/pos.webp"
        },
        {
            id: "03",
            title: "Built to Grow Your Business",
            text: "Access business insights, track sales, and manage inventory from anywhere with our cloud-based software. From customer loyalty programs to recurring billing, GetPiePay has all the tools you need to scale.",
            img: "/growth.webp"
        }
    ];

    return (
        // INCREASED PADDING: py-16 -> py-24
        <section className="w-full py-24 bg-white font-outfit border-b border-gray-100">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
                    <div>
                        <span className="text-[#4686BC] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                            The Advantage
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight leading-[0.95]">
                            Why GetPiePay?
                        </h2>
                    </div>
                    <p className="max-w-md text-gray-500 text-xl font-light leading-relaxed text-right md:text-left">
                        Experience the payment infrastructure designed for the modern economy.
                    </p>
                </div>

                {/* The Horizontal Accordion Container */}
                <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] gap-2 lg:gap-0">

                    {features.map((item) => {
                        const isActive = active === item.id;

                        return (
                            <div
                                key={item.id}
                                onMouseEnter={() => setActive(item.id)}
                                className={`
                                    relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-default
                                    ${isActive ? 'lg:flex-[3]' : 'lg:flex-[1]'}
                                    border border-gray-100 lg:border-l-0 first:lg:border-l
                                    flex flex-col justify-between p-8 group
                                `}
                            >
                                {/* --- BACKGROUND IMAGE & OVERLAY --- */}
                                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
                                    {/* Image */}
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />

                                    {/* Overlay Gradient: Stronger at bottom for text readability */}
                                    {/* Active State Overlay (Darker to make white text pop) */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-[#051B31] via-[#051B31]/80 to-transparent ${isActive ? 'opacity-90' : 'opacity-60 group-hover:opacity-80'}`}></div>
                                </div>

                                {/* --- CONTENT (Z-Index to sit above image) --- */}

                                {/* 1. Top Identifier */}
                                <div className="relative z-10 flex justify-between items-start w-full">
                                    <span className={`text-xl font-mono font-bold transition-colors duration-300 ${isActive ? 'text-[#4686BC]' : 'text-white/60'}`}>
                                        {item.id}
                                    </span>

                                    {/* Icon indicator */}
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300
                                        ${isActive ? 'bg-[#4686BC] border-[#4686BC] text-white rotate-0' : 'border-white/30 text-white/60 -rotate-90'}`}>
                                        <FaArrowRight size={12} />
                                    </div>
                                </div>

                                {/* 2. Content Area */}
                                <div className="relative z-10 mt-8 lg:mt-0">

                                    {/* Vertical Title (Visible when collapsed on Desktop) */}
                                    <div className={`
                                        hidden lg:block absolute bottom-0 left-0 origin-bottom-left -rotate-90 translate-x-8 w-[400px]
                                        transition-opacity duration-300
                                        ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                                    `}>
                                        <h3 className="text-2xl font-bold text-white/80 whitespace-nowrap tracking-wide">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Main Content (Visible when active) */}
                                    <div className={`
                                        transition-all duration-500 transform
                                        ${isActive ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-4 lg:absolute lg:bottom-0'}
                                    `}>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                                            {item.title}
                                        </h3>


                                        <p className="text-gray-200 text-lg leading-relaxed max-w-xl font-light drop-shadow-sm">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default WhyPiePay;