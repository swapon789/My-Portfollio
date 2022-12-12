import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import HomePage from "../HomePage/HomePage";
import Allprojects from "../Projects/AllProjects/Allprojects";
import Details1 from "../Projects/ProjectDetails/Details1";
import Details2 from "../Projects/ProjectDetails/Details2";
import Details3 from "../Projects/ProjectDetails/Details3";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/home',
                element: <HomePage></HomePage>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element:<Contact></Contact>
            },
            {
                path:'/allprojects',
                element:<Allprojects></Allprojects>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/details1',
                element:<Details1></Details1>
            },
            {
                path:'/details2',
                element:<Details2></Details2>
            },
            {
                path:'/details3',
                element:<Details3></Details3>
            }

        ]
    }
])

export default router;