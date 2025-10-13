import React from 'react'

const HeroSection: React.FC = () => {
    return (
        <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                {/* Small heading */}
                <h3 className="text-green-700 text-sm font-semibold tracking-wider uppercase mb-6">
                    ABOUT TRADE AFRIKA GROUP
                </h3>

                {/* Main heading */}
                <h1 className="text-green-700 text-5xl md:text-6xl font-bold mb-8">About Trade Afrika Group</h1>

                {/* Description */}
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    Trade Afrika Group (TAG) is a Pan-African digital trade ecosystem accelerating Africa's
                    participation in the global digital economy through innovation, inclusion, and integration
                </p>
            </div>
        </section>
    )
}

export default HeroSection
