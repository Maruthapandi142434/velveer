import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'velveer',
  description: 'Velveer is managed by a team of highly qualified professionals having years of experience gained from India and overseas business',
  generator: 'velveer.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
           <Header />
        {children}
           <Footer />
        </body>
    </html>
  )
}
