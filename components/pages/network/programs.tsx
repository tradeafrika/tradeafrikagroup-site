import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface Program {
    id: string
    title: string
    description: string
    imageUrl: string
    link: string
}

const programs: Program[] = [
    {
        id: '1',
        title: 'Trade Africa Market Days',
        description: 'Monthly marketplace events connecting African producers and suppliers to  buyers, corporates and digital platforms.',
        imageUrl: '/market-day.jpg', // Replace with your actual image path
        link: '',
    },
    {
        id: '2',
        title: 'Digital Trade Workshops',
        description: 'A flagship training initiative preparing MSMEs for digital commerce and AfCFTA participation',
        imageUrl: '/market-day.jpg', // Replace with your actual image path
        link: '',
    },
    {
        id: '3',
        title: 'Women & Youth in Trade Forum',
        description: 'Empowering young Africans and women enterpreneurs to lead the continent digital trade revolution ',
        imageUrl: '/market-day.jpg', // Replace with your actual image path
        link: '',
    },
]

const FeaturedPrograms2: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-[#e6f2ed]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-4">Programs You Can Engage In</h2>
                    <p className="text-lg text-gray-600">
                        Participate in initiates that advance digital trade and empower
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden  transition-shadow duration-300"
                        >
                            {/* Image Container with Border */}
                            <div className="p-4">
                                <div className="relative h-52 bg-gray-200 rounded-xl overflow-hidden">
                                    <Image src={program.imageUrl} alt={program.title} fill className="object-cover" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-6 pb-6">
                                {/* Title */}
                                <h5 className="text-lg font-sans text-gray-900 mb-3">{program.title}</h5>

                                {/* Description */}
                                <p className="text-gray-600 mb-4">{program.description}</p>

                                {/* Link */}
                                <a
                                    href={program.link}
                                    className="inline-flex items-center  text-green-600 font-medium hover:text-green-700 transition-colors"
                                >
                                    Learn More
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedPrograms2
