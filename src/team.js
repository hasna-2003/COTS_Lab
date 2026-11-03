import { ArrowIcon } from './menuBar'

export function Team({ onNavigate }) {
  return <section className="team-section"><div><p className="section-kicker">People of COTS</p><h2>Different paths.<br /><em>One shared curiosity.</em></h2></div><div className="team-side"><p>We are designers, engineers, social scientists, and storytellers. Together, we make space for the questions that don’t have easy answers.</p><button className="button button-light" onClick={() => onNavigate('Contact us')}>Meet everyone <ArrowIcon /></button></div></section>
}
