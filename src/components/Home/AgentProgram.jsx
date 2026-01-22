import React from 'react';
import { FaArrowRight, FaSquareFull } from "react-icons/fa";

const AgentProgram = () => {
    const stats = [
        {
            id: "01",
            label: "Upfront Commission",
            value: "$200 – $4,600",
            sub: "Per Sale Upfront",
            desc: "Immediate cash for every merchant account you activate."
        },
        {
            id: "02",
            label: "Recurring Revenue",
            value: "$200+",
            sub: "Monthly Residuals",
            desc: "Build a compounding income stream that pays you forever."
        },
        {
            id: "03",
            label: "First Year Target",
            value: "$35k – $60k",
            sub: "Income Potential",
            desc: "Realistic earnings for driven agents in their first 12 months."
        },
        {
            id: "04",
            label: "Top Performers",
            value: "$100k+",
            sub: "Annual Income",
            desc: "Join the elite tier of agents building massive wealth portfolios.",
            highlight: true
        }
    ];

    return (
        <section className="w-full bg-white font-outfit py-24 border-b border-gray-100">
            <div className="container mx-auto px-6 md:px-12">

                {/* 1. HEADER */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[0.95] tracking-tight">
                            Earn Monthly <br />
                            <span className="text-[#4686BC]">Residual Income.</span>
                        </h2>
                    </div>

                    <div className="max-w-sm pb-2">
                        <p className="text-gray-500 text-sm leading-relaxed font-light border-l-2 border-[#4686BC] pl-4">
                            Join our Referral Program and get paid for helping businesses save on processing fees.
                        </p>
                    </div>
                </div>

                {/* 2. THE SHARP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/20 shadow-xl">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="group relative border-r border-b border-white/20 bg-[#051B31] p-10 hover:bg-[#0A2640] transition-all duration-300"
                        >
                            {/* Hover Interaction: Sharp Corner Accent */}
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-white border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-2 right-2 text-[#051B31] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 text-[8px]">
                                <FaSquareFull />
                            </div>

                            {/* ID */}
                            <span className="block font-mono text-xs text-white/40 mb-12 group-hover:text-white transition-colors">
                                {stat.id}
                            </span>

                            {/* Value - UPDATED: Smaller, White Default, Green on Hover */}
                            <h3 className="text-3xl lg:text-4xl font-light tracking-tight mb-2 text-white group-hover:text-[#48A64D] transition-colors duration-300">
                                {stat.value}
                            </h3>

                            {/* Label */}
                            <p className="text-sm font-bold text-white uppercase tracking-wide mb-4">
                                {stat.label}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-blue-100/80 leading-relaxed opacity-100">
                                {stat.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 3. FOOTER */}
                <div className="mt-16 flex flex-col md:flex-row gap-12 items-center border-t border-gray-100 pt-16">
                    <div className="md:w-1/3">
                        <button className="w-full cursor-pointer md:w-auto bg-[#4686BC] text-white px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-[#386d99] transition-colors flex justify-between items-center group">
                            <span>Join The Program</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-gray-500 font-light text-lg leading-relaxed">
                            At PiePay, we believe in your success. While we provide all the tools, training, and initial leads you need, your success ultimately depends on your drive to prospect and close deals.
                        </p>
                        <div className="mt-4 flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                            <span>// No Earnings Cap</span>
                            <span>// Full Training</span>
                            <span>// Portfolio Income</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AgentProgram;