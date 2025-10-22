import { ArrowRight, Earth } from 'lucide-react'
import Image from 'next/image'

interface Division {
    id: string
    title: string
    description: string
    imageUrl: string
    link: string
}

interface DivisionProps {
    division: Division
}

export default function DivisonsSectionItem({ division }: DivisionProps) {
    return (
        <div
            key={division.id}
            className="
                bg-white 
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
                <Image src={division.imageUrl} alt={division.title} fill className="object-cover" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <div className='space-y-6'>
                    <h5 className="text-lg md:text-xl mt-3 font-semibold text-gray-900">{division.title}</h5>
                    <p className="text-gray-600 mt-2 mb-6 text-sm md:text-base flex-1">{division.description}</p>
                </div>

                <a
                    href={division.link}
                    className="
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
    )
}
