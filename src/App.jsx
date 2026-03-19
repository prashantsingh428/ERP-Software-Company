import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import AppsEcosystem from './components/AppsEcosystem'
import DashboardPreview from './components/DashboardPreview'
import IndustrySolutions from './components/IndustrySolutions'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProductPage from './components/ProductPage'

function App() {
  const [view, setView] = useState('home') // 'home' or 'products'

  if (view === 'products') {
    return <ProductPage onGoHome={() => setView('home')} />
  }

  return (
    <div className="overflow-hidden">
      <Navbar onNavigateToProducts={() => setView('products')} />
      <Hero />
      <Features />
      <AppsEcosystem />
      <DashboardPreview />
      <IndustrySolutions />
      <Testimonials />
      <Contact />
      <Footer onNavigateToProducts={() => setView('products')} />
    </div>
  )
}

export default App
