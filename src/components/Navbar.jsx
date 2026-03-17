import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Domov', href: '#hero' },
  { label: 'Naše produkty', href: '#produkty' },
  { label: 'Prečo my', href: '#preco-my' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-2 text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-2xl">🍓</span>
            Babičkine marmelády
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg px-2 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#produkty"
              className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Objednať teraz
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Prepnúť menu"
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-screen pb-4' : 'max-h-0'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#produkty"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 mx-4 text-center bg-amber-600 hover:bg-amber-500 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
          >
            Objednať teraz
          </a>
        </div>
      </div>
    </nav>
  )
}
