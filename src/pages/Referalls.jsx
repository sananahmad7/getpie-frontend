import React from 'react';
import { FaPlay, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const Referalls = () => {
    // Data sourced from the prompt
    const testimonials = [
        {
            id: 1,
            title: "The Union Jack Pub - GetPie.io",
            quote: "Get On It! It Works! It’s As Simple As That! Get On It!",
            videoOverlay: "You can turn an expense into a revenue stream for your business!",
            link: "https://www.youtube.com/watch?v=n4yFSNCqt7g",
            videoId: "n4yFSNCqt7g"
        },
        {
            id: 2,
            title: "Liquor World - GetPie.io",
            quote: "Convert an expense into a revenue stream for your business!",
            videoOverlay: "...fiantly, Defiantly, Recommend Pie Pay!",
            link: "https://www.youtube.com/watch?v=X8g-ZgKOLxk",
            videoId: "X8g-ZgKOLxk"
        },
        {
            id: 3,
            title: "Anderson's Jewelry - GetPie.io",
            quote: "I Defiantly, Defiantly, Recommend",
            videoOverlay: "...On It! It's As Simple As That! Get On It!",
            link: "https://www.youtube.com/watch?v=X3Jxb2a5zNU",
            videoId: "X3Jxb2a5zNU"
        }
    ];

    return (
        // THEME: WHITE BACKGROUND VERSION
        <section className="w-full bg-white py-24 font-outfit relative overflow-hidden">

            {/* Subtle background gradient for depth (Light Mode Version) */}
            <div className="absolute top-0 left-1/4 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#48A64D]/5 via-transparent to-transparent pointer-events-none blur-[120px]"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">

                {/* --- HEADER SECTION --- */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    {/* Secondary Accent Color label */}
                    <span className="text-[#4686BC] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Community Spotlight
                    </span>
                    {/* Primary heavy headline - DARK TEXT for white bg */}
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[0.95] mb-6">
                        Giving Back <br /> to Merchants.
                    </h2>
                    {/* Body text - GREY TEXT for white bg */}
                    <p className="text-xl text-slate-500 font-light leading-relaxed">
                        Our GetPie.io merchant community is growing every day. We’re passionate about helping businesses save money and unlock new revenue streams.
                    </p>
                </div>


                {/* --- VIDEO CARDS GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {testimonials.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            // CARD STYLING: White bg, shadow, border
                            className="group relative bg-white border border-slate-100 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#48A64D]/30 hover:-translate-y-2 block flex flex-col h-full shadow-lg"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                {/* --- VIDEO THUMBNAIL AREA --- */}
                                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                                    {/* REAL THUMBNAIL IMAGE */}
                                    <img
                                        src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                                        alt={item.title}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                    />

                                    {/* Dark overlay for text readability over video */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>

                                    {/* Green Accent Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                        <div className="w-16 h-16 bg-[#48A64D] rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(72,166,77,0.4)] transition-transform duration-500 group-hover:scale-110 group-hover:bg-white">
                                            <FaPlay className="text-white group-hover:text-[#48A64D] transition-colors" size={20} />
                                        </div>
                                    </div>

                                    {/* Video Overlay Text (Always White because it's on image) */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                                        <p className="text-white text-sm font-bold italic leading-tight drop-shadow-md">
                                            "{item.videoOverlay}"
                                        </p>
                                    </div>
                                </div>

                                {/* --- CARD CONTENT --- */}
                                <div className="p-8 flex flex-col flex-grow justify-between bg-white">
                                    <div>
                                        <FaQuoteLeft className="text-[#4686BC]/20 text-3xl mb-4" />
                                        {/* Light italic quote style - DARK GREY TEXT */}
                                        <p className="text-lg text-slate-600 font-light italic leading-relaxed mb-6">
                                            "{item.quote}"
                                        </p>
                                        {/* Bold title - DARK TEXT */}
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Action Link */}
                                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center text-[#4686BC] font-bold gap-2 group-hover:text-[#48A64D] transition-colors duration-300">
                                        Watch on YouTube <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Referalls;