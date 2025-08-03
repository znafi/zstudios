"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  isDarkMode: boolean
  scrollY: number
}

export default function HeroSection({ isDarkMode, scrollY }: HeroSectionProps) {
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById("calendar")
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section className={`relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto text-center">
        <div
          className="transform transition-all duration-1000 ease-out relative"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.002),
            zIndex: 10,
          }}
        >
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 ${isDarkMode ? "text-white" : "text-black"}`}
            style={{
              textShadow: isDarkMode ? "0 0 15px rgba(255, 255, 255, 0.2)" : "none",
            }}
          >
            You Bring the Vision.
            <br />
            We Bring the System
          </h1>

          <p
            className={`text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
            style={{
              textShadow: isDarkMode ? "0 0 15px rgba(209, 213, 219, 0.2)" : "none",
            }}
          >
            Less Buzzwords. More Bottom Line
          </p>

          <div className="flex justify-center items-center">
            <Button
              size="lg"
              variant={isDarkMode ? "outline" : "default"}
              className={`text-lg px-8 py-4 ${isDarkMode ? "text-white hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]" : "hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"}`}
              onClick={scrollToCalendar}
            >
              Book a Free Strategy Call
            </Button>
          </div>
        </div>

        {/* Dynamic Rolling Circle Element - Bottom of Hero */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 transition-opacity duration-500 ${
              isDarkMode ? "bg-white/30" : "bg-black/20"
            }`}
            style={{
              opacity: scrollY > 50 ? Math.max(0, 1 - scrollY * 0.004) : 0,
            }}
          />

          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium tracking-wider uppercase transition-opacity duration-500 ${
              isDarkMode ? "text-gray-400" : "text-gray-400"
            }`}
            style={{
              opacity: scrollY > 50 ? Math.max(0, 1 - scrollY * 0.003) : 0,
            }}
          >
            Scroll to discover our growth system
          </div>

          <div
            className="absolute bottom-0 w-6 h-6 bg-black rounded-full transition-all duration-300 ease-out border-2 border-white"
            style={{
              left: `${Math.min(90, scrollY * 0.15)}%`,
              transform: `translateY(-50%) rotate(${scrollY * 2}deg)`,
              opacity: scrollY > 50 ? Math.max(0.9, 1 - scrollY * 0.004) : 0,
              boxShadow: "0 0 25px rgba(0, 0, 0, 0.8), 0 0 50px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="absolute top-1 left-1 w-2 h-2 bg-gray-800 rounded-full" />
          </div>

          <div
            className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ease-out ${
              isDarkMode ? "bg-white" : "bg-black"
            }`}
            style={{
              width: `${Math.min(90, scrollY * 0.15)}%`,
              opacity: scrollY > 50 ? Math.max(0, 1 - scrollY * 0.004) : 0,
            }}
          />
        </div>
      </div>
    </section>
  )
}
