import { useEffect, useState } from 'react'
import { Email, WhatsApp, Github, Linkedin, Twitter } from './components/svg/svg-icons'
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import About from './components/page-section-about/about'
import Education from './components/page-section-education/education'
import Projects from './components/page-section-projects/projects'
import Skills from './components/page-section-skills/skills'
import DarkToggleButton from './components/buttons/darkToggleButton'
import useActiveSection from './hooks/useActiveSection'
import BackToTopButton from './components/buttons/backToTopButton'
import './App.css'

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const sectionIds = ['hero', 'about', 'education', 'skills', 'projects'];
  const toLinkedIn = (): void => {
    window.open('https://linkedin.com/in/sakande');
  }
  const toEmail = (): void => {
    window.open("mailto:tosisiyesteve@gmail.com");
  }
  const toGitHub = (): void => {
    window.open("https://github.com/dynasteve");
  }
  const toWA = (): void => {
    window.open("https://wa.me/2349132344699");
  }
  const toTwitter = (): void => {
    window.open("https://twitter.com/StephenAkande2");
  }

  const activeSection = useActiveSection(sectionIds);

  const funcShowSideBar = () => {
    const isSidebarOpen = !showSideBar;
    setShowSideBar(isSidebarOpen);
  };

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const isDark = theme === 'dark';

  const scrollToHero = () => {
    document.getElementById('hero')?.scrollIntoView({
      behavior: 'smooth',
    });
  };
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToEducation = () => {
    document.getElementById('education')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact-footer')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div className="page-header mobile-header">
        <Navbar 
          showSideBar={showSideBar} 
          activeSection = {activeSection}
          scrollToHero = {scrollToHero}
          scrollToAbout = {scrollToAbout}
          scrollToSkills = {scrollToSkills}
          scrollToProjects = {scrollToProjects}
          scrollToEducation = {scrollToEducation}
          scrollToContact = {scrollToContact}
        />
      </div>
    
      <button className="menu-toggle" id="menu-toggle" 
          onClick={funcShowSideBar}
          aria-label={showSideBar ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={showSideBar}
          aria-controls="navbar-items">
        {showSideBar ? "✕" : "☰"}
      </button>

      <div className={(activeSection !== 'hero') ? 'back-to-top-button-container' : 'back-to-top-button-container-hidden'}>
        <BackToTopButton scrollToHero = {scrollToHero} />
      </div>

      <DarkToggleButton isDark={isDark} toggleTheme={toggleTheme} />

      <section id='hero'>
        <Hero />
      </section>

      <div className="page-body">

        <section id='about'>
          <div className="page-body-section">
            <About />
          </div>
        </section>

        <section id='skills'>
          <div className="page-body-section page-body-section-dark">
            <Skills />
          </div>
        </section>

        <section id='projects'>
          <div className="page-body-section projects-section">
            <Projects />
          </div>
        </section>

        <section id='education'>
          <div className="page-body-section certifications-section page-body-section-dark">
            <Education />
          </div>
        </section>
      </div>

      <section id='contact-footer'>
        <div className="page-footer">
          <div className="page-footer-content">
            <div className="page-footer-title">
              Contact Me
            </div>
            <div className="contact-flex-container">
              <button className="contact-icon-button" onClick={toEmail}>
                <Email color='black' width='75px' height='75px' />
              </button>
              <button className="contact-icon-button" onClick={toLinkedIn}>
                <Linkedin color='black' width='75px' height ='75px' />
              </button>
              <button className="contact-icon-button" onClick={toGitHub}>
                <Github color='black' width='75px' height='75px' />
              </button>
              <button className="contact-icon-button" onClick={toTwitter}>
                <Twitter color='black' width='75px' height='75px' />
              </button>
              <button className="contact-icon-button" onClick={toWA}>
                <WhatsApp width='75px' height='75px' />
              </button>
            </div>
          </div>
          <div className="footer-bottom-text">
            Made by Stephen Akande, using HTML, Vanilla CSS and React
          </div>
        </div>
      </section>
    </>
  )
}

export default App
