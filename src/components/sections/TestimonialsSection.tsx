"use client"

import { Star, CheckCircle2 } from "lucide-react"

const testimonials = [
  {
    name: "Jennifer Nguyen",
    timeAgo: "1 month ago",
    content: "Amazing team! Thorough, thoughtful, and easy to work with. I wish I found them much sooner!",
    avatar: "J",
    avatarColor: "bg-pink-500",
    stars: 5,
    verified: true
  },
  {
    name: "New Season",
    timeAgo: "1 month ago",
    content: "My initial consultation with Adster's Sales Manager, Micheal was very informative, professional and...",
    avatar: "N",
    avatarColor: "bg-blue-600",
    stars: 5,
    verified: true
  },
  {
    name: "Kyle Huberman",
    timeAgo: "2 months ago",
    content: "We've worked with Adster on multiple projects and have consistently been impressed with their approach. Their...",
    avatar: "/images/kyle.jpg",
    avatarColor: "",
    stars: 5,
    verified: true,
    hasImage: true
  },
  {
    name: "Soraya Monot",
    timeAgo: "6 months ago",
    content: "Really Amazing, They took the time to call and describe their services and really get in depth of what they do an...",
    avatar: "S",
    avatarColor: "bg-teal-600",
    stars: 5,
    verified: true
  }
]

interface TestimonialsSectionProps {
  isDarkMode: boolean
}

const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

export default function TestimonialsSection({ isDarkMode }: TestimonialsSectionProps) {
  return (
    <section
      id="results"
      className="py-20 px-6 lg:px-8 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00D4FF]">
            Digital Marketing Success Stories: Businesses We've Helped Grow!
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto mb-8 border border-white/10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <GoogleIcon />
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-semibold text-lg">4.8</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-300">Top Rated Service</span>
              </div>
              
              <div className="flex items-center gap-2 bg-teal-600 px-4 py-2 rounded-lg">
                <span className="text-white text-sm font-medium">Verified by Trustindex</span>
                <CheckCircle2 size={18} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {testimonial.hasImage ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white font-semibold text-lg`}>
                      {testimonial.avatar}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-xs text-gray-400">{testimonial.timeAgo}</div>
                  </div>
                </div>
                <GoogleIcon />
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star 
                    key={j} 
                    size={16} 
                    className={`${j < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
                  />
                ))}
                {testimonial.verified && (
                  <CheckCircle2 size={16} className="text-blue-500 ml-1" />
                )}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonial.content}
              </p>

              <button className="text-blue-400 text-sm mt-3 hover:underline">
                Read more
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-[#00D4FF] text-[#00D4FF] rounded-full font-semibold hover:bg-[#00D4FF] hover:text-black transition-all duration-300">
            ADSTER CREATIVE REVIEWS & AWARDS
          </button>
        </div>
      </div>
    </section>
  )
}
