import React from 'react';
import { FaHeadset, FaLayerGroup, FaThLarge, FaTools, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const TrainingSupport = () => {
    const features = [
        {
            icon: <FaLayerGroup />,
            title: "Step-by-Step Setup",
            text: "Learn how to get your new POS up and running quickly with our easy-to-follow guides and video tutorials."
        },
        {
            icon: <FaHeadset />,
            title: "Customer Service - 24/7",
            text: "Have a question? Our knowledgeable customer support team is here to help—anytime, day or night. Every product comes with dedicated 24/7 support to ensure you’re never left without answers."
        },
        {
            icon: <FaThLarge />,
            title: "Application Support",
            text: "Discover the ideal software and apps tailored to your business needs. Our team of experts will guide you through selecting, installing, and integrating industry-specific add-ons from our extensive catalog."
        },
        {
            icon: <FaTools />,
            title: "Custom Set-Ups",
            text: "We understand that your business may have unique needs—whether it’s a custom website integration or a specialized application. Our in-house development team is ready to design, build, and seamlessly integrate a tailored solution just for you."
        }
    ];

    return (
        <section className="w-full bg-white font-outfit py-20 border-b border-gray-100">
            <div className="container mx-auto px-6 md:px-12">

                {/* Main Layout: Split Top */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">

                    {/* LEFT: Intro Content */}
                    <div className="lg:w-1/3 flex flex-col justify-center">
                        <span className="text-[#4686BC] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                            Training and Support
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-[1.1] mb-6">
                            Helping You <br /> <span className="text-[#4686BC]">Succeed.</span>
                        </h2>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            Comprehensive Training for Your New POS
                        </h3>

                        <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                            At GetPiePay, we don’t just offer products, we equip you with the knowledge to succeed. We help you get set up with your new POS and offer training on all our products. From understanding merchant services and our apps to mastering customer loyalty programs, we provide hands-on support so you can get the most out of your payment system.
                        </p>

                        <button className="w-fit bg-[#4686BC] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#386d99] hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group">
                            <FaCalendarAlt />
                            Schedule A Meeting
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* RIGHT: Feature Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Hover Accent Line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4686BC] to-[#48A64D] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#4686BC] text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>

                                <h4 className="text-xl font-bold text-black mb-3 group-hover:text-[#4686BC] transition-colors">
                                    {item.title}
                                </h4>

                                <p className="text-gray-500 text-sm leading-relaxed font-light">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* BOTTOM BANNER: High Impact */}
                <div className="w-full bg-[#4686BC] rounded-[2rem] p-8 md:p-16 relative overflow-hidden text-white flex flex-col md:flex-row items-center gap-10">

                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#48A64D]/30 rounded-full blur-[80px] pointer-events-none -ml-20 -mb-20"></div>

                    {/* Banner Content */}
                    <div className="relative z-10 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-0 md:pr-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Empowering <br /> Your Success
                        </h2>
                    </div>

                    <div className="relative z-10 w-full md:w-2/3">
                        <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed">
                            We believe that training is key to your business’s success. That’s why we invest in helping you master our systems, making sure you're confident in handling payments, managing customer data, and optimizing your sales process.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TrainingSupport;