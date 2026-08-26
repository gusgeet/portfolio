import './Footer.css';

const Footer = ({ content, socialLinks }) => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">{content.text}</p>
        <div className="footer-links">
          <a href={socialLinks.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href="#contacto">CV</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
