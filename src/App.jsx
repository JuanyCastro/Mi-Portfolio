import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Download, 
  Moon, 
  Sun, 
  Terminal, 
  Code2, 
  Database, 
  ExternalLink,
  ChevronRight,
  Send
} from 'lucide-react';

import imgLinguaNova from './assets/preview-linguanova.png';
import imgCroquis from './assets/preview-croquis.png';

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// Datos técnicos de proyectos
const projectsData = [
  {
    image: imgLinguaNova,
    tech: ["C#", ".NET Core", "SQL Server", "Azure"],
    linkRepo: "https://github.com/JuanyCastro/LinguaNova-ASPNET-MVC.git",
    linkDemo: "https://linguanova.azurewebsites.net",
    linkPlay: null,
    isCommercial: false,
  },
  {
    image: imgCroquis,
    tech: ["React", ".NET", "Firebase", "Play Console"],
    linkRepo: null,
    linkDemo: "https://croquis-seguros.web.app",
    linkPlay: "https://play.google.com/store/apps/details?id=com.juanycastro.croquisseguros", 
    isCommercial: true,
  }
];

// Datos de habilidades (Usando íconos oficiales de Devicon)
const skillsData = {
  backend: [
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' }
  ],
  frontend: [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' }
  ],
  tools: [
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' }
  ]
};

// --- DICCIONARIO DE IDIOMAS ---
const translations = {
  es: {
    nav: { about: "Sobre Mí", skills: "Habilidades", projects: "Proyectos", edu: "Educación", contact: "Contacto" },
    hero: { 
      greeting: "Hola, mi nombre es", 
      role: "Desarrollador Fullstack", 
      specialized: "Especializado en Backend", 
      desc: "Diseño y construyo soluciones de software robustas, escalables y eficientes, enfocadas en la lógica del servidor y bases de datos.", 
      cv: "Descargar CV", 
      github: "Mi GitHub" 
    },
    about: { 
      title: "Sobre Mí", 
      p1: "Soy estudiante de la Tecnicatura Universitaria en Programación en la UTN FRGP. Me apasiona resolver problemas complejos y optimizar procesos a través del código.", 
      p2: "Aunque me considero Fullstack y disfruto creando interfaces interactivas con React, mi verdadero fuerte y pasión es el Backend. Además, mi formación como Profesor de Inglés me permite comunicarme fluidamente en equipos internacionales y consumir documentación técnica sin barreras." 
    },
    skills: { 
      title: "Habilidades Técnicas", 
      backend: "Backend", 
      frontend: "Frontend", 
      tools: "Herramientas & Nube" 
    },
    projects: { 
      title: "Proyectos Destacados", 
      subtitle: "Software real desplegado y listo para producción.",
      commercial: "Proyecto Comercial",
      repo: "Código",
      demo: "Web",
      playstore: "Play Store",
      itemsText: [
        {
          title: "LinguaNova",
          desc: "Plataforma integral para la gestión de centros de idiomas. Incluye manejo de cursos, alumnos y reportes. Desplegada en Azure con arquitectura MVC."
        },
        {
          title: "CroquisSeguros",
          desc: "Aplicación profesional desarrollada y vendida a un cliente real. Solución móvil y web desplegada con éxito en Google Play Store."
        }
      ]
    },
    edu: { 
      title: "Educación", 
      degree1: "Tecnicatura Univ. en Programación", 
      uni1: "Universidad Tecnológica Nacional (UTN FRGP)", 
      status1: "Estudiante en curso",
      degree2: "Profesorado de Inglés", 
      uni2: "Instituto Superior Cultural Británico", 
      status2: "Finalizado (2020 - 2024)" 
    },
    contact: { 
      title: "Ponte en Contacto", 
      desc: "¿Tienes una oportunidad laboral, un proyecto en mente o simplemente quieres conectar? Envíame un mensaje.", 
      formName: "Tu Nombre",
      formEmail: "Tu Correo Electrónico",
      formMsg: "Tu Mensaje",
      btn: "Enviar Mensaje" 
    },
    footer: "Construido por Juan Ignacio Castro. Todos los derechos reservados."
  },
  en: {
    nav: { about: "About", skills: "Skills", projects: "Projects", edu: "Education", contact: "Contact" },
    hero: { 
      greeting: "Hi, my name is", 
      role: "Fullstack Developer", 
      specialized: "Specialized in Backend", 
      desc: "I design and build robust, scalable, and efficient software solutions, focusing on server-side logic and databases.", 
      cv: "Download Resume", 
      github: "My GitHub" 
    },
    about: { 
      title: "About Me", 
      p1: "I am a student of the University Degree in Programming at UTN FRGP. I am passionate about solving complex problems and optimizing processes through code.", 
      p2: "Although I consider myself Fullstack and enjoy creating interactive interfaces with React, my true strength and passion is the Backend. Furthermore, my background as an English Teacher allows me to communicate fluently in international teams and consume technical documentation without barriers." 
    },
    skills: { 
      title: "Technical Skills", 
      backend: "Backend", 
      frontend: "Frontend", 
      tools: "Tools & Cloud" 
    },
    projects: { 
      title: "Featured Projects", 
      subtitle: "Real software deployed and production-ready.",
      commercial: "Commercial Project",
      repo: "Code",
      demo: "Web",
      playstore: "Play Store",
      itemsText: [
        {
          title: "LinguaNova",
          desc: "Comprehensive platform for language center management. Includes course, student, and report management. Deployed on Azure using MVC architecture."
        },
        {
          title: "CroquisSeguros",
          desc: "Professional application developed and sold to a real client. Mobile and web solution successfully deployed on Google Play Store."
        }
      ]
    },
    edu: { 
      title: "Education", 
      degree1: "University Degree in Programming", 
      uni1: "National Technological University (UTN FRGP)", 
      status1: "Current Student",
      degree2: "English Teacher Degree", 
      uni2: "Instituto Superior Cultural Británico", 
      status2: "Graduated (2020 - 2024)" 
    },
    contact: { 
      title: "Get In Touch", 
      desc: "Do you have a job opportunity, a project in mind, or just want to connect? Send me a message.", 
      formName: "Your Name",
      formEmail: "Your Email",
      formMsg: "Your Message",
      btn: "Send Message" 
    },
    footer: "Built by Juan Ignacio Castro. All rights reserved."
  }
};

