import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HeaderComponent from '@/components/Header/header'
import FooterComponent from '@/components/Footer/footer'
import './globals.css'

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
    title: 'Trade Afrika Group (TAG) — Africa’s most trusted SME Digital Trade Ecosystem',
    description:
        'Trade Afrika Group is a Pan-African digital trade ecosystem driving innovation, inclusion, and Intra-African Trade to accelerate Africa’s role in the global digital economy.',
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
            'Trade Afrika Group is a Pan-African digital trade ecosystem driving innovation, inclusion, and Intra-African Trade to accelerate Africa’s role in the global digital economy.',
        url: 'https://tradeafrikagroup.org',
        siteName: 'Trade Afrika Group',
        images: [
            {
                url: '/white.png',
                width: 1200,
                height: 630,
                alt:  'Trade Afrika Group (TAG) — Africa’s most trusted SME Digital Trade Ecosystem',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trade Afrika Group (TAG)',
        description: 'Trade Afrika Group is a Pan-African digital trade ecosystem driving innovation, inclusion, and Intra-African Trade to accelerate Africa’s role in the global digital economy.',
        images: ['/tradeafrikalogo.png'],
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
