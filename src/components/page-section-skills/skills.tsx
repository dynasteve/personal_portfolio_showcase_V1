import './skills.css'

export default function Skills() {
  return (
    <>
      <div className="page-body-section-title page-body-section-title-two desktop-section-title">
          Skills
        </div>
        <div className="page-body-section-title page-body-section-title-one mobile-section-title">
          Skills
        </div>
        <div className="page-body-section-content page-body-section-content-two page-body-skills">
          <div className="skills-section-scrollable">
            <div className="scrollable-section">
              <h2>Frontend</h2>
              <div className="skills-grid">
                <div className='skill-grid-item fe-item-1'>HTML5</div>
                <div className='skill-grid-item fe-item-2'>CSS</div>
                <div className='skill-grid-item fe-item-3'>TailWindCSS</div>
                <div className='skill-grid-item fe-item-4'>JavaScript</div>
                <div className='skill-grid-item fe-item-5'>React</div>
                <div className='skill-grid-item fe-item-6'>TypeScript</div>
                <div className='skill-grid-item fe-item-7'>Flutter</div>
              </div>
            </div>
            <div className="scrollable-section">
              <h2>Backend</h2>
              <div className="skills-grid">
                <div className='skill-grid-item be-item-1'>Node.js</div>
                <div className='skill-grid-item be-item-2'>NestJS</div>
                <div className='skill-grid-item be-item-3'>Python</div>
                <div className='skill-grid-item be-item-4'>Flask</div>
                <div className='skill-grid-item be-item-5'>Django</div>
                <div className='skill-grid-item be-item-6'>FastAPI</div>
                <div className='skill-grid-item be-item-7'>REST</div>
              </div>
            </div>
            <div className="scrollable-section">
              <h2>Database and ORM</h2>
              <div className="skills-grid">
                <div className='skill-grid-item db-item-1'>PostgreSQL</div>
                <div className='skill-grid-item db-item-2'>SQLite</div>
                <div className='skill-grid-item db-item-3'>Prisma</div>
                <div className='skill-grid-item db-item-4'>TypeORM</div>
                <div className='skill-grid-item db-item-5'>MongoDB</div>
              </div>
            </div>
            <div className="scrollable-section">
              <h2>Tools</h2>
              <div className="skills-grid">
                <div className='skill-grid-item tools-item-1'>Git</div>
                <div className='skill-grid-item tools-item-2'>GitHub</div>
                <div className='skill-grid-item tools-item-3'>Docker</div>
                <div className='skill-grid-item tools-item-4'>Postman</div>
                <div className='skill-grid-item tools-item-5'>Vercel</div>
                <div className='skill-grid-item tools-item-5'>Linux</div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}