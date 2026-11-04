import { useState } from 'react'
import { ArrowIcon } from './menuBar'
import projectImage from './assets/images.jpg'
import projectTheme from './assets/theme.jpg'

const projects = [
  { number: '01', title: 'Human-centered AI', author: 'COTS Research Group', abstract: 'This project investigates intelligent systems that are transparent, adaptive, and designed around real human needs. We study how computational models can support people while keeping human judgment, context, and trust at the center.', tag: 'AI & Society', color: 'lavender', image: projectImage, imagePosition: 'center' },
  { number: '02', title: 'Computational health', author: 'COTS Research Group', abstract: 'This project turns complex biological and health data into clear insights. Our work explores time-dependent signals and interpretable models to support healthier, more equitable decisions.', tag: 'Health Tech', color: 'mint', image: projectTheme, imagePosition: 'center' },
  { number: '03', title: 'Open knowledge systems', author: 'COTS Research Group', abstract: 'This project creates tools and methods that make research more accessible, collaborative, and reproducible. We focus on sharing knowledge in ways that help communities understand and build on research findings.', tag: 'Open Research', color: 'peach', image: projectImage, imagePosition: 'right' },
]

export function Projects({ query }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const value = query.trim().toLowerCase()
  const filtered = projects.filter((project) => !value || `${project.title} ${project.abstract} ${project.tag}`.toLowerCase().includes(value))

  if (selectedProject) {
    return <section className="content-section project-detail-section">
      <button className="back-button" onClick={() => setSelectedProject(null)}><ArrowIcon /> Back to projects</button>
      <p className="section-kicker">Project details</p>
      <h2>{selectedProject.title}</h2>
      <div className="project-detail-meta"><span>Project name</span><strong>{selectedProject.title}</strong><span>Author</span><strong>{selectedProject.author}</strong></div>
      <div className="project-abstract"><p className="section-kicker">Abstract</p><p>{selectedProject.abstract}</p></div>
    </section>
  }

  return <section className="content-section projects-section">
    <div className="section-heading"><div><p className="section-kicker">Selected work</p><h2>Research with <em>purpose.</em></h2></div><p className="section-intro">From early questions to real-world impact, our projects bring together diverse perspectives and disciplines.</p></div>
    <div className="project-grid">{filtered.length ? filtered.map((project) => <article className={`project-card project-activity-card ${project.color}`} key={project.number}>
      <button type="button" className="project-card-toggle" onClick={() => setSelectedProject(project)} aria-label={`View details for ${project.title}`}>
        <span className="project-card-image"><img src={project.image} alt="" style={{ objectPosition: project.imagePosition }} /></span>
        <span className="project-card-content"><span className="project-card-topline"><span className="card-number">{project.number}</span><span className="card-tag">{project.tag}</span></span><strong>{project.title}</strong><span className="read-more-label">View project details <ArrowIcon /></span></span>
      </button>
    </article>) : <p className="empty-state">No projects match “{query}”. Try a different search.</p>}</div>
  </section>
}
