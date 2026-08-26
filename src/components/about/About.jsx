import './About.css';
const About = ({ content }) => {
  return (
    <section className="section-shell experience-section" id={content.id}>
      <div className="section-header">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">{content.title}</h2>
        <p className="section-intro">{content.intro}</p>
      </div>

      <div className="experience-grid">
        {content.cards.map((card) => (
          <article key={card.title} className="experience-card">
            <span className="experience-eyebrow">{card.eyebrow}</span>
            <h3 className="experience-title">{card.title}</h3>
            <p className="experience-summary">{card.summary}</p>
            <ul className="experience-list">
              {card.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About
