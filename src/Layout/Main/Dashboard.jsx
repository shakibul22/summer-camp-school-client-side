import { useContext } from 'react';
import { FaBook, FaHome, FaRegAddressBook, FaUsers, FaWallet } from 'react-icons/fa';
import { GrCheckboxSelected } from 'react-icons/Gr';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [cart] = useCart();
  const { user } = useContext(AuthContext);
  console.log(user);
  const isAdmin = useAdmin();
  const isInstructor = true; // Replace with the actual logic for determining instructor role

  return (
    <div className=" bg-[url('https://th.bing.com/th/id/R.fdd608656b482dc0dadde3aaab57c803?rik=c0wX08aqGRH1xQ&pid=ImgRaw&r=0')] ">
      <div className="navbar ">
        <div className="flex-1">
          <a href="#" className="btn btn-ghost normal-case text-xl">
            {' '}
            <img
              className="w-10 h-10"
              src="https://th.bing.com/th/id/R.87f8ade857386bf2dd7043e402a3566a?rik=pdRwS%2bh5W%2byz%2fw&riu=http%3a%2f%2fwww.compassioninaction.info%2fwp-content%2fuploads%2f2015%2f10%2fyoga-logo.png&ehk=TXQKlT6ypQcLS7%2bjSFfd4zFZHO7cLIxqPchTGaovjms%3d&risl=&pid=ImgRaw&r=0"
              alt="YOGA"
            />
            <h1>YOGA LEARNING SCHOOL</h1>
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  title={user.displayName}
                  className="h-8 w-8 rounded-full cursor-pointer mr-10"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="drawer lg:drawer-open   drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[url('https://th.bing.com/th/id/R.fdd608656b482dc0dadde3aaab57c803?rik=c0wX08aqGRH1xQ&pid=ImgRaw&r=0')] flex flex-col items-center justify-center">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary  drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
          <ul className="menu p-4 w-80 h-full shadow-2xl  text-cyan-700">
            <h3 className="text-2xl font-bold">Dashboard </h3>
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHome /> Admin Home
                  </NavLink>
                </li>
               
                <li>
                  <NavLink to="/dashboard/manageItems">
                    <FaWallet /> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaBook /> Manage Bookings (not implemented)
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUsers">
                    <FaUsers /> All Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink to="/dashboard/addClass">
                    <FaRegAddressBook /> Add Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClasses">My Classes</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mySelectedClass">
                    <GrCheckboxSelected /> My Selected Classes
                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet /> Payment History
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
