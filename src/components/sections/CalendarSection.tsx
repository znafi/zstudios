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
        <h3 className="text-lg font-medium uppercase tracking-wider mb-4 text-gray-400">
          WORK WITH US
        </h3>
        <h2
          className={`text-5xl md:text-6xl font-bold mb-6 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Let&apos;s Level Up
        </h2>
        <h2
          className={`text-5xl md:text-6xl font-bold mb-16 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Your Business!
        </h2>
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
