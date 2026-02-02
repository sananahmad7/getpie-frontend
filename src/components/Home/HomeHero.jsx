import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const HomeHero = () => {
    const navigate = useNavigate(); return (
        <section className="relative w-full py-15 lg:pt-30 lg:pb-15 border  bg-white font-outfit overflow-hidden flex items-center">

            {/* 1. Background Geometry (The "Slash" Effect) */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                {/* Large light blue diagonal shape on the right */}
                <div className="absolute top-0 right-[-10%] w-[50%] h-full bg-gradient-to-bl from-[#ebf5ff] to-transparent transform -skew-x-12 opacity-80"></div>
                {/* Smaller accent line */}
                <div className="absolute top-0 right-[35%] w-[100px] h-[60%] bg-gradient-to-b from-gray-50 to-transparent transform -skew-x-12 opacity-60"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* LEFT: Copy */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start pt-10 lg:pt-0">

                        {/* Optional: Small 'New' Badge */}
                        <span className="mb-6 px-3 py-1 bg-blue-50 text-[#4686BC] text-xs font-bold tracking-widest uppercase rounded-sm">
                            Payment Solutions
                        </span>

                        <h1 className="font-outfit text-5xl lg:text-7xl font-bold text-[#1a1a1a] leading-[1.1] mb-6 tracking-tight">
                            The Smarter Way To <br />
                            Accept Payments <span className="text-[#4686BC]">Anywhere.</span>
                        </h1>

                        <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed font-light">
                            Pie Pay has the tools to streamline your payments and scale your business. Simple, secure, and built for speed.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button onClick={() => navigate("/signup")} className="h-14 px-10 cursor-pointer rounded-lg bg-[#4686BC] hover:bg-[#386d99] text-white text-lg font-semibold transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-2 group">
                                Sign Up
                                <FaArrowRight className="text-white/80 group-hover:translate-x-1 transition-transform" size={14} />
                            </button>

                            <button className="h-14 px-10 rounded-lg border cursor-pointer border-gray-200 hover:border-[#4686BC] text-gray-600 hover:text-[#4686BC] text-lg font-medium transition-colors flex items-center justify-center bg-white">
                                Contact Sales
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Image */}
                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">

                        {/* Image Container with shadow/depth */}
                        <div className="relative z-10 w-full max-w-[650px]">
                            {/* IMPORTANT: Ensure this path is correct. 
                  Add 'drop-shadow-xl' to give the hardware that "floating" look.
               */}
                            <img
                                src="/HERO.webp"
                                alt="Pie Pay POS Devices"
                                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700 ease-out"
                            />
                        </div>

                        {/* Decorative element behind image to blend it */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-100/20 rounded-full blur-3xl -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeHero;