import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joy - Journey of You | Chuyên gia thương mại điện tử hàng đầu Việt Nam',
  description: 'Joy - Công ty chuyên về thương mại điện tử Amazon và TikTok Shop tại Việt Nam. Đưa sản phẩm và trí tuệ của con người Việt Nam ra toàn cầu.',
  keywords: 'Joy, thương mại điện tử, Amazon, TikTok Shop, Việt Nam, e-commerce, global selling',
  authors: [{ name: 'Joy Vietnam' }],
  metadataBase: new URL('https://waveup-al.github.io/joy-company-website'),
  openGraph: {
    title: 'Joy - Journey of You',
    description: 'Chuyên gia thương mại điện tử hàng đầu Việt Nam',
    url: 'https://waveup-al.github.io/joy-company-website',
    siteName: 'Joy Vietnam',
    locale: 'vi_VN',
    type: 'website',
    images: [{
      url: '/LOGO.png',
      width: 1200,
      height: 630,
      alt: 'Joy Company Logo'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joy - Journey of You',
    description: 'Chuyên gia thương mại điện tử hàng đầu Việt Nam',
    images: ['/LOGO.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} antialiased`}>
        <ErrorBoundary>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}