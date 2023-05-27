import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Destination from "../Pages/Destination/Destination";
import News from "../Pages/News/News";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/destination',
                element: <Destination></Destination>
            },
            {
                path: '/news',
                element: <News></News>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])