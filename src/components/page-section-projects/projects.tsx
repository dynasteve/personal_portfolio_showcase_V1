import './projects.css'

interface projectContent {
  title: string;
  details: string;
  image: string;
  skills: string[];
}

type projectContentType = projectContent[] | Map<projectContent[], string>

export default function Projects() {
  const projectContent: projectContentType = [
    {
      title: 'Title',
      details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita similique magnam repellendus, ad dignissimos tempore, eius sunt praesentium consectetur quaerat, nam numquam! Harum laborum minima numquam fuga aliquid nisi?",
      image: 'Image',
      skills: ["Git","GitHub","Docker","Postman","Vercel","Linux"]
    },
    {
      title: 'Title',
      details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita similique magnam repellendus, ad dignissimos tempore, eius sunt praesentium consectetur quaerat, nam numquam! Harum laborum minima numquam fuga aliquid nisi?",
      image: 'Image',
      skills: ["Git","GitHub","Docker","Postman","Vercel","Linux"]
    },
    {
      title: 'Title',
      details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita similique magnam repellendus, ad dignissimos tempore, eius sunt praesentium consectetur quaerat, nam numquam! Harum laborum minima numquam fuga aliquid nisi?",
      image: 'Image',
      skills: ["Git","GitHub","Docker","Postman","Vercel","Linux"]
    }
  ]

  return (
    <>
      <div className="page-body-section-title page-body-section-title-one mobile-section-title">
        Projects
      </div>
      <div className="page-body-section-content page-body-section-content-one">
        <div className="projects-content-scrollable">
          {
            projectContent.map((projectItem) => {
              return (
                <div className="project-item">
                  <div className="project-item-left">
                    <div className="project-image">{projectItem.image}</div>
                  </div>
                  <div className="project-item-right">
                    <h2>{projectItem.title}</h2>
                    <p>
                      {projectItem.details}
                    </p>
                    <div className="skills-grid project-skills">
                      {projectItem.skills.map((projectItemSkill) => {
                        return(
                          <div className="projects-skill-grid-item">{projectItemSkill}</div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="page-body-section-title page-body-section-title-one desktop-section-title">
        Projects
      </div>
    </>
  );
}
