import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRight, FaCloudUploadAlt, FaCheckCircle } from 'react-icons/fa';

// --- Reusable Components ---

const InputField = ({ label, name, register, errors, required, type = "text", placeholder }) => (
    <div className="w-full">
        <label htmlFor={name} className="block text-sm font-bold text-[#051B31] mb-2">
            {label} {required && <span className="text-red-500">*</span>}
            {!required && label.includes('(Optional)') ? '' : !required ? ' (Optional)' : ''}
        </label>
        <input
            id={name}
            type={type}
            placeholder={placeholder}
            {...register(name, { required: required ? `${label.replace(' *', '')} is required` : false })}
            className={`w-full px-4 py-3.5 rounded-lg bg-slate-50 border ${errors[name] ? 'border-red-500' : 'border-slate-200'} text-[#051B31] placeholder-slate-400 focus:bg-white focus:border-[#4686BC] focus:ring-4 focus:ring-[#4686BC]/10 transition-all outline-none`}
        />
        {errors[name] && <p className="text-red-500 text-xs mt-1 font-medium">{errors[name].message}</p>}
    </div>
);

const TextAreaField = ({ label, name, register, errors, required, placeholder }) => (
    <div className="w-full">
        <label htmlFor={name} className="block text-sm font-bold text-[#051B31] mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
            id={name}
            rows="4"
            placeholder={placeholder}
            {...register(name, { required: required ? `${label.replace(' *', '')} is required` : false })}
            className={`w-full px-4 py-3.5 rounded-lg bg-slate-50 border ${errors[name] ? 'border-red-500' : 'border-slate-200'} text-[#051B31] placeholder-slate-400 focus:bg-white focus:border-[#4686BC] focus:ring-4 focus:ring-[#4686BC]/10 transition-all outline-none resize-none`}
        ></textarea>
        {errors[name] && <p className="text-red-500 text-xs mt-1 font-medium">{errors[name].message}</p>}
    </div>
);

