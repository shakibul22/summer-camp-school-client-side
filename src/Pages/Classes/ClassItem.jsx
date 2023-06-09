import  { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { AuthContext } from '../../providers/AuthProvider';
import useCart from '../../hooks/useCart';

const ClassItem = ({ item }) => {
    
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { name, image, instructor, availableSeats, price,_id } = item;

  const handleAddToCart = (item) => {
    
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id, name, image, price,  email: user.email, };
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Class added to the cart.',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className="card w-full shadow-xl">
      <figure>
        <img className="h-[300px] w-full" src={image} alt="Class" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p className="text-xl font-thin">
          <span className="font-lg mr-2">Instructor:</span> {instructor}
        </p>
        <p className="text-xl font-thin">
          <span className="font-lg mr-2">Price:</span> {price} Taka
        </p>
        <div className="card-actions justify-between">
          <div>
            <span className="font-md mr-3">Available Seats:</span> {availableSeats}
          </div>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline btn-sm bg-slate-100 border-0 border-b-4 border-orange-400 -mt-9"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassItem;
