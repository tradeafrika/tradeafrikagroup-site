import React from 'react'
import PillarsItem from './pillarsItem'

const FourPillarsSection: React.FC = () => {
    const pillars = [
        {
            title: 'Market Access',
            description: "Direct connections to verified buyers and sellers across Africa's largest trade network.",
        },
        {
            title: 'Market Access',
            description: "Direct connections to verified buyers and sellers across Africa's largest trade network.",
        },
        {
            title: 'Market Access',
            description: "Direct connections to verified buyers and sellers across Africa's largest trade network.",
        },
        {
            title: 'Market Access',
            description: "Direct connections to verified buyers and sellers across Africa's largest trade network.",
        },
    ]

    return (
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Main heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">Built on Four Pillars</h2>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pillars.map((pillar, index) => (
                        <PillarsItem key={index} description={pillar.title} title={pillar.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FourPillarsSection
