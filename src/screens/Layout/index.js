import React, { useState, createContext, useContext, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import SideNav from "../../Component/SideNav";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../../store/authTokenSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";

const ModalContext = createContext();

const Layout = () => {
  const authToken = useSelector(selectAuthToken);
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname;

  console.log("running from layout --->", activePath);

  // useEffect(() => {
  //   if (!authToken) {
  //     navigate("/login");
  //   } else {
  //     navigate("/menu");
  //   }
  // }, [authToken, navigate]);

  const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
      throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
  };

  if (authToken) {
    if (activePath === "/login" || activePath === "/signup"  || activePath === "/resetpassword" ) {
      navigate("/");
       return null; 
    }
  }

  // if (!authToken) {
  //   return <AdminLogIn  />;
  // }

  return (
    <>
  <>
      <ModalContext.Provider value={useModal}>
        {authToken &&
        <SideNav />}
        {/* <SideNav /> */}
        <Outlet />
        <ToastContainer />
      </ModalContext.Provider>
    </>
    </>
  );
};

export default Layout;