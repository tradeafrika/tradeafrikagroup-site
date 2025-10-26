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
import afrika from '@/public/imgs/PayAfrika.jpg'

const PayAfrikaPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    // Updated features to align with PayAfrika content
    const features = [
        {
            icon: <CreditCard className="w-6 h-6 text-orange-500" />,
            title: 'Multi-Currency Support',
            description: 'Transact in multiple African currencies and major global currencies like USD and EUR.',
        },
        {
            icon: <Server className="w-6 h-6 text-orange-500" />,
            title: 'Digital Wallet Integration',
            description: 'Secure wallets for buyers and sellers with instant local and cross-border settlements.',
        },
        {
            icon: <Lock className="w-6 h-6 text-orange-500" />,
            title: 'Escrow Services',
            description: 'Protect payments until goods or services are delivered and verified.',
        },
        {
            icon: <Activity className="w-6 h-6 text-orange-500" />,
            title: 'Trade Financing',
            description: 'Access working capital and invoice factoring through partner institutions.',
        },
        {
            icon: <Smartphone className="w-6 h-6 text-orange-500" />,
            title: 'Developer APIs & SDKs',
            description: 'RESTful APIs and mobile SDKs for seamless integration into your platforms.',
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
            title: 'Compliance & Security',
            description: 'Automated KYC/KYB, AML monitoring, and secure payment processing.',
        },
      
    ]

    // Updated benefits for clearer PayAfrika messaging
    const benefits = [
        {
            title: 'Seamless Cross-Border Payments',
            description:
                'Transact across African borders quickly, securely, and reliably, reducing delays and friction.',
        },
        {
            title: 'Escrow & Fraud Protection',
            description: 'Built-in safeguards ensure funds are secure and transactions are trustworthy.',
        },
        {
            title: 'Instant Integration',
            description: 'Developers can connect to PayAfrika quickly using APIs and SDKs.',
        },
        {
            title: 'Access Trade-Finance Easily',
            description: 'MSMEs gain working capital and invoice factoring directly through partner networks.',
        },
    ]

    const faqs = [
        {
            question: 'Which currencies does PayAfrika support?',
            answer: 'PayAfrika supports multiple African currencies and major global currencies like USD and EUR for cross-border trade.',
        },
        {
            question: 'How does escrow protection work?',
            answer: 'Funds are held securely until goods or services are delivered and confirmed, ensuring trust between buyers and sellers.',
        },
        {
            question: 'Can I access trade financing?',
            answer: 'Yes. Verified MSMEs can access working capital and invoice factoring directly via PayAfrika’s partners.',
        },
        {
            question: 'How do I integrate PayAfrika with my system?',
            answer: 'Developers can integrate quickly using our RESTful APIs and mobile SDKs, with detailed documentation provided.',
        },
        {
            question: 'Is PayAfrika compliant with regulations?',
            answer: 'Yes. All transactions are processed through licensed providers following KYC, AML, and data protection standards.',
        },
        {
            question: 'Can I track transactions in real-time?',
            answer: 'Our reporting dashboards provide real-time insights, analytics, and reconciliation for all transactions.',
        },
    ]

    return (
        <div className="min-h-screen ">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-40 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
                <div
                    style={{
                        backgroundImage: `url(${afrika.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(65%)',
                    }}
                    className="absolute -z-10 left-0 w-full bottom-0 h-full"
                ></div>

                <div className="max-w-[1400px] mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-100 mb-6 sm:mb-8 leading-tight">
                        Trusted Cross-Border Payments for African MSMEs
                    </h1>

                    <p className="text-gray-100 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                        PayAfrika connects Trade Afrika users to verified fintech and payment partners across Africa,
                        enabling secure, fast, and affordable transactions that power digital trade.
                    </p>

                    <Link
                      target='_blank'
                        href="https://tradeafrikamarketplace.net"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-colors"
                    >
                        Explore
                    </Link>
                    <div className="mt-4 text-gray-200 font-medium">Powered by Leading Payment Aggregators</div>
                </div>
            </section>

            <section className="py-16 bg-white sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
                    {/* Left Column */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            About PayAfrika
                        </h2>

                        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
                            PayAfrika is not a standalone fintech — it's a facilitation layer that links Trade Afrika
                            users to trusted payment aggregators, mobile money operators, and digital banks across
                            Africa.
                        </p>

                        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
                            Our goal is to simplify how MSMEs trade across borders by ensuring access to safe,
                            interoperable, and compliant payment solutions — wherever they operate.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">How it Works?</h3>

                        <div className="space-y-5 sm:space-y-6">
                            {[
                                "MSMEs transact directly through Trade Afrika's marketplace using payment gateways provided by regional partners",
                                'Our system supports multiple African currencies and leading mobile money networks',
                                'All transactions are handled by licensed payment providers following KYC, AML, and data protection standards',
                                'We collaborate with fintechs, commercial banks, and regional payment hubs to expand financial inclusion for MSMEs',
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full mt-1 sm:mt-1.5 flex-shrink-0"></div>
                                    <p className="text-gray-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-4 bg-orange-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Key Benefits</h2>
                        <p className="text-gray-600">Why businesses trust PayAfrika</p>
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

            {/* Partnership Network */}
            <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Our Partnership Network</h2>
                    <p className="text-xl mb-6 leading-relaxed opacity-90">
                        PayAfrika works with a growing list of <strong>trusted African payment partners</strong>,
                        including mobile money platforms, digital banks, and fintech aggregators that share our mission
                        of enabling cross-border digital trade under the AfCFTA.
                    </p>
                    <div className="bg-emerald-800 bg-opacity-50 border border-emerald-400 p-6 rounded-lg inline-block">
                        <p className="text-lg italic">
                            Together, we're building an inclusive, Pan-African payment infrastructure for small
                            businesses.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className=" py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-50">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-center mb-10">
                        Learn more about how PayAfrika enables safe, scalable, and compliant digital trade across
                        Africa.
                    </p>

                    <div className="grid grid-cols-1 gap-6 sm:gap-8">
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

            {/* Closing CTA Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto bg-[#067E48] rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Building Africa’s Digital Trade Future
                    </h2>
                    <p className="text-orange-100 mb-8 text-lg">
                        Together, our divisions form an interconnected ecosystem that simplifies trade, strengthens
                        MSMEs, and drives Africa’s digital economic transformation under the AfCFTA.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                            Explore More Divisions
                        </button>
                       
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PayAfrikaPage
