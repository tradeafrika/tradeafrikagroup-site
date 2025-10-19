'use client'

import React from 'react'

const HeroSection: React.FC = () => {
    return (
        <section className="bg-[#e6f2ed] flex items-center justify-center py-16 sm:py-24 md:py-28 lg:py-32 xl:py-40 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-40">
            <div className="w-full max-w-[1600px] text-center">
                {/* Small heading */}
                <span className="text-green-700 text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase mb-4 sm:mb-6">
                    About Trade Afrika Group
                </span>

                {/* Main heading */}
                <h1 className="text-green-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold mb-6 sm:mb-8 leading-tight">
                    About Trade Afrika Group
                </h1>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light leading-relaxed max-w-2xl sm:max-w-3xl md:max-w-4xl xl:max-w-5xl mx-auto">
                    Trade Afrika Group (TAG) is a Pan-African digital trade ecosystem accelerating Africa&apos;s
                    participation in the global digital economy through innovation, inclusion, and integration.
                </p>
            </div>
        </section>
    )
}

export default HeroSection
