import { useState } from 'react'
import './App.css'
import { Loader } from './components/Loader/Loader'
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { Events } from './components/events/Events'
import { Echo } from './components/echo/Echo'
import { Navbar } from './components/layout/Navbar'

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
        <Navbar />
        <Hero />
        <About />
        <Events />
        <Echo />
      </div>
    </>
  )
}

export default App


