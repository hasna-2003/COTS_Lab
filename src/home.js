import { ArrowIcon } from './menuBar'

export function Home({ onNavigate }) {
  return <>
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> Curious minds, meaningful impact</p>
        <h1>Research for a <em>more thoughtful</em> future.</h1>
        <p className="hero-lede">COTS Lab is an interdisciplinary research group exploring how technology can help people understand, connect, and create change.</p>
        <div className="hero-actions"><button className="button button-dark" onClick={() => onNavigate('Projects')}>Explore our work <ArrowIcon /></button><button className="text-button" onClick={() => onNavigate('Team')}>Meet the team <ArrowIcon /></button></div>
        <div className="hero-meta"><span><strong>12</strong> active projects</span><span><strong>08</strong> countries</span><span><strong>24</strong> researchers</span></div>
      </div>
      <div className="hero-art"><div className="art-glow" /><div className="art-card art-card-back" /><div className="art-card art-card-front"><div className="art-grid" aria-hidden="true"><span /><span /><span /></div><span className="art-label">Ideas in motion <b>↗</b></span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="art-note">01 — 04</span></div>
    </section>
    <section className="statement-strip"><p>We ask better questions <span>✦</span> build with care <span>✦</span> share what we learn <span>✦</span></p></section>
  </>
}
