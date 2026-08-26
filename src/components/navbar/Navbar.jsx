import './Navbar.css';
import { useContext } from 'react';
import { TranslateContext } from '../../context/Translate';

const Navbar = ({ content, socialLinks }) => {
  const [, setIsEnglish] = useContext(TranslateContext);

  const toggleLanguage = () => {
    setIsEnglish((current) => !current);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#inicio" className="navbar-brand">
          <span className="navbar-brand-name">{content.brand}</span>
          <span className="navbar-brand-role">{content.role}</span>
        </a>

        <nav className="navbar-links" aria-label="Principal">
          {content.links.map((link) => (
            <a key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href={socialLinks.github} target="_blank" rel="noreferrer noopener" className="navbar-action-link">
            {content.githubLabel}
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer noopener" className="navbar-action-link">
            {content.linkedinLabel}
          </a>
          <a href="#contacto" className="navbar-action-link navbar-action-link-accent">
            {content.cvLabel}
          </a>
          <button
            type="button"
            className="navbar-language"
            aria-label={content.languageAria}
            onClick={toggleLanguage}
          >
            <span className="navbar-language-text">{content.languageLabel}</span>
            <svg
              className="navbar-language-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.02 8.02 0 0 1 18.93 8zM12 4.04c.83 1.2 1.53 2.52 2.07 3.96H9.93A14.54 14.54 0 0 1 12 4.04zM4.26 14A8.23 8.23 0 0 1 4 12c0-.68.09-1.35.26-2h3.38A16.88 16.88 0 0 0 7.5 12c0 .68.05 1.35.14 2H4.26zm.81 2h2.95c.33 1.26.8 2.46 1.38 3.56A8.02 8.02 0 0 1 5.07 16zM8.07 14A14.7 14.7 0 0 1 8 12c0-.68.03-1.35.1-2h7.8c.07.65.1 1.32.1 2s-.03 1.35-.1 2H8.07zM12 19.96A14.54 14.54 0 0 1 9.93 16h4.14A14.54 14.54 0 0 1 12 19.96zM14.6 19.56c.58-1.1 1.05-2.3 1.38-3.56h2.95a8.02 8.02 0 0 1-4.33 3.56zM16.36 14c.09-.65.14-1.32.14-2s-.05-1.35-.14-2h3.38c.17.65.26 1.32.26 2s-.09 1.35-.26 2h-3.38z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
