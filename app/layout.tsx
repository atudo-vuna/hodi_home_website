import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HODI - Coming Soon',
  description: 'HODI Home - Free Video Call Service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

