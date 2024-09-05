import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

interface Props {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<Props> = ({ element }) => {
  const decodedToken = Cookies.get("jwtToken");

  return decodedToken ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
