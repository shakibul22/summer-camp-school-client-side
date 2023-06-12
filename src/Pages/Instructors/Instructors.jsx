import React, { useState } from 'react';
import useInstructors from '../../hooks/useInstructors';
import Instructor from './Instructor';
import { Helmet } from 'react-helmet';

const Instructors = () => {
    const [instructors] = useInstructors();
    const [showAll, setShowAll] = useState(false);

    const handleClickSeeAll = () => {
        setShowAll(true);
    };

    return (
        <div className="bg-[url('https://th.bing.com/th/id/OIP.UCS30PlxjGZ1e0JJJaYt5wHaEc?w=268&h=180&c=7&r=0&o=5&pid=1.7')]">
             <Helmet>
        <title>Yoga |Instructors </title>
      </Helmet>
            <div className='text-center font-serif text-2xl text-orange-400 p-24'>
                <h3>Our Respected Instructors</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-5'>
                {showAll
                    ? instructors.map((teacher) => (
                        <Instructor key={teacher._id} teacher={teacher} />
                    ))
                    : instructors.slice(0, 3).map((teacher) => (
                        <Instructor key={teacher._id} teacher={teacher} />
                    ))}
            </div>

            {!showAll && (
                <div className='text-center mt-4'>
                    <button
                        className='bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded'
                        onClick={handleClickSeeAll}
                    >
                        See All
                    </button>
                </div>
            )}
        </div>
    );
};

export default Instructors;





  