import React from 'react'
import { Check, Mail, Phone } from 'lucide-react'
import PartnerShipItem from '@/components/pages/partnerships-page/partnership-models-item'

const PartnershipPage = () => {
    const partnershipModels = [
        {
            title: 'Digital Trade Enablement',
            description:
                'Work to create digital structures and capacity building programs across Africa through AfCFTA for cross-border trade within the region.',
        },
        {
            title: 'Trade Facilitation & Logistics',
            description:
                'We work with logistical and business partners to improve trade facilitation, warehousing and customs clearance.',
        },
        {
            title: 'Financial Inclusion & Payments',
            description:
                'In partnership with Finance and Fintech partners, we facilitate access to inclusive payments, trade finance, and digital infrastructure.',
        },
        {
            title: 'Skills Development',
            description:
                'Through the Trade Africa Academy, we train and upskill traders in digital entrepreneurship and e-export readiness.',
        },
        {
            title: 'Market Access & Events',
            description:
                'We curate partnerships like the Trade Afrika Market Day and Digital Trade Workshops to connect MSMEs with regional buyers and exporters.',
        },
        {
            title: 'Strategic Partners',
            description:
                'Public, technology, and financial alignment with regional governance and multilateral partners to shape the future of African digital trade.',
        },
    ]

    const benefits = [
        'Pan-African reach and visibility',
        'Brand alignment with AfCFTA 2063',
        'Participation in impactful programs',
        'Access to trade data and insights',
        'Policy influence and ecosystem engagement',
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#e6f2ed] flex items-center justify-center py-16 sm:py-24 md:py-28 lg:py-32 xl:py-40 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-40">
                <div className="w-full max-w-[1600px] text-center">
                    {/* Tagline */}
                    <p className="text-green-700 font-semibold uppercase tracking-wide mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
                        Partnership
                    </p>

                    {/* Heading */}
                    <h1 className="text-green-700 font-bold text-2xl sm:text-2xl md:text-3xl lg:text-6xl 2xl:text-7xl mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
                        Partnerships That Power
                        <br className="hidden sm:block" />
                        <span className="block sm:inline">Africa’s Digital Trade Future</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-xl sm:max-w-2xl md:max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
                        At Trade Africa, we believe African success depends on building partnerships that accelerate
                        collaboration. We partner with governments, private sector traders, innovators, and development
                        organizations to build a connected digital trade ecosystem advancing the goals of the AfCFTA and
                        Agenda 2063.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-green-700 hover:bg-green-600 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded font-semibold text-sm sm:text-base lg:text-lg transition-colors w-full sm:w-auto">
                            Become a Partner
                        </button>
                        {/*
      <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded font-semibold text-sm sm:text-base lg:text-lg border border-gray-300 transition-colors w-full sm:w-auto">
        Get Involved
      </button>
      */}
                    </div>
                </div>
            </section>

            {/* Partnership Philosophy */}
            <section className="py-16 sm:py-24 md:py-32 lg:py-36 xl:py-44 2xl:py-52 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48 bg-white">
                <div className="max-w-[1400px] mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                        Our Partnership Philosophy
                    </h2>

                    <p className="text-gray-700 text-base sm:text-lg md:text-xl xl:text-2xl leading-relaxed max-w-4xl mx-auto px-2 sm:px-0">
                        Africa’s prosperity depends on{' '}
                        <span className="text-green-600 font-semibold">shared action</span>. Our partnerships combine
                        technology, trade, and talent to unlock opportunities for MSMEs, entrepreneurs, and institutions
                        across the continent. Each collaboration is guided by our values of{' '}
                        <span className="text-green-600 font-semibold">
                            mutual benefit, sustainability, and innovation
                        </span>{' '}
                        — ensuring long-term impact for all parties involved.
                    </p>
                </div>
            </section>

            {/* Partnership Models */}
            <section className="bg-[#e6f2ed] py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48 2xl:py-56 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
                <div className="max-w-[1600px] mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                            Our Partnership Models
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            We collaborate across multiple levers to drive sustainable trade ecosystems and achieve
                            mutual impact.
                        </p>
                    </div>

                    {/* Partnership Items */}
                    <div className="flex flex-wrap gap-4  items-center justify-center">
                        {partnershipModels.map((model, index) => (
                            <PartnerShipItem key={index} title={model.title} description={model.description} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Partner With Us */}
            <section className="py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48 2xl:py-56 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48 bg-white">
                <div className="max-w-[1600px] mx-auto">
                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 sm:mb-12 text-center md:text-left leading-tight">
                        Partner With Us
                    </h2>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
                        {/* Left Text Column */}
                        <div>
                            <p className="text-gray-700 text-base sm:text-lg md:text-xl xl:text-2xl leading-relaxed mb-6 sm:mb-8">
                                We're not just building a platform; we're building Africa's digital trade economy. By
                                partnering with Trade Africa, you're joining a Pan-African movement that empowers MSMEs,
                                connects markets, and strengthens value chains across borders.
                            </p>
                        </div>

                        {/* Right Benefits Card */}
                        <div className="space-y-4 sm:space-y-5 md:space-y-6 bg-[#fcebea] p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-sm">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3 sm:gap-4">
                                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Become a Partner */}
            <section className="py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48 2xl:py-56 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48 bg-[#e6f2ed]">
                <div className="max-w-[1400px] mx-auto text-center">
                    {/* Section Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        Become a Partner
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-2 sm:px-0">
                        We're seeking collaborators who share our vision of a borderless, self-sustaining Africa. Let's
                        drive the digital trade revolution together.
                    </p>

                    {/* Contact Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-4xl mx-auto">
                        {/* Email Card */}
                        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                            </div>
                            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">Email</span>
                            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
                                Drop us a few words! We aim to respond promptly — typically within 24 hours on business
                                days.
                            </p>
                            <a
                                href="mailto:info@tradeafrikagroup.org"
                                className="text-green-600 hover:text-green-700 font-medium underline break-words"
                            >
                                info@tradeafrikagroup.org
                            </a>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
                                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                            </div>
                            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">Phone</span>
                            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
                                Call us directly during business hours to immediately escalate your detailed partnership
                                inquiry.
                            </p>
                            <a
                                href="tel:+256312104367"
                                className="text-green-600 hover:text-green-700 font-medium underline"
                            >
                                +256 764898856
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48 2xl:py-56 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="bg-[#055A35] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 text-center text-white shadow-md hover:shadow-lg transition-all duration-300">
                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                            Ready to Transform Your
                            <br className="hidden sm:block" />
                            <span className="block sm:inline"> Trade Operations?</span>
                        </h2>

                        {/* Description */}
                        <p className="text-teal-50 text-base sm:text-lg md:text-xl xl:text-2xl mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
                            Join Africa’s most integrated trade ecosystem. Partner with us to be part of the movement
                            shaping the continent’s digital trade revolution.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                            <button className="bg-white hover:bg-gray-100 text-teal-700 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded font-semibold text-sm sm:text-base lg:text-lg transition-colors w-full sm:w-auto">
                                Contact Us
                            </button>
                            <button className="bg-transparent hover:bg-white/10 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded font-semibold text-sm sm:text-base lg:text-lg border-2 border-white transition-colors w-full sm:w-auto">
                                Become a Partner
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PartnershipPage
