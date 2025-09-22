import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import bmw from "../../../../assets/photo/bmw.svg";
import "./ProjectPhotoes.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function ProjectPhotoes() {
  const photos = Array(9).fill(bmw); // массив картинок (для примера 9 одинаковых)

  return (
    <div className="project-photoes" data-aos="fade-up" data-aos-duration="1000">
      <Swiper
        modules={[Pagination]}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            // className = "swiper-pagination-bullet"
            return `<span class="custom-bullet ${className}"></span>`;
          },
        }}
        breakpoints={{
            320: {
              slidesPerView: 1.5, // телефоны побольше
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
        {photos.map((photo, i) => (
          <SwiperSlide key={i}>
            <img src={photo} alt={`bmw-${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