const CheckboxField = ({ label, name, register, description }) => (
    <div className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-[#4686BC]/30 transition-colors">
        <div className="flex items-center h-5">
            <input
                id={name}
                type="checkbox"
                {...register(name)}
                className="w-5 h-5 text-[#48A64D] border-slate-300 rounded focus:ring-[#48A64D] focus:ring-offset-0 cursor-pointer accent-[#48A64D]"
            />
        </div>
        <div className="ml-3 text-sm">
            <label htmlFor={name} className="font-bold text-[#051B31] cursor-pointer select-none">{label}</label>
            {description && <p className="text-slate-500 mt-0.5 text-xs leading-relaxed">{description}</p>}
        </div>
    </div>
);

// --- Main Page Component ---

const CreateDemo = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Demo Request Data:", data);
        alert("Demo request submitted successfully!");
    };

    return (
        <div className="flex min-h-screen w-full font-outfit bg-white py-10">

            {/* --- LEFT PANEL: Branding (Sticky Sidebar) --- */}
            <div className="hidden lg:flex lg:w-5/12 xl:w-4/12 bg-[#051B31] relative flex-col justify-between p-12 lg:fixed lg:h-full z-10 text-white">

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#4686BC] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#48A64D] rounded-full blur-[90px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                {/* Logo */}
                <div className="relative z-10">
                    <img
                        src="/LogoWhite.png"
                        alt="Pie.io"
                        className="h-10 w-auto object-contain"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    {/* Fallback Text */}
                    <span className="text-2xl font-bold tracking-tight hidden group-hover:block">Pie.io</span>
                </div>

                {/* Value Prop */}
                <div className="relative z-10 my-auto">
                    <h1 className="text-4xl xl:text-5xl font-extrabold leading-[1.1] mb-6">
                        See how much <br />
                        <span className="text-[#48A64D]">better</span> payments can be.
                    </h1>
                    <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-sm">
                        Schedule a personalized demo to see how our platform streamlines operations and boosts your bottom line.
                    </p>

                    {/* List */}
                    <ul className="space-y-4 text-sm font-medium text-white/80">
                        <li className="flex items-center gap-3">
                            <FaCheckCircle className="text-[#48A64D]" /> <span>Zero hidden fees</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaCheckCircle className="text-[#48A64D]" /> <span>Instant onboarding</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaCheckCircle className="text-[#48A64D]" /> <span>24/7 dedicated support</span>
                        </li>
                    </ul>
                </div>

                {/* Copyright */}
                <div className="relative z-10 text-xs text-blue-200/50 font-mono">
                    © {new Date().getFullYear()} Pie.io Inc.
                </div>
            </div>

            {/* --- RIGHT PANEL: Form (Scrollable) --- */}
            <div className="w-full lg:w-7/12 xl:w-8/12 ml-auto bg-white min-h-screen flex flex-col justify-center py-12 px-6 sm:px-12 lg:px-24 xl:px-32">

                <div className="w-full max-w-3xl mx-auto">

                    {/* Mobile Logo Header */}
                    <div className="lg:hidden mb-8 text-center">
                        <img src="/LogoDark.png" alt="Pie.io" className="h-10 mx-auto mb-4" />
                        <h1 className="text-3xl font-extrabold text-[#051B31]">Request a Demo</h1>
                    </div>

                    {/* Desktop Header */}
                    <div className="hidden lg:block mb-10">
                        <h2 className="text-3xl xl:text-4xl font-extrabold text-[#051B31] mb-3">
                            Let's get started
                        </h2>
                        <p className="text-slate-500 text-lg">
                            Tell us a bit about the business so we can tailor the demo.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                        {/* Section: Contact Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField label="Business Owner Name" name="ownerName" register={register} errors={errors} required placeholder="e.g. John Smith" />
                            <InputField label="Business Name" name="businessName" register={register} errors={errors} required placeholder="e.g. Smith's Bakery" />
                            <InputField label="Agent Name" name="agentName" register={register} errors={errors} required placeholder="Your Name" />

                            <div className="w-full">
                                <label htmlFor="email" className="block text-sm font-bold text-[#051B31] mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                    })}
                                    className={`w-full px-4 py-3.5 rounded-lg bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} text-[#051B31] focus:bg-white focus:border-[#4686BC] focus:ring-4 focus:ring-[#4686BC]/10 transition-all outline-none`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                            </div>

                            <InputField label="Phone Number" name="phone" register={register} errors={errors} required type="tel" placeholder="(555) 000-0000" />
                            <InputField label="Website URL" name="website" register={register} errors={errors} type="url" placeholder="https://example.com" />
                        </div>

                        {/* Section: Details */}
                        <TextAreaField
                            label="Business Description"
                            name="description"
                            register={register}
                            errors={errors}
                            required
                            placeholder="Briefly describe the business model, products, and target audience..."
                        />

                        {/* Section: Preferences */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CheckboxField
                                label="Request specific date/time"
                                name="requestDemoTime"
                                register={register}
                                description="I have a preferred slot for the demo."
                            />
                            <CheckboxField
                                label="Additional Information"
                                name="moreInfo"
                                register={register}
                                description="I have more details to add later."
                            />
                        </div>

                        {/* Section: Upload */}
                        <div className="pt-2">
                            <label className="block text-sm font-bold text-[#051B31] mb-2">Business Logo (Optional)</label>
                            <div className="relative border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors p-8 text-center cursor-pointer group">
                                <input
                                    type="file"
                                    {...register("logo")}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                <div className="flex flex-col items-center justify-center">
                                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <FaCloudUploadAlt className="text-2xl text-[#4686BC]" />
                                    </div>
                                    <p className="text-sm font-semibold text-[#051B31]">Click to upload or drag and drop</p>
                                    <p className="text-xs text-slate-500 mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-4 border-t border-slate-100 mt-8">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group w-full bg-[#48A64D] hover:bg-[#3e9142] text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg shadow-[#48A64D]/20 hover:shadow-xl hover:shadow-[#48A64D]/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Submitting...' : 'Request Demo'}
                                {!isSubmitting && <FaArrowRight className="group-hover:translate-x-1 transition-transform" />}
                            </button>
                            <p className="text-center text-xs text-slate-400 mt-4">
                                By clicking submit, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateDemo;