'use client'

import React, { useState } from 'react'
import { ChevronDown, CheckCircle, TrendingUp, Shield, Globe, Zap, Truck, Clock, Check } from 'lucide-react'
import Link from 'next/link'
import afriship from '@/public/logitics.jpg'

const AfriShipPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const features = [
        {
            icon: <Truck className="w-6 h-6 text-orange-500" />,
            title: 'Regional Shipping',
            description: 'Door-to-door delivery across East, Central, and West Africa.',
        },
        {
            icon: <Shield className="w-6 h-6 text-orange-500" />,
            title: 'Warehousing',
            description: 'Secure storage hubs in 8 major trade corridors.',
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
            title: 'Customs Clearance',
            description: 'Documentation, duties, and compliance handled by experts.',
        },
        {
            icon: <Zap className="w-6 h-6 text-orange-500" />,
            title: 'Last-Mile Delivery',
            description: 'Timely access to even remote destinations.',
        },
        {
            icon: <Globe className="w-6 h-6 text-orange-500" />,
            title: 'Unified Tracking',
            description: 'Real-time shipment visibility through the AfriShip dashboard.',
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
            title: 'Cargo Insurance',
            description: 'Comprehensive coverage protecting goods in transit.',
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
            title: 'Dangerous Goods Handling',
            description: 'Certified logistics for restricted cargo categories.',
        },
        {
            icon: <Shield className="w-6 h-6 text-orange-500" />,
            title: 'Returns Management',
            description: 'Efficient reverse logistics for returned or replaced items.',
        },
    ]

    const benefits = [
        {
            title: 'Achieve 99%+ on-time performance across all routes',
            description:
                'AfriShip ensures reliable delivery schedules across multiple African corridors for consistent service.',
        },
        {
            title: 'Reduce landed costs by 20–30% through optimized routing',
            description: 'Our logistics solutions optimize transportation and storage to minimize total costs.',
        },
        {
            title: 'Avoid customs delays with expert documentation support',
            description: 'Our team handles all customs paperwork and compliance so your shipments move smoothly.',
        },
        {
            title: 'Track every shipment in real-time via web and mobile',
            description: 'Stay updated with live tracking data and notifications for complete shipment visibility.',
        },
    ]

    const faqs = [
        {
            question: 'Which countries do you cover?',
            answer: 'AfriShip operates across 12 African countries, covering major trade corridors in East, Central, and West Africa.',
        },
        {
            question: 'How long is the average transit time?',
            answer: 'The average transit time is 7 days, depending on origin, destination, and customs procedures.',
        },
        {
            question: 'Do you provide cargo insurance?',
            answer: 'Yes. All shipments can be insured to protect goods against damage or loss in transit.',
        },
        {
            question: 'Can I track my shipment in real-time?',
            answer: 'Absolutely. Our AfriShip dashboard provides live tracking updates via web and mobile.',
        },
        {
            question: 'Do you handle customs clearance?',
            answer: 'Yes. Our experts handle documentation, duties, and compliance for hassle-free shipping.',
        },
        {
            question: 'What if I need last-mile delivery to remote locations?',
            answer: 'AfriShip provides last-mile delivery even to hard-to-reach destinations through our local logistics partners.',
        },
        {
            question: 'Can I ship dangerous goods?',
            answer: 'Yes. We have certified logistics for restricted cargo categories following all safety regulations.',
        },
        {
            question: 'Do you manage returns?',
            answer: 'Yes. We offer efficient reverse logistics for returned or replaced items to streamline your operations.',
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className=" relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-40 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
                <div
                    style={{
                        backgroundImage: `url(${afriship.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(65%)',
                    }}
                    className="absolute -z-10  left-0 w-full bottom-0 h-full"
                ></div>

                <div className="max-w-[1400px] mx-auto text-center">
                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-200 mb-6 sm:mb-8 leading-tight">
                        Border-to-Border Logistics Made Simple
                    </h1>

                    {/* Description */}
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                        AfriShip simplifies the complexity of African cross-border logistics ensuring reliable
                        delivery, transparent pricing, and expert customs handling.
                        <br />
                        We partner with trusted logistics providers to keep African goods moving efficiently and
                        affordably across borders.
                    </p>

                    {/* CTA Button */}
                    <Link
                        target='_blank'
                        href="https://tradeafrikamarketplace.net"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-colors"
                    >
                        Explore
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-orange-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            Delivering Africa’s Trade with Speed, Safety, and Simplicity
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-sm transition-shadow"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
                <div className="max-w-[1400px] mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                            Your Reliable Logistics Partner for African Trade
                        </h2>
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-6 sm:space-y-8 md:space-y-10">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-50">
                <div className="max-w-[1000px] mx-auto">
                    {/* Section Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                        Commonly Asked Questions
                    </h2>
                    <p className="text-gray-600 text-center mb-10">
                        Answers to help you plan, ship, and grow with AfriShip.
                    </p>

                    {/* FAQ List in Two Columns */}
                    <div className="grid grid-cols-1  gap-6 sm:gap-8">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-4 sm:p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl pr-4 sm:pr-6 md:pr-8">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-500 flex-shrink-0 transition-transform ${
                                            openFaq === index ? 'transform rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                {openFaq === index && (
                                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                                        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AfriShipPage
