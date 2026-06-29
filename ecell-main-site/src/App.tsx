import { useState } from 'react'
import './App.css'
import { Loader } from './components/Loader/Loader'
import { Hero } from './components/hero/Hero'

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
        <Hero />
      </div>
    </>
  )
}

export default App
