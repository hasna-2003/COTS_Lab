import cotsLogo from './assets/COTSLOGO.png'

const teamGroups = [
  {
    role: 'Senior Lecturer',
    members: [
      { name: 'Dr. Research Lead', profession: 'Senior Lecturer · Cognitive Systems', contribution: 'Leads the COTS Research Group and guides work on cognitive modelling, time-series analysis, and responsible intelligent systems.' },
    ],
  },
  {
    role: 'Lecturers',
    members: [
      { name: 'Dr. Systems Researcher', profession: 'Lecturer · Time-Series Analysis', contribution: 'Develops interpretable methods for discovering patterns, dependencies, and change in complex temporal data.' },
      { name: 'Dr. Cognitive Computing', profession: 'Lecturer · Cognitive Computing', contribution: 'Explores computational models of perception, learning, reasoning, and decision-making.' },
    ],
  },
  {
    role: 'Postgraduates',
    members: [
      { name: 'Postgraduate Researchers', profession: 'MPhil and PhD Researchers', contribution: 'Investigate focused research questions across cognitive systems, forecasting, and dynamic processes.' },
    ],
  },
  {
    role: 'Research Assistants',
    members: [
      { name: 'Research Assistants', profession: 'Research Support Team', contribution: 'Support data preparation, experiments, evaluation, literature reviews, and research communication.' },
    ],
  },
  {
    role: 'Research Interns',
    members: [
      { name: 'Research Interns', profession: 'Student Research Contributors', contribution: 'Gain experience in research practice while contributing to experiments, prototypes, and exploratory studies.' },
    ],
  },
]

function TeamMember({ member }) {
  return <article className="team-member">
    <div className="team-member-picture"><img src={cotsLogo} alt={`${member.name} profile placeholder`} /></div>
    <div className="team-member-info">
      <h3>{member.name}</h3>
      <p className="team-member-profession">{member.profession}</p>
      <p className="team-member-contribution">{member.contribution}</p>
    </div>
  </article>
}

export function Team() {
  return <section className="team-directory">
    <header className="team-directory-header">
      <p className="section-kicker">People of COTS</p>
      <h1>COTS Research Group</h1>
      <p>Meet the people working across cognitive systems and time-series research.</p>
    </header>
    <div className="team-groups">
      {teamGroups.map((group) => <section className="team-group" key={group.role}>
        <h2>{group.role}</h2>
        <div className="team-member-list">{group.members.map((member) => <TeamMember key={member.name} member={member} />)}</div>
      </section>)}
    </div>
  </section>
}
