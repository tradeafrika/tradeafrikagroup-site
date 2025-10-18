'use client'

import React from 'react'
import { Calendar } from 'lucide-react'

const ProgramsEventsHero: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center px-6 sm:px-10 lg:px-20 xl:px-32 2xl:px-48 py-20 min-h-[400px] md:min-h-[480px]">
            <div className="w-full max-w-[1600px] text-center">
                
                {/* Tagline */}
                <p className="text-emerald-600 font-medium uppercase tracking-wide text-xs sm:text-sm md:text-base mb-3">
                    Programs & Events
                </p>

                {/* Heading */}
                <h1 className="text-[#087a49] text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                    Programs & Events
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl sm:max-w-2xl md:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto mb-10">
                    Practical resources enabling West trade readiness across Africa.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-emerald-600 flex items-center justify-center gap-2 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base">
                        <Calendar className="w-5 h-5" />
                        View Calendar
                    </button>

                    <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 sm:px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base">
                        Become a Partner
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProgramsEventsHero
