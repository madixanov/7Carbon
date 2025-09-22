import "./ProjectTitle.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function ProjectTitle() {
  return (
    <div className="project-title" data-aos="fade-up" data-aos-duration="1000">
      <h1>BMW F90 Competition</h1>
      <p>Спортивная автоматическая коробка передач M Steptronic с функцией Drivelogic. Высокопроизводительный 8-цилиндровый V-образный бензиновый двигатель M TwinPower Turbo мощностью 625 л.с, 750 Нм, 0–100 км/ч за 3,9 с</p>
    </div>
  )
}