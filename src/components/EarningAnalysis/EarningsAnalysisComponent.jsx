import React, { useState } from 'react';
import { FaInfoCircle, FaChartLine, FaPiggyBank, FaChevronDown } from "react-icons/fa";

const EarningsAnalysisComponent = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        merchantName: '',
        agentName: '',
        notes: '',
        businessVolume: 0,
        piePayFee: 0,
        currentMonthlyFees: 0,
        avgReferralVolume: 0,
        numReferredMerchants: 0,
        period: 'Monthly'
    });

    // Mock calculations
    const calculatedIncome = formData.avgReferralVolume * formData.numReferredMerchants * 0.01;
    const savingsPercentage = 0.00;
    const earningsPercentage = 0.00;
    const totalSavings = 0.00;
    const totalEarnings = 0.00;

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'number' || type === 'range' ? Number(value) : value
        }));
    };

    // Reusable Input Field
    const SliderInput = ({ label, name, value, onChange, prefix = "" }) => (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <label htmlFor={name} className="block text-sm font-bold text-[#051B31]">{label}</label>
                <span className="text-sm font-bold text-[#48A64D]">{prefix}{value.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-4">
                <input
                    type="range"
                    id={`${name}-range`}
                    name={name}
                    min="0"
                    max="100000"
                    value={value}
                    onChange={onChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#48A64D]"
                    style={{
                        background: `linear-gradient(to right, #48A64D 0%, #48A64D ${(value / 100000) * 100}%, #e5e7eb ${(value / 100000) * 100}%, #e5e7eb 100%)`
                    }}
                />
                <div className="relative w-32 shrink-0">
                    {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{prefix}</span>}
                    <input
                        type="number"
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        className={`w-full rounded-md border-gray-300 py-2.5 ${prefix ? 'pl-7' : 'pl-4'} pr-3 text-[#051B31] shadow-sm focus:border-[#4686BC] focus:ring-[#4686BC] sm:text-sm transition-all`}
                    />
                </div>
            </div>
        </div>
    );

    return (
        // UPDATED:
        // 1. Added 'pt-28' (padding-top) to push content down below the fixed navbar.
        // 2. Reduced 'pb-16' to 'pb-10' to balance the bottom spacing.
        <section className="w-full font-outfit pt-28 pb-10 px-4 bg-[#051B31]">
            <div className="container mx-auto max-w-6xl">

                {/* Main Container */}
                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">

                    {/* Header */}
                    <div className="text-center pt-12 pb-8 px-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#051B31] tracking-tight mb-2">
                            PiePay Earnings Analysis
                        </h2>
                        <div className="w-20 h-1.5 bg-[#48A64D] mx-auto rounded-full"></div>
                    </div>

                    <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* LEFT COLUMN - INPUTS */}
                        <div className="lg:col-span-7 space-y-6">
                            <h3 className="text-xl font-bold text-[#051B31] mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#4686BC]"><FaChartLine /></span>
                                Input Data
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="merchantName" className="block text-sm font-bold text-[#051B31] mb-2">Merchant Name</label>
                                    <input type="text" name="merchantName" id="merchantName" value={formData.merchantName} onChange={handleInputChange} placeholder="Enter merchant name" className="w-full rounded-md border-gray-300 py-3 px-4 text-[#051B31] shadow-sm focus:border-[#4686BC] focus:ring-[#4686BC] transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="agentName" className="block text-sm font-bold text-[#051B31] mb-2">Agent Name</label>
                                    <input type="text" name="agentName" id="agentName" value={formData.agentName} onChange={handleInputChange} placeholder="Enter agent name" className="w-full rounded-md border-gray-300 py-3 px-4 text-[#051B31] shadow-sm focus:border-[#4686BC] focus:ring-[#4686BC] transition-all" />
                                </div>
                            </div>

                            <div className="my-8 border-t border-gray-100"></div>

                            <SliderInput label="Business Volume" name="businessVolume" value={formData.businessVolume} onChange={handleInputChange} prefix="$" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <SliderInput label="PiePay Monthly Fee" name="piePayFee" value={formData.piePayFee} onChange={handleInputChange} prefix="$" />
                                <div>
                                    <label htmlFor="currentMonthlyFees" className="block text-sm font-bold text-[#051B31] mb-2">Current Monthly Fees</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                        <input type="number" name="currentMonthlyFees" id="currentMonthlyFees" value={formData.currentMonthlyFees} onChange={handleInputChange} className="w-full rounded-md border-gray-300 py-3 pl-7 pr-4 text-[#051B31] shadow-sm focus:border-[#4686BC] focus:ring-[#4686BC] transition-all" />
                                    </div>
                                </div>
                            </div>

                            <div className="my-8 border-t border-gray-100"></div>

                            <SliderInput label="Average Referral Account Volume" name="avgReferralVolume" value={formData.avgReferralVolume} onChange={handleInputChange} prefix="$" />
                            <SliderInput label="Number of Referred Merchants" name="numReferredMerchants" value={formData.numReferredMerchants} onChange={handleInputChange} />

                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <label className="block text-sm font-bold text-[#051B31] mb-2">Monthly Income from Referrals Account</label>
                                <div className="text-2xl font-bold text-[#4686BC]">
                                    ${calculatedIncome.toFixed(2)}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - RESULTS */}
                        <div className="lg:col-span-5 flex flex-col h-full">
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <label htmlFor="notes" className="block text-sm font-bold text-[#051B31]">Notes</label>
                                    <span className="text-xs text-gray-400">{formData.notes.length}/500</span>
                                </div>
                                <textarea name="notes" id="notes" rows={4} maxLength={500} value={formData.notes} onChange={handleInputChange} placeholder="Add context..." className="w-full rounded-md border-gray-300 py-3 px-4 text-[#051B31] shadow-sm focus:border-[#4686BC] focus:ring-[#4686BC] resize-none transition-all"></textarea>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex-grow flex flex-col">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-xl font-bold text-[#051B31] flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-[#48A64D]"><FaPiggyBank /></span>
                                        Projected Results
                                    </h3>
                                    <div className="relative">
                                        <select name="period" value={formData.period} onChange={handleInputChange} className="appearance-none bg-white border border-gray-200 rounded-full py-2 pl-6 pr-10 font-bold text-[#051B31] cursor-pointer focus:outline-none focus:border-[#4686BC] shadow-sm">
                                            <option>Monthly</option>
                                            <option>Yearly</option>
                                        </select>
                                        <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={12} />
                                    </div>
                                </div>

                                <div className="flex justify-around mb-10">
                                    <div className="flex flex-col items-center">
                                        <div className="relative w-28 h-28 flex items-center justify-center rounded-full border-[6px] border-[#4686BC]/20 bg-white shadow-inner mb-3">
                                            <div className="text-center">
                                                <span className="block text-sm font-bold text-[#4686BC] uppercase tracking-wider">Savings</span>
                                                <span className="block text-2xl font-extrabold text-[#051B31]">{savingsPercentage.toFixed(2)}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="relative w-28 h-28 flex items-center justify-center rounded-full border-[6px] border-[#48A64D]/20 bg-white shadow-inner mb-3">
                                            <div className="text-center">
                                                <span className="block text-sm font-bold text-[#48A64D] uppercase tracking-wider">Earnings</span>
                                                <span className="block text-2xl font-extrabold text-[#051B31]">{earningsPercentage.toFixed(2)}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 mt-auto">
                                    <div className="bg-gradient-to-r from-[#4686BC] to-[#357abd] rounded-xl p-6 text-white text-center shadow-lg shadow-blue-900/10">
                                        <h4 className="text-lg font-medium mb-1 opacity-90">Total Savings with PiePay</h4>
                                        <div className="text-4xl font-extrabold">${totalSavings.toFixed(2)}</div>
                                    </div>

                                    <div className="bg-gradient-to-r from-[#48A64D] to-[#3e9142] rounded-xl p-6 text-white text-center shadow-lg shadow-green-900/10">
                                        <h4 className="text-lg font-medium mb-1 opacity-90">Total Earnings with GetPie</h4>
                                        <div className="text-4xl font-extrabold">${totalEarnings.toFixed(2)}</div>
                                        <p className="text-xs mt-2 opacity-75 font-medium">(Earnings = business volume cash back + referral cash back)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 border-t border-gray-100">
                        <div className="flex justify-center mb-8">
                            <button className="bg-[#48A64D] cursor-pointer hover:bg-[#4686BC] text-white text-lg font-bold py-4 px-12 rounded-full shadow-xl hover:bg-[#3e9142] hover:scale-105 transition-all duration-300 uppercase tracking-widest">
                                Get Your Analysis
                            </button>
                        </div>

                        <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-start gap-3 max-w-4xl mx-auto">
                            <FaInfoCircle className="text-[#4686BC] mt-1 shrink-0" />
                            <p className="text-sm text-slate-600 leading-relaxed">
                                <span className="font-bold text-[#051B31]">DISCLAIMER:</span> Analysis is for assessment purposes only. Final cash back and savings will depend on business volume, card type and other factors. PiePay does not guarantee a minimum cash back or savings amount based on this calculation.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EarningsAnalysisComponent;