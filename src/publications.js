import { ArrowIcon } from './menuBar'

const publications = [
  { type: 'Journal article', title: 'Designing trust into intelligent systems', year: '2024' },
  { type: 'Conference paper', title: 'Interfaces for collective sensemaking', year: '2024' },
  { type: 'Working paper', title: 'A field guide to responsible experimentation', year: '2023' },
]

export function Publications() {
  return <section className="content-section split-section"><div className="section-heading compact"><div><p className="section-kicker">From the lab</p><h2>Latest <em>thinking.</em></h2></div><a className="view-all" href="#publications">View all publications <ArrowIcon /></a></div><div className="publication-list">{publications.map((publication) => <a className="publication-row" href="#publications" key={publication.title}><span className="pub-type">{publication.type}</span><strong>{publication.title}</strong><span className="pub-year">{publication.year}</span><ArrowIcon /></a>)}</div></section>
}
