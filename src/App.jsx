import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import AppsEcosystem from './components/AppsEcosystem'
import DashboardPreview from './components/DashboardPreview'
import IndustrySolutions from './components/IndustrySolutions'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <AppsEcosystem />
      <DashboardPreview />
      <IndustrySolutions />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
