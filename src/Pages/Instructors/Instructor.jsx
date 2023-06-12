import React from 'react';
import { motion } from 'framer-motion';

const Instructor = ({ teacher }) => {
  const { image, name, email, numberOfClasses } = teacher;
  console.log(teacher);
  return (
    <div className="card w-full bg-slate-100 shadow-xl">
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: '100%'
        }}
      >
        <figure>
          <motion.img
            className="h-[200px] w-full"
            src={image}
            alt=""
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        </figure>
      </motion.div>
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl font-thin">
          <span className="font-semibold mr-2">Email:</span> {email}
        </p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">
            <span className="font-bold mr-3">Classes:</span> {numberOfClasses}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
