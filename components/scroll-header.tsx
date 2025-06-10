"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { TimeDisplay } from "./time-display"

interface ScrollHeaderProps {
  children?: React.ReactNode
}

export function ScrollHeader({ children }: ScrollHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show solid background when scrolled down more than 100px
      setIsScrolled(window.scrollY > 100)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 relative flex items-center justify-center">
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/talent"
            className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
              isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
            }`}
          >
            TALENT
          </Link>
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            INDIGENOUS TALENT
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
              isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
            }`}
          >
            CONTACT
          </Link>
          <Link
            href="/news"
            className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
              isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
            }`}
          >
            NEWS
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
              isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
            }`}
          >
            CULTURAL SERVICCES
          </Link>
        </nav>
        <div className={`absolute right-4 transition-colors duration-300 ${isScrolled ? "" : "text-white"}`}>
          <TimeDisplay isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  )
}
