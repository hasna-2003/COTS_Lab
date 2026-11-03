import { ArrowIcon } from './menuBar'

const projects = [
  { number: '01', title: 'Human-centered AI', description: 'Building intelligent systems that are transparent, adaptive, and designed around real human needs.', tag: 'AI & Society', color: 'lavender' },
  { number: '02', title: 'Computational health', description: 'Turning complex biological data into clear insights for healthier, more equitable futures.', tag: 'Health Tech', color: 'mint' },
  { number: '03', title: 'Open knowledge systems', description: 'Creating tools and methods that make research more accessible, collaborative, and reproducible.', tag: 'Open Research', color: 'peach' },
]

export function Projects({ query }) {
  const value = query.trim().toLowerCase()
  const filtered = projects.filter((project) => !value || `${project.title} ${project.description} ${project.tag}`.toLowerCase().includes(value))
  return <section className="content-section projects-section">
    <div className="section-heading"><div><p className="section-kicker">Selected work</p><h2>Research with <em>purpose.</em></h2></div><p className="section-intro">From early questions to real-world impact, our projects bring together diverse perspectives and disciplines.</p></div>
    <div className="project-grid">{filtered.length ? filtered.map((project) => <article className={`project-card ${project.color}`} key={project.number}><span className="card-number">{project.number}</span><span className="card-tag">{project.tag}</span><h3>{project.title}</h3><p>{project.description}</p><a href="#contact-us">View project <ArrowIcon /></a></article>) : <p className="empty-state">No projects match “{query}”. Try a different search.</p>}</div>
  </section>
}
