import React from 'react';

const Instructor = ({teacher}) => {
    const {image,name,email,numberOfClasses}=teacher;
    console.log(teacher);
    return (
        <div className="card w-full  bg-base-100 shadow-xl">
<figure><img className='h-[300px] w-full ' src={image} alt="Shoes" /></figure>
  <div className="card-body items-center">
    <h2 className="card-title"> {name} </h2>
    <p className='text-xl font-thin '>  <span className='font-semibold mr-2'>Email:</span>  {email}</p>
    <div className="card-actions justify-between">
    <div className="badge badge-outline"><span className='font-bold mr-3'>Classes:</span> {numberOfClasses}</div> 
    </div>
  </div>
</div>
    );
};

export default Instructor;