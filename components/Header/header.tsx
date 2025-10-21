'use client'
import React, { useState, useEffect, useRef } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import ProductLogo from './product-logo'
import Link from 'next/link'

const HeaderComponent: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const [menuOpen, setMenuOpen] = useState(false)
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
    const divisionsRef = useRef<HTMLDivElement>(null)
    const programsRef = useRef<HTMLDivElement>(null)

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                divisionsRef.current &&
                !divisionsRef.current.contains(event.target as Node) &&
                programsRef.current &&
                !programsRef.current.contains(event.target as Node)
            ) {
                setOpenDropdown(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Close mobile menu when screen size changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 980) {
                setMenuOpen(false)
                setMobileDropdown(null)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [menuOpen])

    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown)
    }

    const toggleMobileDropdown = (dropdown: string) => {
        setMobileDropdown(mobileDropdown === dropdown ? null : dropdown)
    }

    const closeMobileMenu = () => {
        setMenuOpen(false)
        setMobileDropdown(null)
    }

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="flex items-center justify-between h-16 w-[90%]">
                    {/* Logo */}
                    <div className="flex-shrink-0 ">
                        <ProductLogo />
                    </div>
                    <div className="flex gap-4">
                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-12 lg:gap-8">
                            <Link
                                href="/"
                                className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
                            >
                                About
                            </Link>

                            {/* Divisions Dropdown */}
                            <div className="relative flex items-center" ref={divisionsRef}>
                                <Link
                                    href="/divisions"
                                    className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
                                >
                                    Divisions
                                </Link>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        toggleDropdown('divisions')
                                    }}
                                    className="p-1 ml-1 hover:text-gray-600 text-gray-900"
                                    aria-label="Toggle divisions menu"
                                >
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                            openDropdown === 'divisions' ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                {openDropdown === 'divisions' && (
                                    <div className="absolute top-full -left-4 mt-[20px] w-30 bg-white border border-gray-200 rounded-b shadow-lg py-1 z-50">
                                        <Link
                                            href="/divisions/marketplace"
                                            className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            Marketplace
                                        </Link>
                                        <Link
                                            href="/divisions/academy"
                                            className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            Academy
                                        </Link>

                                        <Link
                                            href="/divisions/afriship"
                                            className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            AfriShip
                                        </Link>
                                        <Link
                                            href="/divisions/payafrika"
                                            className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            PayAfrika
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Programs Dropdown */}
                            <div className="relative flex items-center" ref={programsRef}>
                                <Link
                                    href="/programs-events"
                                    className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors whitespace-nowrap"
                                >
                                    Programs & Events
                                </Link>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        toggleDropdown('programs')
                                    }}
                                    className="p-1 ml-1 hover:text-gray-600 text-gray-900"
                                    aria-label="Toggle programs menu"
                                >
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                            openDropdown === 'programs' ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                {openDropdown === 'programs' && (
                                    <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                                        <Link
                                            href="/programs/accelerator"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            Market Day
                                        </Link>
                                        <Link
                                            href="/programs/partnerships"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            Workshops
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/partnerships"
                                className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
                            >
                                Partnerships
                            </Link>
                            <Link
                                href="/contactus"
                                className="text-gray-900 h-[40px] w-[120px] flex items-center justify-center rounded-md border border-green-700 hover:bg-gray-50 text-sm font-medium transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Right Side Buttons */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Link
                                href="/network"
                                className="bg-green-700 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-medium hover:bg-green-800 transition-colors whitespace-nowrap"
                            >
                                Join the Network
                            </Link>

                            {/* Hamburger Button */}
                            <button
                                className="lg:hidden text-gray-900 hover:text-gray-600 p-2"
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Toggle menu"
                            >
                                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
                    <div className="px-4 py-4 space-y-1">
                        <Link
                            href="/"
                            className="block px-3 py-3 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium transition-colors"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            className="block px-3 py-3 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium transition-colors"
                            onClick={closeMobileMenu}
                        >
                            About
                        </Link>

                        {/* Mobile Divisions Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleMobileDropdown('divisions')}
                                className="w-full flex items-center justify-between px-3 py-3 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium transition-colors"
                            >
                                <span>Divisions</span>
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-200 ${
                                        mobileDropdown === 'divisions' ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {mobileDropdown === 'divisions' && (
                                <div className="pl-4 space-y-1 mt-1">
                                    <Link
                                        href="/divisions/marketplace"
                                        className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        Marketplace
                                    </Link>
                                    <Link
                                        href="/divisions/macademy"
                                        className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        Academy
                                    </Link>
                                    <Link
                                        href="/divisions/afriship"
                                        className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        AfriShip
                                    </Link>
                                     <Link
                                        href="/divisions/payafrika"
                                        className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        PayAfrika
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Programs Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleMobileDropdown('programs')}
                                className="w-full flex items-center justify-between px-3 py-3 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium transition-colors"
                            >
                                <span>Programs & Events</span>
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-200 ${
                                        mobileDropdown === 'programs' ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {mobileDropdown === 'programs' && (
                                <div className="pl-4 space-y-1 mt-1">
                                    <Link
                                        href="/programs/accelerator"
                                        className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        Market Day
                                    </Link>
                                    <Link
                                        href="/programs/summit"
                                        className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        Workshops
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                           href="/partnerships"
                            className="block px-3 py-3 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium transition-colors"
                            onClick={closeMobileMenu}
                        >
                            Partnerships
                        </Link>

                        <Link
                            href="/contactus"
                            className="block mx-3 mt-4 text-center text-gray-900 px-6 py-3 rounded-md border border-green-700 hover:bg-gray-50 text-base font-medium transition-colors"
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default HeaderComponent
