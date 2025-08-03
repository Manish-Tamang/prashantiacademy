"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown, User } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-[760px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            <Image src="/logo.jpg" alt="Prashanti Academy" width={50} height={30} draggable={false} style={{ userSelect: 'none' }} />
          </Link>

          <nav className="hidden md:flex space-x-4 mr-10">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-black hover:text-gray-700 focus:outline-none">
                About <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border border-gray-200 bg-white shadow-none rounded-none">
                <DropdownMenuItem className="hover:bg-gray-100 focus:bg-gray-100">
                  <Link href="/about" className="w-full text-gray-900">
                    About us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 focus:bg-gray-100">
                  <Link href="/principal" className="w-full text-gray-900">
                    Principal's Message
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/gallery" className="text-black hover:text-gray-700">
              Gallery
            </Link>
            <Link href="/news" className="text-black hover:text-gray-700">
              News
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-700">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-black hover:text-gray-700 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-black hover:text-gray-700 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/principal"
                className="text-black hover:text-gray-700 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Principal
              </Link>
              <Link
                href="/teachers"
                className="text-black hover:text-gray-700 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Teachers
              </Link>
              <Link
                href="/gallery"
                className="text-black hover:text-gray-700 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/news"
                className="text-black hover:text-gray-700 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/contact"
                className="text-black hover:text-gray-700 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/developer"
                className="text-black hover:text-gray-700 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Developer
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
