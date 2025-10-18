import React from 'react'

interface ImpactStat {
    id: string
    value: string
    label: string
}

const impactStats: ImpactStat[] = [
    {
        id: '1',
        value: '200+',
        label: 'MSMEs Trained',
    },
    {
        id: '2',
        value: '5',
        label: 'Regional Workshops',
    },
    {
        id: '3',
        value: '10+',
        label: 'Partners Engaged',
    },
]

const OurImpact: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-[#e6f2ed]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className='w-full flex mb-6 flex-col items-center justify-center text-center'>
                    <div className='w-[70%] space-y-4'>
                        <p className="text-sm font-semibold text-gray-600 ">Measuring Real Progress Across Africa</p>
                        <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 ">Our Impact</h2>
                        <span className="text-neutral-500 mt-6 w-[10px]">
                            Trade Afrika Group is driving tangible results by supporting SMEs, connecting partners and
                            fostering collaborations across Africa
                        </span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
                    {impactStats.map((stat, index) => (
                        <div key={stat.id} className="relative flex flex-col items-center text-center">
                            {/* Left Border */}
                            {index > 0 && (
                                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-green-600" />
                            )}

                            {/* Stat Value */}
                            <div className="text-6xl lg:text-7xl font-bold text-green-700 mb-4">{stat.value}</div>

                            {/* Stat Label */}
                            <div className="text-xl font-semibold text-green-800">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurImpact
