import { createBrowserRouter } from "react-router-dom";
import Roots from "../Components/Roots";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/HomePage/Home";
import AddProduct from "../Components/Pages/AddProduct/AddProduct";
import MyCart from "../Components/Pages/MyCart/MyCart";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import SingleBrand from "../Components/HomePage/SingleBrand";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import UpdateProduct from "../Components/Pages/UpdateProduct/UpdateProduct";



const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/:brand', element: <SingleBrand></SingleBrand>, loader: ({ params }) => fetch(`https://brand-shop-server-rho-lake.vercel.app/products/${params.brand}`) },
            { path: '/addProduct', element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute> },
            { path: '/:brand/:id', element: <PrivateRoute><ProductDetails></ProductDetails> </PrivateRoute>, loader: ({ params }) => fetch(`https://brand-shop-server-rho-lake.vercel.app/products/${params.brand}/${params.id}`) },
            { path: '/:brand/update/:id', element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>, loader: ({ params }) => fetch(`https://brand-shop-server-rho-lake.vercel.app/products/${params.brand}/${params.id}`) },
            { path: '/myCart', element: <PrivateRoute><MyCart></MyCart></PrivateRoute>, loader: () => fetch('https://brand-shop-server-rho-lake.vercel.app/storedProducts') },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> }

        ]

    },


])



export default Routes;