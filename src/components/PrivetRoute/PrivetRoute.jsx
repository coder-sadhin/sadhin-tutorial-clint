import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log('akhane user paichi', user)
    const location = useLocation();

    if (loading) {
        return (
            <div className='flex justify-center my-10'>
                <div className='w-4/6'>
                    <h2 className='font-bold text-3xl text-center'>Loading.......</h2>
                    <progress className="progress w-full"></progress>
                </div>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/login" state={{ form: location }} replace></Navigate>
    }

    return children;


};

export default PrivetRoute;