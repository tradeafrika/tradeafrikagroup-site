'use client'

import React, { useState } from 'react'
import {
    ChevronDown,
    CheckCircle,
    TrendingUp,
    Shield,
    Globe,
    Zap,
    CreditCard,
    Server,
    Lock,
    Activity,
    Smartphone,
} from 'lucide-react'
import Link from 'next/link'

const PayAfrikaPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const features = [
        {
            icon: <CreditCard className="w-6 h-6 text-orange-500" />,
            title: 'Multi-Currency Payments',
            description: 'Accept and send 15+ African currencies, plus USD/EUR.',
        },
        {
            icon: <Server className="w-6 h-6 text-orange-500" />,
            title: 'Digital Wallets',
            description: 'Secure buyer and seller wallets with instant settlement.',
        },
        {
            icon: <Lock className="w-6 h-6 text-orange-500" />,
            title: 'Escrow Services',
            description: 'Protect funds until goods are received and confirmed.',
        },
        {
            icon: <Activity className="w-6 h-6 text-orange-500" />,
            title: 'Trade Financing',
            description: 'Access working capital and invoice factoring for verified traders.',
        },
        {
            icon: <Smartphone className="w-6 h-6 text-orange-500" />,
            title: 'Developer APIs',
            description: 'RESTful APIs with detailed documentation for quick integration.',
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
            title: 'Mobile SDKs',
            description: 'Native Android and iOS libraries for seamless fintech integration.',
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
            title: 'Compliance Tools',
            description: 'Automated KYC/KYB verification and AML monitoring.',
        },
        {
            icon: <Shield className="w-6 h-6 text-orange-500" />,
            title: 'Reporting Dashboard',
            description: 'Real-time transaction analytics and reconciliation tools.',
        },
    ]

    const benefits = [
        {
            title: '⚡ Settle cross-border payments in minutes, not days',
            description:
                'PayAfrika accelerates cross-border transactions, reducing delays and improving cash flow for African businesses.',
        },
        {
            title: '🔒 Reduce transaction risk with built-in escrow and fraud detection',
            description:
                'Our escrow and monitoring systems protect buyers and sellers from fraud and transaction errors.',
        },
        {
            title: '🧩 Integrate instantly using developer-friendly APIs and SDKs',
            description:
                'Developers can quickly integrate PayAfrika into existing platforms using RESTful APIs and mobile SDKs.',
        },
        {
            title: '💳 Access working capital without complex bank bureaucracy',
            description:
                'Verified traders can access trade financing and invoice factoring directly through our platform.',
        },
    ]

    const faqs = [
        {
            question: 'Which currencies does PayAfrika support?',
            answer: 'PayAfrika supports 15+ African currencies, plus USD and EUR for cross-border transactions.',
        },
        {
            question: 'How does escrow protection work?',
            answer: 'Funds are held securely until goods or services are delivered and confirmed, ensuring trust between buyers and sellers.',
        },
        {
            question: 'Can I access trade financing?',
            answer: 'Yes. Verified traders can access working capital and invoice factoring directly via PayAfrika.',
        },
        {
            question: 'How do I integrate PayAfrika with my system?',
            answer: 'Developers can use our RESTful APIs and mobile SDKs, with comprehensive documentation for easy integration.',
        },
        {
            question: 'Is PayAfrika compliant with regulations?',
            answer: 'Yes. PayAfrika provides automated KYC/KYB verification and AML monitoring to ensure regulatory compliance.',
        },
        {
            question: 'Can I track transactions in real-time?',
            answer: 'Our reporting dashboard provides real-time analytics and reconciliation tools for all your transactions.',
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-orange-50 to-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-40 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
                <div className="max-w-[1400px] mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                        Seamless Cross-Border Payments and Trade Finance
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                        PayAfrika is Africa’s fintech engine for digital commerce — offering fast, affordable, and
                        secure multi-currency payments.
                        <br />
                        From escrow protection to instant settlements and trade finance, we’re making it easier for
                        African businesses to trade confidently and get paid faster.
                    </p>

                    <Link
                        href="/payafrika/developers"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-colors"
                    >
                        Integrate PayAfrika
                    </Link>

                    <div className="mt-4 text-gray-900 font-semibold text-lg sm:text-xl">💻 API-First Platform</div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-orange-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            Empowering African Businesses with Financial Freedom
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
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                            Simplifying Trade Finance for a Connected Africa
                        </h2>
                    </div>

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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-center mb-10">
                        Learn more about how PayAfrika enables safe, scalable, and compliant digital trade across
                        Africa.
                    </p>

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

            {/* Closing CTA Section for All Divisions */}
            <section className="py-16 px-4 mx-4 my-8">
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Trade Afrika Group — Building Africa’s Digital Trade Future
                    </h2>
                    <p className="text-orange-100 mb-8 text-lg">
                        Together, these four divisions form an interconnected ecosystem that simplifies trade,
                        strengthens MSMEs, and drives Africa’s digital economic transformation under the AfCFTA.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                            Explore More Divisions
                        </button>
                        <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
                            Join the Movement
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PayAfrikaPage
