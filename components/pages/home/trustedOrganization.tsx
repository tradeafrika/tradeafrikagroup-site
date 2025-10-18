import React from 'react'
import Image from 'next/image'

interface Partner {
    id: string
    name: string
    logoUrl: string
}

const partners: Partner[] = [
    {
        id: '1',
        name: 'Webflow',
        logoUrl: '/logos/webflow.svg', // Replace with your actual logo path
    },
    {
        id: '2',
        name: 'Relume',
        logoUrl: '/logos/relume.svg', // Replace with your actual logo path
    },
    {
        id: '3',
        name: 'Webflow',
        logoUrl: '/logos/webflow.svg', // Replace with your actual logo path
    },
    {
        id: '4',
        name: 'Relume',
        logoUrl: '/logos/relume.svg', // Replace with your actual logo path
    },
]

const TrustedOrganizations: React.FC = () => {
    return (
        <section className="py-12 px-4 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center">
                    {/* Left Text */}
                    <div className="flex-shrink-0 mb-10 text-center">
                        <h2 className="text-4xl md:text-4xl font-semibold  mb-4 text-green-900">
                            Trusted by Leading Organizations
                        </h2>
                        <span className='text-neutral-600'>We are proud to collaborate with forward-thinking institutions driving Africa's Economic transformation</span>
                    </div>

                    {/* Logos Container */}
                    <div className="flex  items-center gap-8 md:gap-12 flex-wrap justify-center ">
                        {partners.map((partner) => (
                            <div
                                key={partner.id}
                                className="relative h-8 w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                            >
                                <Image src={partner.logoUrl} alt={partner.name} fill className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustedOrganizations
