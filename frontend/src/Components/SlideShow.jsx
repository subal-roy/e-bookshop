import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

// Import Swiper modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const SlideShow = () => {
  return (
    <div className="hidden sm:block m-auto w-3/4 py-5 ">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        navigation 
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000}}
        loop={true} 
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide2} alt="slide2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide3} alt="slide3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideShow;