export default function App() {
  const [lang, setLang] = useState('es');
  const [darkMode, setDarkMode] = useState(true);
  
  const t = translations[lang];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es');
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 top-0 border-b backdrop-blur-md ${darkMode ? 'border-gray-800 bg-gray-950/80' : 'border-gray-200 bg-white/80'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold tracking-tighter text-red-600 dark:text-red-500">
              JIC
            </span>
            
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#about" className="hover:text-red-500 transition-colors">{t.nav.about}</a>
              <a href="#skills" className="hover:text-red-500 transition-colors">{t.nav.skills}</a>
              <a href="#projects" className="hover:text-red-500 transition-colors">{t.nav.projects}</a>
              <a href="#contact" className="hover:text-red-500 transition-colors">{t.nav.contact}</a>
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={toggleLang} className="flex items-center gap-2 text-sm font-medium hover:text-red-500 transition-colors bg-gray-200 dark:bg-gray-800 px-3 py-1.5 rounded-full" title="Change Language">
                <img 
                  src={lang === 'es' ? "https://flagcdn.com/w20/es.png" : "https://flagcdn.com/w20/gb.png"} 
                  width="20" 
                  alt="flag"
                  className="rounded-xs shadow-sm"
                />
                <span className="font-bold">{lang.toUpperCase()}</span>
              </button>
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" title="Toggle Theme">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col justify-center items-start">
          <p className="text-red-600 dark:text-red-500 font-mono mb-4">{t.hero.greeting}</p>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4">
            Juan Ignacio Castro
          </h1>
          <h2 className={`text-4xl sm:text-6xl font-bold mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.hero.role}. <br/>
            <span className="text-red-600 dark:text-red-500">{t.hero.specialized}</span>.
          </h2>
          <p className={`max-w-2xl text-lg mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.hero.desc}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#" className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-red-600/20">
              <Download size={20} />
              {t.hero.cv}
            </a>
            <a href="https://github.com/JuanyCastro" target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-6 py-3 font-medium rounded-lg border transition-colors ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`}>
              <Github size={20} />
              {t.hero.github}
            </a>
            <a href="https://www.linkedin.com/in/juanignaciocastro2002/" target="_blank" rel="noreferrer" className={`flex items-center justify-center p-3 rounded-lg border transition-colors ${darkMode ? 'border-gray-700 hover:bg-gray-800 text-blue-400' : 'border-gray-300 hover:bg-gray-100 text-blue-600'}`} title="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </section>

        {/* ABOUT & EDUCATION SECTION */}
        <section id="about" className="py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <span className="text-red-500 font-mono text-xl">01.</span> {t.about.title}
              </h3>
              <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.about.p1}
              </p>
              <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.about.p2}
              </p>
            </div>
            
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-xl border border-gray-100'}`}>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Terminal className="text-red-500" /> {t.edu.title}
              </h3>
              
              {/* Educación 1: UTN */}
              <div className="relative pl-6 border-l-2 border-red-500/30 mb-8">
                <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-1.75 top-2 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                <h4 className="text-xl font-bold">{t.edu.degree1}</h4>
                <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{t.edu.uni1}</p>
                <p className={`text-sm mt-2 flex items-center gap-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  <ChevronRight size={14} className="text-red-500"/> {t.edu.status1}
                </p>
              </div>

              {/* Educación 2: Inglés */}
              <div className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-700">
                <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-full -left-1.75 top-2"></div>
                <h4 className="text-lg font-bold">{t.edu.degree2}</h4>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.edu.uni2}</p>
                <p className={`text-sm mt-1 flex items-center gap-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  <ChevronRight size={14} className="text-gray-400 dark:text-gray-600"/> {t.edu.status2}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-3xl font-bold mb-10 flex items-center gap-2">
            <span className="text-red-500 font-mono text-xl">02.</span> {t.skills.title}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Backend */}
            <div className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white shadow-lg border-gray-100'} transition-colors`}>
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
                <Database className="text-red-500" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-6">{t.skills.backend}</h4>
              <div className="grid grid-cols-2 gap-4">
                {skillsData.backend.map(skill => (
                  <div key={skill.name} className={`flex flex-col items-center justify-center p-3 rounded-lg border ${darkMode ? 'border-gray-800 bg-gray-950/50 hover:border-red-500/50' : 'border-gray-100 bg-gray-50 hover:border-red-500/30'} transition-colors`}>
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8 mb-2 drop-shadow-sm" />
                    <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white shadow-lg border-gray-100'} transition-colors`}>
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
                <Code2 className="text-red-500" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-6">{t.skills.frontend}</h4>
              <div className="grid grid-cols-2 gap-4">
                {skillsData.frontend.map(skill => (
                  <div key={skill.name} className={`flex flex-col items-center justify-center p-3 rounded-lg border ${darkMode ? 'border-gray-800 bg-gray-950/50 hover:border-red-500/50' : 'border-gray-100 bg-gray-50 hover:border-red-500/30'} transition-colors`}>
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8 mb-2 drop-shadow-sm" />
                    <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Cloud */}
            <div className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white shadow-lg border-gray-100'} transition-colors`}>
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
                <Terminal className="text-red-500" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-6">{t.skills.tools}</h4>
              <div className="grid grid-cols-2 gap-4">
                {skillsData.tools.map(skill => (
                  <div key={skill.name} className={`flex flex-col items-center justify-center p-3 rounded-lg border ${darkMode ? 'border-gray-800 bg-gray-950/50 hover:border-red-500/50' : 'border-gray-100 bg-gray-50 hover:border-red-500/30'} transition-colors`}>
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8 mb-2 drop-shadow-sm" />
                    <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <span className="text-red-500 font-mono text-xl">03.</span> {t.projects.title}
          </h3>
          <p className={`mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.projects.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.itemsText.map((text, index) => {
              const technicalData = projectsData[index]; 
              
              return (
                <div key={index} className={`group rounded-xl overflow-hidden border ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200 shadow-lg'} flex flex-col`}>
                  
                  {/* CONTENEDOR DE IMAGEN */}
                  <a 
                    href={technicalData.linkDemo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="relative block h-52 overflow-hidden border-b border-gray-200 dark:border-gray-800"
                    title={`${t.projects.demo} ${text.title}`}
                  >
                    <div className="absolute inset-0 z-10 bg-red-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink size={32} className="text-white bg-red-600 p-2 rounded-full shadow-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />
                    </div>
                    <img 
                      src={technicalData.image} 
                      alt={`Preview ${text.title}`} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {technicalData.isCommercial && (
                      <div className="absolute top-4 right-4 z-20 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-lg">
                        {t.projects.commercial}
                      </div>
                    )}
                  </a>
                  
                  {/* CONTENIDO DE LA TARJETA */}
                  <div className="p-6 flex flex-col grow">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">{text.title}</h4>
                    <p className={`text-sm mb-6 leading-relaxed grow ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {text.desc}
                    </p>
                    
                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {technicalData.tech.map(tag => (
                        <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Botones de acción */}
                    <div className="flex gap-4 pt-2 border-t border-gray-100 dark:border-gray-800">
                      {technicalData.linkRepo && (
                        <a href={technicalData.linkRepo} target="_blank" rel="noreferrer" className={`flex items-center gap-1.5 text-sm font-medium hover:text-red-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <Github size={16} /> {t.projects.repo}
                        </a>
                      )}
                      {technicalData.linkDemo && (
                        <a href={technicalData.linkDemo} target="_blank" rel="noreferrer" className={`flex items-center gap-1.5 text-sm font-medium hover:text-red-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <ExternalLink size={16} /> {t.projects.demo}
                        </a>
                      )}
                      {technicalData.linkPlay && (
                        <a href={technicalData.linkPlay} target="_blank" rel="noreferrer" className={`flex items-center gap-1.5 text-sm font-medium hover:text-red-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <ExternalLink size={16} /> {t.projects.playstore}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section id="contact" className="py-32 text-center max-w-2xl mx-auto">
          <p className="text-red-500 font-mono mb-4">04. ¿Qué sigue?</p>
          <h3 className="text-4xl font-bold mb-6">{t.contact.title}</h3>
          <p className={`mb-10 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.contact.desc}
          </p>
          
          {/* Formulario conectado a Formspree */}
          <form 
            action="https://formspree.io/f/mrejylzl" 
            method="POST" 
            className={`p-8 rounded-2xl border text-left flex flex-col gap-4 shadow-lg ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.contact.formName}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className={`p-3 rounded-lg border outline-none focus:border-red-500 transition-colors ${darkMode ? 'bg-gray-950 border-gray-800 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.contact.formEmail}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className={`p-3 rounded-lg border outline-none focus:border-red-500 transition-colors ${darkMode ? 'bg-gray-950 border-gray-800 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.contact.formMsg}</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required 
                className={`p-3 rounded-lg border outline-none focus:border-red-500 transition-colors resize-none ${darkMode ? 'bg-gray-950 border-gray-800 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="mt-2 flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-red-600/20 w-full"
            >
              <Send size={18} />
              {t.contact.btn}
            </button>
          </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer className={`py-6 text-center text-sm border-t ${darkMode ? 'border-gray-900 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}