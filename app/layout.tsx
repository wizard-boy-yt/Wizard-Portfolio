import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import ParticleBackground from "./components/ParticlesBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Soumyadeep Nayak - Developer Portfolio",
  description: "Full-Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js).",
  icons: {
    icon: "/image.png",
    apple: "/image.png",
  },
  openGraph: {
    title: "Soumyadeep Nayak - Developer Portfolio",
    description: "Full-Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js).",
    url: "https://sdnayak.pro", // Replace with actual domain
    siteName: "Soumyadeep Nayak Portfolio",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Soumyadeep Nayak - Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soumyadeep Nayak - Developer Portfolio",
    description: "Full-Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js).",
    images: ["/image.png"],
    creator: "", // Optional: Add your Twitter handle
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/placeholder-logo.png" />
        <link rel="apple-touch-icon" href="/placeholder-logo.png" />
      </head>
      <body className={`${inter.className} bg-[#0a0a0f] text-white`}>
        <ParticleBackground />
        <div className="relative z-10">
          <Navbar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
        </div>
      </body>
    </html>
  )
}

