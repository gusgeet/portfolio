import heroPortrait from '../img/image.png';
import vetlite1 from '../img/projects/vetlite/vetlite-1.png';
import vetlite2 from '../img/projects/vetlite/vetlite-2.png';
import vetlite3 from '../img/projects/vetlite/vetlite-3.png';
import vetliteWeb1 from '../img/projects/vetlite-web/vetlite-web-login.png';
import vetliteWeb2 from '../img/projects/vetlite-web/vetlite-web-dashboard.png';
import crwn1 from '../img/projects/crwn-store/crwn-1.png';
import crwn2 from '../img/projects/crwn-store/crwn-2.png';

export const socialLinks = {
  github: 'https://github.com/gusgeet',
  linkedin: 'https://www.linkedin.com/in/gustavo-gonzalez-0b1331178/',
};

const sharedContent = {
  heroImage: heroPortrait,
  projectsMedia: {
    vetlite: [vetlite1, vetlite2, vetlite3],
    vetliteWeb: [vetliteWeb1, vetliteWeb2],
    crwn: [crwn1, crwn2],
  },
};

const siteContentEs = {
  nav: {
    brand: 'Gustavo Gonzalez',
    role: 'C# • SQL • React',
    links: [
      { href: '#inicio', label: 'Inicio' },
      { href: '#trayectoria', label: 'Trayectoria' },
      { href: '#proyectos', label: 'Proyectos' },
      { href: '#stack', label: 'Stack' },
      { href: '#contacto', label: 'Contacto' },
    ],
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
    cvLabel: 'Solicitar CV',
    languageLabel: 'ESP',
    languageAria: 'Cambiar idioma',
  },
  hero: {
    eyebrow: 'Desarrollador orientado a producto y software real',
    title: 'Construyo soluciones con base fuerte en C#, SQL y desarrollo web con React.',
    description:
      'Desarrollador de software con experiencia creando productos para Windows y proyectos web. Mi foco está en construir herramientas útiles, mantenibles y claras para quien las usa.',
    primaryCta: { href: '#proyectos', label: 'Ver proyectos reales' },
    secondaryCta: { href: '#contacto', label: 'Solicitar CV' },
    socialTitle: 'Perfiles profesionales',
    socialLinks: [
      { href: socialLinks.github, label: 'GitHub' },
      { href: socialLinks.linkedin, label: 'LinkedIn' },
    ],
    highlights: [
      'VetLite: software para veterinarias en venta en MercadoLibre.',
      'Experiencia combinando escritorio, datos y desarrollo web.',
      'Portfolio bilingüe para procesos de hiring en español e inglés.',
    ],
    proofTitle: 'Lo más importante en 10 segundos',
    proofCards: [
      {
        label: 'Perfil',
        value: 'Software + Web',
        detail: 'C#, SQL, React y ASP.NET',
      },
      {
        label: 'Producto real',
        value: 'VetLite',
        detail: 'Sistema para clínicas veterinarias',
      },
      {
        label: 'Búsqueda',
        value: 'Oportunidades',
        detail: 'CV disponible a pedido',
      },
    ],
  },
  experience: {
    id: 'trayectoria',
    title: 'Trayectoria y experiencia',
    intro:
      'La experiencia más fuerte del portfolio está puesta en productos reales y en una transición sólida hacia desarrollo web profesional.',
    cards: [
      {
        eyebrow: 'Producto propio',
        title: 'VetLite | C# + MS SQL',
        summary:
          'Desarrollé VetLite como una solución para cubrir necesidades concretas de profesionales veterinarios.',
        bullets: [
          'Historia clínica, clientes y pacientes asociados.',
          'Agenda de tratamientos y vacunas próximas a vencer.',
          'Control de saldo deudor y soporte para estudios clínicos.',
          'Integración con Whatsapp para Escritorios en Windows 10.',
        ],
        note: 'El producto figura en venta en MercadoLibre según el contenido histórico del repositorio.',
      },
      {
        eyebrow: 'Evolución de producto',
        title: 'VetLite Web | Plataforma SaaS',
        summary:
          'También desarrollé VetLite Web como evolución SaaS de VetLite Desktop, llevando la experiencia veterinaria a una plataforma web.',
        bullets: [
          'Versión web de VetLite enfocada en operación veterinaria desde un único lugar.',
          'Flujo de acceso diferenciado para personal y clientes.',
          'Gestión de historias clínicas, turnos y tratamientos dentro de una experiencia SaaS.',
        ],
        note: 'La captura que me compartiste muestra la plataforma como continuidad web del producto desktop.',
      },
      {
        eyebrow: 'Experiencia profesional',
        title: 'Lenox HR | Desarrollo web full stack',
        summary:
          'Actualmente trabajo en Lenox HR, una plataforma SaaS de RR.HH. y control horario para Latinoamérica, con foco en producto de negocio y sistemas empresariales.',
        bullets: [
          'Aplicaciones de negocio full stack y plataformas SaaS.',
          'Desarrollo con ASP.NET MVC, ASP.NET Core, Vue y Nuxt.',
          'Sistemas multi-tenant, autenticación y autorización.',
          'Trabajo con SQL y MongoDB sobre flujos de negocio, reporting e integraciones con servicios externos.',
          'Trabajo sobre procesos de RR.HH. como asistencia, turnos, vacaciones, onboarding y documentación digital.',
        ],
        note: 'La landing pública de Lenox HR presenta el producto como software de control horario y RR.HH. para LatAm, y el contenido que me compartiste suma foco en APIs, multi-tenant, SQL Server y procesos de negocio.',
      },
      {
        eyebrow: 'Formación y evolución',
        title: 'React, ASP.NET y formación continua',
        summary:
          'Fui ampliando el perfil desde software de escritorio hacia desarrollo web full stack con foco en producto y mantenibilidad.',
        bullets: [
          'Diplomatura en desarrollo web full stack en Academia Numen.',
          'Estudio continuo de React Js y React Native en Zero To Mastery.',
          'Uso de React, Vue, ASP.NET Core, ASP.NET MVC y herramientas como Git y Jira.',
        ],
        note: 'El sitio está preparado para presentarse frente a recruiters y Engineering Managers.',
      },
    ],
  },
  projects: {
    id: 'proyectos',
    title: 'Proyectos con evidencia real',
    intro:
      'El foco está puesto en sistemas y productos que muestran criterio de producto, persistencia de datos y trabajo sobre necesidades reales.',
    featured: {
      eyebrow: 'Proyecto principal',
      title: 'VetLite',
      subtitle: 'Sistema para clínicas veterinarias desarrollado con C# y MS SQL.',
      description:
        'VetLite concentra la parte más fuerte de mi experiencia: software de escritorio, lógica de negocio, persistencia y funcionalidades diseñadas alrededor del uso real del profesional veterinario.',
      tags: ['C#', 'MS SQL', 'Windows', 'WhatsApp Desktop'],
      liveUrl: 'https://vetlite.com.ar',
      liveLabel: 'Ver landing',
      bullets: [
        'Gestión de clientes, pacientes e historial clínico.',
        'Carga de estudios clínicos y seguimiento por visitas.',
        'Agenda con recordatorios de vacunas y tratamientos.',
      ],
      status: 'En venta en MercadoLibre',
    },
    secondary: [
      {
        eyebrow: 'Producto web',
        title: 'VetLite Web',
        subtitle: 'Plataforma SaaS de VetLite Desktop.',
        description:
          'VetLite Web traslada el producto veterinario a una experiencia web con acceso para personal y clientes, manteniendo el foco en historias clínicas, turnos y tratamientos.',
        tags: ['SaaS', 'VetLite', 'Web Platform', 'Veterinary'],
        mediaKey: 'vetliteWeb',
      },
      {
        eyebrow: 'Proyecto web',
        title: 'CRWN Clothing Store App',
        subtitle: 'E-commerce frontend con React.',
        description:
          'Proyecto de e-commerce con foco en experiencia de usuario y manejo de estado para catálogo, carrito y checkout.',
        tags: ['React', 'Redux', 'Styled Components', 'Firebase', 'Firestore'],
        liveUrl: 'https://crwn-store-app.netlify.app/',
        liveLabel: 'Ver demo',
        mediaKey: 'crwn',
      },
    ],
  },
  stack: {
    id: 'stack',
    title: 'Stack y herramientas',
    intro:
      'Trabajo principalmente con tecnologías orientadas a producto, sistemas de negocio y plataformas web, combinando backend, frontend y datos según el contexto del proyecto.',
    groups: [
      {
        title: 'Frontend',
        items: ['React', 'Vue', 'Typescript / Javascript'],
      },
      {
        title: 'Backend y escritorio',
        items: ['C#', 'ASP Net Core', 'ASP Net MVC', '.Net Framework'],
      },
      {
        title: 'Datos y herramientas',
        items: ['SQL', 'MongoDB', 'Firebird', 'Firebase', 'Git / Github', 'Jira'],
      },
    ],
  },
  contact: {
    id: 'contacto',
    title: 'Hablemos',
    intro:
      'Si querés ver más trabajo, pedir CV o conversar sobre una oportunidad, este portfolio ya tiene todo preparado para seguir la conversación.',
    bullets: [
      'Contacto directo desde el formulario.',
      'GitHub y LinkedIn visibles para validación rápida.',
      'CV disponible a pedido desde esta misma sección.',
    ],
    quickLinks: [
      { href: socialLinks.github, label: 'Ver GitHub' },
      { href: socialLinks.linkedin, label: 'Ver LinkedIn' },
      { href: '#contact-form', label: 'Solicitar CV' },
    ],
    formTitle: 'Formulario de contacto',
    nameLabel: 'Nombre',
    emailLabel: 'Email',
    messageLabel: 'Motivo de la consulta',
    namePlaceholder: 'Escribí tu nombre',
    emailPlaceholder: 'tu-email@empresa.com',
    messagePlaceholder: 'Contame el motivo del contacto o pedime el CV.',
    submit: 'Enviar mensaje',
    success: 'Gracias por tu solicitud. Será respondida en breve.',
    error: 'No se pudo enviar el mensaje. Probá nuevamente en unos minutos.',
    missingConfig: 'Falta configurar EmailJS en el entorno local para habilitar el envío.',
    note: 'El formulario utiliza EmailJS y mantiene la integración existente.',
  },
  footer: {
    text: 'Portfolio bilingüe orientado a búsqueda laboral y evidencia de producto real.',
  },
};

