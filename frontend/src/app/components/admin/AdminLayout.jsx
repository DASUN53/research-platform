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
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-layout-content">
        <header className="admin-layout-header">
          <div className="admin-layout-header-left">
            <Shield className="admin-layout-shield" />

            <h2 className="admin-layout-title">Admin Workspace</h2>
          </div>

          <div className="admin-layout-header-right">
            <Link to="/app" className="admin-layout-home-btn">
              <Home size={16} />
              <span className="hide-mobile">Go to App</span>
            </Link>
            
          </div>
        </header>
      </div>
    </div>
  );
};

export default AdminLayout;
