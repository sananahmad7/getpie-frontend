import React from 'react';
import { FaNetworkWired, FaCheckCircle, FaClock, FaArrowRight } from "react-icons/fa";

const MarketingProgramSlice = () => {

    // Mock Data representing "Live Network Activity"
    const activities = [
        {
            id: "ACT_01",
            title: "Strategy Session",
            time: "10:42 AM",
            status: "COMPLETE",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "ACT_02",
            title: "Client Onboarding",
            time: "11:15 AM",
            status: "IN_PROGRESS",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "ACT_03",
            title: "Deal Closure",
            time: "09:30 AM",
            status: "VERIFIED",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
        },
        {
            id: "ACT_04",
            title: "Data Analysis",
            time: "02:22 PM",
            status: "PROCESSING",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <section className="relative w-full bg-[#051B31] font-outfit py-24 overflow-hidden">

            {/* --- BACKGROUND FX --- */}
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}>
            </div>
            {/* Soft Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[300px] bg-[#4686BC] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* --- HEADER SECTION --- */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-6 border border-[#48A64D]/30 bg-[#48A64D]/5 px-4 py-1.5 backdrop-blur-sm">
                        <FaNetworkWired className="text-[#48A64D] text-xs" />
                        <span className="text-[#48A64D] font-mono text-xs uppercase tracking-widest">
                            Pre-Launch Phase
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Marketing Programme
                    </h2>

                    <p className="text-lg text-blue-100/70 font-light leading-relaxed max-w-3xl mx-auto">
                        Join our local marketing program and discover how <span className="text-white font-medium">Slice of the Market</span> can help generate leads for your business. We're enrolling new businesses into our program before launch.
                    </p>
                </div>

                {/* --- VISUAL STREAM (Replaces generic carousel) --- */}
                <div className="relative">

                    {/* Decorative Top Line */}
                    <div className="flex items-center justify-between mb-4 px-1">
                        <span className="text-[10px] font-mono text-[#48A64D]/60 uppercase tracking-widest">Live_Activity_Feed // Region_01</span>
                        <div className="flex gap-1">
                            <div className="w-1 h-1 bg-[#48A64D] rounded-full animate-ping"></div>
                            <div className="w-1 h-1 bg-[#48A64D] rounded-full"></div>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {activities.map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative h-64 bg-[#0A2640] border border-white/10 overflow-hidden cursor-pointer"
                            >
                                {/* Image Layer */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#051B31] via-[#051B31]/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>

                                {/* Hover Border */}
                                <div className="absolute inset-0 border border-[#48A64D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex justify-between items-end border-b border-white/10 pb-3 mb-3 group-hover:border-[#48A64D]/50 transition-colors">
                                        <div>
                                            <div className="text-[10px] font-mono text-[#48A64D] mb-1 flex items-center gap-1">
                                                <FaClock size={8} /> {item.time}
                                            </div>
                                            <h3 className="text-lg font-bold text-white leading-none">{item.title}</h3>
                                        </div>
                                        <FaCheckCircle className="text-[#4686BC] group-hover:text-[#48A64D] transition-colors" />
                                    </div>

                                    <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                                        <span className="text-[9px] font-mono text-blue-200 uppercase tracking-wider">Status: {item.status}</span>
                                        <FaArrowRight className="text-white text-xs -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>

                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#48A64D] transition-colors"></div>
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#48A64D] transition-colors"></div>
                            </div>
                        ))}
                    </div>

                    {/* Decorative Bottom Line */}
                    <div className="w-full h-[1px] bg-white/10 mt-4 relative">
                        <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-[#48A64D] to-transparent opacity-50"></div>
                    </div>

                </div>

                {/* --- CALL TO ACTION --- */}
                <div className="mt-16 flex flex-col items-center">
                    <p className="text-blue-200/60 text-sm mb-6 max-w-lg text-center">
                        This is your chance to network in your region and generate leads directly to your business - <span className="text-white border-b border-[#48A64D]">completely free!</span>
                    </p>
                    <button className="flex items-center gap-3 bg-[#48A64D] hover:bg-[#3d9141] text-white px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(72,166,77,0.2)] hover:shadow-[0_0_30px_rgba(72,166,77,0.4)] group">
                        <span>Join Program Now</span>
                        <div className="w-[1px] h-4 bg-white/30"></div>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default MarketingProgramSlice;