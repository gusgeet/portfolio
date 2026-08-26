import './Projects.css';

const Projects = ({ content, media }) => {
  return (
    <section className="section-shell projects-section" id={content.id}>
      <div className="section-header">
        <p className="section-kicker">{content.featured.eyebrow}</p>
        <h2 className="section-title">{content.title}</h2>
        <p className="section-intro">{content.intro}</p>
      </div>

      <article className="project-featured-card">
        <div className="project-copy">
          <span className="project-status">{content.featured.status}</span>
          <h3 className="project-title">{content.featured.title}</h3>
          <p className="project-subtitle">{content.featured.subtitle}</p>
          <p className="project-description">{content.featured.description}</p>
          <ul className="project-points">
            {content.featured.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <div className="project-tags">
            {content.featured.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          {content.featured.liveUrl && (
            <a
              href={content.featured.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="button-link button-link-inline"
            >
              {content.featured.liveLabel}
            </a>
          )}
        </div>

        <div className="project-media-grid" aria-label={content.featured.title}>
          <img src={media.vetlite[0]} alt="Vista principal de VetLite" className="project-image project-image-large" loading="lazy" decoding="async" />
          <img src={media.vetlite[1]} alt="Módulo adicional de VetLite" className="project-image" loading="lazy" decoding="async" />
          <img src={media.vetlite[2]} alt="Agenda y recordatorios en VetLite" className="project-image" loading="lazy" decoding="async" />
        </div>
      </article>

      <div className="project-secondary-grid">
        {content.secondary.map((project) => (
          <article key={project.title} className="project-secondary-card">
            <div className="project-secondary-copy">
              <p className="project-secondary-eyebrow">{project.eyebrow}</p>
              <h3 className="project-secondary-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-link button-link-inline"
                >
                  {project.liveLabel}
                </a>
              )}
            </div>

            <div className="project-secondary-media">
              {media[project.mediaKey].map((image, index) => (
                <img
                  key={`${project.title}-${index}`}
                  src={image}
                  alt={`${project.title} captura ${index + 1}`}
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
