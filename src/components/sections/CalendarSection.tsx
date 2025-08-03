"use client"

import Script from "next/script"

interface CalendarSectionProps {
  isDarkMode: boolean
}

export default function CalendarSection({ isDarkMode }: CalendarSectionProps) {
  return (
    <section
      id="calendar"
      className={`py-20 px-6 lg:px-8 transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">

        <div className="w-full max-w-4xl mx-auto h-[700px] rounded-lg overflow-hidden">
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
          <div
            className="calendly-inline-widget w-full h-full"
            data-url="https://calendly.com/zawadnafi88/30min?hide_gdpr_banner=1&background_color=121212&text_color=ffffff&primary_color=ffffff"
          />
        </div>
      </div>
    </section>
  )
}
