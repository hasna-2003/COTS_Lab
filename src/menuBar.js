import cotsLogo from './assets/COTSLOGO.png'

export const navigation = ['Home', 'Projects', 'Publications', 'News', 'Team', 'Contact us']

export function ArrowIcon() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" /></svg>
}

function SearchIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" /><path d="m13 13 4 4" /></svg>
}

export function MenuBar({ activePage, onNavigate, query, onQueryChange }) {
  return (
    <header className="site-header">
      <div className="header-top">
        <button className="brand" type="button" onClick={() => onNavigate('Home')} aria-label="COTS Lab home">
          <img className="brand-logo" src={cotsLogo} alt="COTS Lab" />
        </button>
        <div className="header-actions">
          <nav className="main-nav" aria-label="Main navigation">
            {navigation.map((item) => <button key={item} className={activePage === item ? 'active' : ''} onClick={() => onNavigate(item)}>{item}</button>)}
          </nav>
          <label className="search-box">
            <SearchIcon />
            <input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search" aria-label="Search research" />
            <kbd>⌘ K</kbd>
          </label>
        </div>
      </div>
      <div className="header-title">
        <span className="header-rule" />
        <p>Cognitive Systems and Time Series (COTS) Research Group</p>
        <span className="header-rule" />
      </div>
    </header>
  )
}
