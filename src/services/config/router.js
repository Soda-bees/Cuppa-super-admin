import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  Layout from "../../screens/Layout";
import Dashboard from "../../screens/Dashboard";
import Outlets from "../../screens/Outlets";
import OutletDetails from "../../screens/OutlletDetails";
import Rewards from "../../screens/Rewards";
import Settings from "../../screens/Settings";
import Login from "../../screens/Login";
// import Signup from "../../screens/Signup";
import ForgetPassward from "../../screens/forgetPassword";
import VerificationCode from "../../screens/VerificationCode";
import ResetPassword from "../../screens/ResetPassword";
import ProtectedRoute from "./protectedRouting";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
     
      {
        index: true,
        element: <ProtectedRoute Compunent={Dashboard} />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      // {
      //   path: "/signup",
      //   element: <Signup/>,
      // },
      {
        path: "/forgetpassword",
        element: <ForgetPassward  />,
      },
      {
        path: "/verificationcode",
        element: <VerificationCode/>,
      },
      {
        path: "/resetpassword",
        element: <ResetPassword/>,
      },
      {
        path: "/outlets",
        element: <Outlets/>,
      },
      {
        path:"/outletdetails/:index",
        element: <OutletDetails/>,
      },
      {
        path:"/rewards",
        element: <Rewards/>,
      },
      {
        path:"/settings",
        element: <Settings/>,
      },
     
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;