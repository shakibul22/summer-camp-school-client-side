
const Navbar = () => {
    return (
        <div className="navbar fixed max-w-screen-xl z-30 bg-opacity-50  text-white  bg-black  bg-base-100">
        <div className="flex-1">
          <img src="https://demos.shopifyteam.com/shilpa/wp-content/uploads/sites/173/2020/09/Shilpa.png" alt="" />
        </div>
        <div className="flex-none">
     
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;