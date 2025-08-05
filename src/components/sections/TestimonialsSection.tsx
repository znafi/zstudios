"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Peterson",
    role: "Company Founder",
    content: "They crushed our branding overhaul. The whole process was smooth and the new look is perfect.",
    image: "/testimonial1.jpg",
    stars: 5
  },
  {
    name: "Omar Khan",
    role: "Business Owner",
    content: "I was so lost with social media, but they've helped me find my audience. It's been a game-changer for my brand.",
    image: "/testimonial2.jpg",
    stars: 4.5
  },
  {
    name: "Emily Roberts",
    role: "Brand Owner",
    content: "Totally transformed my website! So happy with the results and the team was a pleasure to work with.",
    image: "/testimonial3.jpg",
    stars: 4.5
  }
]

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-[32px] bg-gradient-to-br from-[#1a0b2e]/40 via-transparent to-[#271344]/60 backdrop-blur-xl border border-white/5 shadow-[0_8px_32px_0_rgba(31,0,61,0.25)] hover:shadow-[0_8px_32px_0_rgba(31,0,61,0.35)] transition-all duration-300 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star 
                    key={j} 
                    size={20} 
                    className={`${j < Math.floor(testimonial.stars) ? 'text-yellow-400 fill-yellow-400' : j < testimonial.stars ? 'text-yellow-400 fill-yellow-400 opacity-50' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className={`mb-8 leading-relaxed text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full mr-4 overflow-hidden ring-2 ring-purple-500/20">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-black"}`}>{testimonial.name}</div>
                  <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
