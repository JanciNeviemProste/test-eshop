import useScrollAnimation from '../hooks/useScrollAnimation'

const FEATURES = [
  {
    emoji: '🌿',
    title: 'Prírodné ingrediencie',
    description: 'Používame výhradne čerstvé ovocie od miestnych pestovateľov a prírodný trstinový cukor. V našich marmeládach nenájdete žiadne konzervanty, umelé farbivá ani stužené tuky. Každá ingrediencia je starostlivo vybraná, aby ste dostali len to najlepšie.',
  },
  {
    emoji: '👵',
    title: 'Tradičné recepty',
    description: 'Babička Anička začala variť marmelády v roku 1965 a odvtedy sa jej recepty dedia z generácie na generáciu. Každý recept bol roky zdokonaľovaný, aby ste mohli ochutnať autentickú domácu chuť, akú si pamätáte z detstva.',
  },
  {
    emoji: '🏡',
    title: 'Ručná výroba',
    description: 'Každý pohár pripravujeme ručne v malých dávkach, čo zaručuje najvyššiu kvalitu. Ovocie spracúvame do 24 hodín od zberu, aby si zachovalo maximálnu čerstvosť, chuť a všetky vitamíny. Nie sme fabrika — sme rodina.',
  },
  {
    emoji: '🚚',
    title: 'Rýchle doručenie',
    description: 'Objednávky odosielame do 48 hodín. Doručujeme po celom Slovensku prostredníctvom spoľahlivých kuriérskych služieb. Pri objednávke nad 25 € je doručenie úplne zadarmo. Každý balík je starostlivo zabalený, aby prišiel v perfektnom stave.',
  },
  {
    emoji: '🎁',
    title: 'Darčekové balenia',
    description: 'Hľadáte originálny darček? Naše darčekové sady v elegantnom balení s drevenou lyžičkou potešia každého milovníka domácich pochúťok. Pridáme aj osobnú kartičku s Vaším venovaním.',
  },
  {
    emoji: '⭐',
    title: 'Spokojnosť zákazníkov',
    description: 'S priemerným hodnotením 4,9 z 5 hviezdičiek sa radíme medzi najobľúbenejšie domáce marmelády na Slovensku. Viac ako 2 500 spokojných zákazníkov nám dôveruje a pravidelne sa k nám vracia.',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useScrollAnimation()

  return (
    <div
      ref={ref}
      className="scroll-animate bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 hover:scale-[1.02] hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="text-4xl mb-4 block">{feature.emoji}</span>
      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
    </div>
  )
}

export default function WhyUs() {
  const headingRef = useScrollAnimation()

  return (
    <section id="preco-my" className="py-16 lg:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="scroll-animate text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Prečo si vybrať naše marmelády
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nie sme len ďalší e-shop s marmeládami. Sme rodina, ktorá varí s láskou
            a vášňou pre tradičné chute už vyše 60 rokov.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
