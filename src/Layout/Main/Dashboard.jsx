import { FaHome, FaRegAddressBook, FaShoppingBag, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
        <>
            <div className="drawer lg:drawer-open  drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-slate-700 text-white">
                        <h3 className="text-2xl font-bold">Dashboard</h3>
                        {/* Sidebar content here */}
                        <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                        <li><a><FaRegAddressBook /> Add Class</a></li>
                        <li>
                            <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Classes
                                <span className="badge  badge-secondary">+</span>
                            </NavLink>

                        </li>
                        <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                        <li><Link to='booking'> My Bookings</Link></li>
                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                     
                        <li><NavLink to="/order/salad"><FaShoppingBag /> Order Food</NavLink></li>
                        <li><Link to='/contact'>Contact</Link> </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;