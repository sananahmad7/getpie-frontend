import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    // REMOVED: isScrolled state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const navLinks = [
        { name: 'PiePay Earning Analysis', href: '#earning-analysis', id: 'earning-analysis' },
        { name: 'Pie ProShop', href: '#proshop', id: 'proshop' },
        { name: 'Get a Free Landing Page', href: '/SliceOfTheMarket', id: 'landing-page', isSpecial: true },
    ];

    useEffect(() => {
        // REMOVED: handleScroll function for navbar styling

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        navLinks.forEach((link) => {
            const section = document.getElementById(link.id);
            if (section) observer.observe(section);
        });

        // REMOVED: window.addEventListener('scroll', handleScroll);

        return () => {
            // REMOVED: window.removeEventListener('scroll', handleScroll);
            navLinks.forEach((link) => {
                const section = document.getElementById(link.id);
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const scrollToSection = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                const offsetTop = element.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                setIsMobileMenuOpen(false);
            }
        }
    };

    return (
        <nav
            // UPDATED: Fixed style (No longer conditional). 
            // Added 'bg-white', 'shadow-sm', 'border-b' permanently.
            className="w-full z-50 font-outfit bg-white shadow-sm border-b border-gray-100 py-3"
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <a href="/" className="flex items-center gap-3 cursor-pointer select-none group">
                        <img
                            src="/LogoDark.png"
                            alt="Pie.io Logo"
                            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
                        />
                    </a>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden xl:flex items-center gap-8">

                        <div className="flex items-center gap-2">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.id;

                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className={`
                                            px-4 py-2 text-sm font-medium transition-all duration-200
                                            ${isActive
                                                ? 'bg-[#4686BC]/10 text-[#4686BC] font-bold'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                            }
                                            ${link.isSpecial ? 'text-[#4686BC]' : ''}
                                        `}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                        </div>

                        <div className="h-6 w-px bg-gray-300"></div>

                        <div className="flex items-center gap-3">
                            <button className="bg-[#4686BC] hover:bg-[#3972a5] text-white px-5 py-2.5 font-bold text-sm transition-all shadow-md hover:shadow-lg">
                                Referrals
                            </button>
                            <button className="bg-[#4686BC] hover:bg-[#3972a5] text-white px-5 py-2.5 font-bold text-sm transition-all shadow-md hover:shadow-lg">
                                Apply For Processing
                            </button>
                            <a
                                href="#login"
                                className="px-5 py-2.5 text-sm font-bold text-[#4686BC] border-2 border-[#4686BC] hover:bg-[#4686BC] hover:text-white transition-all"
                            >
                                Login
                            </a>
                        </div>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        className="xl:hidden p-2 text-gray-700 hover:text-[#4686BC] transition-colors text-2xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl xl:hidden flex flex-col items-center py-8 gap-6 transition-all duration-300 ease-in-out transform origin-top
                    ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
                `}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className={`font-medium text-lg transition-colors 
                            ${activeSection === link.id ? 'text-[#4686BC] font-bold bg-blue-50 w-full text-center py-2' : 'text-gray-800 hover:text-[#4686BC]'}
                        `}
                    >
                        {link.name}
                    </a>
                ))}

                <hr className="w-1/4 border-gray-200 my-2" />

                <div className="flex flex-col gap-3 w-3/4 max-w-xs">
                    <button className="bg-[#4686BC] hover:bg-[#3972a5] text-white px-6 py-3 font-bold shadow-md w-full transition-all">
                        Referrals
                    </button>
                    <button className="bg-[#4686BC] hover:bg-[#3972a5] text-white px-6 py-3 font-bold shadow-md w-full transition-all">
                        Apply For Processing
                    </button>
                    <a href="#login" className="text-center w-full px-6 py-3 font-bold text-[#4686BC] border-2 border-[#4686BC] hover:bg-[#4686BC] hover:text-white transition-all">
                        Login
                    </a>
                </div>
            </div>

        </nav>
    );
};

export default NavBar;