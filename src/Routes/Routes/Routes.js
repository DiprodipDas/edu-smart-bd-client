import { FaSadCry } from "react-icons/fa";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Cart from "../../Pages/Cart/Cart/Cart";
import Category from "../../Pages/Category/Category/Category";
import Courses from "../../Pages/Courses/Courses/Courses";
import Faq from "../../Pages/Faq/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes=createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('https://edu-smart-bd-server.vercel.app/courses')
        },
        {
            path:'/category/:id',
            element:<Category></Category>,
            loader:({params})=> fetch(`https://edu-smart-bd-server.vercel.app/category/${params.id}`)
        },
        {
            path:'/courses/:id',
            element:<PrivateRoute><Courses></Courses></PrivateRoute>,
            loader:({params})=> fetch(`https://edu-smart-bd-server.vercel.app/courses/${params.id}`)
        },
        {
            path:'/faq',
            element:<Faq></Faq>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/cart',
            element: <Cart></Cart> 
        },
       {
        path:'*',
        element: <div>
            <h1 className="text-center">Alas!!!404!!!Not Found</h1>
            <img style={{height:"100px"}} src="https://cdn.pixabay.com/photo/2020/09/22/14/55/sad-emoji-5593352_1280.png" alt="" />
        </div>
       }
        
        
    
    ]
  }
])