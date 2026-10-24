import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import About from './components/page-section-about/about'
import Education from './components/page-section-education/education'
import Projects from './components/page-section-projects/projects'
import Skills from './components/page-section-skills/skills'
import DarkToggleButton from './components/buttons/darkToggleButton'


function App() {
  const [showSideBar, setShowSideBar] = useState(false);

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
              <button className="contact-icon-button">
                <svg fill="#000000" width="80px" height="80px" viewBox="0 0 24 24">
                  <g id="Mail">
                    <path  d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"/>
                  </g>
                </svg>
              </button>
              <button className="contact-icon-button">
                <svg fill="#000000" width="80px" height="80px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M44,7H20A13,13,0,0,0,7,20V44A13,13,0,0,0,20,57H44A13,13,0,0,0,57,44V20A13,13,0,0,0,44,7ZM55,44A11,11,0,0,1,44,55H20A11,11,0,0,1,9,44V20A11,11,0,0,1,20,9H44A11,11,0,0,1,55,20Z"/><path d="M22,25H15a1,1,0,0,0-1,1V49a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V26A1,1,0,0,0,22,25ZM21,48H16V27h5Z"/><path d="M42,25h0a14.18,14.18,0,0,0-7,2.11V26a1,1,0,0,0-1-1H27a1,1,0,0,0-1,1V49a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V33.81A7.66,7.66,0,0,1,38,33c2.81,0,3,2,3,2.44V49a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V33.17a8.3,8.3,0,0,0-2.14-6.11A7.93,7.93,0,0,0,42,25Zm6,23H43V35.44C43,33.9,42,31,38,31a10.24,10.24,0,0,0-4.45,1.29,1,1,0,0,0-.55.89V48H28V27h5v2.06a1,1,0,0,0,1.66.75A12.31,12.31,0,0,1,42,27h0a6,6,0,0,1,4.42,1.47A6.41,6.41,0,0,1,48,33.17Z"/><path d="M18.5,14A4.5,4.5,0,1,0,23,18.5,4.5,4.5,0,0,0,18.5,14Zm0,7A2.5,2.5,0,1,1,21,18.5,2.5,2.5,0,0,1,18.5,21Z"/></svg>
              </button>
              <button className="contact-icon-button">
                <svg stroke="#000000" width="70px" height="70px" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z" stroke-linejoin="round"/>
                </svg>
              </button>
              <button className="contact-icon-button">
                <svg stroke="#000000" width="80px" height="80px" viewBox="0 0 192 192">
                  <path fill-rule="evenodd" d="M96 16c-44.183 0-80 35.817-80 80 0 13.12 3.163 25.517 8.771 36.455l-8.608 36.155a6.002 6.002 0 0 0 7.227 7.227l36.155-8.608C70.483 172.837 82.88 176 96 176c44.183 0 80-35.817 80-80s-35.817-80-80-80ZM28 96c0-37.555 30.445-68 68-68s68 30.445 68 68-30.445 68-68 68c-11.884 0-23.04-3.043-32.747-8.389a6.003 6.003 0 0 0-4.284-.581l-28.874 6.875 6.875-28.874a6.001 6.001 0 0 0-.581-4.284C31.043 119.039 28 107.884 28 96Zm46.023 21.977c11.975 11.974 27.942 20.007 45.753 21.919 11.776 1.263 20.224-8.439 20.224-18.517v-6.996a18.956 18.956 0 0 0-13.509-18.157l-.557-.167-.57-.112-8.022-1.58a18.958 18.958 0 0 0-15.25 2.568 42.144 42.144 0 0 1-7.027-7.027 18.958 18.958 0 0 0 2.569-15.252l-1.582-8.021-.112-.57-.167-.557A18.955 18.955 0 0 0 77.618 52H70.62c-10.077 0-19.78 8.446-18.517 20.223 1.912 17.81 9.944 33.779 21.92 45.754Zm33.652-10.179a6.955 6.955 0 0 1 6.916-1.743l8.453 1.665a6.957 6.957 0 0 1 4.956 6.663v6.996c0 3.841-3.124 6.995-6.943 6.585a63.903 63.903 0 0 1-26.887-9.232 64.594 64.594 0 0 1-11.661-9.241 64.592 64.592 0 0 1-9.241-11.661 63.917 63.917 0 0 1-9.232-26.888C63.626 67.123 66.78 64 70.62 64h6.997a6.955 6.955 0 0 1 6.66 4.957l1.667 8.451a6.956 6.956 0 0 1-1.743 6.917l-1.12 1.12a5.935 5.935 0 0 0-1.545 2.669c-.372 1.403-.204 2.921.603 4.223a54.119 54.119 0 0 0 7.745 9.777 54.102 54.102 0 0 0 9.778 7.746c1.302.806 2.819.975 4.223.603a5.94 5.94 0 0 0 2.669-1.545l1.12-1.12Z" clip-rule="evenodd"/>
                </svg>
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
