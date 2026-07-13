import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { logoutUser } from "../../services/authService";
import "./AdminSidebar.css";
import {
  Archive,
  FileText,
  Layers,
  LayoutDashboard,
  Lightbulb,
  MessageSquare,
  Users,
} from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path) => {
    if (path === "/admin" && location.pathname === "/admin") return true;
    if (path == !"/admin" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const menuItems = [
    { label: "Dashboard", path: "/admin", icon: LayoutDashboard, exact: true },
    { label: "Manage Users", path: "/admin/users", icon: Users },
    { label: "Manage Posts", path: "/admin/posts", icon: FileText },
    { label: "Manage Comments", path: "/admin/comments", icon: MessageSquare },
    { label: "Manage Solutions", path: "/admin/solutions", icon: Lightbulb },
    { label: "Manage Fields", path: "/admin/fields", icon: Layers },
    { label: "Archive", path: "/admin/archive", icon: Archive },
  ];
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

      <nav className="space-y-3">
        <Link to="/admin" className="block hover:text-blue-300">
          Dashboard
        </Link>

        <Link to="/admin/users" className="block hover:text-blue-300">
          Manage Users
        </Link>

        <Link to="/admin/posts" className="block hover:text-blue-300">
          Manage Posts
        </Link>

        <Link to="/admin/comments" className="block hover:text-blue-300">
          Manage Comments
        </Link>

        <Link to="/admin/solutions" className="block hover:text-blue-300">
          Manage Solutions
        </Link>

        <Link to="/admin/fields" className="block hover:text-blue-300">
          Manage Fields
        </Link>

        <Link to="/admin/archive" className="block hover:text-blue-300">
          Archive
        </Link>

        <Link to="/admin/notifications" className="block hover:text-blue-300">
          Notifications
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
