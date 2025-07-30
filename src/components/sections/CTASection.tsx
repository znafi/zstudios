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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant={isDarkMode ? "outline" : "default"}
            className={isDarkMode ? "text-white hover:text-black" : ""}
            onClick={scrollToCalendar}
          >
            Book a Free Strategy Call
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={`text-lg px-8 py-4 transition-colors ${
              isDarkMode
                ? "border-white text-white hover:bg-white hover:text-black bg-transparent"
                : "border-black text-black hover:bg-black hover:text-white bg-transparent"
            }`}
            onClick={() => window.open("mailto:contact@zstudios.digital", "_blank")}
          >
            Get a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
