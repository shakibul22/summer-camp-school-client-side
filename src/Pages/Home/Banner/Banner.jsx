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
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{ backgroundImage: "url('https://images.pexels.com/photos/3822167/pexels-photo-3822167.jpeg?cs=srgb&dl=women-practicing-yoga-3822167.jpg&fm=jpg')" }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-outline btn-warning">Explore more</button>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen bg-cover"
                        style={{
                            backgroundImage: "url('https://cdn.shopify.com/s/files/1/0449/3525/0088/files/slider1-bg.jpg?v=1613575591')",
                        }}
                    >
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-start text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold uppercase">Breathe into your bands</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-outline btn-warning">Explore more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{ backgroundImage: "url('https://th.bing.com/th/id/R.02d9087ee988f8d830ea4a8d29d106e9?rik=J5806CWJk7pDUQ&pid=ImgRaw&r=0')" }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-outline btn-warning">Explore more</button>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{ backgroundImage: "url('https://stayingalivefitness.com/wp-content/uploads/2017/06/yoga-girl-wallpaper-1.jpg')" }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-end text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-outline btn-warning">Explore more</button>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{ backgroundImage: "url('https://th.bing.com/th/id/R.3ab8fc5009b9312b60b7e458a52d0cea?rik=jM7c3FgHGJyZuA&riu=http%3a%2f%2fyogabrielle.ch%2fwp-content%2fuploads%2f2016%2f07%2fAP_1610nb1.jpg&ehk=nK5JULF8Nnk5utorHnqYW%2bOBacOp%2bWsuFY63yRhyeB8%3d&risl=&pid=ImgRaw&r=0')" }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-outline btn-accent">Explore more</button>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{ backgroundImage: "url('https://pixfeeds.com/images/self-improvement/self-improvement/1200-175635655-girl-meditating-on-beach.jpg')" }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-outline btn-accent">Explore more</button>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;
