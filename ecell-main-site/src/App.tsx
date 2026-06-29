import { useState } from 'react'
import './App.css'
import { Loader } from './components/Loader/Loader'
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { Events } from './components/events/Events'
import { Echo } from './components/echo/Echo'
import { Gallery } from './components/gallery/Gallery'
import { Team } from './components/team/Team'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/Navbar/Navbar'

const hasSeenLoader = sessionStorage.getItem('ecell-loader-seen') === 'true'

function App() {
  const [showContent, setShowContent] = useState(false)
  const [loaderDone, setLoaderDone] = useState(false)

  return (
    <>
      {!loaderDone && (
        <Loader
          subtitle="ECELL IITK"
          onTransitionStart={() => setShowContent(true)}
          onComplete={() => {
            setLoaderDone(true)
          }}
        />
      )}
      <div className={`app-content ${showContent ? 'visible' : ''}`}>
        <Navbar />
        <Hero />
        <About />
        <Events />
        <Echo />
        <Gallery />
        <Team />
        <Footer />
      </div>
    </>
  )
}

export default App
