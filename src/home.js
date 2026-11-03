import { ArrowIcon } from './menuBar'

const researchAreas = [
  { number: '01', title: 'Cognitive systems', text: 'Computational models for perception, learning, reasoning, and decision-making.' },
  { number: '02', title: 'Time-series analysis', text: 'Methods for discovering patterns, trends, dependencies, and change over time.' },
  { number: '03', title: 'Dynamic processes', text: 'Interpretable approaches to complex temporal data in real-world domains.' },
]

const recentPublications = [
  { type: 'Research article', title: 'Cognitive approaches to temporal pattern discovery', year: '2024' },
  { type: 'Conference paper', title: 'Interpretable forecasting for dynamic systems', year: '2024' },
  { type: 'Journal article', title: 'Learning representations from complex time series', year: '2023' },
]

const researchProjects = [
  { title: 'Cognitive forecasting', text: 'Combining cognitive models with forecasting methods to support better decisions under uncertainty.', status: 'Ongoing' },
  { title: 'Multivariate time series', text: 'Understanding relationships across many signals and their changing dependencies.', status: 'Ongoing' },
  { title: 'Explainable intelligent systems', text: 'Making computational insights easier to interpret, evaluate, and apply.', status: 'In progress' },
]

export function Home({ onNavigate }) {
  return <>
    <section className="about-section">
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
    </section>

    <section className="home-section research-areas-section">
      <div className="section-heading compact"><div><p className="section-kicker">What we study</p><h2>Research <em>areas.</em></h2></div><p className="section-intro">We bring together cognition, computation, and temporal data to study complex systems.</p></div>
      <div className="research-area-grid">{researchAreas.map((area) => <article className="research-area-card" key={area.number}><span>{area.number}</span><h3>{area.title}</h3><p>{area.text}</p></article>)}</div>
    </section>

    <section className="home-section home-publications-section">
      <div className="section-heading compact"><div><p className="section-kicker">From the group</p><h2>Recent <em>publications.</em></h2></div><button className="view-all view-all-button" onClick={() => onNavigate('Publications')}>View all publications <ArrowIcon /></button></div>
      <div className="publication-list">{recentPublications.map((publication) => <button className="publication-row home-publication-row" key={publication.title} onClick={() => onNavigate('Publications')}><span className="pub-type">{publication.type}</span><strong>{publication.title}</strong><span className="pub-year">{publication.year}</span><ArrowIcon /></button>)}</div>
    </section>

    <section className="home-section research-projects-section">
      <div className="section-heading compact"><div><p className="section-kicker">Current work</p><h2>Research <em>projects.</em></h2></div><button className="view-all view-all-button" onClick={() => onNavigate('Projects')}>See all projects <ArrowIcon /></button></div>
      <div className="research-project-list">{researchProjects.map((project, index) => <article className="research-project-row" key={project.title}><span className="card-number">0{index + 1}</span><div><h3>{project.title}</h3><p>{project.text}</p></div><span className="project-status">{project.status}</span></article>)}</div>
    </section>
  </>
}
