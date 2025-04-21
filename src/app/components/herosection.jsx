import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

const Herosection = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&q=80"
                    alt="Background Image"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlay with brand colors */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4B0800]/90 to-[#0F1110]/90"></div>

            {/* Diagonal accent */}
            <div className="absolute inset-0 bg-[#D91111]/10 transform -skew-y-6 origin-top-left"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="max-w-2xl">
                    <div className="flex items-center space-x-2 mb-8">
                        <Flame className="w-6 h-6 text-[#D91111]" />
                        <span className="text-[#BCB2B1] uppercase tracking-wider text-sm font-medium">
                            Urban Culture Redefined
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
                        <span className="block">Where Lagos Grit</span>
                        <span className="block text-[#D91111]">Meets Street Style</span>
                    </h1>

                    <p className="text-[#BCB2B1] text-lg max-w-md mb-12">
                        Bold designs forged in the streets, refined for those who dare to
                        stand out. Experience the fusion of biker culture and urban fashion.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {/* Shop Collection Button */}
                        <button className="px-8 py-4 bg-[#D91111] hover:bg-[#9C1205] text-white font-medium rounded-md transition-colors duration-300 flex items-center space-x-2 group">
                            <span>Shop Collection</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>

                        {/* About Us Button */}
                        <button className="px-8 py-4 border-2 border-[#5B6366] hover:bg-[#D91111] hover:border-[#D91111] text-white font-medium rounded-md transition-colors duration-300 transform hover:scale-105 active:scale-95">
                            About Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Herosection;

