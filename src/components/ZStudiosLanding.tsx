"use client"

import { useState, useEffect } from "react"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import HeroSection from "./sections/HeroSection"
import ServicesSection from "./sections/ServicesSection"
import PackagesSection from "./sections/PackagesSection"
import WhyZStudiosSection from "./sections/WhyZStudiosSection"
import TestimonialsSection from "./sections/TestimonialsSection"
import CTASection from "./sections/CTASection"

export default function ZStudiosLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection isDarkMode={isDarkMode} scrollY={scrollY} />
      <ServicesSection isDarkMode={isDarkMode} />
      <PackagesSection isDarkMode={isDarkMode} />
      <WhyZStudiosSection isDarkMode={isDarkMode} />
      <TestimonialsSection isDarkMode={isDarkMode} />
      <CTASection isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}
