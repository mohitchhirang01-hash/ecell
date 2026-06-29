import { useState } from 'react'
import './App.css'
import { Loader } from './components/Loader/Loader'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { Showcase } from './components/showcase/Showcase'
import { Gallery } from './components/gallery/Gallery'
import { Team } from './components/team/Team'
import { Footer } from './components/footer/Footer'
import { Starfield } from './components/common/Starfield'

const hasSeenLoader = sessionStorage.getItem('ecell-loader-seen') === 'true'

function App() {
  const [showContent, setShowContent] = useState(hasSeenLoader)
  const [loaderDone, setLoaderDone] = useState(hasSeenLoader)

  return (
    <>
      {!loaderDone && (
        <Loader
          subtitle="ECELL IITK"
          onTransitionStart={() => setShowContent(true)}
          onComplete={() => {
            sessionStorage.setItem('ecell-loader-seen', 'true')
            setLoaderDone(true)
          }}
        />
      )}
      <div className={`app-content ${showContent ? 'visible' : ''}`}>
        <Starfield />
        <Navbar />
        <Hero />
        <About />
        <Showcase />
        <Gallery />
        <Team />
        <Footer />
      </div>
    </>
  )
}

export default App
