import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useClasses from "../../../hooks/useClasses";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ManageClasses = () => {
  const [classes, refetch] = useClasses();
  const [axiosSecure] = useAxiosSecure();
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isApproveDisabled, setIsApproveDisabled] = useState(false);
  const [isDenyDisabled, setIsDenyDisabled] = useState(false);

  useEffect(() => {
    // Check if "approve" button was clicked previously
    const isApproved = localStorage.getItem("isApproved");
    if (isApproved === "true") {
      setIsApproveDisabled(true);
      setIsDenyDisabled(true);
    }
  }, []); 

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/classes/${item._id}`)
          .then((res) => {
            console.log("deleted res", res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.log("delete error", error);
          });
      }
    });
  };

  const handleApprove = (item) => {
    if (item.status !== "approved") {
      axiosSecure
        .patch(`/classes/${item._id}`, { status: "approved" })
        .then((res) => {
          console.log("approved res", res.data);
          refetch();
          setIsApproveDisabled(true);
          setIsDenyDisabled(true);
          // Store "approve" button state in localStorage
          localStorage.setItem("isApproved", "true");
        })
        .catch((error) => {
          console.log("approve error", error);
        });
    }
  };
  const handleDeny = (item) => {
    axiosSecure
      .patch(`/classes/${item._id}`, { status: "denied" })
      .then((res) => {
        console.log("denied res", res.data);
        refetch(); // Call the refetch function to update the class list
        setIsApproveDisabled(true); // Disable the "approve" button
        setIsDenyDisabled(true); // Disable the "deny" button
      })
      .catch((error) => {
        console.log("deny error", error);
      });
  };

  const handleSendFeedback = () => {
    // Implement logic to send feedback to the instructor
    // You can use the feedback state to access the feedback entered by the admin
    // Reset the feedback state and close the feedback modal
    console.log("Sending feedback:", feedback);
    setFeedback("");
    setFeedbackModalOpen(false);
  };

  const openFeedbackModal = (item) => {
    setFeedbackModalOpen(true);
  };

  const closeFeedbackModal = () => {
    setFeedbackModalOpen(false);
  };

  return (
    <div className="w-full dark:bg-gray-800">
      <SectionTitle heading="Manage Classes" subHeading="Hurry up" />
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th className="items-center">Status</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.availableSeats}</td>
                <td>${item.price}</td>
                <td className="text-center">{item.status}</td>
                <td>
                  <div className="flex space-x-2">
                    <>
                      <button
                        className="btn btn-primary btn-xs"
                        onClick={() => handleApprove(item)}
                        disabled={isApproveDisabled} // Disable the "approve" button if it's already clicked
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-secondary btn-xs"
                        onClick={() => handleDeny(item)}
                        disabled={isDenyDisabled} // Disable the "deny" button if it's already clicked
                      >
                        Deny
                      </button>
                    </>

                    <button
                      className="btn btn-primary btn-xs"
                      onClick={() => openFeedbackModal(item)}
                    >
                      Send Feedback
                    </button>
                  </div>
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-danger btn-xs"
                    onClick={() => handleDelete(item)}
                  >
                    {" "}
                    <FaTrashAlt />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {feedbackModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Send Feedback</h2>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full h-32 border border-gray-300 rounded mb-4 p-2 resize-none"
              placeholder="Enter your feedback..."
            ></textarea>
            <div className="flex justify-end">
              <button
                className="btn btn-primary mr-2"
                onClick={handleSendFeedback}
              >
                Send
              </button>
              <button
                className="btn btn-secondary"
                onClick={closeFeedbackModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
