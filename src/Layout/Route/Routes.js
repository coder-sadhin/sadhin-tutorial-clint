import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../../components/Blogs/Blogs';
import CourseDetails from '../../components/Courses/CourseDetails';
import Courses from '../../components/Courses/Courses';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Register from '../../components/Login/Register';
import OverView from '../../components/OverView/OverView';
import PrivetRoute from '../../components/PrivetRoute/PrivetRoute';
import Main from '../Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/blogs',
                loader: () => fetch('https://project-learning-courses-coder-sadhin.vercel.app/blogs'),
                element: <Blogs></Blogs>
            },
            {
                path: '/overview',
                element: <OverView></OverView>
            },
            {
                path: '/courses/details',
                element: <PrivetRoute><CourseDetails></CourseDetails></PrivetRoute>
            }
        ]
    }
])

