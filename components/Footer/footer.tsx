"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProductLogo from '../Header/product-logo'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import ProductLogo2 from '../Header/product-logo-2'

interface FooterLink {
    label: string
    href: string
}

interface FooterColumn {
    title: string
    links: FooterLink[]
}

interface FooterProps {
    onSubscribe?: (email: string) => void
}

const FooterComponent: React.FC<FooterProps> = ({ onSubscribe }) => {
    const [email, setEmail] = useState('')

    const columns: FooterColumn[] = [
      
        {
            title: 'Resources',
            links: [
                 { label: 'About us', href: '/aboutus' },
                { label: 'Programs & Events', href: '/programs-events' },
                { label: 'Market Day', href: '#' },
                { label: 'Workshops', href: '#' },
              
            ],
        },
        {
            title: 'Our Divisions',
            links: [
                { label: 'Trade Afrika Marketplace', href: '/divisions/marketplace' },
                { label: 'trade Afrika Academy', href: '/divisions/academy' },
                { label: 'AfriShip Logitics', href: '/divisions/afriship' },
                { label: 'PayAfrika', href: '/divisions/payafrika' },
            ],
        },
    ]

    const socialLinks = [
        { icon: <Instagram/>, label: 'Instagram', href: "https://www.instagram.com/tradeafrikamarketplace?igsh=MXVteGNyNXVqNGNkaA%3D%3d&utm_source=qr" },
        { icon: '𝕏', label: 'X (Twitter)', href: 'https://x.com/trade_afrika' },
        { icon: <Linkedin/>, label: 'LinkedIn', href: 'https://www.linkedin.com/company/afritrade-b2b-digital-marketplace/' },
    ]

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (onSubscribe && email) {
            onSubscribe(email)
            setEmail('')
        }
    }

    return (
        <footer className="bg-[#055A35] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Logo */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2">
                           <ProductLogo color='white'/>
                        </div>
                    </div>

                    {/* Footer Columns */}
                    {columns.map((column, idx) => (
                        <div key={idx} className="lg:col-span-1">
                            <h5 className="font-light text-sm text-white mb-4">{column.title}</h5>
                            <ul className="space-y-3">
                                {column.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link
                                            href={link.href}
                                            className="text-white text-sm hover:text-emerald-600 transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Subscribe Section */}
                    <div className="lg:col-span-1">
                        <h5 className="font-light text-white mb-4">Subscribe</h5>
                        <p className="text-white text-sm mb-4 leading-relaxed">
                            Join our newsletter to stay informed about Trade Afrika's initiatives, partnerships and opportunities shaping Africa's trade future.
                        </p>
                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2.5 placeholder:text-white placeholder:text-sm  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2.5 bg-white border text-gray-900  font-medium hover:bg-gray-900 hover:text-white transition-all duration-200"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-white mt-3">
                            By subscribing you agree to with our{' '}
                            <Link href="#" className="underline hover:text-emerald-600">
                                Privacy Policy
                            </Link>{' '}
                            and provide consent to receive updates from our company.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-8"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap items-center gap-6 text-sm text-white">
                        <span>© 2025 Trade Afrika Group. All rights reserved.</span>
                        <Link href="#" className="hover:text-emerald-600 transition-colors underline">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-emerald-600 transition-colors underline">
                            Terms of Service
                        </Link>
                        <Link href="#" className="hover:text-emerald-600 transition-colors underline">
                            Cookies Settings
                        </Link>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, idx) => (
                            <Link
                                key={idx}
                                href={social.href}
                                target='_blank'
                                aria-label={social.label}
                                className="w-10 h-10 flex items-center justify-center text-white hover:text-emerald-600 transition-colors duration-200"
                            >
                                <span className="text-xl">{social.icon}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent
