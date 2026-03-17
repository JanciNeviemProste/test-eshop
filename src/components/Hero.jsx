import { useState, useEffect, useRef } from 'react'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const numTarget = parseInt(target, 10)

          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * numTarget))
            if (progress < 1) requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const STATS = [
  { value: 2500, suffix: '+', label: 'spokojných zákazníkov' },
  { value: 15, suffix: '', label: 'druhov marmelád' },
  { value: 48, suffix: 'h', label: 'čerstvé doručenie' },
  { value: 4.9, suffix: '★', label: 'hodnotenie', isDecimal: true },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-amber-950/30" />
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://picsum.photos/id/1080/1920/1080"
          alt="Čerstvé ovocie na výrobu marmelád"
          className="object-cover w-full h-full"
          loading="eager"
          onError={(e) => {
            e.target.onerror = null
            e.target.style.display = 'none'
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gray-950/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <div className="animate-fade-in-up">
          <p className="text-amber-400 font-semibold text-lg mb-4 tracking-wide">
            Tradičné recepty od roku 1965
          </p>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
              Domáce marmelády a džemy
            </span>
            <br />
            <span className="text-white">od babičky Aničky</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Každý pohár je plný lásky, čerstvého ovocia a starostlivo uchovávaných
            receptov, ktoré sa dedia z generácie na generáciu. Žiadne umelé prísady,
            len pravá domáca chuť.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#produkty"
              className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-950 w-full sm:w-auto"
            >
              Objednať teraz
            </a>
            <a
              href="#preco-my"
              className="border border-gray-500 hover:border-amber-400 text-gray-300 hover:text-amber-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-950 w-full sm:w-auto"
            >
              Zistiť viac
            </a>
          </div>

          {/* Social proof stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white">
                  {stat.isDecimal ? (
                    <span>4.9★</span>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
