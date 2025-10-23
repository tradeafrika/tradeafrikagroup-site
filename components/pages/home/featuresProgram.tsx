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
        title: 'Trade Afrika Market Days',
        description:
            'Monthly marketplace events connecting African producers and suppliers to  buyers, corporates and digital platforms.',
        imageUrl: '/imgs/Marketplace.jpg', // Replace with your actual image path
        link: '',
    },
    {
        id: '2',
        title: 'Digital Trade Workshops',
        description: 'A flagship training initiative preparing MSMEs for digital commerce and AfCFTA participation',
        imageUrl: '/imgs/workshop.jpg', // Replace with your actual image path
        link: '',
    },
    {
        id: '3',
        title: 'Women & Youth in Trade Forum',
        description:
            'Empowering young Africans and women enterpreneurs to lead the continent digital trade revolution ',
        imageUrl: '/imgs/WomenandYouthinTrade.jpg', // Replace with your actual image path
        link: '',
    },
]

const FeaturedPrograms: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-[#e6f2ed]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 space-y-6">
                    <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 ">Featured Programs</h2>
                    <p className="text-lg text-gray-600">
                        Advancing Africa's MSME Competitiveness Through Strategic Action
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className="
    bg-[#E6F2ED]
    rounded-2xl 
    shadow-sm 
    overflow-hidden 
    hover:shadow-lg 
    transition-shadow 
    duration-300 
    w-full 
    max-w-[500px] 
    flex 
    flex-col
  "
                        >
                            {/* Image */}
                            <div className="relative h-48 sm:h-56 md:h-64 w-full bg-gray-100">
                                <Image src={program.imageUrl} alt={program.title} fill className="object-cover" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="space-y-4 flex-1">
                                    <h5 className="text-lg md:text-xl font-semibold text-gray-900">{program.title}</h5>
                                    <p className="text-gray-600 text-sm md:text-base">{program.description}</p>
                                </div>

                                <a
                                    href={program.link}
                                    className="
        mt-4
        inline-flex 
        items-center 
        text-green-600 
        hover:text-green-700 
        transition-colors 
        font-medium
      "
                                >
                                    Learn More
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedPrograms
