import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Solutions', href: '#solutions' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Developers', href: '#developers' },
        { name: 'About', href: '#about' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-outfit
                ${isScrolled
                    ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100/50 py-3'
                    : 'bg-white/0 py-5'}
            `}
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between">

                    {/* 1. LOGO & BRAND (Left) */}
                    <a href="#" className="flex items-center gap-3 cursor-pointer select-none group">
                        {/* REPLACE src WITH YOUR ACTUAL LOGO PATH */}
                        <img
                            src="/LogoDark.png"
                            alt="GetPiePay Logo"
                            // CHANGE: Removed 'w-10' and 'object-cover'. 
                            // Added 'w-auto' (calculates width automatically) and 'object-contain' (prevents cropping).
                            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
                        />
                    </a>

                    {/* 2. DESKTOP NAVIGATION (Right) */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Links with animated underline */}
                        <div className="flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group/link"
                                >
                                    {link.name}
                                    {/* Animated Underline */}
                                </a>
                            ))}
                        </div>

                        {/* Separator */}
                        <div className="h-5 w-px bg-gray-200/80"></div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3">
                            <a href="#login" className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#4686BC] transition-colors">
                                Log In
                            </a>
                            <button className="bg-[#4686BC] hover:bg-[#3972a5] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md shadow-blue-900/10 hover:shadow-blue-900/20 active:scale-95">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* 3. MOBILE MENU TOGGLE */}
                    <button
                        className="md:hidden p-2 text-gray-700 hover:text-[#4686BC] transition-colors text-2xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </div>
            </div>

            {/* 4. MOBILE MENU DROPDOWN */}
            <div
                className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100/50 shadow-xl md:hidden flex flex-col items-center py-8 gap-6 transition-all duration-300 ease-in-out transform origin-top
                    ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
                `}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-gray-800 font-medium text-lg hover:text-[#4686BC] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
                <hr className="w-1/4 border-gray-200 my-2" />
                <a href="#login" className="text-gray-900 font-semibold text-lg hover:text-[#4686BC]">Log In</a>
                <button className="bg-[#4686BC] hover:bg-[#3972a5] text-white px-8 py-3 rounded-full font-bold shadow-md w-3/4 max-w-xs transition-all">
                    Get Started
                </button>
            </div>

        </nav>
    );
};

export default NavBar;