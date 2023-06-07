
const Navbar = () => {
    return (
        <div className="navbar fixed max-w-screen-xl z-30 bg-opacity-50  text-white  bg-black  bg-base-100">
        <div className="flex-1">
          <img className="w-10 h-10" src="https://th.bing.com/th/id/R.87f8ade857386bf2dd7043e402a3566a?rik=pdRwS%2bh5W%2byz%2fw&riu=http%3a%2f%2fwww.compassioninaction.info%2fwp-content%2fuploads%2f2015%2f10%2fyoga-logo.png&ehk=TXQKlT6ypQcLS7%2bjSFfd4zFZHO7cLIxqPchTGaovjms%3d&risl=&pid=ImgRaw&r=0" alt="YOGA" />
          <h1>YOGA</h1>
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