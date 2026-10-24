import './navbar.css'

interface Props{
  showSideBar: boolean;
  scrollToHero : React.MouseEventHandler<HTMLButtonElement>;
  scrollToAbout : React.MouseEventHandler<HTMLButtonElement>;
  scrollToSkills : React.MouseEventHandler<HTMLButtonElement>;
  scrollToProjects : React.MouseEventHandler<HTMLButtonElement>;
  scrollToEducation : React.MouseEventHandler<HTMLButtonElement>;
  scrollToContact : React.MouseEventHandler<HTMLButtonElement>;
}

export default function Navbar ({showSideBar, scrollToHero, scrollToAbout, scrollToSkills, scrollToProjects, scrollToEducation, scrollToContact}: Props) {
  return (
    <>
      <div className="navbar">
        <div className="logo-text">
          Stephen Akande
        </div>
        <div className={(showSideBar===true) ? "navbar-items open" : 'navbar-items'} id="navbar-items">
          <div className="navbar-item">
            <button className='navbar-button' onClick={scrollToHero}>
              Home
            </button>
          </div>
          <div className="navbar-item">
            <button className='navbar-button' onClick={scrollToAbout}>
              About
            </button>
          </div>
          <div className="navbar-item">
            <button className='navbar-button' onClick={scrollToSkills}>
              Skills
            </button>
          </div>
          <div className="navbar-item">
            <button className='navbar-button' onClick={scrollToProjects}>
              Projects
            </button>
          </div>
          <div className="navbar-item">
            <button className='navbar-button' onClick={scrollToEducation}>
              Education
            </button>
          </div>
          <div className="navbar-item">
            <button className='navbar-button' onClick={scrollToContact}>
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="break-line"></div>
    </>
  );
}