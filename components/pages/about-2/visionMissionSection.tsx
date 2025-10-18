import React from 'react'

const VisionMissionSection: React.FC = () => {
    return (
        <section className="bg-white py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main heading */}
                <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-black">Vision and Mission</h2>

                {/* Cards container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Vision Card */}
                    <div className="relative bg-white border border-gray-200 rounded-lg p-18 shadow-sm">
                        {/* Green left border */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-600 rounded-l-lg"></div>

                        <div className="pl-4">
                            <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
                            <p className="text-gray-700 text-base leading-relaxed">
                                A connected African economy where every business, large or small can trade seamlessly,
                                access capital, and grow sustainably
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="relative bg-white border border-gray-200 rounded-lg p-18 shadow-sm">
                        {/* Orange left border */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 rounded-l-lg"></div>

                        <div className="pl-4">
                            <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
                            <p className="text-gray-700 text-base leading-relaxed">
                                To build integrated platforms that remove friction from trade, unlock working capital,
                                and deliver transparent, efficient supply chains across the continent.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionMissionSection
