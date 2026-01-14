import React from 'react';
import { FaPaperPlane } from "react-icons/fa";

// Reusable Input Component
const InputField = ({ label, type = "text", placeholder, id, isTextArea = false }) => (
    <div className="flex flex-col group relative overflow-hidden">
        <label htmlFor={id} className="text-blue-200 text-xs font-mono mb-1.5 uppercase tracking-wider transition-colors group-hover:text-[#48A64D]">
            {label}
        </label>
        {isTextArea ? (
            <textarea
                id={id}
                rows="3"
                placeholder={placeholder}
                // Updated input bg to match the new darker form bg
                className="peer w-full bg-[#0A2640] border border-white/10 text-white px-4 py-2.5 text-sm font-outfit focus:border-[#48A64D] focus:bg-[#0A2640] focus:outline-none transition-all placeholder:text-blue-300/30 resize-none relative z-10"
            ></textarea>
        ) : (
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className="peer w-full bg-[#0A2640] border border-white/10 text-white px-4 py-2.5 text-sm font-outfit focus:border-[#48A64D] focus:bg-[#0A2640] focus:outline-none transition-all placeholder:text-blue-300/30 relative z-10"
            />
        )}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#48A64D] to-transparent transition-all duration-500 ease-out peer-focus:w-full z-20"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#48A64D] opacity-0 peer-focus:opacity-100 transition-opacity duration-300 z-20"></div>
    </div>
);

const ContactFormSlice = () => {
    // Image URL
    const imageUrl = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <section className="relative w-full font-outfit py-16 overflow-hidden">

            {/* --- CREATIVE BACKGROUND LAYER --- */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(70, 134, 188, 0.2) 1px, transparent 0)`, backgroundSize: '32px 32px' }}></div>
            <div className="absolute top-0 right-0 w-[100vw] h-[100vw] bg-gradient-to-bl from-[#4686BC]/20 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[70vw] h-[70vw] bg-[#48A64D]/10 opacity-50 blur-[150px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/4"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Main Card Container */}
                {/* 1. Changed max-w-6xl to w-full to match other components */}
                {/* 2. Changed bg-[#0A2640]/80 to bg-[#051B31] (Theme Blue) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full mx-auto bg-[#051B31] border border-white/10 shadow-2xl overflow-hidden rounded-sm">

                    {/* --- LEFT COLUMN: THE FORM --- */}
                    <div className="relative p-8 md:p-12 flex flex-col justify-center">
                        {/* Decorative corners for form side */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#48A64D]"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#48A64D]"></div>

                        {/* Section Header */}
                        <div className="text-left mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight relative inline-block">
                                Get Your Business Live
                                <div className="absolute -bottom-3 left-0 w-12 h-1 bg-[#48A64D]"></div>
                            </h2>
                        </div>

                        <form className="grid grid-cols-1 gap-5 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <InputField id="fullName" label="Full Name" placeholder="John Doe" />
                                <InputField id="businessName" label="Business Name" placeholder="Acme Corp" />
                                <InputField id="agentName" label="Agent Name" placeholder="Optional" />
                                <InputField id="phoneNumber" label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
                            </div>

                            <InputField id="email" label="Your Email" type="email" placeholder="john@example.com" />
                            <InputField id="message" label="Your Message" isTextArea={true} placeholder="Tell us about your business..." />

                            <div className="mt-2">
                                <button type="submit" className="w-full flex items-center cursor-pointer justify-center gap-2 bg-[#48A64D] hover:bg-[#4686BC] text-white py-3.5 font-bold text-base transition-all shadow-lg shadow-[#48A64D]/10 hover:shadow-[#4686BC]/30 group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                                    <span className="relative z-10 uppercase tracking-wider">Send Request</span>
                                    <FaPaperPlane className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={14} />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* --- RIGHT COLUMN: THE IMAGE --- */}
                    <div className="relative h-full min-h-[400px] lg:min-h-full overflow-hidden">
                        <img
                            src={imageUrl}
                            alt="Business Growth and Analytics"
                            className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                        />

                        {/* Overlay to ensure image blends with the dark card theme */}
                        <div className="absolute inset-0 bg-[#051B31]/40 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#051B31] via-transparent to-transparent opacity-90"></div>

                        {/* Decorative corners for image side */}
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#48A64D]"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#48A64D]"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactFormSlice;