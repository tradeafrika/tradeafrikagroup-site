'use client'

import React, { useState } from 'react'

interface FormData {
    fullName: string
    email: string
    phone: string
    inquiryType: string
    message: string
    agreedToPrivacy: boolean
}

interface FAQItem {
    question: string
    answer: string
    isOpen: boolean
}

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
        agreedToPrivacy: false,
    })

    const [faqs, setFaqs] = useState<FAQItem[]>([
        {
            question: 'How do I get verified as a seller?',
            answer: "Getting verified is a straightforward process. Simply create your account, submit our necessary registration documents via e-mail, and if accepted, we'll provide the NDPC registered company ID. If not accepted, you'll receive an e-mail stating the reason. Once verified, you can start listing your products immediately.",
            isOpen: false,
        },
        {
            question: 'Which product categories are currently supported?',
            answer: "We currently support a wide range of categories including Electronics, Fashion, Home & Garden, Toys & Games, Technology, Sports & Fitness, Industrial Equipment, Cosmetics, Health & Personal Care, Automotive, and more. We'll charge the list fee for each product/asset you register.",
            isOpen: false,
        },
        {
            question: 'What are the fees and commission structure?',
            answer: 'Indie Africa Exchange offers competitive marketplace commissions of 13% on completed transactions. There are no listing fees or monthly subscription fees, allowing you to scale your business at your own pace.',
            isOpen: false,
        },
        {
            question: 'How long does settlement take after a transaction?',
            answer: 'Settlement timing depends on our chosen payment method. For transactions using PayPal/Payoneer, funds are typically released within 3-4 days after delivery confirmation. For mobile money, settlements take 1-2 business days after confirmation.',
            isOpen: false,
        },
        {
            question: "What happens if there's a dispute?",
            answer: 'We have a comprehensive dispute resolution process in place. If an issue arises, both buyers and sellers can raise a concern, and our team reviews the case. If necessary, we can facilitate a return process or offer a free refund if the issue is verified. Our committed team works ensures a fair outcome for all parties involved.',
            isOpen: false,
        },
        {
            question: 'Can I integrate Exchange with my existing systems?',
            answer: 'Yes! We offer API integration capabilities for sellers who want to connect Indie Africa Exchange with their existing e-commerce platforms, ERP, accounting systems, or other business tools. Our developer documentation provides all the necessary endpoints and guides.',
            isOpen: false,
        },
        {
            question: 'Is there a minimum retail value?',
            answer: 'There is no minimum order value for transactions. Our Trade Afrika Exchange Exchange was implemented for buyers and sellers to transact regardless of price. We encourage both high-value B2B transactions and smaller B2C orders.',
            isOpen: false,
        },
    ])

    const [newsletterEmail, setNewsletterEmail] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target

        if (type === 'checkbox') {
            const target = e.target as HTMLInputElement
            setFormData((prev) => ({
                ...prev,
                [name]: target.checked,
            }))
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }))
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Add your form submission logic here
    }

    const toggleFAQ = (index: number) => {
        setFaqs((prev) =>
            prev.map((faq, i) => ({
                ...faq,
                isOpen: i === index ? !faq.isOpen : faq.isOpen,
            }))
        )
    }

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Newsletter subscription:', newsletterEmail)
        // Add your newsletter subscription logic here
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#e6f2ed] flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 xl:px-32 2xl:px-48 py-16 min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
                <div className="max-w-4xl w-full text-center">
                    {/* Tagline */}
                    <p className="text-teal-600 text-xs sm:text-sm md:text-base font-medium mb-2">CONTACT US</p>

                    {/* Heading */}
                    <h1 className="text-[#055A35] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        Contact Us
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg font-light">
                        We're here to help. Expect a reply within 1 business day
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 px-4 h-[1230px] flex flex-col items-center justify-center">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Programs</h2>
                        <p className="text-gray-600">
                            Building capacity and connections across 34 high-trade ecosystems
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name*
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email*
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number (Optional)
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                                Inquiry Type*
                            </label>
                            <select
                                id="inquiryType"
                                name="inquiryType"
                                value={formData.inquiryType}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                            >
                                <option value="">Select a reason...</option>
                                <option value="general">General Inquiry</option>
                                <option value="support">Technical Support</option>
                                <option value="partnership">Partnership</option>
                                <option value="feedback">Feedback</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={5}
                                placeholder="Type your message..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                            />
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="agreedToPrivacy"
                                name="agreedToPrivacy"
                                checked={formData.agreedToPrivacy}
                                onChange={handleInputChange}
                                required
                                className="mt-1 mr-2 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                            />
                            <label htmlFor="agreedToPrivacy" className="text-sm text-gray-600">
                                I agree to the processing of my data by Indie-Link in the sense
                            </label>
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-[#055A35] text-white rounded-md hover:bg-teal-700 transition-colors font-medium"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    setFormData({
                                        fullName: '',
                                        email: '',
                                        phone: '',
                                        inquiryType: '',
                                        message: '',
                                        agreedToPrivacy: false,
                                    })
                                }
                                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors font-medium"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Direct Channels Section */}
            <section className="py-16 mt-8 px-4 bg-teal-50 h-[792px] flex flex-col items-center justify-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Direct Channels</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-teal-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Office</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Visit our head office or schedule an appointment and we'll be right with you.
                            </p>
                            <a href="#" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                                National ICT Innovation Hub Kampala, Uganda
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-teal-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Drop us an e-mail anytime. We promise to respond as quickly as we can! Email us for
                                quotes.
                            </p>
                            <a
                                href="mailto:info@indieafrica.org"
                                className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                            >
                                info@tradeafrikagroup.org
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-teal-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Call us directly during business hours (Mon-Fri, 8am-5pm East African Time) for
                                immediate assistance.
                            </p>
                            <a
                                href="tel:+256414342042"
                                className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                            >
                                +256 764898856
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center max-w-md w-full">
                            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Chat with our team on WhatsApp for quick responses and real-time support. We'll respond
                                during business hours.
                            </p>
                            <a
                                href="https://wa.me/256414342042"
                                className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                            >
                                +256 764898856
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-8">
                <div className="w-full max-w-4xl bg-[#055A35] rounded-3xl p-8 sm:p-10 md:p-12 text-center shadow-lg">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                        Stay in the loop.
                    </h2>

                    <p className="text-teal-100 text-sm sm:text-base mb-6 sm:mb-8">
                        Get updates on programs, events, and MSME resources.
                    </p>

                    <form
                        onSubmit={handleNewsletterSubmit}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto mb-4"
                    >
                        <input
                            type="email"
                            value={newsletterEmail}
                            onChange={(e) => setNewsletterEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 bg-white text-black placeholder:text-gray-600 rounded-md focus:ring-2 focus:ring-teal-300 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-6 sm:px-8 py-3 bg-white text-teal-700 rounded-md font-semibold hover:bg-teal-50 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>

                    <p className="text-teal-200 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                        By joining, I agree to receive communications (via email, SMS, or phone) from Indie Africa.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-medium text-gray-900 pr-8">{faq.question}</span>
                                    <svg
                                        className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                                            faq.isOpen ? 'transform rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {faq.isOpen && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
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

export default ContactPage
