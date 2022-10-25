import { createBrowserRouter } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Register from '../../components/Login/Register';
import Main from '../Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
            }
        ]
    }
])

