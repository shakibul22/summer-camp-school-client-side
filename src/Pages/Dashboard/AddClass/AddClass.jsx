import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const [imgHostingToken] = useState(import.meta.env.VITE_Image_Upload_token);
  const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`;

  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    fetch(imgHostingUrl, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const newItem = {
            name: data.className,
            instructor: user.displayName,
            instructorEmail: user.email,
            price: parseFloat(data.price),
            image: imgURL,
            availableSeats:parseFloat(data.availableSeats)
          };

          axiosSecure .post('/classes', newItem)
            .then((data) => {
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'class added successfully',
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };

  const classNameOptions = ['Mysore Ashtanga Yoga','Milky Way Yoga','Jasmine Moon Yoga', 'Lucky Lotus Yoga', 'Vinyasa Yoga', 'Ashtanga Yoga','Hatha Yoga','Kundalini Yoga','Bikram Yoga','Yin Yoga',];

  return (
    <div className="bg-[url('https://th.bing.com/th/id/OIP.14kLPSslbG9R8HPepjiVIwHaEK?pid=ImgDet&rs=1')] md:p-24 w-full h-full ">
       <Helmet>
        <title>Yoga |Add Class</title>
      </Helmet>
      <h3 className="text-3xl text-center font-extrabold mb-5 ">Add Class</h3>
      {/* form class row */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <select {...register('className', { required: true })} className="select select-bordered w-full">
              <option value="">Select Class Name</option>
              {classNameOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control md:w-1/2 ml-3">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <label className="input-group">
              <input
                {...register('availableSeats', { required: true, min: 0 })}
                type="number"
                placeholder="Available Seats"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="flex mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={user.displayName}
                readOnly
                placeholder="Instructor Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-3">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={user.email}
                readOnly
                placeholder="Instructor Email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="flex mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <label className="input-group">
              <input
                type="file"
                {...register('image', { required: true })}
                className="file-input file-input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-3">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                {...register('price', { required: true, min: 0 })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="w-full mb-5"></div>
        <input type="submit" value="Add Class" className="btn btn-block btn-active btn-ghost" />
      </form>
    </div>
  );
};

export default AddClass;
