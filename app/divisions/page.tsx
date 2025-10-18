import React from 'react'
import { ArrowRight, Globe } from 'lucide-react'
import DivisionsHero from '@/components/pages/divisons/heroSection'
import Link from 'next/link'

const DivisionsPage: React.FC = () => {
    const divisions = [
        {
            icon: <Globe className="w-8 h-8 text-emerald-600" />,
            title: 'Trade Afrika Marketplace',
            description: 'Connect with Verified Buyers and Sellers Across Africa',
            link: '/divisions/marketplace',
        },
        {
            icon: <Globe className="w-8 h-8 text-emerald-600" />,
            title: 'Trade Afrika Academy',
            description: "Hands on Digital Trade Skills for Africa's MSMEs ",
            link: '/divisions/academy',
        },
        {
            icon: <Globe className="w-8 h-8 text-emerald-600" />,
            title: 'AfriShip By TradeAfrika',
            description: 'Border to Border Logistics made Simple',
            link: '/divisions/afriship',
        },
        {
            icon: <Globe className="w-8 h-8 text-emerald-600" />,
            title: 'PayAfrika',
            description: 'Seamless cross-border payments and Trade Finance ',
            link: '/divisions/payafrika',
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <DivisionsHero />

            {/* Divisions Cards Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto space-y-6">
                    {divisions.map((division, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 bg-emerald-50 p-4 rounded-full">{division.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{division.title}</h3>
                                <p className="text-gray-600 mb-4 max-w-xl">{division.description}</p>
                                <Link
                                    className="text-emerald-600 font-semibold inline-flex items-center hover:text-emerald-700 transition-colors"
                                    href={division.link}
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                              
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Large Map/Image Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-50 rounded-2xl h-80 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                            <Globe className="w-24 h-24 mx-auto mb-4 opacity-30" />
                            <p className="text-lg">Map/Infographic Placeholder</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-12 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure where to start?</h2>
                        <p className="text-emerald-100 mb-8 text-lg">
                            Talk to our team to find the right division for your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
                                Contact Us
                            </button>
                            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-emerald-800 transition-colors">
                                Explore Partnerships
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DivisionsPage
