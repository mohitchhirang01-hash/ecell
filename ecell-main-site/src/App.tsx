import { useState } from 'react'
import './App.css'
import { Loader } from './components/Loader/Loader'
import Lightfall from './components/Backgrounds/Lightfall'

function App() {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true)
  const [isContentVisible, setIsContentVisible] = useState(false)

  return (
    <>
      {isLoaderVisible && (
        <Loader
          subtitle="ECELL IITK"
          onTransitionStart={() => setIsContentVisible(true)}
          onComplete={() => setIsLoaderVisible(false)}
        />
      )}

      <div className={`app-content ${isContentVisible ? 'visible' : ''}`}>
        <section id="center">
          {isContentVisible && (
            <Lightfall
              colors={['#fbc316']}
              backgroundColor="#000000"
              streakWidth={0.7}
              streakLength={1.8}
              density={0.8}
              twinkle={0.45}
              glow={0.2}
              zoom={1.8}
              mouseStrength={0}
              mouseRadius={0.1}
              speed={0.5}
              streakCount={4}
              backgroundGlow={0.5}
            />
          )}
        </section>
      </div>
    </>
  )
}

export default App
