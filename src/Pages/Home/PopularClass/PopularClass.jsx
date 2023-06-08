
import { FaUserFriends } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const PopularClass = ({ item }) => {
        const { image, students, name } = item;
        useEffect(() => {
                AOS.init({ duration: 1000, once: true });
        }, []);
        return (
                <div className="flex flex-col items-center pb-10">
                        <img className="w-40 h-40 md:w-64 md:h-56  mb-3 rounded-full shadow-lg" data-aos="fade-in"
                                data-aos-once="false" src={image} alt="Bonnie image" />
                        <h5 className="mb-1 text-xl  font-medium text-gray-900 dark:text-white">{name}</h5>
                        <span className="text-sm flex gap-2 justify-between items-center text-gray-500 dark:text-gray-400">< FaUserFriends></FaUserFriends> {students}</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">

                        </div>
                </div>

        );
};

export default PopularClass;