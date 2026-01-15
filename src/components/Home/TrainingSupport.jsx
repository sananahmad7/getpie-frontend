import React from 'react';
import { FaHeadset, FaLayerGroup, FaThLarge, FaTools, FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const TrainingSupport = () => {
    const features = [
        {
            id: "01",
            icon: <FaLayerGroup />,
            title: "Step-by-Step Setup",
            text: "Learn how to get your new POS up and running quickly with our easy-to-follow guides and video tutorials."
        },
        {
            id: "02",
            icon: <FaHeadset />,
            title: "Customer Service - 24/7",
            text: "Have a question? Our knowledgeable customer support team is here to help—anytime, day or night. Every product comes with dedicated 24/7 support to ensure you’re never left without answers."
        },
        {
            id: "03",
            icon: <FaThLarge />,
            title: "Application Support",
            text: "Discover the ideal software and apps tailored to your business needs. Our team of experts will guide you through selecting, installing, and integrating industry-specific add-ons from our extensive catalog."
        },
        {
            id: "04",
            icon: <FaTools />,
            title: "Custom Set-Ups",
            text: "We understand that your business may have unique needs—whether it’s a custom website integration or a specialized application. Our in-house development team is ready to design, build, and seamlessly integrate a tailored solution just for you."
        }
    ];

    return (
        <section className="w-full bg-white font-outfit pt-24 pb-12 border-b border-gray-100">
            <div className="container mx-auto px-6 md:px-12">

                {/* 1. ARCHITECTURAL HEADER */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20 border-b border-gray-100 pb-20">

                    {/* Left: The Statement */}
                    <div className="lg:w-1/2 relative">
                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black tracking-tighter leading-[0.9]">
                            Helping You <br />
                            <span className="text-[#4686BC]">Succeed.</span>
                        </h2>
                    </div>

                    {/* Right: The Context */}
                    <div className="lg:w-1/2 flex flex-col justify-end">
                        <div className="pl-0 lg:pl-12 border-l-0 lg:border-l border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Comprehensive Training for Your New POS
                            </h3>
                            <p className="text-gray-500 text-lg leading-relaxed font-light mb-8">
                                At GetPiePay, we don’t just offer products, we equip you with the knowledge to succeed. We help you get set up with your new POS and offer training on all our products. From understanding merchant services and our apps to mastering customer loyalty programs, we provide hands-on support so you can get the most out of your payment system.
                            </p>

                            <button className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-black hover:text-[#4686BC] transition-colors">
                                <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#4686BC] group-hover:bg-[#4686BC] group-hover:text-white transition-all duration-300">
                                    <FaCalendarAlt />
                                </span>
                                Schedule A Meeting
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2. THE CONNECTED GRID - Now with Dark Navy Theme BG (#051B31) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/20 bg-[#051B31]">
                    {features.map((item) => (
                        <div key={item.id} className="group relative border-r border-b border-white/20 p-10 bg-[#051B31] hover:bg-[#0A2640] transition-colors duration-500">

                            {/* Animated Top Line (Green for contrast on Dark Navy) */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#48A64D] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                            {/* Header: ID & Icon */}
                            <div className="flex justify-between items-start mb-12">
                                <span className="font-mono text-xs text-white/40 group-hover:text-white transition-colors">
                                    {item.id}
                                </span>
                                <div className="text-2xl text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h4 className="text-xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                                {item.title}
                            </h4>
                            <p className="text-blue-100/80 text-sm leading-relaxed font-light">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 3. THE ANCHOR (Full Width Banner) */}
                <div className="mt-20 w-full bg-[#1F2937] text-white p-12 md:p-20 relative overflow-hidden group">
                    {/* Background Interaction */}
                    <div className="absolute inset-0 bg-[#4686BC] opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>

                    {/* Diagonal Accent */}
                    <div className="absolute top-0 right-0 w-[300px] h-[600px] bg-[#4686BC]/20 -skew-x-12 translate-x-32"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-24">
                        <div className="md:w-1/3">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Empowering <br /> Your Success
                            </h2>
                        </div>
                        <div className="md:w-2/3 border-l border-white/10 pl-0 md:pl-12">
                            <p className="text-xl text-gray-300 font-light leading-relaxed">
                                We believe that training is key to your business’s success. That’s why we invest in helping you master our systems, making sure you're confident in handling payments, managing customer data, and optimizing your sales process.
                            </p>
                        </div>
                        <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-white/20 text-white group-hover:bg-white group-hover:text-black transition-all cursor-pointer">
                            <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TrainingSupport;