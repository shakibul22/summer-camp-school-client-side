import { useForm } from 'react-hook-form';

const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newClass = {
      ...data,
      instructorName: 'John Doe', // Replace with the logged-in instructor's display name
      instructorEmail: 'john.doe@example.com', // Replace with the logged-in instructor's email
      status: 'pending',
    };

    // TODO: Save the newClass object to the database (e.g., using an API call)

    reset(); // Clear the form fields after submitting

    // Show a success message or perform any other desired actions
    console.log('Class added successfully:', newClass);
  };

  return (
    <div className="bg-[url('https://th.bing.com/th/id/OIP.14kLPSslbG9R8HPepjiVIwHaEK?pid=ImgDet&rs=1')] md:p-24 w-full h-full ">
    <h3 className="text-3xl text-center font-extrabold mb-5 ">Add Class</h3>
    {/* form coffee row */}
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mb-5 ">
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Class Name</span>
                </label>
                <label className="input-group">

                    <input type="text" {...register('className', { required: true })} placeholder="Class Name" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control md:w-1/2 ml-3">
                <label className="label">
                    <span className="label-text">Available Seats</span>
                </label>
                <label className="input-group">

                    <input {...register('availableSeats', { required: true, min: 0 })} type="number"  placeholder="Available Seats" className="input input-bordered w-full" />
                </label>
            </div>
        </div>

        <div className="flex mb-5">
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Instructor Name</span>
                </label>
                <label className="input-group">

                    <input type="text"  {...register('instructorName')} placeholder="Instructor Name" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control md:w-1/2 ml-3">
                <label className="label">
                    <span className="label-text">Instructor Email</span>
                </label>
                <label className="input-group">

                    <input type="text"  {...register('instructorEmail')} placeholder="Instructor Email" className="input input-bordered w-full" />
                </label>
            </div>
        </div>

        <div className="flex mb-5">
        <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Class Image</span>
                </label>
                <label className="input-group">
                    <input type="text"  {...register('classImage', { required: true })} placeholder="Class Image" className="input input-bordered w-full" />
                </label>
            </div>
          
            <div className="form-control md:w-1/2 ml-3">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <label className="input-group">

                    <input {...register('price', { required: true, min: 0 })} type="number"  placeholder="Price" className="input input-bordered w-full" />
                </label>
            </div>
        </div>


        <div className="w-full mb-5">
         
        </div>
        <input type="submit" value='Add Class' className="btn btn-block btn-active btn-ghost " />
    </form>



</div>
  );
};

export default AddClass;

