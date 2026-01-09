import React from 'react';
import { FaQuoteRight, FaStar } from "react-icons/fa";

const SuccessStories = () => {
    const testimonials = [
        {
            id: 1,
            name: "Toby Muller",
            quote: "Since switching to Pie Pay, we've saved hundreds each month in processing fees. The Clover Flex is so easy to use, and the customer service is top-notch."
        },
        {
            id: 2,
            name: "Declan Martinez",
            quote: "Switching to Pie Pay saved us a ton in processing fees. The terminal is easy to use, and customer support is outstanding."
        }
    ];

    return (
        <section className="w-full bg-[#4686BC] font-outfit py-16 border-b border-white/10 relative overflow-hidden">

            {/* Background Texture - kept subtle */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    {/* 1. COMPACT HEADER (Left Side) */}
                    <div className="lg:w-1/3 pt-4">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-6 bg-white"></span>
                            <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">
                                Client Testimonials
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] mb-6">
                            Success Stories <br /> from Clients.
                        </h2>
                        <div className="text-white/20 text-6xl">
                            <FaQuoteRight />
                        </div>
                    </div>

                    {/* 2. LEAN GRID (Right Side) */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((item) => (
                            <div key={item.id} className="group relative bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col justify-between h-full">

                                {/* Sharp Corner Interaction */}
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-l-[30px] border-t-white border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div>
                                    {/* Stars */}
                                    <div className="flex gap-1 text-[#48A64D] mb-4 text-xs">
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                    </div>

                                    {/* Quote */}
                                    <p className="text-lg text-white font-light leading-relaxed mb-6">
                                        "{item.quote}"
                                    </p>
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/10">
                                    <span className="text-xs font-bold text-white uppercase tracking-widest">
                                        — {item.name}
                                    </span>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SuccessStories;