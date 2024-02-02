import React from 'react';
import usePopularInstructor from '../../../hooks/usePopularInstructor';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Instructor from './Instructor';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper';

const PopularInstructor = () => {
  const [instructors] = usePopularInstructor();

  // Slice the array to show only the first 6 items
  const slicedInstructors = instructors.slice(0, 6);

  return (
    <div className='max-w-7xl mx-auto'>
      <SectionTitle
        heading="CONNECT AND GROW WITH TOP YOGA TEACHERS"
        subHeading="Practice with some of the best yoga teachers "
      />

      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Add autoplay settings
        className="mySwiper"
      >
        {slicedInstructors.map((item) => (
          <SwiperSlide key={item._id}>
            <Instructor item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularInstructor;
