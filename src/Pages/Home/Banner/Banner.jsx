import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const Banner = () => {
    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images.pexels.com/photos/3822167/pexels-photo-3822167.jpeg?cs=srgb&dl=women-practicing-yoga-3822167.jpg&fm=jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide><img src="https://stayingalivefitness.com/wp-content/uploads/2017/06/yoga-girl-wallpaper-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/R.02d9087ee988f8d830ea4a8d29d106e9?rik=J5806CWJk7pDUQ&pid=ImgRaw&r=0" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src="https://pixfeeds.com/images/self-improvement/self-improvement/1200-175635655-girl-meditating-on-beach.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src="https://th.bing.com/th/id/R.3ab8fc5009b9312b60b7e458a52d0cea?rik=jM7c3FgHGJyZuA&riu=http%3a%2f%2fyogabrielle.ch%2fwp-content%2fuploads%2f2016%2f07%2fAP_1610nb1.jpg&ehk=nK5JULF8Nnk5utorHnqYW%2bOBacOp%2bWsuFY63yRhyeB8%3d&risl=&pid=ImgRaw&r=0" alt="" /></SwiperSlide>
     
       
      </Swiper>
    </>
    );
};

export default Banner;
