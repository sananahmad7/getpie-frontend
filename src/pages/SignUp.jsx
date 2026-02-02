import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaArrowRight, FaCheck } from "react-icons/fa";

const SignUp = () => {
    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agreeTerms: false,
        agreeSms: false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            console.log("Sign Up Submitted:", formData);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen w-full flex font-outfit bg-white">

            {/* LEFT SIDE - BRANDING / VISUAL (Same layout as Login for consistency) */}
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
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <span className="text-2xl font-bold tracking-tight" style={{ display: 'none' }}>PiePay</span>
                </div>

                {/* Main Content */}
                <div className="relative z-10 mb-20">
                    <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight mb-6">
                        Join the <span className="text-[#48A64D]">revolution</span> in payments.
                    </h1>
                    <p className="text-blue-100 text-lg leading-relaxed max-w-md">
                        Create an account today to start saving on fees and building stronger customer relationships.
                    </p>
                </div>

                {/* Footer */}
                <div className="relative z-10 text-sm text-blue-200/60">
                    &copy; {new Date().getFullYear()} PiePay Inc. All rights reserved.
                </div>
            </div>

            {/* RIGHT SIDE - SIGN UP FORM */}
            <div className="w-full lg:w-1/2 xl:w-7/12 flex items-center justify-center p-6 bg-slate-50 lg:bg-white overflow-y-auto">
                <div className="w-full max-w-lg py-8">

                    {/* Mobile Logo */}
                    <div className="lg:hidden mb-8 text-center">
                        <img src="/LogoDark.png" alt="PiePay" className="h-10 mx-auto" />
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/60 lg:shadow-none border border-slate-100 lg:border-none">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-[#051B31] mb-2">Create an account</h2>
                            <p className="text-slate-500">Get your piece of the pie today.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Name Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-bold text-[#051B31] mb-2">First Name *</label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="John"
                                        className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-[#051B31] placeholder-slate-400 focus:bg-white focus:border-[#4686BC] focus:ring-2 focus:ring-[#4686BC]/20 transition-all outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-bold text-[#051B31] mb-2">Last Name *</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-[#051B31] placeholder-slate-400 focus:bg-white focus:border-[#4686BC] focus:ring-2 focus:ring-[#4686BC]/20 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-[#051B31] mb-2">Email Address *</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@company.com"
                                    className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-[#051B31] placeholder-slate-400 focus:bg-white focus:border-[#4686BC] focus:ring-2 focus:ring-[#4686BC]/20 transition-all outline-none"
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" class="block text-sm font-bold text-[#051B31] mb-2">Password *</label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Create a password"
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

                            {/* Checkboxes Area */}
                            <div className="space-y-4 pt-2">
                                {/* Terms */}
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-center mt-0.5">
                                        <input
                                            type="checkbox"
                                            name="agreeTerms"
                                            checked={formData.agreeTerms}
                                            onChange={handleChange}
                                            required
                                            className="peer h-5 w-5 appearance-none border border-slate-300 rounded bg-slate-50 checked:bg-[#4686BC] checked:border-[#4686BC] transition-all focus:ring-2 focus:ring-[#4686BC]/20"
                                        />
                                        <FaCheck className="absolute left-1 top-1 text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                                    </div>
                                    <span className="text-sm text-slate-600 leading-tight">
                                        I agree to Getpie's <a href="#" className="text-[#4686BC] font-semibold hover:underline">Terms & Conditions</a> and <a href="#" className="text-[#4686BC] font-semibold hover:underline">Privacy Policy</a>.
                                    </span>
                                </label>

                                {/* SMS Consent */}
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-center mt-0.5">
                                        <input
                                            type="checkbox"
                                            name="agreeSms"
                                            checked={formData.agreeSms}
                                            onChange={handleChange}
                                            className="peer h-5 w-5 appearance-none border border-slate-300 rounded bg-slate-50 checked:bg-[#4686BC] checked:border-[#4686BC] transition-all focus:ring-2 focus:ring-[#4686BC]/20 shrink-0"
                                        />
                                        <FaCheck className="absolute left-1 top-1 text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                                    </div>
                                    <span className="text-xs text-slate-500 leading-relaxed">
                                        I give consent to Getpie to send me SMS messages related to its services. Messaging frequency is variable. For help, text back "HELP". To unsubscribe, text back "STOP". Standard message and data rates may apply.
                                    </span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading || !formData.agreeTerms}
                                className="w-full mt-4 bg-[#48A64D] hover:bg-[#3e9142] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                            >
                                {isLoading ? 'Creating account...' : 'Sign Up'}
                                {!isLoading && <FaArrowRight className="group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-slate-500">
                                Already have an account?{' '}
                                <a href="/login" className="font-bold text-[#051B31] hover:text-[#4686BC] transition-colors">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;