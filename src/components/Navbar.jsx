import { useState } from 'react'
import { logo } from '../assets/images.js'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 flex items-center justify-between h-[90px] md:h-[110px]">

        {/* Logo — bigger to match design */}
        <img
          src={logo}
          alt="Sri Ambaajee Electricals"
          className="h-[70px] md:h-[90px] w-auto"
        />

        {/* Desktop buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 md:px-8 py-3 border-2 border-gray-800 text-gray-900 text-[14px] md:text-[15px] font-semibold hover:bg-gray-50 transition-colors rounded-sm whitespace-nowrap"
          >
            Contact Us Today
          </a>
          <a
            href="https://maps.google.com/?q=75+Godown+Street+Chennai+600001"
            target="_blank"
            rel="noreferrer"
            className="px-5 md:px-8 py-3 bg-brand-red text-white text-[14px] md:text-[15px] font-semibold hover:bg-brand-red-dark transition-colors rounded-sm whitespace-nowrap"
          >
            Get Direction
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-3">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center py-3 border-2 border-gray-800 text-gray-900 text-sm font-semibold rounded-sm"
          >
            Contact Us Today
          </a>
          <a
            href="https://maps.google.com/?q=75+Godown+Street+Chennai+600001"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block text-center py-3 bg-brand-red text-white text-sm font-semibold rounded-sm"
          >
            Get Direction
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
