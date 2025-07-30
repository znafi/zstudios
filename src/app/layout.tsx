import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ZStudios - Growth Systems for Scaling Brands",
  description: "We combine content, paid ads, AI automation, and design to scale your brand faster.",
  icons: {
    icon: [
      { url: "./favicon.ico", sizes: "32x32" },
      { url: "./favicon.svg", type: "image/svg+xml" }
    ]
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
