import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import AppSideBar from './components/AppSideBar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Business BO',
  description: 'Business BO'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          <aside className="sticky top-0 h-screen shrink-0">
            <AppSideBar />
          </aside>
          <main className="rounded-tl-5xl mt-3 h-[calc(100vh-12px)] flex-1 overflow-auto border bg-gray-50/50 p-8 inset-shadow-sm">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
