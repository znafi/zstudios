"use client"

import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}

export default function Header({ isDarkMode, setIsDarkMode, isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDarkMode ? "bg-black/80 border-gray-800" : "bg-white/80 border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold tracking-tight">ZStudios</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className={`transition-colors ${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Services
            </a>
            <a
              href="#packages"
              className={`transition-colors ${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Packages
            </a>
            <a
              href="#results"
              className={`transition-colors ${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Results
            </a>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Button
              className={`transition-colors ${
                isDarkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden border-t transition-colors ${
            isDarkMode ? "bg-black border-gray-800" : "bg-white border-gray-100"
          }`}
        >
          <div className="px-6 py-4 space-y-4">
            <a href="#services" className={`block ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Services
            </a>
            <a href="#packages" className={`block ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Packages
            </a>
            <a href="#results" className={`block ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Results
            </a>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
            <Button className={`w-full ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}>
              Book Strategy Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
