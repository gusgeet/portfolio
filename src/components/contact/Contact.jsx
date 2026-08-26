import './Contact.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ content, socialLinks }) => {
    const formRef = useRef();
    const [status, setStatus] = useState('idle');

    const emailConfig = {
        serviceId: import.meta.env.VITE_SERVICE_ID,
        templateId: import.meta.env.VITE_TEMPLATE_ID,
        userId: import.meta.env.VITE_USER_ID,
    };

    const isEmailConfigured = Object.values(emailConfig).every(Boolean);
        
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('idle');

        if (!isEmailConfigured) {
            setStatus('missing-config');
            return;
        }

        emailjs.sendForm
        (emailConfig.serviceId, 
        emailConfig.templateId, 
        formRef.current, 
        emailConfig.userId)
        .then((result) => {
            console.log(formRef.current)
            setStatus('success')
        }, (error) => {
            console.log(error.text);
            setStatus('error');            
        });
    }

  return (
    <section className="section-shell contact-section" id={content.id}>
        <div className="section-header">
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">{content.title}</h2>
            <p className="section-intro">{content.intro}</p>
        </div>

        <div className="contact-layout">
            <aside className="contact-panel">
                <ul className="contact-bullets">
                    {content.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                </ul>

                <div className="contact-links">
                    <a href={socialLinks.github} target="_blank" rel="noreferrer noopener" className="button-secondary">
                        {content.quickLinks[0].label}
                    </a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer noopener" className="button-secondary">
                        {content.quickLinks[1].label}
                    </a>
                    <a href={content.quickLinks[2].href} className="button-primary">
                        {content.quickLinks[2].label}
                    </a>
                </div>

            </aside>

            <div className="contact-form-card">
                <h3 className="contact-form-title">{content.formTitle}</h3>
                <form ref={formRef} onSubmit={handleSubmit} id="contact-form" className="contact-form"> 
                    <label className="contact-label" htmlFor="contact-name">{content.nameLabel}</label>
                    <input id="contact-name" type="text" placeholder={content.namePlaceholder} name='from_name' required />
                    <label className="contact-label" htmlFor="contact-email">{content.emailLabel}</label>
                    <input id="contact-email" type="email" placeholder={content.emailPlaceholder}  name='email' required />
                    <label className="contact-label" htmlFor="contact-message">{content.messageLabel}</label>
                    <textarea id="contact-message" rows="6" placeholder={content.messagePlaceholder} name='message' required />
                    <button className='contact-submit' type="submit">{content.submit}</button>
                    <p className="contact-feedback" aria-live="polite">
                        {status === 'success' ? content.success : ''}
                        {status === 'error' ? content.error : ''}
                        {status === 'missing-config' ? content.missingConfig : ''}
                    </p>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
