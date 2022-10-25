import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <div className="text-center mt-5">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="hero bg-base-200">
                <div className="hero-content w-6/12 flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text-alt link link-hover">Forgot password?</span>
                                    <span className="label-text-alt">New On Website? <Link className='link link-hover' to='/register'>Register</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center text-success font-bold mt-3'>Went to Direct Login</p>
                            <div className="form-control mt-2">
                                <button className="btn btn-success hover:btn-primary hover:text-white"><FaGoogle className='mr-3' /> Login With Google</button>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-success hover:btn-primary hover:text-white"><FaGithub className='mr-3' /> Login With Github</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Login;