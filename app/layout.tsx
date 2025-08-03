import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prashanti Academy",
  description: "Website of Prashanti Academy",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 max-w-[780px] mx-auto w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
