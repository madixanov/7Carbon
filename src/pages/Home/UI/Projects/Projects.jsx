import "./Projects.css";
import mainProject from "../../../../assets/photo/main-porject.svg";
import project from "../../../../assets/photo/project.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>Наши работы</h1>
      <div className="main-project-container">
        <img src={mainProject} alt="main-project" />
        <img src={mainProject} alt="main-project" />
      </div>
      <div className="projects-row">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 2, // телефоны побольше
            },
            768: {
              slidesPerView: 2, // планшеты
            },
            1024: {
              slidesPerView: 3, // десктоп
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
