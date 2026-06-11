import { useState } from 'react'
import './App.css'
import { Loader } from './components/Loader/Loader'
import logoImg from './assets/logo.png'

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
          <div className="logo-container">
            <img src={logoImg} className="ecell-logo" alt="E-Cell IITK" />
          </div>
          <div className="headline">
            <h1>Entrepreneurship Cell</h1>
            <p className="subtitle">IIT Kanpur</p>
          </div>
          <div className="welcome-box">
            <p>Creating a startup ecosystem that fosters innovation, incubation, and acceleration.</p>
          </div>
        </section>

        <div className="ticks"></div>

        <section id="next-steps">
          <div id="docs">
            <h2>Our Vision</h2>
            <p>Empowering minds, driving entrepreneurship, and cultivating future industry leaders.</p>
          </div>
          <div id="social">
            <h2>Connect with us</h2>
            <p>Join our networks to stay updated.</p>
            <ul>
              <li>
                <a href="https://github.com/ecelliitk" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://ecelliitk.org" target="_blank" rel="noopener noreferrer">
                  Website
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className="ticks"></div>
        <section id="spacer"></section>
      </div>
    </>
  )
}

export default App
