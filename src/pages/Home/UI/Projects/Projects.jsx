import "./Projects.css";
import bmw from "../../../../assets/photo/bmw.svg";
import project from "../../../../assets/photo/project.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Keyboard, Mousewheel, Pagination, Navigation } from "swiper/modules";

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>Наши работы</h1>
      <div className="main-project-container">
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
      <div className="projects-row">
        <Swiper
          pagination={{ clickable: true }}
          navigation={true}
          keyboard={true}
          loop={true}
          modules={[Pagination, Navigation, Keyboard]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 2, // телефоны побольше
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2, // планшеты
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // десктоп
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
