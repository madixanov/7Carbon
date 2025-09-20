import StatsContainer from "./StatsContainer/StatsContainer"
import about from "../../../assets/photo/about.svg"
import office from "../../../assets/photo/office.svg"
import gel from "../../../assets/photo/gel.svg"
import ge2 from "../../../assets/photo/gel2.svg"
import "./AboutMain.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function AboutMain() {
  return (
    <div className="main-container">
      <main className="about-main">
        <div className="about-us-container" data-aos="fade-up" data-aos-duration="1000">
          <img src={about} alt="about" />
          <div className="about-content">
            <h1 className="title">О компании</h1>
            <p className="p">В 7 Carbon мы идем дальше, предлагая нашим клиентам нечто более чем стандартные решения. </p>
            <p className="p">Мы разрабатываем и изготавливаем детали из углеволокна под заказ, чтобы ваш автомобиль стал уникальным произведением искусства. </p>
            <p className="p">Наша команда дизайнеров и инженеров работает с вами, чтобы воплотить в жизнь вашу уникальную визию и создать автомобиль, который подчеркнет ваш стиль и индивидуальность.</p>
          </div>
        </div>
        <div className="about-us-container reverse" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <img src={office} alt="office" />
          <div className="about-content">
            <h1 className="sub">Краткая история 7 carbon</h1>
            <p className="sub-p">Зарождение 7 Carbon в 2020 году было исключительно страстью к автомобилям, выросшей в профессиональное тюнинг ателье. С момента своего создания мы стремились преобразовывать автомобили в уникальные произведения искусства с инновационным дизайном. Начав с небольших гаражей, мы выросли в узнаваемый бренд, поистине цененный в мире автотюнинга.</p>
            <p className="sub-p">7 Carbon стало не просто именем, а философией, где техническое мастерство сочетается с творческим вдохновением. Каждый наш проект — это уникальное творение, отражающее индивидуальность и стиль. Мы участвуем в престижных автомобильных мероприятиях и сотрудничаем с известными брендами, продолжая утверждать наше место в мире автодизайна.</p>
          </div>
        </div>
        <div className="about-us-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <img src={gel} alt="gel" />
          <div className="about-content">
            <h1 className="sub">Философия</h1>
            <p className="p">Наша команда избегает шаблонов, придерживаясь философии индивидуализации. Мы уважаем искусство автомобильного дизайна, поэтому каждый проект — это уникальная история, рассказанная через детали и формы. Сотрудничество с клиентами для нас важно, мы стремимся понять их страсти и воплотить их в реальность.</p>
          </div>
        </div>
        <div className="about-us-container reverse">
          <img src={ge2} alt="gel2" />
          <div className="about-content">
            <h1 className="sub">Сертификация</h1>
            <p className="p">В 7 Carbon мы придаем первостепенное значение качеству, сертификации и профессионализму. Каждый материал, использованный в наших проектах, проходит строгий отбор и сертификацию, гарантируя высший стандарт. Наша команда специалистов также подвергается сертификации, обеспечивая мастерство и навыки на высочайшем уровне.</p>
            <p className="p">Мы сотрудничаем только с проверенными поставщиками, чтобы предоставлять клиентам материалы выдающегося качества. Этот подход обеспечивает долговечность и надежность каждого элемента, воплощенного в наших творениях.</p>
          </div>
        </div>
        <StatsContainer />
      </main>
    </div>
  )
}