const siteContentEn = {
  nav: {
    brand: 'Gustavo Gonzalez',
    role: 'C# • SQL • React',
    links: [
      { href: '#inicio', label: 'Home' },
      { href: '#trayectoria', label: 'Experience' },
      { href: '#proyectos', label: 'Projects' },
      { href: '#stack', label: 'Stack' },
      { href: '#contacto', label: 'Contact' },
    ],
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
    cvLabel: 'Request CV',
    languageLabel: 'ENG',
    languageAria: 'Switch language',
  },
  hero: {
    eyebrow: 'Developer focused on product thinking and real software',
    title: 'I build solutions grounded in C#, SQL and web development with React.',
    description:
      'Software developer with experience building Windows products and web projects. My focus is on useful, maintainable tools with a clear user experience.',
    primaryCta: { href: '#proyectos', label: 'See real projects' },
    secondaryCta: { href: '#contacto', label: 'Request CV' },
    socialTitle: 'Professional profiles',
    socialLinks: [
      { href: socialLinks.github, label: 'GitHub' },
      { href: socialLinks.linkedin, label: 'LinkedIn' },
    ],
    highlights: [
      'VetLite: veterinary software listed for sale on MercadoLibre.',
      'Experience spanning desktop software, data and web development.',
      'Bilingual portfolio ready for Spanish and English hiring loops.',
    ],
    proofTitle: 'What matters in under 10 seconds',
    proofCards: [
      {
        label: 'Profile',
        value: 'Software + Web',
        detail: 'C#, SQL, React and ASP.NET',
      },
      {
        label: 'Real product',
        value: 'VetLite',
        detail: 'System for veterinary clinics',
      },
      {
        label: 'Hiring',
        value: 'Opportunities',
        detail: 'CV available on request',
      },
    ],
  },
  experience: {
    id: 'trayectoria',
    title: 'Experience and trajectory',
    intro:
      'The strongest part of this portfolio is centered on real software products and a solid move into professional web development.',
    cards: [
      {
        eyebrow: 'Own product',
        title: 'VetLite | C# + MS SQL',
        summary:
          'I built VetLite to solve concrete day-to-day needs for veterinary professionals.',
        bullets: [
          'Clinical history plus client and patient records.',
          'Treatment agenda and upcoming vaccine reminders.',
          'Debtor balance tracking and support for clinical studies.',
          'WhatsApp Desktop integration on Windows 10.',
        ],
        note: 'The historical repository content states the product is listed for sale on MercadoLibre.',
      },
      {
        eyebrow: 'Product evolution',
        title: 'VetLite Web | SaaS platform',
        summary:
          'I also built VetLite Web as the SaaS evolution of VetLite Desktop, bringing the veterinary workflow into a web platform.',
        bullets: [
          'Web version of VetLite focused on veterinary operations in a single place.',
          'Separate access flow for staff and clients.',
          'Clinical history, appointments and treatments inside a SaaS experience.',
        ],
        note: 'The screenshot you shared shows the platform as the web continuation of the desktop product.',
      },
      {
        eyebrow: 'Professional experience',
        title: 'Lenox HR | Full-stack web development',
        summary:
          'I currently work at Lenox HR, an HR and time-tracking SaaS platform for Latin America, with strong emphasis on business product thinking and enterprise systems.',
        bullets: [
          'Full-stack business applications and SaaS platforms.',
          'Development with ASP.NET MVC, ASP.NET Core, Vue and Nuxt.',
          'Multi-tenant systems plus authentication and authorization flows.',
          'Work with SQL and MongoDB across business workflows, reporting and third-party integrations.',
          'Work around HR processes such as attendance, scheduling, leave management, onboarding and digital documentation.',
        ],
        note: 'Lenox HR publicly presents itself as HR and time-control software for LatAm, and the material you shared adds emphasis on APIs, multi-tenant architecture, SQL Server and business workflows.',
      },
      {
        eyebrow: 'Learning and growth',
        title: 'React, ASP.NET and continuous learning',
        summary:
          'I expanded from desktop software into full-stack web development with a clear focus on product quality and maintainability.',
        bullets: [
          'Full stack web development diploma at Academia Numen.',
          'Ongoing React Js and React Native learning through Zero To Mastery.',
          'Hands-on work with React, Vue, ASP.NET Core, ASP.NET MVC, Git and Jira.',
        ],
        note: 'The site is intentionally structured for recruiters and Engineering Managers.',
      },
    ],
  },
  projects: {
    id: 'proyectos',
    title: 'Projects backed by real evidence',
    intro:
      'The spotlight is on systems and products that demonstrate product judgment, data persistence and work driven by real user needs.',
    featured: {
      eyebrow: 'Primary project',
      title: 'VetLite',
      subtitle: 'Veterinary clinic system built with C# and MS SQL.',
      description:
        'VetLite represents the strongest part of my experience: desktop software, business logic, persistence and features shaped around real veterinary workflows.',
      tags: ['C#', 'MS SQL', 'Windows', 'WhatsApp Desktop'],
      liveUrl: 'https://vetlite.com.ar',
      liveLabel: 'Open landing',
      bullets: [
        'Client, patient and clinical history management.',
        'Clinical study attachments and visit tracking.',
        'Agenda with treatment and vaccine reminders.',
      ],
      status: 'Listed on MercadoLibre',
    },
    secondary: [
      {
        eyebrow: 'Web product',
        title: 'VetLite Web',
        subtitle: 'SaaS platform built as the web evolution of VetLite Desktop.',
        description:
          'VetLite Web brings the veterinary product into a web experience with access for staff and clients, while keeping the focus on clinical history, appointments and treatments.',
        tags: ['SaaS', 'VetLite', 'Web Platform', 'Veterinary'],
        mediaKey: 'vetliteWeb',
      },
      {
        eyebrow: 'Web project',
        title: 'CRWN Clothing Store App',
        subtitle: 'React-based e-commerce frontend.',
        description:
          'E-commerce project focused on user experience and state management for catalog, cart and checkout flows.',
        tags: ['React', 'Redux', 'Styled Components', 'Firebase', 'Firestore'],
        liveUrl: 'https://crwn-store-app.netlify.app/',
        liveLabel: 'Open demo',
        mediaKey: 'crwn',
      },
    ],
  },
  stack: {
    id: 'stack',
    title: 'Stack and tools',
    intro:
      'I mainly work with technologies oriented to product development, business systems and web platforms, combining backend, frontend and data depending on the project context.',
    groups: [
      {
        title: 'Frontend',
        items: ['React', 'Vue', 'Typescript / Javascript'],
      },
      {
        title: 'Backend and desktop',
        items: ['C#', 'ASP Net Core', 'ASP Net MVC', '.Net Framework'],
      },
      {
        title: 'Data and tools',
        items: ['SQL', 'MongoDB', 'Firebird', 'Firebase', 'Git / Github', 'Jira'],
      },
    ],
  },
  contact: {
    id: 'contacto',
    title: 'Let’s talk',
    intro:
      'If you want to review more work, ask for my CV or discuss an opportunity, this portfolio is set up to continue the conversation right away.',
    bullets: [
      'Direct contact through the form.',
      'Visible GitHub and LinkedIn for quick validation.',
      'CV available on request from this same section.',
    ],
    quickLinks: [
      { href: socialLinks.github, label: 'Open GitHub' },
      { href: socialLinks.linkedin, label: 'Open LinkedIn' },
      { href: '#contact-form', label: 'Request CV' },
    ],
    formTitle: 'Contact form',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Reason for contact',
    namePlaceholder: 'Enter your name',
    emailPlaceholder: 'your-email@company.com',
    messagePlaceholder: 'Tell me why you are reaching out or ask for the CV.',
    submit: 'Send message',
    success: 'Thank you for your request. It will be answered shortly.',
    error: 'The message could not be sent. Please try again in a few minutes.',
    missingConfig: 'EmailJS is not configured in the local environment yet.',
    note: 'The form keeps the existing EmailJS integration.',
  },
  footer: {
    text: 'Bilingual portfolio tailored for hiring conversations and real product evidence.',
  },
};

export const getSiteContent = (isEnglish) => ({
  ...sharedContent,
  ...(isEnglish ? siteContentEn : siteContentEs),
});
