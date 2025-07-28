"use client"

interface WhyZStudiosSectionProps {
  isDarkMode: boolean
}

export default function WhyZStudiosSection({ isDarkMode }: WhyZStudiosSectionProps) {
  return (
    <section
      className={`py-20 px-6 lg:px-8 transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-black text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-8 leading-tight ${isDarkMode ? "text-white" : "text-white"}`}
            >
              Why brands choose ZStudios over everyone else
            </h2>
            <div className={`space-y-6 text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-300"}`}>
              <p>
                We don't just run ads or create content. We build complete growth ecosystems that work 24/7 to scale
                your brand.
              </p>
              <p>
                Our AI-powered automation handles the repetitive tasks while our creative team focuses on what
                matters: results that compound over time.
              </p>
              <p>
                Every strategy is custom-built for your industry, audience, and growth stage. No cookie-cutter
                solutions. No long-term contracts. Just results.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-white"}`}>300%</div>
                <div className={`${isDarkMode ? "text-gray-400" : "text-gray-400"}`}>Average ROAS</div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-white"}`}>90 Days</div>
                <div className={`${isDarkMode ? "text-gray-400" : "text-gray-400"}`}>To Profitability</div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-white"}`}>50+</div>
                <div className={`${isDarkMode ? "text-gray-400" : "text-gray-400"}`}>Brands Scaled</div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-white"}`}>24/7</div>
                <div className={`${isDarkMode ? "text-gray-400" : "text-gray-400"}`}>AI Automation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
