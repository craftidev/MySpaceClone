import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavMenu from './NavMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'MySpaceClone',
    description: 'Social media website',
}

export default function RootLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <html lang="en">
            <body>
                <NavMenu />
                {children}
            </body>
        </html>
    )
}
