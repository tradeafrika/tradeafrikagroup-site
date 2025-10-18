'use client'

import React from 'react'

const DivisionsHero: React.FC = () => {
    return (
        <section className="bg-[#e6f2ed] flex items-center justify-center py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-40">
            <div className="w-full max-w-[1600px] text-center">
                {/* Tagline */}
                <p className="text-emerald-600 font-semibold uppercase tracking-wide mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
                    Our Divisions
                </p>

                {/* Main Heading */}
                <h1 className="text-[#087a49] text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                    Our Divisions
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-xl sm:max-w-2xl md:max-w-3xl 2xl:max-w-4xl mx-auto">
                    Four operational arms advancing digital trade across Africa.
                </p>
            </div>
        </section>
    )
}

export default DivisionsHero

