import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users');
    return res.data;
  });
  const [adminDisabled, setAdminDisabled] = useState(false);
  const [instructorDisabled, setInstructorDisabled] = useState(false);
  const handleMakeAdmin = (user) => {
    fetch(`https://summer-camp-school-server-three.vercel.app/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You want to amke admin",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, i made'
        }).then((result) => {
          if (result.isConfirmed) {
            if (data.modifiedCount) {
              refetch();
              setAdminDisabled(true);
              setInstructorDisabled(false);
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              });
            }
          }
        })

      });
  };

  const handleMakeInstructor = (user) => {

    if (user.email === "shakibulislam684@gmail.com") {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Permission Denied',
        text: 'This user can not be an instructor.',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      fetch(`https://summer-camp-school-server-three.vercel.app/users/instructor/${user._id}`, {
        method: 'PATCH'
      })
        .then(res => res.json())
        .then(data => {
          Swal.fire({
            title: 'Are you sure?',
            text: "You want to make instructor",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, i made'
          }).then((result) => {
            if (result.isConfirmed) {
              if (data.modifiedCount) {
                refetch();
                setAdminDisabled(false);
                setInstructorDisabled(true);
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: `${user.name} is an Admin Now!`,
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            }
          })

        });
    }
  };

  //   const handleDelete = (user) => {
  //     Swal.fire({
  //       title: 'Are you sure?',
  //       text: `You are about to delete ${user.name}. This action cannot be undone.`,
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#d33',
  //       cancelButtonColor: '#3085d6',
  //       confirmButtonText: 'Yes, delete it!'
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         fetch(`https://summer-camp-school-server-three.vercel.app/users/${user._id}`, {
  //           method: 'DELETE'
  //         })
  //           .then(res => res.json())
  //           .then(data => {
  //             console.log(data);
  //             if (data.deletedCount) {
  //               refetch();
  //               Swal.fire({
  //                 position: 'top-end',
  //                 icon: 'success',
  //                 title: `${user.name} has been deleted!`,
  //                 showConfirmButton: false,
  //                 timer: 1500
  //               });
  //             }
  //           });
  //       }
  //     });
  //   };

  return (
    <div className="w-full p-3">
      <Helmet>
        <title>Yoga | All users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4 text-cyan-700">Total Users: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-cyan-700 font-serif text-xl">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-outline" disabled={adminDisabled}><FaUserShield /> </button>}
                </td>
                <td>
                  {
                    user.role === 'instructor' ? 'instructor' : <button onClick={() => handleMakeInstructor(user)} className="btn btn-outline" disabled={instructorDisabled}> Make Instructor</button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
