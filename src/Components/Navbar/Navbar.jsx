import { Link, NavLink } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)

    const handleLogOut = () => {
        LogOut()
            .then(() => {
                
            })
            .catch()
    }
    const links = <>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-yellow-300 text-xl   mr-4' : ' text-xl   mr-4')}>Home</NavLink>
        <NavLink to='/addProduct' className={({ isActive }) => (isActive ? 'text-yellow-300 text-xl   mr-4' : ' text-xl   mr-4')}>Add Product</NavLink>
        <NavLink to='/myCart' className={({ isActive }) => (isActive ? 'text-yellow-300 text-xl   mr-4' : ' text-xl   mr-4')}>My Cart</NavLink>
        <NavLink to='/login' className={({ isActive }) => (isActive ? 'text-yellow-300 text-xl   mr-4' : ' text-xl   mr-4')}>Login</NavLink>
        
    </>
    return (
        <div className="navbar bg-blue-600 p-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center ">
                    <GrTechnology className="bg-white text-3xl mr-2 "></GrTechnology>
                    <h2 className="text-white normal-case lg:text-3xl text-xl ">  Tech Fusion Emporium</h2>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>
                    <div className="flex lg:flex-row flex-col justify-center items-center">
                        <img className="w-[50px] h-[50px] border rounded-full mr-1" src={user.photoURL} alt="" />
                        <span className="text-white mr-1">{user.email}</span>
                        <Link onClick={handleLogOut} to='/login' className="btn">Logout</Link>
                        
                    </div>
                </>
                    : <Link to='/register' className="btn">Register</Link>}
            </div>
            
        </div>
    );
};

export default Navbar;