import React, { useState } from 'react'
import { ChevronDown, CheckCircle, TrendingUp, Shield, Globe, Zap } from 'lucide-react'

const TradeAfrikaPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const features = [
        {
            icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
            title: 'Vendor Onboarding',
            description:
                'Easily add new vendors to your buyer supply network. Create vendor accounts and streamline the onboarding process.',
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
            title: 'Market Access',
            description:
                'Reach new markets and expand your reach with over 30+ African countries. Give you access to new opportunities.',
        },
        {
            icon: <Globe className="w-6 h-6 text-orange-500" />,
            title: 'Market Access',
            description:
                'Reach new markets and expand your reach with over 30+ African countries. Give you access to new opportunities.',
        },
        {
            icon: <Shield className="w-6 h-6 text-orange-500" />,
            title: 'Market Access',
            description:
                'Reach new markets and expand your reach with over 30+ African countries. Give you access to new opportunities.',
        },
        {
            icon: <Zap className="w-6 h-6 text-orange-500" />,
            title: 'Market Access',
            description:
                'Reach new markets and expand your reach with over 30+ African countries. Give you access to new opportunities.',
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
            title: 'Market Access',
            description:
                'Reach new markets and expand your reach with over 30+ African countries. Give you access to new opportunities.',
        },
    ]

    const benefits = [
        {
            title: 'Expand your market reach to 32 African countries',
            description:
                'Connect a diverse network of buyers and sellers across the continent with opportunities for growth and cross-border trade partnerships, enabling seamless international commerce.',
        },
        {
            title: 'Trade confidently with verified, background-checked partners',
            description:
                'Experience trust and security through our rigorous vendor verification process, giving you peace of mind when conducting business transactions.',
        },
        {
            title: 'Reduce time-to-deal with streamlined RFQ workflows',
            description:
                'We offer time-saving processes that make it easier to find suppliers, get quotes, negotiate deals, and finalize agreements with verified business partners.',
        },
        {
            title: 'Access trade finance options through integrated FineyAllus',
            description:
                'Seamlessly access financing solutions to support your cross-border transactions and scale your business operations across Africa.',
        },
    ]

    const faqs = [
        {
            question: 'How do I get verified as a seller?',
            answer: "Getting verified as a seller is straightforward. Simply create an account, verify your business information, upload required documents like business registration, tax certificates, and proof of address. Our verification team will review your submission within 2-3 business days. Once approved, you'll receive full access to the marketplace and can start listing your products.",
        },
        {
            question: 'What payment methods are currently supported?',
            answer: 'We support both domestic and international payment options. In many African countries, we accept mobile money, bank transfers, and cards. International payments are supported through our integrated payment partners, allowing seamless cross-border transactions.',
        },
        {
            question: 'What are the fees and commission structure?',
            answer: 'Our pricing is transparent and competitive. We charge a small commission on successful transactions. There are no monthly fees or membership charges. Transaction fees vary depending on the product category and transaction value. Contact our sales team for detailed pricing information.',
        },
        {
            question: 'How long does settlement take after a transaction?',
            answer: 'Settlement timing depends on your chosen payment method and compliance requirements. For local payments, funds are typically available within 24-48 hours. International transactions may take 3-5 business days. We prioritize secure and timely fund transfers to maintain trust in our marketplace.',
        },
        {
            question: "What happens if there's a dispute?",
            answer: 'We have a comprehensive dispute resolution process. Both parties can raise disputes within 14 days after a transaction. Our dedicated support team investigates each case thoroughly and mediates fairly. Funds are held in escrow until disputes are resolved. We aim to resolve most issues within 7-10 business days through open communication.',
        },
        {
            question: 'Can I integrate Exchange with my existing systems?',
            answer: 'Yes! We offer APIs and webhooks for seamless integration with your existing ERP, inventory, and accounting systems. Our developer documentation provides comprehensive guides and SDKs. For enterprise clients, we offer dedicated technical support to ensure smooth integration and ongoing system compatibility.',
        },
        {
            question: 'Is there a minimum order value?',
            answer: "There is no minimum order value for buyers, but individual sellers may set their own minimum order quantities or values. We recommend checking each seller's requirements before placing an order. For bulk orders and enterprise purchases, we can facilitate special arrangements.",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Connect with verified
                        <br />
                        buyers and sellers across
                        <br />
                        Africa
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Trade Afrika Exchange is the continent's trusted B2B marketplace for cross-border commerce. Find
                        reliable partners, manage transactions securely, and grow your business across Africa.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                        Get registered
                    </button>
                </div>
            </section>

            {/* What is Trade Afrika Exchange Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            What is Trade Afrika
                            <br />
                            Exchange?
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Trade Afrika Exchange is a comprehensive B2B marketplace that connects buyers and sellers
                            across 32 African countries. We simplify cross-border trade by providing verified business
                            partners, secure payment processing, and streamlined logistics support to boost regional
                            commerce.
                        </p>
                        <p className="text-gray-600">
                            Our platform enables African businesses to discover new trading opportunities, integrated
                            payment solutions, and robust order management tools to create a trusted environment where
                            businesses can discover potential partners, manage transactions efficiently, and expand
                            their market reach.
                        </p>
                        <p className="text-gray-600 mt-4">
                            Whether you're a manufacturer seeking new distribution channels, Trade Afrika Exchange
                            provides you with the infrastructure you need to succeed in pan-African commerce.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Who is this for?</h3>

                        <div className="space-y-6">
                            <div>
                                <div className="flex items-start mb-2">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                                    <p className="text-gray-700 font-medium">
                                        Manufacturers and producers seeking to export their products to new African
                                        markets
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-start mb-2">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                                    <p className="text-gray-700 font-medium">
                                        Wholesalers and distributors seeking reliable suppliers across the continent
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-start mb-2">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                                    <p className="text-gray-700 font-medium">
                                        Import-export businesses requiring trusted trade partners and infrastructure
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-start mb-2">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                                    <p className="text-gray-700 font-medium">
                                        Retailers needing diversified sourcing options
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Features Section */}
            <section className="py-16 px-4 bg-orange-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Platform Features</h2>
                        <p className="text-gray-600">Everything you need to trade confidently across African borders</p>
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

            {/* Why Choose Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            Why Choose Trade Afrika
                            <br />
                            Exchange?
                        </h2>
                        <p className="text-gray-600">
                            Everything you need to make conducting African cross-border business
                        </p>
                    </div>

                    <div className="space-y-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 mx-4 my-8">
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your
                        <br />
                        Trade Operations?
                    </h2>
                    <p className="text-orange-100 mb-8 text-lg">
                        Join thousands of businesses already trading across Africa.
                        <br />
                        Get started today and unlock new opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                            Get Started
                        </button>
                        <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
                            Request a Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                                            openFaq === index ? 'transform rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-6">
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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

export default TradeAfrikaPage
