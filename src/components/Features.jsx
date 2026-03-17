import useScrollAnimation from '../hooks/useScrollAnimation'

const PRODUCTS = [
  {
    emoji: '🍓',
    name: 'Jahodový džem s vanilkou',
    description: 'Šťavnaté jahody z našej záhrady doplnené o jemnú vanilku z Madagaskaru. Tento džem je ideálny na raňajkové pečivo, do jogurtu alebo ako náplň do koláčov. Každý pohár obsahuje minimálne 70 % ovocia.',
    price: '4,90 €',
    badge: 'Najpredávanejší',
    image: 'https://picsum.photos/id/1080/600/400',
  },
  {
    emoji: '🫐',
    name: 'Čučoriedková marmeláda',
    description: 'Ručne zbierané čučoriedky z podhorských lesov dodávajú tejto marmeláde výnimočnú chuť a vôňu. Bohatá na antioxidanty a vitamíny. Skvelá na palacinky, do ovsenej kaše alebo jednoducho na lyžičku.',
    price: '5,50 €',
    badge: null,
    image: 'https://picsum.photos/id/107/600/400',
  },
  {
    emoji: '🍑',
    name: 'Marhuľová marmeláda',
    description: 'Slnkom vyzreté marhule z južného Slovenska spracované do hodvábne jemnej marmelády. Sladká s jemnou kyselinkou — presne tak, ako to robievala babička Anička. Vynikajúca k čerstvému chlebu s maslom.',
    price: '4,50 €',
    badge: 'Novinka',
    image: 'https://picsum.photos/id/102/600/400',
  },
  {
    emoji: '🍒',
    name: 'Višňový džem s čokoládou',
    description: 'Kombinácia zrelých višní a horkej čokolády vytvára neodolateľnú pochúťku. Tento luxusný džem sa hodí na dezerty, do lievancov alebo ako originálny darček pre gurmánov.',
    price: '6,20 €',
    badge: 'Limitovaná edícia',
    image: 'https://picsum.photos/id/139/600/400',
  },
  {
    emoji: '🍊',
    name: 'Pomarančová marmeláda',
    description: 'Klasická anglická marmeláda s kúskami pomarančovej kôry pripravená podľa receptu, ktorý babička Anička získala na svojich cestách. Jemne horká, aromatická a osviežujúca.',
    price: '5,00 €',
    badge: null,
    image: 'https://picsum.photos/id/1056/600/400',
  },
  {
    emoji: '🫙',
    name: 'Darčeková sada (3 ks)',
    description: 'Tri najobľúbenejšie marmelády v elegantnom darčekovom balení s drevenou lyžičkou. Ideálny darček na Vianoce, narodeniny alebo len tak — pre radosť. Obsahuje jahodový, čučoriedkový a marhuľový džem.',
    price: '13,90 €',
    badge: 'Akcia – ušetrite ešte dnes',
    image: 'https://picsum.photos/id/225/600/400',
  },
]

function ProductCard({ product }) {
  const ref = useScrollAnimation()

  return (
    <div
      ref={ref}
      className="scroll-animate bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden hover:scale-[1.02] hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 cursor-pointer flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            e.target.onerror = null
            e.target.style.display = 'none'
            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-amber-600', 'to-orange-700')
            e.target.parentElement.innerHTML = '<span class="text-4xl flex items-center justify-center w-full h-full">📷</span>'
          }}
        />
        {product.badge && (
          <span className="absolute top-3 right-3 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-lg">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{product.emoji}</span>
          <h3 className="text-xl font-semibold text-white">{product.name}</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-amber-400">{product.price}</span>
          <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-800">
            Pridať do košíka
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const headingRef = useScrollAnimation()

  return (
    <section id="produkty" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="scroll-animate text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Naše domáce marmelády
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Každý pohár vyrábame ručne z čerstvého ovocia bez konzervantov a umelých
            farbív. Ochutnajte tradíciu, ktorá sa dedí už tri generácie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
