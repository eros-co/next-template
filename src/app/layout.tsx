import '@/styles/globals.css'
import { cn } from '@/lib/core'
import { config } from 'app-config'
import { Inter as FontSans } from 'next/font/google'
import { Header, Footer, PageLayout } from '@/components/global'
import type { Metadata } from 'next'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.name}`,
    default: `${config.name}`,
  },
  description: config.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Header />
        <PageLayout>{children}</PageLayout>
        <Footer />
      </body>
    </html>
  )
}
