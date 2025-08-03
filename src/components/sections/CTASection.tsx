"use client"

import { Button } from "@/components/ui/button"

interface CTASectionProps {
  isDarkMode: boolean
}

export default function CTASection({ isDarkMode }: CTASectionProps) {
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById("calendar")
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="cta"
      className={`py-20 px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}
        >
          Ready to Scale Your Brand?
        </h2>
        <p className={`text-xl max-w-3xl mx-auto mb-10 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          Book a free strategy call and let&apos;s discuss how we can help you achieve unstoppable growth
        </p>
        <div className="flex justify-center">
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
    </section>
  )
}
