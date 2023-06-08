import React from 'react';
import usePopularInstructor from '../../../hooks/usePopularInstructor';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Instructor from './Instructor';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const PopularInstructor = () => {
    const [instructor] = usePopularInstructor();
    console.log(instructor);
    const slicedMenu = instructor.slice(0, 6); // Slice the menu array to show only the first 3 items

    return (
        <>
            <SectionTitle heading='CONNECT AND GROW WITH TOP YOGA TEACHERS' subHeading='Practice with some of the best yoga teachers in the world, across a variety of styles.' />
           
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
                <div className="flex flex-row">
                    {slicedMenu.map((item) => (
                        <SwiperSlide key={item._id}>
                            <Instructor item={item} />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </>
    );
};

export default PopularInstructor;

