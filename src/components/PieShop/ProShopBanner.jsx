import React from 'react';
import { FaArrowRight, FaShippingFast } from "react-icons/fa";

const ProShopBanner = () => {
    return (
        <section className="w-full bg-white font-outfit py-10">
            <div className="container mx-auto px-6 md:px-12">

                {/* BANNER CONTAINER */}
                {/* UPDATED: Gradient from Green (#48A64D) on Left to Navy (#051B31) on Right */}
                <div className="relative w-full bg-gradient-to-r bg-[#051B31]  shadow-xl overflow-hidden group">

                    {/* --- BACKGROUND DESIGN --- */}
                    {/* Subtle texture overlay */}
                    <div className="absolute inset-0 opacity-[0.05]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: '30px 30px'
                        }}>
                    </div>

                    {/* --- FLEX CONTENT --- */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 lg:p-16 gap-8">

                        {/* LEFT: LOGO IMAGE */}
                        <div className="flex items-center justify-center lg:justify-start lg:w-1/3">
                            {/* Kept bg-white to ensure the Dark Logo is visible against the green background */}
                            <img
                                src="/LogoDark.png"
                                alt="PiePay"
                                className="h-12 md:h-26 w-auto object-contain   px-6 py-3 rounded-lg "
                            />
                        </div>

                        {/* CENTER: MAIN MESSAGE */}
                        <div className="lg:w-1/2 text-center lg:text-left border-t lg:border-t-0 lg:border-l border-white/20 pt-8 lg:pt-0 lg:pl-10">

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-wide">
                                Welcome to GetPie ProShop
                            </h2>

                            <p className="text-white/90 text-lg font-light mb-6 max-w-xl leading-relaxed">
                                Shop branded apparel and items for the GetPie team.
                            </p>

                            {/* Shipping Tag */}
                            <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-2 rounded-md border border-white/20 backdrop-blur-md">
                                <FaShippingFast className="text-white" />
                                <span className="text-sm font-medium text-white">
                                    Free shipping on orders over <span className="font-bold text-white">$50</span>
                                </span>
                            </div>
                        </div>

                        {/* RIGHT: ACTION BUTTON */}
                        <div className="lg:w-auto flex-shrink-0 mt-4 lg:mt-0">
                            <button className="group bg-[#48A64D] cursor-pointer text-[#051B31] px-10 py-5 font-bold uppercase tracking-widest text-sm shadow-lg hover:bg-[#4686BC] hover:text-white transition-all duration-300 rounded-sm flex items-center gap-3">
                                <span>Start Shopping</span>
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProShopBanner;