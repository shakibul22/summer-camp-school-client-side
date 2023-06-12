
import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import usePopularClass from "../../../hooks/usePopularClass";
import PopularClass from "../PopularClass/PopularClass";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const PopularMenu = () => {
  const [menu] = usePopularClass();
  const slicedMenu = menu.slice(0, 6); // Slice the menu array to show only the first 3 items

  return (
    <div className="bg-[url('https://th.bing.com/th/id/OIP.CHyYu0A7HbTqinAovj3SdQAAAA?pid=ImgDet&rs=1')]">
      <SectionTitle heading="Our Popular Classes" subHeading="What we do" />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <div className="flex flex-row">
          {slicedMenu.map((item) => (
            <SwiperSlide key={item._id}>
              <PopularClass item={item} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default PopularMenu;
