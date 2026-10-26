import './skills.css'

type skillsContent = [string , string[]][] | Map<string[], string>;

export default function Skills() {
  const skillsContent: skillsContent = [
    ['Frontend', ['HTML5', 'CSS', 'TailWindCSS', 'JavaScript', 'React', 'NextJS', 'TypeScript', 'Flutter']],
    ['Backend', ['Node','NestJS','Python','Flask','Django','FastAPI','REST']],
    ['Database and ORM', ['PostgreSQL','SQLite','Prisma','TypeORM','MongoDB']],
    ['Tools', ['Git','GitHub','Docker','Postman','Vercel','Linux']],
  ];
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
            {
              skillsContent.map((skillsContentItem) => {
                return (
                  <div className="scrollable-section">
                    <h2>{skillsContentItem[0]}</h2>
                  <div className="skills-grid">
                    {
                      skillsContentItem[1].map((skill) => {
                        return (
                        <div className='skill-grid-item'>{skill}</div>
                        )
                      })
                    }
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
    </>
  )
}