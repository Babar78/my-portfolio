import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Autoplay, Pagination} from "swiper/modules";

function SwiperJS({ slideItems , slidesPerView, spaceBetween}) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      loop={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {slideItems.map((item) => (
        <SwiperSlide key={item.id}>{item.content}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperJS;
