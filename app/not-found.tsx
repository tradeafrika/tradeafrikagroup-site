'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-[#e6f2ed] px-6 sm:px-10 lg:px-16">
            <div className="text-center max-w-lg">
                {/* Error Code */}
                <h1 className="text-[90px] sm:text-[120px] md:text-[150px] font-bold text-[#055A35] leading-none">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mt-4">Page Not Found</h2>

                {/* Description */}
                <p className="text-gray-600 mt-4 mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                    Looks like you’ve wandered off the trade route. The page you’re looking for doesn’t exist or has
                    been moved.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 bg-[#055A35] text-white px-6 py-3 rounded-md font-semibold hover:bg-green-900 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Home
                    </Link>
                    <Link
                        href="/contact"
                        className="text-[#055A35] border border-[#055A35] hover:bg-[#055A35] hover:text-white px-6 py-3 rounded-md font-semibold transition-colors"
                    >
                        Contact Support
                    </Link>
                </div>

                {/* Footer message */}
                <p className="text-gray-500 text-xs sm:text-sm mt-10">
                    © {new Date().getFullYear()} Trade Afrika Group. All rights reserved.
                </p>
            </div>
        </section>
    )
}
