import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaYoutube, FaArrowRight } from "react-icons/fa";

const ContactCTA = () => {
    return (
        <section className="w-full bg-white font-outfit border-t border-gray-200">
            <div className='container mx-auto'>
                {/* Split Layout: Content Left, Actions Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* LEFT COLUMN: The Hook */}
                    <div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-center">


                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tighter leading-[0.95] mb-8">
                            Let’s Grow <br />
                            <span className="text-[#4686BC]">Together.</span>
                        </h2>

                        <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-md">
                            We’re ready to help you process payments seamlessly, manage your business more effectively, and boost your profits.
                        </p>
                    </div>

                    {/* RIGHT COLUMN: The Actions */}
                    <div className="flex flex-col">

                        {/* Action Buttons Area */}
                        <div className="flex-1 p-12 md:p-24 flex flex-col justify-center gap-6 bg-gray-50/50">

                            {/* Button 1: Call Us (Solid Blue) */}
                            <button className="group w-full bg-[#4686BC] text-white p-6 font-bold text-sm uppercase tracking-widest hover:bg-[#386d99] transition-all flex justify-between items-center shadow-lg shadow-blue-900/10">
                                <span className="flex items-center gap-4">
                                    <FaPhoneAlt /> Call Us
                                </span>
                                <FaArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                            </button>

                            {/* Button 2: Email (Outline) */}
                            <button className="group w-full bg-white text-slate-900 border border-gray-200 p-6 font-bold text-sm uppercase tracking-widest hover:border-[#4686BC] hover:text-[#4686BC] transition-all flex justify-between items-center">
                                <span className="flex items-center gap-4">
                                    <FaEnvelope /> Email Us
                                </span>
                                <FaArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                            </button>

                        </div>

                        {/* Footer / Social Strip */}
                        <div className="border-t border-gray-200 p-8 md:px-12 bg-white flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    Stay Connected
                                </span>
                                <div className="h-px w-12 bg-gray-200"></div>
                            </div>

                            <div className="flex gap-8">
                                <a href="#" className="group flex items-center gap-2 text-slate-900 hover:text-[#4686BC] transition-colors">
                                    <FaFacebookF className="group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-bold uppercase">Facebook</span>
                                </a>
                                <a href="#" className="group flex items-center gap-2 text-slate-900 hover:text-red-600 transition-colors">
                                    <FaYoutube className="group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-bold uppercase">Youtube</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;