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

  return (
    <div className="overflow-hidden">
      <Navbar 
        onNavigateToProducts={() => setView('products')} 
        onGoHome={() => setView('home')} 
        isProductPage={view === 'products'}
      />
      
      {view === 'home' ? (
        <>
          <Hero />
          <Features />
          <AppsEcosystem />
          <DashboardPreview />
          <IndustrySolutions />
          <Testimonials />
          <Contact />
        </>
      ) : (
        <ProductPage onGoHome={() => setView('home')} />
      )}
      
      <Footer onNavigateToProducts={() => setView('products')} />
    </div>
  )
}

export default App
