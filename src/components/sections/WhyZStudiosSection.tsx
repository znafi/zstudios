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
                At ZStudios, we're not here to just run ads or edit videos. We're here to build growth systems that move your brand forward every single day.
              </p>
              <p>
                We blend creativity, strategy, and smart automation to free you from the marketing grind so you can focus on what really matters: growing your business, serving your customers, and doing what you love.
              </p>
              <p>
                Every brand we work with is different. So is every strategy.
              </p>
              <p>
                No copy-paste templates. No bloated agency nonsense. No long-term contracts. Just clear communication, real partnership, and results that stack month after month.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-white"}`}>260%</div>
                <div className={`${isDarkMode ? "text-gray-400" : "text-gray-400"}`}>ROAS</div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-white"}`}>60 Days</div>
                <div className={`${isDarkMode ? "text-gray-400" : "text-gray-400"}`}>to Profit</div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-white"}`}>30+</div>
                <div className={`${isDarkMode ? "text-gray-400" : "text-gray-400"}`}>Brands Helped</div>
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
