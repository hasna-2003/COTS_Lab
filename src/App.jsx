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
          <div className="social-links">
            <a href="https://github.com/cots-lab" target="_blank" rel="noreferrer" aria-label="COTS Lab on GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.48.09.65-.21.65-.46v-1.68c-2.65.58-3.21-1.12-3.21-1.12-.43-1.1-1.05-1.39-1.05-1.39-.86-.59.07-.58.07-.58.95.07 1.45.98 1.45.98.85 1.45 2.23 1.03 2.78.79.09-.62.33-1.03.6-1.27-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.88.98-2.54-.1-.24-.43-1.2.09-2.5 0 0 .8-.25 2.62.97a9.13 9.13 0 0 1 4.77 0c1.82-1.22 2.62-.97 2.62-.97.52 1.3.19 2.26.09 2.5.61.66.98 1.5.98 2.54 0 3.67-2.23 4.48-4.36 4.72.34.29.64.85.64 1.72v2.55c0 .25.17.55.65.46A9.5 9.5 0 0 0 12 2.5Z" /></svg>
            </a>
            <a href="https://www.instagram.com/cotslab/" target="_blank" rel="noreferrer" aria-label="COTS Lab on Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.7" r=".8" fill="currentColor" stroke="none" /></svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2024 COTS Lab. All rights reserved.</span><button type="button" onClick={() => setActivePage('Home')}>Back to home ↑</button></div>
      </footer>
    </div>
  )
}

export default App
