"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Service {
  title: string
  items: string[]
}

interface Package {
  name: string
  subtitle?: string
  services: Service[]
  featured?: boolean
}

interface PackagesSectionProps {
  isDarkMode: boolean
}

export default function PackagesSection({ isDarkMode }: PackagesSectionProps) {
  const [openPackage, setOpenPackage] = useState<string | null>(null)

  const togglePackage = (packageName: string) => {
    setOpenPackage(prev => prev === packageName ? null : packageName)
  }

  const packages: Package[] = [
    {
      name: "Launch Essentials",
      subtitle: "Start strong. Look premium. Get seen.",
      services: [
        {
          title: "What's Included",
          items: [
            "6 short-form videos (Reels, TikToks, YouTube Shorts)",
            "Ad campaign setup on Meta or TikTok",
            "1 custom landing page (built to convert)",
            "Social media content for 2 platforms (3x/week)",
            "Monthly strategy call",
            "Performance report & insights"
          ]
        }
      ]
    },
    {
      name: "Growth Builder",
      services: [
        {
          title: "What's Included",
          items: [
            "10 custom short-form videos/month",
            "Paid ad management on Meta + Google",
            "2-page high-converting funnel",
            "SEO optimization for homepage + 3 service/product pages",
            "Social media management (2 platforms, 4x/week)",
            "Branded performance dashboard",
            "2 strategy calls/month"
          ]
        }
      ],
      featured: true
    },
    {
      name: "Automate & Scale",
      services: [
        {
          title: "What's Included",
          items: [
            "12 premium short-form videos/month",
            "Paid ad management across Meta, Google (TikTok optional)",
            "3-page custom funnel or small website revamp",
            "SEO strategy across 5 key pages + blog roadmap",
            "Full social media management (3 platforms, 5x/week)",
            "1 AI automation built in n8n (lead flow, reporting, etc.)",
            "Weekly strategy sessions",
            "Dedicated account manager"
          ]
        }
      ]
    }
  ]

  return (
    <section id="packages" className={`py-20 px-6 lg:px-8 ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
            Choose Your Growth Path
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Tailored packages designed to meet you where you are and take you where you want to go
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-500 ${pkg.featured
                ? isDarkMode
                  ? "bg-white text-black shadow-2xl scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:border-2 hover:border-white"
                  : "bg-black text-white shadow-2xl scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:border-2 hover:border-white"
                : isDarkMode
                  ? "bg-gray-900 border border-gray-700 text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:border-2 hover:border-white"
                  : "bg-white border border-gray-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:border-2 hover:border-white hover:bg-black hover:text-white"
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                {pkg.subtitle && (
                  <p className={`text-lg mb-4 ${pkg.featured
                    ? isDarkMode ? "text-gray-600" : "text-gray-300"
                    : isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {pkg.subtitle}
                  </p>
                )}
              </div>

              <Button
                onClick={() => togglePackage(pkg.name)}
                className={`w-full flex items-center justify-between ${pkg.featured
                  ? isDarkMode
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black hover:bg-gray-100"
                  : isDarkMode
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                View Services
                {openPackage === pkg.name ? (
                  <ChevronUp className="ml-2" size={16} />
                ) : (
                  <ChevronDown className="ml-2" size={16} />
                )}
              </Button>

              {openPackage === pkg.name && (
                <div className="mt-6 space-y-6">
                  {pkg.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="space-y-4">
                      <h4 className={`text-lg font-semibold ${pkg.featured
                        ? isDarkMode ? "text-gray-800" : "text-gray-200"
                        : isDarkMode ? "text-gray-200" : "text-gray-800"
                      }`}>
                        {service.title}
                      </h4>
                      <ul className="space-y-2">
                        {service.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className={`flex items-start ${pkg.featured
                              ? isDarkMode ? "text-gray-600" : "text-gray-300"
                              : isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            <span className="mr-2">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
