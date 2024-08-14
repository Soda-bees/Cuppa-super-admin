import React, { useState, createContext, useContext, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import SideNav from "../../Component/SideNav";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../../store/authTokenSlice";
import { ToastContainer } from "react-toastify";
import { Grid } from "react-loader-spinner";

export const ModalContext = createContext();

const Layout = () => {
  const authToken = useSelector(selectAuthToken);
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname;
  const [isLoading, setIsLoading] = useState(false);

  console.log("running from layout --->", activePath);


  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on component unmount or if isLoading changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

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
    if (activePath === "/login" || activePath === "/signup" || activePath === "/resetpassword") {
      navigate("/");
      return null;
    }
  }

  // if (!authToken) {
  //   return <AdminLogIn  />;
  // }

  return (
    <ModalContext.Provider value={{ useModal, setIsLoading }}>
      {authToken && <SideNav />}
      <div className="bg-bgBody min-h-[100vh]">
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
            <Grid color="#60B0AA" height={70} width={70} />
          </div>
        )}
        <Outlet />
        <ToastContainer />
      </div>
    </ModalContext.Provider>
    // <>
    //   <ModalContext.Provider value={useModal}>
    //     {authToken &&
    //       <SideNav />}
    //     <div className="bg-bgBody min-h-[100vh]">
    //       <Outlet />
    //       <ToastContainer />
    //     </div>
    //   </ModalContext.Provider>
    // </>
  );
};

export default Layout;