"use client"

interface FooterProps {
  isDarkMode: boolean
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer
      className={`py-12 px-6 lg:px-8 border-t transition-colors duration-300 ${
        isDarkMode ? "bg-black border-gray-800" : "bg-white border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div
            className={`text-2xl font-bold tracking-tight mb-4 md:mb-0 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            ZStudios
          </div>

          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            <a
              href="#"
              className={`transition-colors ${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Services
            </a>
            <a
              href="#"
              className={`transition-colors ${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              About
            </a>
            <a
              href="#"
              className={`transition-colors ${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="mailto:hello@zstudios.com"
              className={`transition-colors ${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              hello@zstudios.com
            </a>
          </div>
        </div>

        <div
          className={`mt-8 pt-8 border-t text-center ${
            isDarkMode ? "border-gray-800 text-gray-500" : "border-gray-100 text-gray-500"
          }`}
        >
          <p>&copy; 2024 ZStudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
