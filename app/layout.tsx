import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abderrahmane Elyes — Développeur Full Stack JS',
  description: 'Portfolio professionnel de Abderrahmane Elyes, Développeur Full Stack JS & Ingénieur Informatique à la BDL.',
  keywords: ['Développeur Full Stack', 'React', 'Next.js', 'Laravel', 'PHP', 'Java', 'Alger'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
