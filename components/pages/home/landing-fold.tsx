'use client'

import React from 'react'
import HomePageLanding from '@/public/imgs/Heroage.jpg'

const LandingFold: React.FC = () => {
    return (
        <section className="relative flex items-center justify-center px-6 sm:px-10 xl:px-20 2xl:px-32 py-16 sm:py-20 min-h-[650px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: `url(${HomePageLanding.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(65%)',
                }}
            ></div>

            {/* Content Container */}
            <div className="relative w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left text-gray-100 space-y-8">
                    {/* Tagline */}
                    <span className="inline-block text-green-500 font-medium text-sm md:text-base tracking-widest uppercase">
                        Welcome to Trade Afrika Group
                    </span>

                    {/* Heading */}
                    <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.2] font-bold text-gray-100 max-w-3xl mx-auto lg:mx-0">
                        Powering Africa&apos;s
                        <br />
                        Digital Trade
                        <br />
                        Revolution
                    </h1>

                    {/* Description */}
                    <p className="text-[15px] leading-[1.5] font-light text-gray-200 max-w-2xl mx-auto lg:mx-0">
                        We drive <span className="font-semibold text-white">Africa&apos;s digital trade transformation</span> by combining technology, partnerships, and capacity building — connecting businesses and equipping <span className="font-semibold text-white">MSMEs</span> with digital trade skills, logistics, and fintech partnerships for seamless, secure, and inclusive trade under the <span className="font-semibold text-white">AfCFTA</span>.
                    </p>

                    {/* CTA */}
                    <div>
                        <button className="bg-green-700 hover:bg-green-800 text-white text-[16px] leading-[1.5] font-normal px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                            Explore Our Divisions
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingFold
