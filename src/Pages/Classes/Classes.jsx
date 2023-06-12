import React from 'react';
import useClasses from '../../hooks/useClasses'
import ClassItem from './ClassItem';
import { Helmet } from 'react-helmet';
const Classes = () => {
    const [classes]=useClasses();
    return (
        <div className="bg-[url('https://th.bing.com/th/id/OIP.UCS30PlxjGZ1e0JJJaYt5wHaEc?w=268&h=180&c=7&r=0&o=5&pid=1.7')]">
           <Helmet>
        <title>Yoga |Classes</title>
      </Helmet>
        <div className='text-center font-serif text-2xl text-orange-400 py-24'>
            <h3>Our Classes</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-5'>
          {
            classes.map(item=><ClassItem key={item._id} item={item} ></ClassItem> )
          }  
        </div>
        </div>
    );
};

export default Classes;



