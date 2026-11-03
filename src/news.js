import { ArrowIcon } from './menuBar'

const news = [
  { date: 'May 14, 2024', title: 'COTS Lab receives a grant to explore new frontiers in human-centered computing.' },
  { date: 'Apr 02, 2024', title: 'Welcome to our new research fellows joining from across the world.' },
  { date: 'Feb 20, 2024', title: 'Our open-source toolkit for collaborative research is now available.' },
]

export function News() {
  return <section className="content-section news-section"><div className="section-heading compact"><div><p className="section-kicker">Stay curious</p><h2>What’s <em>happening.</em></h2></div><a className="view-all" href="#news">All news <ArrowIcon /></a></div><div className="news-grid">{news.map((item) => <article className="news-card" key={item.title}><p>{item.date}</p><h3>{item.title}</h3><a href="#news">Read story <ArrowIcon /></a></article>)}</div></section>
}
