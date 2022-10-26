import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Course from './Course';


const Courses = () => {
    const courses = useLoaderData();

    return (
        <div>
            <div className='grid grid-cols-4'>
                <div className='col-span-1 bg-base-200 h-full'>
                    <h2 className='font-bold text-center text-3xl my-5'>Name of Courses</h2>
                    <div className=' m-5 '>
                        {
                            courses.map(crc => <Link to={`/courses/${crc.id}`}> <div className="grid my-3 w-full h-10 rounded bg-primary text-primary-content place-content-center">{crc.course_title}</div></Link>)
                        }
                    </div>
                </div>
                <div className='col-span-3'>
                    <h2 className='font-bold text-center text-5xl mb-5'>All Our Courses</h2>
                    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 w-full md:w-11/12 lg:w-11/12 mx-auto'>
                        {
                            courses.map(course => <Course key={course.id} course={course}></Course>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;