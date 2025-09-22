import "./Projects.css";
import bmw from "../../../../assets/photo/bmw.svg";
import project from "../../../../assets/photo/project.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Keyboard, Mousewheel, Pagination, Navigation } from "swiper/modules";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Projects() {
  return (
    <div className="projects-container">
      <h1 data-aos="fade-up" data-aos-duration="1000">Наши работы</h1>
      <div className="main-project-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <div className="main-project">
          <img src={bmw} alt="main-project" />
          <div className="project-text">
            <h3>Работа Main 1</h3>
            <p>Описание текста  самой карточки. <br/>Этот текст написан для визуального отображение</p>
          </div>
        </div>
        <div className="main-project">
          <img src={bmw} alt="main-project" />
          <div className="project-text">
            <h3>Работа Main 2</h3>
            <p>Описание текста  самой карточки. <br/>Этот текст написан для визуального отображение</p>
          </div>
        </div>
      </div>
      <div className="projects-row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <Swiper
          pagination={{ clickable: true }}
          keyboard={true}
          loop={true}
          modules={[Pagination, Navigation, Keyboard]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 2.5, // телефоны побольше
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5, // планшеты
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3.5, // десктоп
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="project">
              <img src={project} alt="project" />
              <h3>Работа 1</h3>
              <span>
                Описание текста самой карточки.
                <br />Этот текст написан для визуального отображения
              </span>
              <button>ПОДРОБНЕЕ</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project">
              <img src={project} alt="project" />
              <h3>Работа 2</h3>
              <span>
                Описание текста самой карточки.
                <br />Этот текст написан для визуального отображения
              </span>
              <button>ПОДРОБНЕЕ</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project">
              <img src={project} alt="project" />
              <h3>Работа 3</h3>
              <span>
                Описание текста самой карточки.
                <br />Этот текст написан для визуального отображения
              </span>
              <button>ПОДРОБНЕЕ</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project">
              <img src={project} alt="project" />
              <h3>Работа 4</h3>
              <span>
                Описание текста самой карточки.
                <br />Этот текст написан для визуального отображения
              </span>
              <button>ПОДРОБНЕЕ</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project">
              <img src={project} alt="project" />
              <h3>Работа 5</h3>
              <span>
                Описание текста самой карточки.
                <br />Этот текст написан для визуального отображения
              </span>
              <button>ПОДРОБНЕЕ</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
