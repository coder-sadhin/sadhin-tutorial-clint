import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);
    console.log(user)

    return (
        <div className=' bg-blue-400'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/courses">Courses</Link>
                            </li>
                            <li>
                                <Link to="/overview">Overview</Link>
                            </li>
                            <li>
                                <Link to="/blogs">Blogs</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className='btn btn-ghost normal-case font-bold text-xl'>SADHIN TUTORIALS</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li>
                            <Link to="/overview">Overview</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ?
                            <div className='flex items-center'>
                                <h2 className='text-2xl mr-3'>Welcome  <span className='text-blue-700 font-bold'>{user.displayName}</span></h2>
                                <div className="dropdown dropdown-end">
                                    <div className="tooltip tooltip-left" data-tip={
                                        user.displayName ? user.displayName : "Hello Mister X"
                                    }>

                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                {
                                                    user.photoURL ? user.photoURL :
                                                        <img src="https://placeimg.com/80/80/people" />
                                                }
                                            </div>
                                        </label>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link className='justify-between' to="/user/profile">Profile
                                                <span className="badge">New</span></Link>
                                        </li>
                                        <li><span onClick={userSignOut}>Logout</span></li>
                                    </ul>
                                </div>
                            </div>
                            :
                            <div>
                                <div className="dropdown dropdown-end">

                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <FaUserTie className='w-full text-3xl' />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link to='/login' className="mr-3">Login</Link>
                                        </li>
                                        <li>
                                            <Link to='/register' className=" mr-3">Register</Link>
                                        </li>
                                    </ul>
                                </div>


                            </div>
                    }
                </div>
            </div>
        </div >
    );
};

export default Header;