import React from 'react';
import { FaShoppingBag, FaHeart, FaArrowRight } from "react-icons/fa";

const ProShopGrid = () => {

    // Extracted Data from the image
    const products = [
        {
            id: 1,
            name: "Laptop Sleeve",
            price: "$35.75",
            image: "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?q=80&w=1000&auto=format&fit=crop", // Placeholder: Laptop sleeve/tech
            tag: "Essential"
        },
        {
            id: 2,
            name: "Black Coffee Cup, 11oz",
            price: "$16.85",
            image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1000&auto=format&fit=crop", // Placeholder: Black Mug
            tag: null
        },
        {
            id: 3,
            name: "Unisex Ultra Cotton Long Sleeve",
            price: "$29.33+",
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop", // Placeholder: White Shirt
            tag: "Best Seller"
        },
        {
            id: 4,
            name: "Unisex Ultra Cotton Long Sleeve (Black)",
            price: "$26.55+",
            image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1000&auto=format&fit=crop", // Placeholder: Black Shirt
            tag: null
        },
        {
            id: 5,
            name: "Spiritual Unisex Zip Hoodie",
            price: "$113.95+",
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop", // Placeholder: Hoodie
            tag: "Premium"
        },
        {
            id: 6,
            name: "Men's Sport Polo Shirt",
            price: "$58.18+",
            image: "https://images.unsplash.com/photo-1625910515337-3f3c34700f19?q=80&w=1000&auto=format&fit=crop", // Placeholder: Polo
            tag: null
        },
        {
            id: 7,
            name: "Inspirational Fleece Hoodie",
            price: "$71.78+",
            image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1000&auto=format&fit=crop", // Placeholder: White Hoodie
            tag: null
        }
    ];

    return (
        <section className="w-full bg-white font-outfit py-7">
            {/* Width Constraint: max-w-5xl (Smaller than banner) */}
            <div className="container mx-auto px-6 max-w-5xl">

                {/* HEADER */}
                <div className="flex flex-col items-center text-center mb-12">
                    <span className="text-[#48A64D] font-bold tracking-[0.2em] uppercase text-xs mb-2">
                        Official Merchandise
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#051B31] mb-4">
                        All Products
                    </h2>
                    <div className="w-12 h-1 bg-[#4686BC] rounded-full"></div>
                </div>

                {/* PRODUCT GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative flex flex-col bg-white rounded-xl transition-all duration-300 hover:-translate-y-1"
                        >

                            {/* IMAGE CONTAINER */}
                            <div className="relative aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden mb-4 border border-gray-100 group-hover:shadow-lg transition-shadow">

                                {/* Product Image */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                />

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-[#051B31]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Floating Actions (Appear on Hover) */}
                                <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#051B31] shadow-md hover:text-[#48A64D] hover:scale-110 transition-all">
                                        <FaHeart size={12} />
                                    </button>
                                </div>

                                {/* Tag Badge */}
                                {product.tag && (
                                    <div className="absolute top-3 left-3 bg-[#051B31] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm shadow-sm">
                                        {product.tag}
                                    </div>
                                )}
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="flex flex-col flex-grow">
                                <h3 className="text-[#051B31] font-bold text-lg leading-tight mb-1 group-hover:text-[#4686BC] transition-colors">
                                    {product.name}
                                </h3>

                                <div className="flex items-center justify-between mt-1 mb-4">
                                    <span className="text-[#48A64D] font-bold font-mono text-lg">
                                        {product.price}
                                    </span>
                                    <div className="h-px bg-gray-100 flex-grow ml-4"></div>
                                </div>

                                {/* ORDER BUTTON */}
                                <button className="mt-auto w-full py-3 px-4 rounded-lg bg-white border border-[#051B31] text-[#051B31] font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-[#051B31] group-hover:text-white transition-all duration-300">
                                    <span>Order Now</span>
                                    <FaShoppingBag className="mb-0.5" size={12} />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                {/* BOTTOM LINK */}
                <div className="mt-16 text-center">
                    <a href="#" className="inline-flex items-center gap-2 text-[#051B31] font-medium hover:text-[#48A64D] transition-colors border-b border-transparent hover:border-[#48A64D] pb-0.5">
                        <span>View Full Catalog</span>
                        <FaArrowRight size={12} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ProShopGrid;