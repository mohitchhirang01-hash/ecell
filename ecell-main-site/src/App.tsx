import { useState } from 'react'
import './App.css'
import { Loader } from './components/Loader/Loader'
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { Events } from './components/events/Events'
import { Echo } from './components/echo/Echo'
import { Gallery } from './components/gallery/Gallery'
import { Navbar } from './components/Navbar/Navbar'

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
      </div>
    </>
  )
}

export default App





