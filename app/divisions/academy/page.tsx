'use client'

import React, { useState } from 'react'
import { ChevronDown, CheckCircle, TrendingUp, Shield, Globe, Zap } from 'lucide-react'
import Link from 'next/link'

const TradeAfrikaAcademy: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const features = [
        {
            icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
            title: 'Workshops',
            description: 'Practical sessions covering export documentation, digital tools, and trade pricing.',
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
            title: 'Mentorship Program',
            description: 'Personalized guidance from industry practitioners and trade experts.',
        },
        {
            icon: <Globe className="w-6 h-6 text-orange-500" />,
            title: 'Fellowships',
            description: 'Intensive 12-week programs for high-potential entrepreneurs and innovators.',
        },
        {
            icon: <Shield className="w-6 h-6 text-orange-500" />,
            title: 'Resource Library',
            description: 'Templates, toolkits, and e-guides for MSMEs ready to go digital.',
        },
        {
            icon: <Zap className="w-6 h-6 text-orange-500" />,
            title: 'Certification',
            description: 'Recognized credentials in digital trade operations, endorsed by partners.',
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
            title: 'Community Access',
            description: 'Join a vibrant peer network of 1,200+ digital traders and alumni.',
        },
    ]

    const benefits = [
        {
            title: 'Gain practical, actionable trade skills you can apply immediately',
            description:
                'Learn step-by-step processes and tools that MSMEs can implement in real business scenarios for immediate impact.',
        },
        {
            title: 'Access regional export markets with confidence and preparation',
            description:
                'Acquire knowledge and resources that empower your business to trade across borders securely and efficiently.',
        },
        {
            title: 'Build lasting connections with mentors and peer entrepreneurs',
            description:
                'Leverage our network to form partnerships, find mentors, and collaborate with like-minded digital traders.',
        },
        {
            title: 'Earn recognized certification valued by partners and lenders',
            description:
                'Complete programs that award credentials recognized by industry partners, enhancing credibility and opportunities for funding.',
        },
    ]

    const faqs = [
        {
            question: 'Who can enroll in the Trade Afrika Academy?',
            answer: 'Entrepreneurs, MSMEs, and aspiring digital traders across Africa looking to improve cross-border trade skills.',
        },
        {
            question: 'How long are the programs?',
            answer: 'Programs range from 1-day workshops to intensive 12-week fellowships, depending on the curriculum selected.',
        },
        {
            question: 'Are the programs online or in-person?',
            answer: 'We offer a blend of online sessions and in-person workshops to maximize accessibility and practical learning.',
        },
        {
            question: 'Do I receive a certificate after completion?',
            answer: 'Yes. All completed programs provide recognized certification endorsed by industry partners and trade experts.',
        },
        {
            question: 'Can I access mentorship after completing a program?',
            answer: 'Absolutely. Graduates gain continued access to mentors and our alumni network for guidance and support.',
        },
        {
            question: 'Is there a cost to enroll?',
            answer: 'Program fees vary based on the course type. Scholarships and subsidized options are available for qualifying MSMEs.',
        },
        {
            question: 'How do I join a workshop or program?',
            answer: 'Click the "Join a Workshop" button, explore available programs, and register directly through our platform.',
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-orange-50 to-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-40 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
                <div className="max-w-[1400px] mx-auto text-center">
                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                        Hands-On Digital Trade Skills
                        <br className="hidden sm:block" />
                        for Africa’s MSMEs
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                        The Trade Afrika Academy equips entrepreneurs and MSMEs with practical skills, mentorship, and
                        resources to thrive in cross-border commerce.
                        <br />
                        Our programs empower business leaders to trade smarter, compete regionally, and scale
                        sustainably across African markets.
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/academy/programs"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-colors"
                    >
                        Join a Workshop
                    </Link>

                   
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-orange-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            Building Africa’s Next Generation of Digital Traders
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
            <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
                <div className="max-w-[1400px] mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                            Empowering MSMEs with Skills for a Borderless Africa
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
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-center mb-10">
                        Everything you need to know before enrolling at the Trade Afrika Academy.
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

export default TradeAfrikaAcademy
