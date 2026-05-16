import type { Metadata } from "next"
import { Inter, Kulim_Park } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const kulimPark = Kulim_Park({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-kulim-park",
  display: "swap",
})

export const metadata: Metadata = {
  title: "The Creator - Landing Page",
  description:
    "Our team combines strategy, design, and technology to breathe life into your brand.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${kulimPark.variable}`}>
      <body>{children}</body>
    </html>
  )
}
