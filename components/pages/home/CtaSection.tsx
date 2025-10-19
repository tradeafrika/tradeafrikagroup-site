import React from 'react'

const CTASection: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="bg-[#067E48] rounded-3xl px-8 py-16 md:py-24 text-center ">
                    {/* Heading */}
                    <span className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white mb-6">
                        Join Trade Afrika Group
                        <br />
                        Today
                    </span>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-green-50 mb-10 max-w-2xl mx-auto">
                        Be part of Africa's fastest-growing digital trade ecosystem. Together we can make intra-African trade simpler, smarter and  more inclusive.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg w-full sm:w-auto">
                            Get Involved
                        </button>
                        <button className="bg-green-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-950 transition-colors duration-300  w-full sm:w-auto">
                            Become a Partner
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection
