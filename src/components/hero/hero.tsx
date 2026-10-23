import './hero.css'

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-container-left">
        <div className="hero-container-left-message">
          <p className="headline">Hi, my name is</p>
          <h1 className="headline">Stephen Akande.</h1>
          <h3 className="headline">Full-Stack Software Engineer</h3>
          <p className="subheadline">I build performant backend architectures, dynamic web applications, and intuitive user experiences.</p>
        </div>
      </div>
      <div className="hero-container-right">
      </div>
    </div>
  )
}