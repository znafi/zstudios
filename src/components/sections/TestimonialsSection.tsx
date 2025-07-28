"use client"

import { Star } from "lucide-react"

interface TestimonialsSectionProps {
  isDarkMode: boolean
}

export default function TestimonialsSection({ isDarkMode }: TestimonialsSectionProps) {
  return (
    <section
      id="results"
      className={`py-20 px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? "bg-black" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
            Client Success Stories
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Real results from real brands who trusted us with their growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl shadow-lg transition-colors duration-300 ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={20} className={`fill-current ${isDarkMode ? "text-white" : "text-black"}`} />
                ))}
              </div>
              <p className={`mb-6 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                "ZStudio transformed our entire approach to digital marketing. The results speak for themselves -
                we've never seen growth like this."
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full mr-4 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}></div>
                <div>
                  <div className={`font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>Client Name</div>
                  <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>CEO, Brand Name</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
