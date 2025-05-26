import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hardwired Solutions',
  generator: 'K10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
