import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full relative h-screen">
      <video
        src="https://res.cloudinary.com/drhtv8dr4/video/upload/v1701945081/avs4y9fern8ohqhxnqfm.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      ></video>

      <div className="absolute top-0 w-full h-full text-center bg-[black]/60 flex flex-col justify-center items-center">
        <div className="text-white">
          <h1 className="md:text-4xl text-2xl font-bold text-cyan-600 px-4">
            Welcome To Yoga Camp School
          </h1>
          <p className="text-sm text-white md:w-2/3 w-11/12 mx-auto my-2">
            🍽️ Discover & Share with Find Yoga Camp School <br />
            🍲 Your Ultimate Dining Companion! Explore, Share, and Enjoy -
            Bringing Friends Together,
          </p>
          <button className="btn bg-cyan-600 hover:bg-[#69a9fc] text-black text-sm">
            Find Yoga
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
