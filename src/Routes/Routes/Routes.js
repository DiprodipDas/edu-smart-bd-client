import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
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
            loader: ()=> fetch('http://localhost:5000/courses')
        },
        {
            path:'/category/:id',
            element:<Category></Category>,
            loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path:'/courses/:id',
            element:<PrivateRoute><Courses></Courses></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
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
        
        
    
    ]
  }
])