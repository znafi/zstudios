"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Package {
  name: string
  price: string
  period: string
  description: string
  featured?: boolean
}

interface PackagesSectionProps {
  isDarkMode: boolean
}

export default function PackagesSection({ isDarkMode }: PackagesSectionProps) {
  const packages: Package[] = [
    {
      name: "Starter Presence",
      price: "$1,200",
      period: "/month",
      description: "Perfect for new brands ready to establish their digital foundation",
    },
    {
      name: "Growth Engine",
      price: "$2,500",
      period: "/month",
      description: "Comprehensive growth system for scaling brands",
      featured: true,
    },
    {
      name: "Scale & Automate",
      price: "$4,500",
      period: "/month",
      description: "Full-service automation for enterprise-level growth",
    },
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
              className={`group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                pkg.featured
                  ? isDarkMode
                    ? "bg-white text-black shadow-2xl scale-105"
                    : "bg-black text-white shadow-2xl scale-105"
                  : isDarkMode
                    ? "bg-gray-900 border border-gray-700 hover:shadow-xl text-white"
                    : "bg-white border border-gray-200 hover:shadow-xl"
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span
                    className={`text-lg ml-1 ${
                      pkg.featured
                        ? isDarkMode
                          ? "text-gray-600"
                          : "text-gray-300"
                        : isDarkMode
                          ? "text-gray-400"
                          : "text-gray-600"
                    }`}
                  >
                    {pkg.period}
                  </span>
                </div>
                <p
                  className={`${
                    pkg.featured
                      ? isDarkMode
                        ? "text-gray-600"
                        : "text-gray-300"
                      : isDarkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                  }`}
                >
                  {pkg.description}
                </p>
              </div>

              <Button
                className={`w-full ${
                  pkg.featured
                    ? isDarkMode
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-white text-black hover:bg-gray-100"
                    : isDarkMode
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                Get Started
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
