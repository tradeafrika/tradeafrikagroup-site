import React from 'react'
import PillarsItem from './pillarsItem'

const FourPillarsSection: React.FC = () => {
    const pillars = [
        {
            title: 'Market Access',
            description: "Direct connections to verified buyers and sellers across Africa's largest trade network.",
        },
        {
            title: 'Skills and Capacity Building',
            description: "Training MSMes through the Trade Afrika Academy to enhance Competitiveness and  digital trade literacy.",
        },
        {
            title: 'Trade Facilitation & Logitics',
            description: "Streamling shipping and customs through AfriShip partnerships for faster cheaper trade.",
        },
        {
            title: 'Financial Inclusion & Payments',
            description: "Empowering MSMEs with accessible payment and financing solutions via PayAfrika",
        },
    ]

    return (
        <section className="bg-[#e6f2ed] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Main heading */}
                <h2 className="text-4xl md:text-4xl font-semibold text-center mb-14 text-black">Built on Four Pillars</h2>

                {/* Cards grid */}
                <div className="flex flex-wrap gap-4  items-center justify-center">
                    {pillars.map((pillar, index) => (
                        <PillarsItem key={index} description={pillar.title} title={pillar.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FourPillarsSection
