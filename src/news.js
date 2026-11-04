import { useState } from 'react'
import { ArrowIcon } from './menuBar'
import newsImage from './assets/images.jpg'
import newsTheme from './assets/theme.jpg'

const news = [
  { date: 'May 14, 2024', title: 'COTS Lab receives a grant to explore new frontiers in human-centered computing.', detail: 'The new grant supports our work on computational tools that place human reasoning, collaboration, and real-world decision-making at the centre of intelligent systems research.', image: newsImage, imagePosition: 'center' },
  { date: 'Apr 02, 2024', title: 'Welcome to our new research fellows joining from across the world.', detail: 'We are pleased to welcome a new group of fellows who bring perspectives from cognitive science, data analysis, and machine learning to our growing research community.', image: newsTheme, imagePosition: 'center' },
  { date: 'Feb 20, 2024', title: 'Our open-source toolkit for collaborative research is now available.', detail: 'The toolkit makes it easier for researchers to explore time-series data, compare methods, and share reproducible experiments with collaborators and the wider community.', image: newsImage, imagePosition: 'right' },
]

export function News() {
  const [activeNews, setActiveNews] = useState(null)

  return <section className="content-section news-section"><div className="section-heading compact"><div><p className="section-kicker">Stay curious</p><h2>What’s <em>happening.</em></h2></div><span className="section-intro">Updates, announcements, and ideas from the COTS Lab community.</span></div><div className="news-grid">{news.map((item, index) => {
    const isActive = activeNews === index
    return <article className={`news-card${isActive ? ' is-active' : ''}`} key={item.title}>
      <button type="button" className="news-card-toggle" aria-expanded={isActive} onClick={() => setActiveNews(isActive ? null : index)}>
        <span className="news-card-image"><img src={item.image} alt="" style={{ objectPosition: item.imagePosition }} /></span>
        <span className="news-card-content"><span className="news-card-date">{item.date}</span><strong>{item.title}</strong><span className="news-card-action">{isActive ? 'Close story −' : 'Read story +'}</span></span>
      </button>
      {isActive && <div className="news-card-detail"><p>{item.detail}</p><button className="view-all-button" type="button" onClick={() => setActiveNews(null)}>Close story <ArrowIcon /></button></div>}
    </article>
  })}</div></section>
}
