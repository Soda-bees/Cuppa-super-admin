import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectAuthToken } from "../../store/authTokenSlice";
import { useSelector } from "react-redux";

function ProtectedRoute(props) {
  const { Compunent } = props;
  const navigate = useNavigate();
  const authToken = useSelector(selectAuthToken);

  const haveUser = async () => {
    if (!authToken) {
      navigate("/login");
    }
  };

  useEffect(() => {
    haveUser();
  }, [authToken]);

  return (
    <>
      <Compunent />
    </>
  );
}

export default ProtectedRoute;