"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
]

// External links that will open in a new tab
const externalLinks = [
  { name: "RSS News", url: "https://rssnews.sdnayak.pp.ua" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Close mobile menu when escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <nav className="sticky top-0 z-30 bg-[#0a0a0f] bg-opacity-50 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            aria-label="Home"
          >
            WIZARD
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative"
                aria-current={pathname === item.path ? "page" : undefined}
              >
                <span className="text-white hover:text-gray-300 transition-colors duration-200">{item.name}</span>
                {pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-violet-500"
                    layoutId="navbar-underline"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            {externalLinks.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-md p-1"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.path
                    ? "text-white bg-gray-700"
                    : "text-white hover:text-gray-300 hover:bg-gray-700"
                } transition duration-150 ease-in-out`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={pathname === item.path ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            {externalLinks.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700 transition duration-150 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

