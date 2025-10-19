import React from 'react'
import DivisonsSectionItem from './divisionSectionItem'

interface Division {
    id: string
    title: string
    description: string
    imageUrl: string
    link: string
}

const divisions: Division[] = [
    {
        id: '1',
        title: 'Trade Afrika Marketplace',
        description:
            'Pan-African B2B marketplace connecting verified African suppliers, manufactures and buyers to expand regional value chains',
        imageUrl: '/imgs/Marketplace.jpg', // Replace with your actual image path
        link: '/divisions/marketplace',
    },
    {
        id: '2',
        title: 'Trade Afrika Academy',
        description:
            'Empowering MSMEs with digital trade knowledge, businesss mentorship and export readiness training to compete globally',
        imageUrl: '/imgs/TradeAfrikaAcademy.jpg', // Replace with your actual image path
        link: '/divisions/academy',
    },
    {
        id: '2',
        title: 'Afriship by Trade Afrika',
        description:
            'Partnering with logitics providers to simplify cross border shipping, warehousing and  customs clearance across Africa',
        imageUrl: '/imgs/afriship.jpg', // Replace with your actual image path
        link: '/divisions/afriship',
    },
    {
        id: '2',
        title: 'PayAfrika',
        description:
            'Integrating trusted fintech partners to enable secure cross border payments, trade financing and digital wallets for African businesses',
        imageUrl: '/imgs/PayAfrika.jpg', // Replace with your actual image path
        link: '/divisions/payafrika',
    },
]

const OurDivisions: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 w-full flex flex-col items-center justify-center max-h-xl">
                    <div className='w-[55%] space-y-4'>
                        <p className="text-sm font-semibold text-gray-600 ">
                            Four operational arms advancing digital trade across the continent.
                        </p>
                        <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 ">Our Divisions</h2>

                        <span className="text-neutral-500 mt-6 w-[10px]">
                            Trade Afrika Group operates through four integrated Arms each designed to tackle the real
                            challenges of intra-African trade and empower businesses to thrive in a connected economy
                        </span>
                    </div>
                </div>

                {/* Divisions Grid */}
                <div className=" flex flex-wrap gap-8 items-center justify-center">
                    {divisions.map((division, index) => (
                        <DivisonsSectionItem key={index} division={division} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurDivisions
