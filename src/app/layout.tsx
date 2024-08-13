import React from 'react'
import { Metadata } from 'next'
import { Jost } from 'next/font/google'
import ScrollArrow from './_components/ScrollArrow'
import { AdminBar } from './_components/AdminBar'
import { Footer } from './_components/Footer'
import { Header } from './_components/Header'
import { Providers } from './_providers'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'

import './_css/app.scss'

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jost',
})


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Construction Bazaar</title>
        <link rel="icon" href="/cb-logo.ico" sizes="32x32" />
        <link rel="icon" href="/cb-logo.svg" type="image/svg+xml" />
      </head>
      <body className={jost.variable}>
        <Providers>
          <AdminBar />
          {/* @ts-expect-error */}
          <Header />
          <main className="main">{children}</main>
          {/* @ts-expect-error */}
          <Footer />
        </Providers>

        <div className="floating-icon-right">
          <a href="tel:+917015420993" className="call-icon" target="_blank">
            <img src="/call.svg" alt="Call Now" />
          </a>
        </div>

        <div className="floating-icon-left">
          <a href="https://wa.me/917015420993" className="whatsapp-icon" target="_blank">
            <img src="/whatsapp.svg" alt="WhatsApp" />
          </a>
        </div>

        <ScrollArrow />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
  openGraph: mergeOpenGraph(),
}

