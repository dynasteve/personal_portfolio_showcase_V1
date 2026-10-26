import './navbar.css'

interface Props{
  showSideBar: boolean;
  activeSection: string;
  scrollToHero : React.MouseEventHandler<HTMLButtonElement>;
  scrollToAbout : React.MouseEventHandler<HTMLButtonElement>;
  scrollToSkills : React.MouseEventHandler<HTMLButtonElement>;
  scrollToProjects : React.MouseEventHandler<HTMLButtonElement>;
  scrollToEducation : React.MouseEventHandler<HTMLButtonElement>;
  scrollToContact : React.MouseEventHandler<HTMLButtonElement>;
}

export default function Navbar ({showSideBar, activeSection, scrollToHero, scrollToAbout, scrollToSkills, scrollToProjects, scrollToEducation, scrollToContact}: Props) {
  const navItems: [string, string, React.MouseEventHandler<HTMLButtonElement>][] = 
  [
    ['Home', 'hero' , scrollToHero], 
    ['About', 'about' , scrollToAbout], 
    ['Skills', 'skills' , scrollToSkills], 
    ['Project', 'projects' , scrollToProjects], 
    ['Education', 'education' , scrollToEducation], 
    ['Contact', 'contact-footer' , scrollToContact]
  ];
  return (
    <>
      <div className="navbar">
        <div className="logo-text">
          Stephen Akande
        </div>
        <div className={(showSideBar===true) ? "navbar-items open" : 'navbar-items'} id="navbar-items">
            {navItems.map((navitem) => {
              return(
                  <div className={`navbar-item ${activeSection === navitem[1] ? 'active' : ''}`} key={navitem[1]}>
                    <button className='navbar-button' onClick={navitem[2]}>
                      {navitem[0]}
                    </button>
                  </div>
              )
            })}
        </div>
      </div>
      <div className="break-line"></div>
    </>
  );
}