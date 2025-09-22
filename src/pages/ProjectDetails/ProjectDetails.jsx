import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import ProjectDetailsMain from "./UI/ProjectDetailsMain"

export default function ProjectDetails() {
  return (
    <div className="project-details">
      <Header />
      <ProjectDetailsMain />
      <Footer />
    </div>
  )
}