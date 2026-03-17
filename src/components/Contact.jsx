import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function Contact() {
  const sectionRef = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Ďakujeme za Vašu správu! Odpovieme Vám čo najskôr.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="kontakt" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="scroll-animate">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Napíšte nám
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Máte otázku, špeciálnu požiadavku alebo sa chcete dohodnúť na väčšej
              objednávke? Neváhajte nás kontaktovať — radi Vám poradíme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Meno a priezvisko *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all duration-300"
                  placeholder="Vaše meno"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all duration-300"
                  placeholder="vas@email.sk"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Predmet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all duration-300"
                  placeholder="O čom by ste sa chceli porozprávať?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Správa *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all duration-300 resize-none"
                  placeholder="Napíšte nám Vašu správu..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-500 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Odoslať správu
              </button>
            </form>

            {/* Contact info */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Kontaktné údaje</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-gray-300 font-medium">Adresa</p>
                      <p className="text-gray-400 text-sm">Sadová 42, 974 01 Banská Bystrica</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="text-gray-300 font-medium">Telefón</p>
                      <p className="text-gray-400 text-sm">+421 948 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="text-gray-300 font-medium">E-mail</p>
                      <p className="text-gray-400 text-sm">objednavky@babickinemarmelady.sk</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <p className="text-gray-300 font-medium">Otváracie hodiny</p>
                      <p className="text-gray-400 text-sm">Po – Pi: 8:00 – 16:00</p>
                      <p className="text-gray-400 text-sm">So: 9:00 – 12:00</p>
                      <p className="text-gray-400 text-sm">Ne: zatvorené</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-3">🎁 Veľkoobchodné objednávky</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ste kaviareň, reštaurácia alebo obchod a chcete ponúkať naše marmelády?
                  Kontaktujte nás pre špeciálnu cenovú ponuku na väčšie množstvá.
                  Ponúkame vlastné etikety a prispôsobenie chutí podľa Vašich požiadaviek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
