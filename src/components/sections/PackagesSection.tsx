"use client"

import { Button } from "@/components/ui/button"

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
              className={`group p-8 rounded-2xl transition-all duration-500 h-full backdrop-blur-lg bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-900/30 border border-purple-500/30 shadow-[0_8px_32px_0_rgba(147,51,234,0.1)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.3)] ${isDarkMode ? "text-white" : "text-black"}`}
            >
              <div className="h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">{pkg.name}</h3>
                  {pkg.subtitle && (
                    <p className="text-xl font-semibold mb-6 text-purple-300">
                      {pkg.subtitle}
                    </p>
                  )}
                </div>

                <div className="flex-grow">
                  {pkg.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="space-y-4 mb-6">
                      <h4 className="text-xl font-bold text-purple-200 mb-3">
                        {service.title}
                      </h4>
                      <ul className="space-y-2">
                        {service.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start text-lg font-medium text-purple-100"
                          >
                            <span className="mr-2">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
