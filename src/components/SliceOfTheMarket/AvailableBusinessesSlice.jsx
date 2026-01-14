import React from 'react';
import { FaArrowRight, FaLeaf, FaPizzaSlice, FaMicrochip, FaHamburger, FaExternalLinkAlt } from "react-icons/fa";

const AvailableBusinessesSlice = () => {

    // Mock Data based on the image provided
    const businesses = [
        {
            id: "BIZ_01",
            name: "GreenThumb Landscaping",
            description: "Eco-friendly landscaping and lawn maintenance services for residential properties.",
            category: "SERVICES",
            icon: FaLeaf,
            status: "GROWING"
        },
        {
            id: "BIZ_02",
            name: "Jasons NY Pizza",
            description: "Authentic New York style pizza serving the Bangor area since 1997.",
            category: "FOOD & BEV",
            icon: FaPizzaSlice,
            status: "POPULAR"
        },
        {
            id: "BIZ_03",
            name: "NexaVista Technology",
            description: "Cutting-edge IT solutions and cloud infrastructure for modern enterprises.",
            category: "TECH",
            icon: FaMicrochip,
            status: "NEW"
        },
        {
            id: "BIZ_04",
            name: "Smith Burger Co.",
            description: "Family-owned craft burger joint. Voted #1 food truck in the metro area.",
            category: "FOOD & BEV",
            icon: FaHamburger,
            status: "FEATURED"
        }
    ];

    return (
        // REMOVED: bg-[#051B31] -> Now transparent/white friendly
        <section className="relative w-full font-outfit py-20 overflow-hidden">

            {/* --- TECHNICAL BACKGROUND (Adjusted for Light Mode visibility) --- */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(#051B31 1px, transparent 1px), linear-gradient(90deg, #051B31 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header - UPDATED TEXT COLORS for Light Background */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 border border-[#48A64D]/30 bg-[#48A64D]/10 px-3 py-1">
                        <span className="w-1.5 h-1.5 bg-[#48A64D]"></span>
                        <span className="text-[#48A64D] font-mono text-[10px] uppercase tracking-widest">
                            Network Directory
                        </span>
                    </div>
                    {/* Changed text-white to text-[#051B31] (Navy) */}
                    <h2 className="text-3xl md:text-5xl font-bold text-[#051B31] mb-4">
                        Available Businesses
                    </h2>
                    {/* Changed text-blue-200/70 to text-gray-600 */}
                    <p className="text-gray-600 font-light">
                        See how we've helped businesses like yours achieve <span className="text-[#48A64D] font-medium">remarkable growth</span> through our proven marketing strategies.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {businesses.map((biz) => (
                        <div
                            key={biz.id}
                            // Kept cards DARK for contrast against the light background
                            // Changed opacity slightly to be more solid: bg-[#0A2640]/90
                            className="group relative bg-[#0A2640] border border-gray-200 hover:border-[#48A64D] hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                        >
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[#48A64D] transition-colors duration-300 z-20"></div>

                            {/* Image/Logo Placeholder Area */}
                            <div className="relative h-40 w-full bg-[#031221] border-b border-white/10 flex items-center justify-center overflow-hidden">
                                {/* Technical Crosshair Background */}
                                <div className="absolute inset-0 opacity-10"
                                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
                                </div>

                                {/* Logo Icon */}
                                <div className="relative z-10 text-white group-hover:text-[#48A64D] group-hover:scale-110 transition-all duration-500">
                                    <biz.icon size={48} />
                                </div>

                                {/* Tag */}
                                <div className="absolute top-3 right-3 text-[9px] font-mono text-white/50 uppercase border border-white/10 px-1.5 py-0.5">
                                    {biz.id}
                                </div>
                            </div>

                            {/* Content Body - Text remains white because card bg is dark */}
                            <div className="p-6 flex flex-col flex-grow relative">
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] text-[#48A64D] font-mono uppercase tracking-wider">
                                            {biz.category}
                                        </span>
                                        {/* Status Dot */}
                                        <span className="flex items-center gap-1 text-[9px] text-gray-400">
                                            <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#48A64D] transition-colors"></span>
                                            {biz.status}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4686BC] transition-colors">
                                        {biz.name}
                                    </h3>
                                    <p className="text-sm text-blue-100/60 leading-relaxed line-clamp-3">
                                        {biz.description}
                                    </p>
                                </div>

                                {/* Action Button */}
                                <div className="mt-auto pt-4 border-t border-white/10">
                                    <button className="w-full cursor-pointer bg-[#48A64D] hover:bg-[#4686BC] text-white py-2.5 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#48A64D]/10 hover:shadow-[#4686BC]/20">
                                        <span>View Profile</span>
                                        <FaArrowRight size={10} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Action - UPDATED for Light Background */}
                <div className="mt-16 text-center">
                    <button className="inline-flex items-center gap-3 border border-gray-300 hover:border-[#48A64D] text-[#051B31] px-8 py-3 font-bold text-sm uppercase tracking-widest transition-all group hover:bg-white/50">
                        <span>Show More Businesses</span>
                        <FaExternalLinkAlt className="text-[#48A64D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={12} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AvailableBusinessesSlice;