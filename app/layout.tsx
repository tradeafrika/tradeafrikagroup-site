import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderComponent from '@/components/Header/header'
import FooterComponent from '@/components/Footer/footer'

/**
 * The Heading's font
 */
const InterFont = Inter({
    subsets: ['latin'],
    variable: '--next-interfont',
})

/**
 * The Body's Font
 */

export const metadata: Metadata = {
    title: 'Trade Afrika Group (TAG) — Powering Africa’s Digital Trade Revolution',
    description:
        'Trade Afrika Group is a Pan-African digital trade ecosystem driving innovation, inclusion, and cross-border growth to accelerate Africa’s role in the global digital economy.',
    keywords: [
        'tradeafrika',
        'Trade Afrika Group',
        'market day',
        'tradeafrikamarketplace',
        'Joshua Ahimbisibwe',
        'african trade',
        'AfCFTA',
        'marketplace',
        'b2b',
        'B2B',
        'women SMEs',
        'youth SMEs',
        'Intra-African trade',
        'innovation hub',
        'digital trade',
        'green trade',
        'National Innovation Hub',
        'Wandera Martin',
        'Conrad',
    ],
    openGraph: {
        title: 'Trade Afrika Group (TAG)',
        description:
            'Accelerating Africa’s participation in the global digital economy through innovation, inclusion, and integration.',
        url: 'https://tradeafrikagroup.org',
        siteName: 'Trade Afrika Group',
        images: [
            {
                url: '/imgs/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Trade Afrika Group — Pan-African Digital Trade Ecosystem',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trade Afrika Group (TAG)',
        description: 'Empowering Africa’s digital trade revolution through innovation and inclusion.',
        images: ['/imgs/og-image.jpg'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${InterFont.className} ${InterFont.variable} antialiased`}>
                <HeaderComponent />
                {children}
                <FooterComponent />
            </body>
        </html>
    )
}
