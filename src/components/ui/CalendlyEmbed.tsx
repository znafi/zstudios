"use client"

import { useEffect } from "react"
import Script from "next/script"

interface CalendlyEmbedProps {
  isOpen: boolean
  onClose: () => void
  isDarkMode: boolean
}

export default function CalendlyEmbed({ isOpen, onClose, isDarkMode }: CalendlyEmbedProps) {
  useEffect(() => {
    // Lock body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />
        <div 
          className={`relative w-full max-w-4xl h-[80vh] mx-4 rounded-lg shadow-xl ${
            isDarkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full hover:bg-opacity-10 ${
              isDarkMode ? "hover:bg-white text-white" : "hover:bg-black text-black"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="w-full h-full">
            <div
              className="calendly-inline-widget w-full h-full"
              data-url="https://calendly.com/zawadnafi88/30min?hide_gdpr_banner=1"
            />
          </div>
        </div>
      </div>
    </>
  )
}
