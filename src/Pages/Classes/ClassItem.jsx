import React from 'react';

const ClassItem = ({item}) => {
    console.log(item);
    const {name,image,instructor,availableSeats,price}=item;
    return (
        <div className="card w-full  bg-base-100 shadow-xl">
        <figure><img className='h-[300px] w-full ' src={image} alt="Shoes" /></figure>
          <div className="card-body items-center">
            <h2 className="card-title"> {name} </h2>
            <p className='text-xl font-thin '>  <span className='font-semibold mr-2'>Instructor:</span>  {instructor}</p>
            <p className='text-xl font-thin '>  <span className='font-semibold mr-2'>Price:</span>  {price}</p>
            <div className="card-actions justify-between">
            <div className="badge badge-outline"><span className='font-bold mr-3'>Available Seats:</span> {availableSeats}</div> 
            </div>
          </div>
        </div>
    );
};

export default ClassItem;