import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
    const navOptions=<>
       <li><Link to='/'>Home</Link> </li>
       <li><Link to='/instructors'>Instructors</Link> </li>
       <li><Link to='/classes'>Classes</Link> </li>

       <>
       {
        user ?  (<div><li><button onClick={handleLogOut} className="btn btn-ghost">LogOut</button> </li><li><img src={user.photoURL} alt="" /></li></div>): <li><Link to='/login'>Login</Link> </li>
       }
       </>
      
     
    </>
    return (
        <div className="navbar fixed max-w-screen-xl z-30 bg-opacity-50  text-white  bg-black bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
     
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
     {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"> <img className="w-10 h-10" src="https://th.bing.com/th/id/R.87f8ade857386bf2dd7043e402a3566a?rik=pdRwS%2bh5W%2byz%2fw&riu=http%3a%2f%2fwww.compassioninaction.info%2fwp-content%2fuploads%2f2015%2f10%2fyoga-logo.png&ehk=TXQKlT6ypQcLS7%2bjSFfd4zFZHO7cLIxqPchTGaovjms%3d&risl=&pid=ImgRaw&r=0" alt="YOGA" />
          <h1>YOGA</h1></a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOptions}
    </ul>
  </div>
 
</div>
    );
};

export default Navbar;
