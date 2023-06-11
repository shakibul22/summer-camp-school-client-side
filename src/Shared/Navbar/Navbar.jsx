import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
  
      <>
        {user ? (
          <div className="flex justify-evenly gap-2">
            <button
              onClick={handleLogOut}
              className="btn btn-warning btn-sm"
            >
              Logout
            </button>
            <img
              src={user.photoURL}
              alt="Profile"
              title={user.displayName}
              className="h-8 w-8 rounded-full cursor-pointer mr-10"
            />
          </div>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </>
    </>
  );

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div className="navbar fixed max-w-screen-xl z-30 bg-opacity-50 text-white bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            Menu
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52 ${
              isMenuOpen ? "dropdown-open" : ""
            }`}
          >
            {navOptions}
          </ul>
        </div>
        <a href="#" className="btn btn-ghost normal-case text-xl">
          <img
            className="w-10 h-10"
            src="https://th.bing.com/th/id/R.87f8ade857386bf2dd7043e402a3566a?rik=pdRwS%2bh5W%2byz%2fw&riu=http%3a%2f%2fwww.compassioninaction.info%2fwp-content%2fuploads%2f2015%2f10%2fyoga-logo.png&ehk=TXQKlT6ypQcLS7%2bjSFfd4zFZHO7cLIxqPchTGaovjms%3d&risl=&pid=ImgRaw&r=0"
            alt="YOGA"
          />
          <h1>YOGA</h1>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;
