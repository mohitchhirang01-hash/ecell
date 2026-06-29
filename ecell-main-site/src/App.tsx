import { useState } from 'react'
import './App.css'
import { Loader } from './components/Loader/Loader'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { StatsRibbon } from './components/StatsRibbon/StatsRibbon'
import { FeatureGrid } from './components/FeatureGrid/FeatureGrid'
import { CTASection } from './components/CTASection/CTASection'
import { Footer } from './components/Footer/Footer'

function App() {
  const [showContent, setShowContent] = useState(false)
  const [loaderDone, setLoaderDone] = useState(false)

  return (
    <>
      {!loaderDone && (
        <Loader
          subtitle="ECELL IITK"
          onTransitionStart={() => setShowContent(true)}
          onComplete={() => setLoaderDone(true)}
        />
      )}
      <div className={`app-content ${showContent ? 'visible' : ''}`}>
        <Navbar />
        <Hero />
        <StatsRibbon />
        <FeatureGrid />
        <CTASection />
        <Footer />
      </div>
    </>
  )
}

export default App
