import './navbar.css'

interface Props{
  showSideBar: boolean;
}

export default function Navbar ({showSideBar}: Props) {
  return (
    <>
      <div className="navbar">
        <div className="logo-text">
          Stephen Akande
        </div>
        <div className={(showSideBar===true) ? "navbar-items open" : 'navbar-items'} id="navbar-items">
          <div className="navbar-item">Home</div>
          <div className="navbar-item">About Me</div>
          <div className="navbar-item">Skills</div>
          <div className="navbar-item">Projects</div>
          <div className="navbar-item">Certifications</div>
          <div className="navbar-item">Contact</div>
        </div>
      </div>
      <div className="break-line"></div>
    </>
  );
}