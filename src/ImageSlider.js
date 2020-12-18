import React from "react";
import infoDatabase from "./infoDatabase";
// import Swiper from "react-id-swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFlip,
} from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFlip]);

const ImageSlider = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Swiper
            effect="flip"
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {infoDatabase.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="cards">
                  <div className="card">
                    <img
                      src={item.imgSrc}
                      alt="christmasImage"
                      className="cardImg"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;
