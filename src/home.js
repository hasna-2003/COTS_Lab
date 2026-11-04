import { useState } from 'react'
import { ArrowIcon } from './menuBar'
import researchImage from './assets/images.jpg'
import researchTheme from './assets/theme.jpg'

const researchAreas = [
  { number: '01', title: 'Cognitive systems', text: 'Computational models for perception, learning, reasoning, and decision-making.' },
  { number: '02', title: 'Time-series analysis', text: 'Methods for discovering patterns, trends, dependencies, and change over time.' },
  { number: '03', title: 'Dynamic processes', text: 'Interpretable approaches to complex temporal data in real-world domains.' },
]

const researchHighlights = [
  { title: 'Cognitive forecasting', text: 'Combining cognitive models with forecasting methods to support better decisions under uncertainty.', detail: 'This research examines how human-like reasoning, memory, and attention can improve forecasting models when data is incomplete or rapidly changing.', status: 'Ongoing', image: researchImage, imagePosition: 'center' },
  { title: 'Multivariate time series', text: 'Understanding relationships across many signals and their changing dependencies.', detail: 'We develop methods to reveal how signals influence one another over time, helping researchers understand complex systems rather than treating each measurement in isolation.', status: 'Ongoing', image: researchTheme, imagePosition: 'center' },
  { title: 'Explainable intelligent systems', text: 'Making computational insights easier to interpret, evaluate, and apply.', detail: 'Our work focuses on transparent models and clear visual explanations so that people can assess, trust, and act on computational recommendations.', status: 'In progress', image: researchImage, imagePosition: 'right' },
]

export function Home({ onNavigate }) {
  const [activeHighlight, setActiveHighlight] = useState(null)

  return <>
    <section className="hero-section">
      <div className="hero-content">
        <p className="section-kicker">Cognitive Systems and Time Series</p>
        <h1 className="hero-title"><span>Research for</span><span>complex systems.</span></h1>
        <p className="hero-subtitle">We combine cognitive models and time-series methods to understand dynamic data and support better decisions.</p>
        <div className="hero-buttons">
          <button className="button hero-button-primary" onClick={() => onNavigate('Projects')}>Explore our research <ArrowIcon /></button>
          <button className="button hero-button-secondary" onClick={() => onNavigate('Contact us')}>Contact us</button>
        </div>
      </div>
    </section>
    {/* <section className="about-section">
      <div className="about-heading">
        <p className="section-kicker">About us</p>
        <h1>Cognitive systems<br /><em>meet time series.</em></h1>
      </div>
      <div className="about-content">
        <p className="about-lede">The Cognitive Systems and Time Series (CoTS) research group explores the relationship between human cognition and analyzing time-dependent data.</p>
        <p>Cognitive systems refer to developing computational models and algorithms that mimic human cognitive processes such as perception, learning, reasoning, and decision-making. Moreover, time-series research analyses data collected over time to uncover patterns, trends, and dependencies.</p>
        <p>We integrate cognitive models with time series methods to analyze and interpret complex temporal data to make sense of complex time series data, leading to improved decision-making, forecasting, and understanding of dynamic processes in various domains.</p>
        <button className="button button-dark" onClick={() => onNavigate('Projects')}>Explore our research <ArrowIcon /></button>
      </div>
    </section> */}

    <section className="home-section research-areas-section">
      <div className="section-heading compact"><div><p className="section-kicker">What we study</p><h2>Research <em>areas.</em></h2></div><p className="section-intro">We bring together cognition, computation, and temporal data to study complex systems.</p></div>
      <div className="research-area-grid">{researchAreas.map((area) => <article className="research-area-card" key={area.number}><span>{area.number}</span><h3>{area.title}</h3><p>{area.text}</p></article>)}</div>
    </section>

    <section className="home-section research-highlights-section">
      <div className="section-heading compact"><div><p className="section-kicker">Current work</p><h2>Research <em>highlights.</em></h2></div><p className="section-intro">Explore the questions and methods shaping our research into intelligent, dynamic systems.</p></div>
      <div className="research-highlight-grid">{researchHighlights.map((highlight, index) => {
        const isActive = activeHighlight === index
        return <article className={`research-highlight-card${isActive ? ' is-active' : ''}`} key={highlight.title}>
          <button type="button" className="research-highlight-toggle" aria-expanded={isActive} onClick={() => setActiveHighlight(isActive ? null : index)}>
            <span className="research-highlight-image"><img src={highlight.image} alt="" style={{ objectPosition: highlight.imagePosition }} /></span>
            <span className="research-highlight-content"><span className="card-number">0{index + 1}</span><span className="research-highlight-title"><strong>{highlight.title}</strong><span>{highlight.text}</span></span><span className="research-highlight-meta"><span>{highlight.status}</span><span className="research-highlight-icon" aria-hidden="true">{isActive ? '−' : '+'}</span></span></span>
          </button>
          {isActive && <div className="research-highlight-detail"><p>{highlight.detail}</p><button className="view-all-button" type="button" onClick={() => onNavigate('Projects')}>Explore the project <ArrowIcon /></button></div>}
        </article>
      })}</div>
    </section>
  </>
}
