import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaYoutube } from "react-icons/fa";

const ShopCTA = () => {
    return (
        // REDUCED VERTICAL PADDING: py-16 -> py-10
        <section className="w-full font-outfit py-10 px-6">

            {/* INCREASED WIDTH: max-w-4xl -> max-w-7xl to match standard containers */}
            <div className="container mx-auto px-6 md:px-12">

                {/* MAIN CTA CARD */}
                {/* REDUCED CARD PADDING: p-10 md:p-14 -> p-8 md:p-10 */}
                <div className="relative bg-gradient-to-br from-[#051B31] to-[#0a2e52] rounded-3xl p-8 md:p-10 text-center shadow-xl overflow-hidden group">

                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#4686BC] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                            Contact Us — Let’s Grow Together
                        </h2>

                        {/* Reduced margin-bottom: mb-10 -> mb-8 */}
                        <p className="text-blue-100/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                            We’re ready to help you process payments seamlessly, manage your business more effectively, and boost your profits.
                        </p>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">

                            {/* Call Us */}
                            <button className="flex items-center cursor-pointer justify-center gap-3 bg-[#48A64D] text-white px-8 py-3.5 rounded-lg font-bold uppercase tracking-wider text-sm shadow-lg hover:bg-[#3e9142] hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                                <FaPhoneAlt />
                                <span>Call Us</span>
                            </button>

                            {/* Email */}
                            <button className="flex items-center cursor-pointer justify-center gap-3 bg-transparent border-2 border-[#4686BC] text-white px-8 py-3.5 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-[#4686BC] hover:border-[#4686BC] hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                                <FaEnvelope />
                                <span>Email</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* SOCIAL CONNECTION SECTION */}
                {/* Reduced margin-top: mt-12 -> mt-8 */}
                <div className="mt-8 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-[#051B31] mb-2">
                        Stay Connected
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm md:text-base">
                        For the latest updates and industry insights, follow us on
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-5">
                        <a href="#" className="group flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <FaFacebook className="text-[#051B31] text-xl group-hover:text-[#4686BC] transition-colors" />
                        </a>
                        <a href="#" className="group flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <FaYoutube className="text-[#051B31] text-xl group-hover:text-[#FF0000] transition-colors" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ShopCTA;