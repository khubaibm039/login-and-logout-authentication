import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Order from "../Pages/Order/Order";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = new createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/order",
                element: <Order></Order>,
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
        ],
    },
]);

export default router;
