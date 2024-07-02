import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Devx Portfolio',
  description: 'Devx portfolio',
  'google-site-verification': 'gCR7MljD8MbDmiF-iZZ7sYEHCv1pFP-85BVAu7b_eH4'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
