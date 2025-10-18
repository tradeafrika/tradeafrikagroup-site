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
    variable : "--next-interfont"
})

/**
 * The Body's Font
 */



export const metadata: Metadata = {
    title: 'TradeAfrika',
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
