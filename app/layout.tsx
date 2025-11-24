import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tendances RH 2025 | Expert en Ressources Humaines',
  description: 'Découvrez les principales tendances en ressources humaines pour 2025',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
