import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderComponent from '@/components/Header/header'
import FooterComponent from '@/components/Footer/footer'

const Interfont = Inter({
    subsets: ['latin'],
})

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
            <body className={`${Interfont.className} antialiased`}>
                <HeaderComponent />
                {children}
                <FooterComponent />
            </body>
        </html>
    )
}
