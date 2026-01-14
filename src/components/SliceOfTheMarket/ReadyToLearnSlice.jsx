import React from 'react';
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const ReadyToLearnSlice = () => {
    return (
        <section className="w-full bg-white font-outfit py-24">

            <div className="container mx-auto px-6 md:px-12">

                {/* CTA CARD CONTAINER */}
                {/* Updated width to max-w-6xl */}
                <div className="relative overflow-hidden border border-gray-100 rounded-sm">

                    {/* --- BACKGROUND PATTERN --- */}
                    {/* Adjusted arrow positions for the new layout */}
                    <div className="absolute top-[-20%] right-[5%] text-[#48A64D] opacity-[0.05] text-[300px] font-bold leading-none select-none pointer-events-none rotate-[-15deg]">
                        ↑
                    </div>
                    <div className="absolute bottom-[-20%] left-[10%] text-[#48A64D] opacity-[0.03] text-[250px] font-bold leading-none select-none pointer-events-none rotate-[15deg]">
                        ↑
                    </div>

                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(#051B31 1px, transparent 1px), linear-gradient(90deg, #051B31 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}>
                    </div>

                    {/* --- CONTENT FLEX CONTAINER --- */}
                    {/* Changed to flex-row for Left Text / Right Button layout */}
                    <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">

                        {/* LEFT SIDE: Text Content */}
                        <div className="text-left max-w-3xl">
                            <div className="mb-6">
                                <h2 className="text-3xl md:text-5xl font-bold text-[#051B31] mb-3">
                                    Ready to Learn More?
                                </h2>
                                {/* Underline aligned left */}
                                <div className="w-116 h-1 bg-[#48A64D] rounded-full"></div>
                            </div>

                            <p className="text-gray-600 text-lg font-light leading-relaxed">
                                Take the first step towards growth by scheduling a meeting with us.
                                It's quick, easy, and absolutely no obligation. Let's discuss how we can
                                make things happen for you!
                            </p>
                        </div>

                        {/* RIGHT SIDE: Action Button */}
                        <div className="flex-shrink-0">
                            <button className="group relative inline-flex items-center gap-3 bg-[#051B31] hover:bg-[#48A64D] text-white px-8 py-5 font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden shadow-lg shadow-[#051B31]/10">

                                {/* Icon Box */}
                                <span className="flex items-center justify-center">
                                    <FaCalendarAlt className="mr-3" />
                                    <span>Schedule Meeting</span>
                                </span>

                                {/* Hover Arrow Animation */}
                                <FaArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />

                                {/* Shine Effect */}
                                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            </button>
                        </div>

                    </div>

                    {/* --- TECHNICAL CORNER ACCENTS --- */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#48A64D]"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#48A64D]"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#48A64D]"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#48A64D]"></div>

                </div>
            </div>
        </section>
    );
};

export default ReadyToLearnSlice;