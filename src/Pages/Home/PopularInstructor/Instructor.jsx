import { FaUserFriends } from 'react-icons/fa';

const Instructor = ({ item }) => {
  const { image, students, name } = item;

  return (
    <div className="card card-compact w-full md:w-96">
      <figure>
        <img className="h-[100px] md:h-[300px] w-full " src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <span className="text-sm flex gap-2 items-center text-gray-500 dark:text-gray-400">
          <FaUserFriends />
          {students} Student
        </span>
      </div>
    </div>
  );
};

export default Instructor;
