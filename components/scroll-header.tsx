'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { TimeDisplay } from './time-display' // Assuming this component exists

interface ScrollHeaderProps {
  children?: React.ReactNode
}

export function ScrollHeader({ children }: ScrollHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Find the hero section on the page
    const heroSection = document.getElementById('hero-section')

    // If a hero section exists, use the IntersectionObserver to track
    // when it scrolls out of view.
    if (heroSection) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Set `isScrolled` to true when the hero section is no longer visible
          setIsScrolled(!entry.isIntersecting)
        },
        // Options: trigger when the hero is no longer visible at the top of the viewport
        { rootMargin: '-100px 0px 0px 0px', threshold: 0 }
      )

      observer.observe(heroSection)

      // Clean up the observer when the component unmounts
      return () => observer.disconnect()
    } else {
      // MODIFIED FALLBACK:
      // If no hero section is detected, immediately set the header to its
      // "scrolled" state (solid background, dark text) for better visibility
      // on pages without a large hero image.
      setIsScrolled(true)
    }
  }, []) // The empty dependency array ensures this runs only once on mount

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/100' // Solid background when scrolled or no hero
          : 'bg-transparent border-b border-transparent' // Transparent when at top of hero
      }`}
    >
      <div className="container mx-auto px-4 py-4 relative flex items-center justify-center">
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/talent"
            className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}
          >
            TALENT
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}
          >
            CONTACT
          </Link>
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            INDIGENOUS TALENT
          </Link>
          <Link
            href="/casting"
            className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}
          >
            NEWS
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}
          >
            CULTURAL
          </Link>
        </nav>
        {/* Assuming TimeDisplay component exists and is styled correctly */}
        <div className={`absolute right-4`}>
          <TimeDisplay isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  )
}

// You will also need a placeholder for TimeDisplay if it doesn't exist
// For example:
//
// export function TimeDisplay({ isScrolled }: { isScrolled: boolean }) {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   useEffect(() => {
//     const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
//     return () => clearInterval(timer);
//   }, []);
//   return <div className={`text-sm ${isScrolled ? "text-gray-700" : "text-white"}`}>{time}</div>;
// }