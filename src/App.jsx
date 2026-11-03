import { useState } from 'react'
import cotsLogo from './assets/COTSLOGO.png'
import { MenuBar } from './menuBar'
import { Home } from './home'
import { Projects } from './projects'
import { Publications } from './publications'
import { News } from './news'
import { Team } from './team'
import { ContactUs } from './contactUs'
import './App.css'

const pageComponents = { Home, Projects, Publications, News, Team, 'Contact us': ContactUs }

function App() {
  const [activePage, setActivePage] = useState('Home')
  const [query, setQuery] = useState('')
  const Page = pageComponents[activePage]

  return (
    <div className={`site-shell page-${activePage.toLowerCase().replace(' ', '-')}`}>
      <MenuBar activePage={activePage} onNavigate={setActivePage} query={query} onQueryChange={setQuery} />
      <main><Page query={query} onNavigate={setActivePage} /></main>
      <footer className="site-footer">
        <div className="footer-top">
          <button className="brand brand-footer" type="button" onClick={() => setActivePage('Home')} aria-label="COTS Lab home">
            <img className="brand-logo" src={cotsLogo} alt="COTS Lab" />
          </button>
          <p>Curiosity, considered.</p>
          <div className="social-links"><a href="#contact-us">LinkedIn</a><a href="#contact-us">GitHub</a><a href="#contact-us">Instagram</a></div>
        </div>
        <div className="footer-bottom"><span>© 2024 COTS Lab. All rights reserved.</span><span>Made for the questions worth asking.</span><button type="button" onClick={() => setActivePage('Home')}>Back to home ↑</button></div>
      </footer>
    </div>
  )
}

export default App
