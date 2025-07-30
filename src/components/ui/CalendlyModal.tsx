"use client"

import Script from "next/script"

interface CalendlyModalProps {
  isOpen: boolean
  onClose: () => void
  isDarkMode: boolean
}

export default function CalendlyModal({ isOpen, onClose, isDarkMode }: CalendlyModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className={`relative z-50 w-full max-w-4xl rounded-2xl ${isDarkMode ? "bg-black" : "bg-white"} p-4 shadow-xl`}>
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute right-4 top-4 rounded-full p-2 ${
            isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Calendly widget */}
        <div>
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/zawadnafi88?background_color=000000&text_color=ffffff"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </div>
  )
}
