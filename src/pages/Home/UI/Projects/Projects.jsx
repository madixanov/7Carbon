import "./Projects.css"
import mainProjects from "../../../../assets/photo/main-projects.svg"
import project from "../../../../assets/photo/project.svg"

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>Наши работы</h1>
      <img src={mainProjects} alt="main-projects" className="main-projects"/>
      <div className="projects-row">
        <div className="project">
          <img src={project} alt="project" />
          <h3>Работа 1</h3>
          <span>Описание текста  самой карточки.<br />Этот текст написан для визуального отображение</span>
          <button>ПОДРОБНЕЕ</button>
        </div>
        <div className="project">
          <img src={project} alt="project" />
          <h3>Работа 1</h3>
          <span>Описание текста  самой карточки.<br />Этот текст написан для визуального отображение</span>
          <button>ПОДРОБНЕЕ</button>
        </div>
        <div className="project">
          <img src={project} alt="project" />
          <h3>Работа 1</h3>
          <span>Описание текста  самой карточки.<br />Этот текст написан для визуального отображение</span>
          <button>ПОДРОБНЕЕ</button>
        </div>
        <div className="project">
          <img src={project} alt="project" />
          <h3>Работа 1</h3>
          <span>Описание текста  самой карточки.<br />Этот текст написан для визуального отображение</span>
          <button>ПОДРОБНЕЕ</button>
        </div>
      </div>
    </div>
  )
}