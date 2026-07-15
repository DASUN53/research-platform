import { Outlet, Link, useNavigate } from "react-router-dom";
import { LogOut, Home, Shield } from "lucide-react";
import AdminSidebar from "./AdminSidebar";
import { getCurrentUser, logoutUser } from "../../services/authService";
import API_BASE_URL from "../../services/api";
import "./AdminLayout.css";

const AdminLayout = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const displayName =
    currentUser?.full_name ||
    currentUser?.name ||
    currentUser?.username ||
    "Administrator";

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const getProfileImageUrl = (imagePath) => {
    if (!imagePath) return "/default-profile.png";

    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    return `${API_BASE_URL.replace("/api", "")}${imagePath}`;
  };
  
  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default AdminLayout;
