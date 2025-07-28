"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  isDarkMode: boolean
}

export default function CTASection({ isDarkMode }: CTASectionProps) {
  return (
    <section
      className={`py-20 px-6 lg:px-8 transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-black text-white"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-6xl font-bold mb-8 leading-tight ${isDarkMode ? "text-white" : "text-white"}`}
        >
          Ready to scale your brand the smart way?
        </h2>
        <p className={`text-xl mb-12 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-300"}`}>
          Book a free strategy call and discover how we can 3x your growth in the next 90 days
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className={`text-lg px-8 py-4 transition-colors ${
              isDarkMode ? "bg-white text-black hover:bg-gray-200" : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Book a Strategy Call
            <ChevronRight className="ml-2" size={20} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={`text-lg px-8 py-4 transition-colors ${
              isDarkMode
                ? "border-white text-white hover:bg-white hover:text-black bg-transparent"
                : "border-white text-white hover:bg-white hover:text-black bg-transparent"
            }`}
          >
            Get a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
