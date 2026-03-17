const FOOTER_LINKS = [
  {
    title: 'Navigácia',
    links: [
      { label: 'Domov', href: '#hero' },
      { label: 'Naše produkty', href: '#produkty' },
      { label: 'Prečo my', href: '#preco-my' },
      { label: 'Kontakt', href: '#kontakt' },
    ],
  },
  {
    title: 'Informácie',
    links: [
      { label: 'Obchodné podmienky', href: '#' },
      { label: 'Ochrana osobných údajov', href: '#' },
      { label: 'Reklamačný poriadok', href: '#' },
      { label: 'Doprava a platba', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="text-2xl">🍓</span>
              Babičkine marmelády
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Domáce marmelády a džemy vyrobené s láskou podľa tradičných receptov
              babičky Aničky. Čerstvé ovocie, bez umelých prísad, s doručením
              po celom Slovensku.
            </p>
            <p className="text-gray-500 text-sm">
              IČO: 12 345 678 | DIČ: 2012345678
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Babičkine marmelády. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  )
}
