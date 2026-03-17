import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WaveDivider from './components/WaveDivider'
import Features from './components/Features'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WaveDivider fillColor="fill-gray-900" />
        <Features />
        <WaveDivider fillColor="fill-gray-950" />
        <WhyUs />
        <WaveDivider fillColor="fill-gray-900" />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
