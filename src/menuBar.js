import { useState } from 'react'
import cotsLogo from './assets/COTSLOGO.png'

export const navigation = ['Home', 'Projects', 'Publications', 'News', 'Team']

export function ArrowIcon() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" /></svg>
}

function SearchIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" /><path d="m13 13 4 4" /></svg>
}

export function MenuBar({ activePage, onNavigate, query, onQueryChange }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (page) => {
    onNavigate(page)
    setMenuOpen(false)
  }

  return (
    <header className="site-header dark-header">
      <div className="header-container">
        <button className="brand" type="button" onClick={() => handleNavigate('Home')} aria-label="COTS Lab home">
          <img className="brand-logo" src={cotsLogo} alt="COTS Lab" />
          <span className="logo-text">COTS Lab</span>
        </button>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
        <div className={`header-actions${menuOpen ? ' menu-open' : ''}`}>
          <nav className="main-nav" id="main-navigation" aria-label="Main navigation">
            {navigation.map((item) => <button key={item} className={activePage === item ? 'active' : ''} onClick={() => handleNavigate(item)}>{item.toUpperCase()}</button>)}
          </nav>
          <label className="search-box">
            <SearchIcon />
            <input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search" aria-label="Search research" />
            <kbd></kbd>
          </label>
        </div>
      </div>
    </header>
  )
}
