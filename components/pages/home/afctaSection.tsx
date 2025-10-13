import React from 'react'

const AfCFTASection: React.FC = () => {
    // Array of logo components for flexibility
    const logos = [
        { name: 'Webflow', type: 'webflow' },
        { name: 'Relume', type: 'relume' },
        { name: 'Webflow', type: 'webflow' },
        { name: 'Relume', type: 'relume' },
        { name: 'Webflow', type: 'webflow' },
        { name: 'Webflow', type: 'webflow' },
        { name: 'Webflow', type: 'webflow' },
        { name: 'Webflow', type: 'webflow' },
        { name: 'Webflow', type: 'webflow' },
        { name: 'Webflow', type: 'webflow' },
        { name: 'Webflow', type: 'webflow' },
    ]

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-3xl font-bold text-center mb-6 text-black">Aligned with AfCFTA</h2>

                {/* Description */}
                <p className="text-center text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-12">
                    Trade Afrika Group operates in full alignment with the African Continental Free Trade Area,
                    supporting the vision of a unified African market. Our platforms are designed to facilitate
                    cross-border trade, reduce barriers, and empower businesses to participate in the continent's
                    economic integration.
                </p>

                {/* Logos grid */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            {logo.type === 'webflow' ? (
                                <div className="flex items-center gap-2">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.5 2L15 8.5L11.5 2H5L2 8.5L5.5 15L2 21.5h6.5l3.5-6.5 3.5 6.5H22l-3.5-6.5L22 8.5z" />
                                    </svg>
                                    <span className="text-xl font-bold text-black">Webflow</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                                        </svg>
                                    </div>
                                    <span className="text-xl font-bold text-black">Relume</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AfCFTASection
