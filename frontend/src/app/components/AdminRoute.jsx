import { Navigate } from "react-router-dom";
import { getToken, getCurrentUser } from "../services/authService";
import { Children } from "react";

const AdminRoute = ({ Children }) => {
  const token = getToken();
  const currentuser = getCurrentUser();

  if (!token || !currentuser) {
    return <Navigate to="/login" replace />;
  }

  if (currentUser.role !== "admin") {
    return <Navigate to="/app" replace />;
  }
  return Children;
};

export default AdminRoute;
