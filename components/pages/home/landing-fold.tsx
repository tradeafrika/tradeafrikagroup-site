'use client'

import React from 'react'
import HomePageLanding from '@/public/imgs/Heroage.jpg'
import Image from 'next/image'

const LandingFold: React.FC = () => {
    return (
        <section
           
            className="relative   flex items-center px-6 sm:px-10 xl:px-20 2xl:px-32 py-12 sm:py-10 min-h-[600px]"
        >
             <div
                    style={{
                        backgroundImage: `url(${HomePageLanding.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(65%)',
                    }}
                    className="absolute -z-10  left-0 w-full bottom-0 h-full"
                ></div>

            <div className="max-w-[1600px] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Tag */}
                        <div>
                            <span className="text-green-700 font-medium text-xs sm:text-sm md:text-base tracking-wider uppercase">
                                Welcome to Trade Afrika Group
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold text-gray-100 leading-tight">
                            Powering Africa&apos;s Digital Trade Revolution
                        </h1>

                        {/* Description */}
                        <div className="text-base sm:text-lg md:text-xl text-gray-200 space-y-4 font-light max-w-2xl mx-auto lg:mx-0">
                            <p>
                                We drive{' '}
                                <span className="font-semibold">Africa&apos;s digital trade transformation</span> by
                                combining technology, partnerships, and capacity building, connecting businesses and
                                equipping <span className="font-semibold">MSMEs</span> with digital trade skills
                                alongside logistics and fintech partners to enable seamless, secure, and inclusive trade
                                under the <span className="font-semibold">AfCFTA</span>.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div>
                            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                                Explore Our Divisions
                            </button>
                        </div>
                    </div>

                    {/* Right Placeholder (optional future visual) */}
                    {/* <div className="hidden lg:block w-full h-64 2xl:h-96 bg-gray-100 rounded-2xl"></div> */}
                </div>
            </div>
        </section>
    )
}

export default LandingFold
