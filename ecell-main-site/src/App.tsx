import { useState } from 'react'
import './App.css'
import { Loader } from './components/Loader/Loader'
import Lightfall from './components/Backgrounds/Lightfall'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Events from './components/Events/Events'

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
        {isContentVisible && <Navbar />}

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

          {/* Hero Overlay Content */}
          <div className="hero-overlay">
            {/* Center Content */}
            <div className="hero-center-content">
              <span className="hero-tagline">IDEATE. INNOVATE. INCUBATE.</span>
              <h1 className="hero-title">
                Entrepreneurship Cell<br />
                IIT Kanpur
              </h1>
              <a href="#about" className="explore-btn">
                EXPLORE
              </a>
            </div>

            {/* Left Social sidebar */}
            <div className="hero-left-socials">
              <div className="vertical-line"></div>
              <a href="https://facebook.com/ecelliitk" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="https://m.me/ecelliitk" target="_blank" rel="noopener noreferrer" aria-label="Messenger">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.14 2 11.25c0 2.91 1.45 5.5 3.73 7.15V22l3.43-1.89c.89.25 1.83.39 2.84.39 5.52 0 10-4.14 10-9.25S17.52 2 12 2zm1.25 12.5L10.5 11.7l-3.9 3.9 4.25-4.5 2.75 2.8 3.9-3.9-4.25 4.5z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/entrepreneurship-cell-iit-kanpur/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ecelliitk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>

            {/* Right Scroll Down Indicator */}
            <div className="hero-scroll-down">
              <span className="scroll-text">SCROLL DOWN</span>
              <span className="scroll-arrow">→</span>
            </div>
          </div>
        </section>

        {isContentVisible && <About />}
        {isContentVisible && <Events />}
      </div>

    </>
  )
}

export default App
