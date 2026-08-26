import './Techs.css'
const Techs = ({ content }) => {
  return (
    <section className="section-shell stack-section" id={content.id}>
        <div className="section-header">
            <p className="section-kicker">Stack</p>
            <h2 className="section-title">{content.title}</h2>
            <p className="section-intro">{content.intro}</p>
        </div>

        <div className="stack-grid">
            {content.groups.map((group) => (
                <article key={group.title} className="stack-card">
                    <h3 className="stack-card-title">{group.title}</h3>
                    <div className="stack-chip-list">
                        {group.items.map((item) => (
                            <span key={item} className="tag">
                                {item}
                            </span>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    </section>
  )
}

export default Techs
