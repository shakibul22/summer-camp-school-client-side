
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUserFriends } from 'react-icons/fa';
import "swiper/css";
import "swiper/css/pagination";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Pagination } from "swiper";
import { useEffect } from "react";
const PopularClass = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <>
        <div className="text-center mx-auto my-20">
            <h4>What We Do</h4>
            <h2 className="font-mono text-4xl">Our Popular Classes</h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-7"
        > 
          <SwiperSlide>
          <div className="flex flex-col items-center pb-10">
        <img className="w-64 h-56 mb-3 rounded-full shadow-lg" data-aos="fade-in"
                data-aos-once="false" src="https://nirvana.axiomthemes.com/wp-content/uploads/2016/09/image-7-1170x658.jpg" alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Private and Group Lessions</h5>
      <span className="text-sm flex gap-2 justify-between items-center text-gray-500 dark:text-gray-400">< FaUserFriends></FaUserFriends> 950+ </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
         
        </div>
    </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col items-center pb-10">
        <img className="w-64 h-56 mb-3 rounded-full shadow-lg" data-aos="fade-in"
                data-aos-once="false" src="https://nirvana.axiomthemes.com/wp-content/uploads/2016/09/image-2-1170x658.jpg" alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Prenatal Yoga Class</h5>
        <span className="text-sm flex gap-2 justify-between items-center text-gray-500 dark:text-gray-400">< FaUserFriends></FaUserFriends> 1900+ </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
         
        </div>
    </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col items-center pb-10">
        <img className="w-64 h-56 mb-3 rounded-full shadow-lg" data-aos="fade-in"
                data-aos-once="false" src="https://nirvana.axiomthemes.com/wp-content/uploads/2016/09/image-3-1170x658.jpg" alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Mysore Ashtanga Yoga
</h5>
<span className="text-sm flex gap-2 justify-between items-center text-gray-500 dark:text-gray-400">< FaUserFriends></FaUserFriends> 1200+ </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
         
        </div>
    </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col items-center pb-10">
        <img className="w-64 h-56 mb-3 rounded-full shadow-lg" data-aos="fade-in"
                data-aos-once="false" src="https://nirvana.axiomthemes.com/wp-content/uploads/2016/09/image-9-1170x658.jpg" alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Nadabrahma Meditation</h5>
        <span className="text-sm flex gap-2 justify-between items-center text-gray-500 dark:text-gray-400">< FaUserFriends></FaUserFriends> 560+ </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
         
        </div>
    </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col items-center pb-10">
        <img className="w-64 h-56 mb-3 rounded-full shadow-lg" data-aos="fade-in"
                data-aos-once="false" src="https://nirvana.axiomthemes.com/wp-content/uploads/2016/09/image-7-1170x658.jpg" alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Mysore Ashtanga Yoga
</h5>
<span className="text-sm flex gap-2 justify-between items-center text-gray-500 dark:text-gray-400">< FaUserFriends></FaUserFriends> 750+ </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
         
        </div>
    </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default PopularClass;