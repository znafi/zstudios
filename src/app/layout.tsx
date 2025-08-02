import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://zstudios.digital'),
  title: "ZStudios - Growth Systems for Scaling Brands",
  description: "We combine content, paid ads, AI automation, and design to scale your brand faster.",
  icons: [
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    { rel: "icon", type: "image/png", url: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "icon", type: "image/png", url: "/favicon-16x16.png", sizes: "16x16" },
    { rel: "manifest", url: "/site.webmanifest" },
    { rel: "shortcut icon", url: "/favicon.ico" }
  ],
  openGraph: {
    type: 'website',
    url: 'https://zstudios.digital',
    title: 'ZStudios - Growth Systems for Scaling Brands',
    description: 'We combine content, paid ads, AI automation, and design to scale your brand faster.',
    images: [{ url: '/android-chrome-512x512.png' }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000"
  }
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
