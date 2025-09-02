import "./Projects.css"
import mainProject from "../../../../assets/photo/main-porject.svg"
import project from "../../../../assets/photo/project.svg"

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>Наши работы</h1>
      <div className="main-project-container">
        <img src={mainProject} alt="main-project" />
        <img src={mainProject} alt="main-project" />
      </div>
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