import { children } from "react";
import MainLayout from "../Layout/MainLayout";
import About from "../pages/About/About"
import Home from "../pages/Home/Home"
import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../pages/Products/ProductPage";
import ContactUs from "../pages/Contact/ContactUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
            path: "",
            element: <Home />
        },
        {
            path:"/about",
            element: <About /> 
        },
        {
          path:"/product",
          element: <ProductPage /> 
      },
      {
        path:'/contact',
        element: <ContactUs />

      }
      ]
    },
  ]);

  export default router;  