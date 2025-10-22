'use client'

import React from 'react'
import Image from 'next/image'
// import placeholder2 from '@/assets/placeholder-2.png'

export default function StoryTake() {
    return (
        <section className="text-[#0F2A19] px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48 py-12 bg-neutral-100">
            <main className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-20 items-center max-w-[1600px] mx-auto">
                {/* Text */}
                <div className="space-y-6 order-2 md:order-none">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                        Our Story
                    </h2>

                    <div className="max-w-4xl space-y-4 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed tracking-wide">
                        <p>
                            Africa’s greatest opportunity lies within its own borders yet for decades, intra-African
                            trade has remained limited, fragmented, and unequal.{' '}
                            <span className="font-bold">Trade Afrika Group</span> was founded to close this gap. We
                            exist to connect African businesses to one another through digital innovation, strategic
                            partnerships, and trade facilitation under the <span className="font-bold">AfCFTA.</span>
                        </p>

                        <p>
                            Our story began with a belief that African MSMEs are capable of leading the continent’s
                            economic transformation if given the right tools, visibility, and support. Today, Trade
                            Afrika Group has grown into a Pan-African ecosystem bringing together entrepreneurs,
                            logistics and fintech partners, governments, and development agencies to make Africa’s trade
                            digital, inclusive, and sustainable.
                        </p>

                        <p>
                            We are not just building technology. We are building The Africa We Want: an integrated
                            continent powered by innovation, collaboration, and shared prosperity.
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div className="flex justify-center order-1 md:order-none">
                    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl rounded-xl overflow-hidden">
                        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[500px] 2xl:h-[600px]  rounded-xl">
                            <Image
                                src="/sio.jpeg"
                                alt="Buyer browsing"
                                className="bg-center object-cover w-full h-full"
                                priority
                                fill
                            />
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}
