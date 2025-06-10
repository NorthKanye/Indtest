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
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"}`}
        >
          INDIGENOUS TALENT
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#models"
              className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
              }`}
            >
              MODELS
            </Link>
            <Link
              href="#actors"
              className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
              }`}
            >
              ACTORS
            </Link>
            <Link
              href="#about"
              className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
              }`}
            >
              ABOUT
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
              }`}
            >
              CONTACT
            </Link>
          </nav>
          <div className={`transition-colors duration-300 ${isScrolled ? "" : "text-white"}`}>
            <TimeDisplay isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </header>
  )
}
