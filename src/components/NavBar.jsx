import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom'; // 1. Import hooks

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const navigate = useNavigate(); // 2. Initialize hook
    const location = useLocation(); // To track current route

    const navLinks = [
        { name: 'PiePay Earning Analysis', href: '/EarningAnalysis', id: 'earning-analysis' },
        { name: 'Pie ProShop', href: '/PieProShop', id: 'proshop' },
        { name: 'Get a Free Landing Page', href: '/SliceOfTheMarket', id: 'landing-page', isSpecial: true },
        // Removed Login from here to handle it separately like the desktop view
    ];

    // Handle scroll spy only if on homepage
    useEffect(() => {
        if (location.pathname !== '/') return;

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

        return () => {
            navLinks.forEach((link) => {
                const section = document.getElementById(link.id);
                if (section) observer.unobserve(section);
            });
        };
    }, [location.pathname]);

    // 3. Updated Navigation Handler
    const handleNavigation = (path, sectionId) => {
        setIsMobileMenuOpen(false); // Close menu first

        // If it's an internal page route
        if (path.startsWith('/')) {
            navigate(path);
            return;
        }

        // If it's a scroll anchor on the home page (starts with #)
        if (path.startsWith('#')) {
            if (location.pathname !== '/') {
                // If not on home, go home first, then scroll (simple version just goes home)
                navigate('/');
                // You would typically need a useEffect on Home to check hash and scroll
            } else {
                const element = document.querySelector(path);
                if (element) {
                    const offsetTop = element.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 font-outfit bg-white shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-6 md:px-12 py-3">
                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <div
                        onClick={() => navigate('/')}
                        className="flex items-center gap-3 cursor-pointer select-none group"
                    >
                        <img
                            src="/LogoDark.png"
                            alt="Pie.io Logo"
                            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
                        />
                    </div>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            {navLinks.map((link) => {
                                // Check active state based on path match
                                const isActive = location.pathname === link.href;

                                return (
                                    <button
                                        key={link.name}
                                        onClick={() => handleNavigation(link.href, link.id)}
                                        className={`
                                            px-4 py-2 text-sm  cursor-pointer font-medium transition-all duration-200 rounded-md
                                            ${isActive
                                                ? 'bg-[#4686BC]/10 text-[#4686BC] font-bold'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                            }
                                            ${link.isSpecial ? 'text-[#4686BC]' : ''}
                                        `}
                                    >
                                        {link.name}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="h-6 w-px bg-gray-300"></div>

                        <div className="flex items-center gap-3">
                            <button className="bg-[#4686BC] hover:bg-[#3972a5] cursor-pointer text-white px-5 py-2.5 font-bold text-sm transition-all shadow-md hover:shadow-lg rounded">
                                Referrals
                            </button>
                            <button className="bg-[#4686BC] cursor-pointer hover:bg-[#3972a5] text-white px-5 py-2.5 font-bold text-sm transition-all shadow-md hover:shadow-lg rounded">
                                Apply For Processing
                            </button>

                            {/* Login Button using navigate */}
                            <button
                                onClick={() => navigate('/login')}
                                className="px-5 cursor-pointer py-2.5 text-sm font-bold text-[#4686BC] border-2 border-[#4686BC] hover:bg-[#4686BC] hover:text-white transition-all rounded"
                            >
                                Login
                            </button>
                        </div>
                    </div>

                    {/* MOBILE TOGGLE BUTTON */}
                    <button
                        className="lg:hidden p-2 text-gray-700 cursor-pointer hover:text-[#4686BC] transition-colors text-2xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </div>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            <div
                className={`
                    absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 
                    flex flex-col items-center py-8 gap-6 lg:hidden 
                    transition-all duration-300 ease-in-out origin-top z-40
                    ${isMobileMenuOpen
                        ? 'opacity-100 scale-y-100 visible'
                        : 'opacity-0 scale-y-0 invisible'
                    }
                `}
            >
                {navLinks.map((link) => (
                    <button
                        key={link.name}
                        onClick={() => handleNavigation(link.href, link.id)}
                        className={`font-medium cursor-pointer text-lg transition-colors w-full text-center py-3
                            ${location.pathname === link.href ? 'text-[#4686BC] font-bold bg-blue-50' : 'text-gray-800 hover:text-[#4686BC]'}
                        `}
                    >
                        {link.name}
                    </button>
                ))}

                <hr className="w-1/3 border-gray-200 my-2" />

                <div className="flex flex-col gap-4 w-3/4 max-w-xs">
                    <button className="bg-[#4686BC] hover:bg-[#3972a5] text-white px-6 py-3 font-bold shadow-md w-full transition-all rounded">
                        Referrals
                    </button>
                    <button className="bg-[#4686BC] hover:bg-[#3972a5] text-white px-6 py-3 font-bold shadow-md w-full transition-all rounded">
                        Apply For Processing
                    </button>
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            navigate('/login');
                        }}
                        className="text-center w-full px-6 py-3 font-bold text-[#4686BC] border-2 border-[#4686BC] hover:bg-[#4686BC] hover:text-white transition-all rounded"
                    >
                        Login
                    </button>
                </div>
            </div>

        </nav>
    );
};

export default NavBar;