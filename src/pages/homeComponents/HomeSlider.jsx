// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeSlider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
      >
        <SwiperSlide
          className="SwiperSlide1"
          style={{
            backgroundImage: `url(/womenBackground.jpeg)`,
            backgroundSize: "cover",
            // backgroundPosition: "center",
          }}
        >
          <p>
            Every Click Tells a Story <br /> Begin Your Journey Here.
          </p>
          <button>Shop Now</button>
        </SwiperSlide>
        <SwiperSlide
          className="SwiperSlide2"
          style={{
            backgroundImage: `url(/backgroundmen.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        >
          <p>
            Your Wishlist, Our Reality <br /> Explore and Enjoy!
          </p>
          <button>Shop Now</button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
