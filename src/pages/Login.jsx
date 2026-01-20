import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaArrowRight, FaLock } from "react-icons/fa";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network delay
        setTimeout(() => {
            console.log("Login Submitted:", { email, password });
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen w-full flex font-outfit bg-white">

            {/* LEFT SIDE - BRANDING / VISUAL */}
            {/* Hidden on mobile, visible on lg screens and up */}
            <div className="hidden lg:flex w-1/2 xl:w-5/12 bg-[#051B31] relative overflow-hidden flex-col justify-between p-12 text-white">

                {/* Abstract Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#4686BC] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#48A64D] rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                {/* Logo Area */}
                <div className="relative z-10">
                    <img
                        src="/LogoWhite.png"
                        alt="PiePay Logo"
                        className="h-10 w-auto object-contain"
                        // Fallback if image missing:
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    {/* Text fallback if logo image fails to load */}
                    <span className="text-2xl font-bold tracking-tight" style={{ display: 'none' }}>PiePay</span>
                </div>

                {/* Main Content */}
                <div className="relative z-10 mb-20">
                    <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight mb-6">
                        Turn every transaction into a <span className="text-[#48A64D]">relationship.</span>
                    </h1>
                    <p className="text-blue-100 text-lg leading-relaxed max-w-md">
                        Join thousands of merchants who are streamlining payments and boosting customer loyalty with PiePay.
                    </p>
                </div>

                {/* Footer / Copyright */}
                <div className="relative z-10 text-sm text-blue-200/60">
                    &copy; {new Date().getFullYear()} PiePay Inc. All rights reserved.
                </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="w-full lg:w-1/2 xl:w-7/12 flex items-center justify-center p-6 bg-slate-50 lg:bg-white">
                <div className="w-full max-w-md">

                    {/* Mobile Logo (Visible only on small screens) */}
                    <div className="lg:hidden mb-10 text-center">
                        <img src="/LogoDark.png" alt="PiePay" className="h-10 mx-auto" />
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/60 lg:shadow-none border border-slate-100 lg:border-none">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-[#051B31] mb-2">Welcome back</h2>
                            <p className="text-slate-500">Please enter your details to sign in.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-[#051B31] mb-2">Email address</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@company.com"
                                    className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-[#051B31] placeholder-slate-400 focus:bg-white focus:border-[#4686BC] focus:ring-2 focus:ring-[#4686BC]/20 transition-all outline-none"
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label htmlFor="password" class="block text-sm font-bold text-[#051B31]">Password</label>
                                    <a href="#" className="text-sm font-semibold text-[#4686BC] hover:text-[#051B31] transition-colors">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-[#051B31] placeholder-slate-400 focus:bg-white focus:border-[#4686BC] focus:ring-2 focus:ring-[#4686BC]/20 transition-all outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#4686BC] transition-colors"
                                    >
                                        {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#48A64D] hover:bg-[#3e9142] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Signing in...' : 'Sign in'}
                                {!isLoading && <FaArrowRight className="group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-slate-500">
                                Don't have an account?{' '}
                                <a href="#" className="font-bold text-[#051B31] hover:text-[#4686BC] transition-colors">
                                    Apply now
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;