import './Intro.css';
const Intro = ({ content, heroImage }) => {

  return (
    <section className="hero section-shell" id="inicio">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="section-kicker">{content.eyebrow}</p>
          <h1 className="hero-title">{content.title}</h1>
          <p className="hero-description">{content.description}</p>

          <div className="hero-actions">
            <a href={content.primaryCta.href} className="button-primary">
              {content.primaryCta.label}
            </a>
            <a href={content.secondaryCta.href} className="button-secondary">
              {content.secondaryCta.label}
            </a>
          </div>

          <div className="hero-social-block">
            <span className="hero-social-title">{content.socialTitle}</span>
            <div className="hero-social-links">
              {content.socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <ul className="hero-highlights">
            {content.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <aside className="hero-panel">
          <div className="hero-portrait-wrap">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <img
              src={heroImage}
              alt="Retrato de Gustavo Gonzalez"
              className="hero-portrait"
            />
          </div>

          <div className="hero-proof">
            <h2 className="hero-proof-title">{content.proofTitle}</h2>
            <div className="hero-proof-grid">
              {content.proofCards.map((card) => (
                <article key={card.label} className="hero-proof-card">
                  <span className="hero-proof-label">{card.label}</span>
                  <strong className="hero-proof-value">{card.value}</strong>
                  <span className="hero-proof-detail">{card.detail}</span>
                </article>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Intro
