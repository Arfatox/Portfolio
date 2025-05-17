import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Portfolio - Alexis Doher',
    description: 'Portfolio de Alexis Doher, développeur frontend',
    icons: {
        icon: '/icon.ico',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
            <body className={`${inter.className} bg-primary text-white`}>
                {children}
            </body>
        </html>
    )
} 