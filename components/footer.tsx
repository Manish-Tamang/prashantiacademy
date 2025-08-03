import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-[760px] mx-auto px-6 py-8">
        <div className="flex flex-col space-y-4">
          {/* Main content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-600 text-sm">&copy; 2025 Prashanti Academy. All rights reserved.</p>
              <p className="text-gray-500 text-xs mt-1">Kapan, Tenjing Chowk, Kathmandu, Nepal</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm whitespace-nowrap">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm whitespace-nowrap">
                Contact
              </Link>
              <Link href="/news" className="text-gray-600 hover:text-gray-900 text-sm whitespace-nowrap">
                News
              </Link>
              <Link href="/gallery" className="text-gray-600 hover:text-gray-900 text-sm whitespace-nowrap">
                Gallery
              </Link>
            </div>
          </div>

          {/* Developer credit - separate line */}
          <div className="text-center pt-2 border-t border-gray-100">
            <Link href="/developer" className="text-gray-500 hover:text-gray-700 text-sm">
              Project by Manish Tamang
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
