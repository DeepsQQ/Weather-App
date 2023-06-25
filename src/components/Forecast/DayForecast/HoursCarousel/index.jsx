import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/scss";
import styles from "./hoursCarousel.module.scss";

import Slide from "./Slide";

const HoursCarousel = ({ hoursArray }) => {
  const slides = hoursArray.map((weather, index) => (
    <SwiperSlide className={styles.slide} key={index}>
      <Slide
        time={weather.time}
        temperature={{ c: weather.temp_c, f: weather.temp_f }}
        condition={weather.condition}
        isDay={weather.is_day}
      />
    </SwiperSlide>
  ));

  return (
    <div className={styles.root}>
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        freeMode={true}
        modules={[FreeMode]}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default HoursCarousel;
