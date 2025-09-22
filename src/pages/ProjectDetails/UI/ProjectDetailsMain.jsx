import Services from "../../../components/Services/Services"
import Location from "../../../components/Location/Location"
import ServiceLink from "../../../components/Link/Link"
import ProjectPhotoes from "./ProjectsPhoto/ProjectsPhoto"
import "./ProjectDetailsMain.css"
import ProjectTitle from "./ProjectTitle/ProjectTitle"
import project from "../../../assets/photo/project-photo.svg"
import ProjectDescription from "./ProjectDescription/ProjectDescription"
import ProjectProcess from "./ProjectProcess/ProjectProcess"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function ProjectDetailsMain() {
  return (
    <div className="project-details-main">
      <div className="main-container">
        <div className="sub-container">
          <ServiceLink />
          <ProjectTitle />
          <img src={project} alt="project-photo" className="main-photo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"/>
          <ProjectDescription />
          <ProjectProcess />
        </div>
        <ProjectPhotoes />
        <Services />
        <Location />
      </div>
    </div>
  )
}