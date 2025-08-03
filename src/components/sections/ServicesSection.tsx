"use client"

import { Play, Target, Globe, TrendingUp, Zap, Share2 } from "lucide-react"

interface Service {
  icon: any
  title: string
  description?: string
  video: string
}

interface ServicesSectionProps {
  isDarkMode: boolean
}

export default function ServicesSection({ isDarkMode }: ServicesSectionProps) {
  const services: Service[] = [
    {
      title: "Short-form Video Content",
      video: "/videos/Short form Video Content.mp4",
      icon: Play,
    },
    {
      title: "Paid Social Ads",
      video: "/videos/Paid Social Ads.mp4",
      icon: Target,
    },
    {
      title: "Website & Funnel Design",
      video: "/videos/Website and Funnel Design.mp4",
      icon: Globe,
    },
    {
      title: "SEO & Organic Growth",
      video: "/videos/SEO and Organic Growth.mp4",
      icon: TrendingUp,
    },
    {
      title: "AI Automation",
      video: "/videos/AI automation.mp4",
      icon: Zap,
    },
    {
      title: "Social Media Management",
      video: "/videos/Social Media Management.mp4",
      icon: Share2,
    },
  ]

  return (
    <section
      id="services"
      className={`py-20 px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? "bg-black" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
            What We Do
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Six core services that work together to create unstoppable growth momentum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              className="group p-8 rounded-2xl relative overflow-hidden"
              style={{
                backgroundColor: isDarkMode ? "#111111" : "#FFFFFF",
                color: "#161616",
                transition: "all 200ms ease-in-out",
              }}
            >
              {/* Video Background */}
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-100 rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{
                  filter: "brightness(0.4) contrast(1.2)",
                }}
                onLoadedData={(e) => {
                  e.currentTarget.play().catch(console.error)
                }}
              >
                <source src={service.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60 rounded-2xl" />

              {/* Default Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full pt-4">
                <div className="mb-4 flex justify-center">
                  <service.icon
                    size={32}
                    className="text-white drop-shadow-lg"
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
                    }}
                  />
                </div>
                <h3
                  className="text-xl font-bold text-center text-white"
                  style={{
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="leading-relaxed text-white"
                  style={{
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  {service.description}
                </p>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
