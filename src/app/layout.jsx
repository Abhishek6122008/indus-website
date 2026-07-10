import { Poppins, Inter } from 'next/font/google'
import { FraudAlertBar } from '@/components/layout/FraudAlertBar'
import { FraudAlertModal } from '@/components/layout/FraudAlertModal'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieConsent } from '@/components/layout/CookieConsent'
import '@/styles/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'The Indus Group Co.',
  description: 'Delivering industry-leading solutions across verticals with reliability, innovation, and integrity.',
  openGraph: {
    title: 'The Indus Group Co.',
    description: 'Delivering industry-leading solutions across verticals with reliability, innovation, and integrity.',
    images: [
      {
        url: '/images/indus-logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Indus Group Co.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Indus Group Co.',
    images: ['/images/indus-logo.jpeg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <FraudAlertModal />
        <FraudAlertBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
