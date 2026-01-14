import React from 'react';
import { FaQrcode, FaArrowRight, FaCheck, FaStoreAlt, FaCogs, FaChartLine, FaNetworkWired } from "react-icons/fa";

const HeroSlice = () => {
    // Reusable Schematic Block Component
    const SchematicBlock = ({ icon: Icon, title, sub, color, accent, isEngine }) => (
        <div className={`relative p-5 border ${accent ? 'border-[#48A64D]' : 'border-white/10'} ${isEngine ? 'bg-[#48A64D]/10' : 'bg-[#0A2640]'} flex flex-col gap-2 w-full md:w-auto md:min-w-[150px]`}>
            {isEngine && <div className="absolute inset-0 bg-[#48A64D] opacity-5 z-0"></div>}
            {/* Connecting Lines (Desktop Only) */}
            {!isEngine && <div className="absolute top-1/2 -right-8 w-8 h-[1px] bg-white/20 hidden md:block"></div>}
            <div className={`relative z-10 ${color}`}>
                <Icon size={20} />
            </div>
            <div className="relative z-10">
                <h4 className={`font-bold text-xs uppercase tracking-wider ${accent ? 'text-[#48A64D]' : 'text-white'}`}>{title}</h4>
                <p className="text-blue-200 text-[10px] mt-0.5 font-mono">{sub}</p>
            </div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/30"></div>
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/30"></div>
        </div>
    );

    return (
        <section className="relative w-full bg-[#051B31] font-outfit pt-24 pb-16 overflow-hidden">

            {/* --- BACKGROUND SUBTLETY --- */}
            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#4686BC] opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* --- LEFT COLUMN: CONTENT --- */}
                    <div className="flex flex-col justify-center">

                        {/* HEADLINE */}
                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.0] tracking-tight mb-6">
                            Get Your <br />
                            <span className="text-[#48A64D] relative inline-block">
                                Slice
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#48A64D]"></div>
                            </span> of the Market.
                        </h1>

                        {/* SUBHEADLINE */}
                        <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed mb-8 max-w-xl border-l border-white/10 pl-6 py-1">
                            Join our revolutionary program that transforms businesses into <strong className="text-white font-semibold">lead-generating machines</strong>.
                        </p>

                        {/* FEATURE LIST */}
                        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 text-sm font-medium text-white/80">
                            {['Free to Join', 'Local Networking', 'Lead Generation', 'Growth Analytics'].map((feat) => (
                                <div key={feat} className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-[#48A64D] flex items-center justify-center">
                                        <FaCheck className="text-[#051B31] text-[8px]" />
                                    </div>
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button className="flex items-center justify-center gap-3 bg-[#48A64D] hover:bg-[#3d9141] text-white px-6 py-3 font-bold text-lg transition-all shadow-lg shadow-[#48A64D]/10 hover:shadow-[#48A64D]/30 min-w-[180px] relative group overflow-hidden">
                                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                <FaQrcode />
                                <span className="relative z-10">Scan to Start</span>
                            </button>

                            <button className="flex items-center justify-center gap-3 bg-[#0A2640] border border-white/10 hover:border-[#48A64D]/50 text-white px-6 py-3 font-bold text-lg transition-all min-w-[180px] group">
                                <span>View Schematic</span>
                                <FaArrowRight size={14} className="text-[#48A64D] group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: THE "GROWTH ENGINE" BLUEPRINT --- */}
                    {/* FIXED ALIGNMENT:
                        1. Removed 'justify-end' to prevent overflow. 
                        2. Added 'justify-start lg:justify-center' to align left on mobile (matches text) and center on desktop. 
                    */}
                    <div className="relative w-full flex justify-start lg:justify-center">

                        <div className="relative p-6 md:p-8 border border-white/10 bg-[#0A2640]/50 backdrop-blur-md w-full max-w-lg">
                            {/* Blueprint Label */}
                            <div className="absolute top-0 left-0 bg-white/10 text-blue-200 text-[10px] font-mono uppercase px-2 py-1 tracking-widest border-b border-r border-white/10">
                                FIG 1.0: Growth Flow
                            </div>

                            {/* THE SCHEMATIC FLOW LAYOUT */}
                            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 relative z-10 mt-4 w-full">

                                {/* Input Block */}
                                <SchematicBlock
                                    icon={FaStoreAlt}
                                    title="Your Business"
                                    sub="Input Source"
                                    color="text-blue-300"
                                />

                                {/* The Central Engine */}
                                <div className="relative z-20 md:mx-6 my-6 md:my-0 w-full md:w-auto">
                                    <SchematicBlock
                                        icon={FaCogs}
                                        title="Market Engine"
                                        sub="Processing"
                                        color="text-[#48A64D]"
                                        accent={true}
                                        isEngine={true}
                                    />
                                    {/* Connector Lines */}
                                    <div className="absolute top-1/2 -right-6 w-6 h-[2px] bg-[#48A64D] hidden md:block shadow-[0_0_10px_#48A64D]"></div>
                                    <div className="absolute -bottom-6 left-1/2 h-6 w-[2px] bg-[#48A64D] md:hidden shadow-[0_0_10px_#48A64D]"></div>
                                </div>

                                {/* Output Blocks */}
                                <div className="flex flex-col gap-3 w-full md:w-auto">
                                    <SchematicBlock
                                        icon={FaChartLine}
                                        title="Qualified Leads"
                                        sub="Output A"
                                        color="text-white"
                                    />
                                    <SchematicBlock
                                        icon={FaNetworkWired}
                                        title="Local Network"
                                        sub="Output B"
                                        color="text-white"
                                    />
                                </div>
                            </div>

                            {/* Background Lines */}
                            <div className="absolute inset-0 z-0 pointer-events-none">
                                <div className="absolute top-[40%] left-0 w-full h-[1px] border-t border-dashed border-white/10"></div>
                                <div className="absolute top-0 left-[30%] h-full w-[1px] border-l border-dashed border-white/10"></div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSlice;