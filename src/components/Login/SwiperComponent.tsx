import Swiper1 from "../../assets/Swiper1.png";
import Swiper2 from "../../assets/Swiper2.png";
import Swiper3 from "../../assets/Swiper3.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
// import { Pagination, Autoplay } from "swiper";

const SwiperComponent = () => {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index: number, className: string) {
  //     return '<span class="' + className + '">' + "</span>";
  //   },
  // };
  return (
    <div className="w-5/6 lg:w-4/6 mx-auto  text-center pt-7">
      <Swiper
        className="pb-10 mt-5"
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="text-center">
            <img
              src={Swiper1}
              alt="Swiper1"
              className="h-[200px] mx-auto object-cover"
            />
            <div className="text-center">
              <h1 className="mb-5 text-[#3E3E3E] text-[20px] font-semibold">
                Easy Statistics View
              </h1>
              <p className=" text-[#3E3E3E] w-4/6 mx-auto">
                Analyze the statistics of your business at one place.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Swiper2}
              alt="Swiper2"
              className=" h-[200px] mx-auto object-cover"
            />
            <div className="text-center">
              <h1 className="mb-5 text-[#3E3E3E] text-[20px] font-semibold">
                User management
              </h1>
              <p className=" text-[#3E3E3E] w-4/6 mx-auto">
                Invite users with various permission such as folders and
                sections.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Swiper3}
              alt="Swiper3"
              className=" h-[200px] mx-auto object-cover"
            />
            <div className="text-center">
              <h1 className="mb-5 text-[#3E3E3E] text-[20px] font-semibold">
                Order food from anywhere
              </h1>
              <p className=" text-[#3E3E3E] w-4/6 mx-auto">
                Order food from anywhere.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
