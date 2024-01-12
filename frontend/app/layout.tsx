import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Notes App',
  description: 'A simple notes application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/note-icon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/note-icon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/note-icon/favicon-16x16.png"/>
      </head>
      <link rel="manifest" href="/site.webmanifest"></link>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
