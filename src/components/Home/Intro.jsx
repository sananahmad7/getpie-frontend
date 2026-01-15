import React from 'react';
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

const AboutSection = () => {
    return (
        // Updated bg color to #051B31
        <section className="w-full bg-[#051B31] py-16 font-outfit text-white">
            <div className="container mx-auto px-6 md:px-12">

                {/* TOP BORDER */}
                <div className="w-full h-px bg-white/30 mb-0"></div>

                {/* Main Grid - Height set to 500px (Balanced) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">

                    {/* LEFT COLUMN: Narrative & Headline (Spans 7 cols) */}
                    <div className="lg:col-span-7 border-r border-white/30 border-l border-white/30 p-12 flex flex-col justify-between relative group hover:bg-white/5 transition-colors duration-500">

                        {/* Top Label */}
                        <div className="flex justify-between items-start mb-8">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">
                                01 — The Mission
                            </span>
                            <FaArrowDown className="opacity-50 -rotate-45" size={16} />
                        </div>

                        {/* Main Headline */}
                        <div className="relative z-10">
                            {/* Font size 6xl (Balanced) */}
                            <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-8">
                                A Smarter Way <br />
                                To Process <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48A64D] to-white">Payments.</span>
                            </h2>

                            <div className="w-20 h-1 bg-[#48A64D] mb-8"></div>

                            {/* Font size xl (Standard/Readable) */}
                            <p className="text-xl text-blue-100 font-light leading-relaxed max-w-lg">
                                Payment processing shouldn’t be complicated. We provide infrastructure for small and mid-sized businesses focused on <span className="text-white font-medium">speed</span> and <span className="text-white font-medium">savings</span>.
                            </p>
                        </div>

                        {/* Bottom Action */}
                        <div className="mt-10 flex items-center gap-4">
                            <button className="bg-white text-[#4686BC] cursor-pointer px-8 py-3.5 font-bold text-lg hover:bg-[#48A64D] hover:text-white transition-all duration-300 flex items-center gap-2">
                                Start Now <FaArrowRight size={14} />
                            </button>
                        </div>
                    </div>


                    {/* RIGHT COLUMN: The Stats Grid (Spans 5 cols) */}
                    <div className="lg:col-span-5 flex flex-col">

                        {/* STAT BLOCK 1: Apps */}
                        <div className="flex-1 border-b border-r border-white/30 p-8 flex flex-col justify-center relative overflow-hidden group hover:bg-[#48A64D] transition-colors duration-500 cursor-crosshair">
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <FaArrowRight className="text-white -rotate-45" size={22} />
                            </div>
                            {/* Number size 7xl (Balanced impact) */}
                            <h3 className="text-6xl md:text-7xl font-bold mb-2 tracking-tighter group-hover:translate-x-2 transition-transform duration-300">
                                100<span className="text-4xl align-top opacity-50">+</span>
                            </h3>
                            <p className="text-sm font-bold uppercase tracking-[0.15em] opacity-80 mt-1 border-t border-white/30 pt-4 inline-block w-full">
                                Business Apps
                            </p>
                        </div>

                        {/* STAT BLOCK 2: Integrations */}
                        <div className="flex-1 border-b border-r border-white/30 p-8 flex flex-col justify-center relative overflow-hidden group hover:bg-white hover:text-[#4686BC] transition-colors duration-500 cursor-crosshair">
                            <h3 className="text-6xl md:text-7xl font-bold mb-2 tracking-tighter group-hover:translate-x-2 transition-transform duration-300">
                                20<span className="text-4xl align-top opacity-50">+</span>
                            </h3>
                            <p className="text-sm font-bold uppercase tracking-[0.15em] opacity-80 mt-1 border-t border-current pt-4 inline-block w-full">
                                POS Integrations
                            </p>
                        </div>

                        {/* STAT BLOCK 3: Years */}
                        <div className="flex-1 border-r border-b lg:border-b-0 border-white/30 p-8 flex flex-col justify-center relative overflow-hidden group hover:bg-[#1a3b5c] transition-colors duration-500 cursor-crosshair">
                            <h3 className="text-6xl md:text-7xl font-bold mb-2 tracking-tighter group-hover:translate-x-2 transition-transform duration-300">
                                20<span className="text-4xl align-top opacity-50">+</span>
                            </h3>
                            <p className="text-sm font-bold uppercase tracking-[0.15em] opacity-80 mt-1 border-t border-white/30 pt-4 inline-block w-full">
                                Years Experience
                            </p>
                        </div>

                    </div>
                </div>

                {/* BOTTOM BORDER */}
                <div className="w-full h-px bg-white/30 mt-0"></div>

                {/* Footer Marquee Text */}
                <div className="py-5 flex justify-between items-center text-xs font-mono text-white/50 uppercase tracking-widest px-1">
                    <span>GetPiePay Systems Inc.</span>
                    <span>In-Store • Online • Mobile</span>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;