import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  MessageSquare,
  Lightbulb,
  Layers,
  Archive,
  Bell,
  PanelLeftClose,
  PanelLeftOpen,
  Home,
  LogOut,
} from "lucide-react";
import { logoutUser } from "../../services/authService";

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path) => {
    if (path === "/admin" && location.pathname === "/admin") return true;
    if (path !== "/admin" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const sidebarWidthClass = collapsed ? "w-20" : "w-64";

  const navLinkClass = (path, exact = false) => {
    const active = exact ? location.pathname === path : isActive(path);

    return `group relative flex items-center ${
      collapsed ? "justify-center px-3" : "gap-3 px-4"
    } py-3 rounded-lg border transition-all duration-300 ease-in-out ${
      active
        ? "bg-gradient-to-r from-sky-500/10 to-purple-500/10 border-sky-500/20 text-sky-500 shadow-sm dark:from-sky-500/20 dark:to-purple-500/20 dark:border-sky-500/40"
        : "border-transparent text-gray-700 hover:bg-gray-100 hover:text-sky-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-sky-400"
    }`;
  };

  const sidebarLabelClass = collapsed ? "hidden" : "inline whitespace-nowrap";

  const menuItems = [
    { label: "Dashboard", path: "/admin", icon: LayoutDashboard, exact: true },
    { label: "Manage Users", path: "/admin/users", icon: Users },
    { label: "Manage Posts", path: "/admin/posts", icon: FileText },
    { label: "Manage Comments", path: "/admin/comments", icon: MessageSquare },
    { label: "Manage Solutions", path: "/admin/solutions", icon: Lightbulb },
    { label: "Manage Fields", path: "/admin/fields", icon: Layers },
    { label: "Archive", path: "/admin/archive", icon: Archive },
    { label: "Notifications", path: "/admin/notifications", icon: Bell },
  ];

  return (
    <aside
      className={`${sidebarWidthClass} h-screen sticky top-0 border-r border-gray-200 bg-white flex flex-col shadow-sm transition-all duration-300 ease-in-out flex-shrink-0 dark:border-gray-800 dark:bg-gray-900`}
    >
      {/* Brand area */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <Link to="/admin" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-sky-500 text-white font-bold text-lg shadow-lg shadow-sky-500/20">
            A
          </div>
          {!collapsed && (
            <span className="text-lg font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
              Admin Portal
            </span>
          )}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors dark:hover:bg-gray-800"
        >
          {collapsed ? (
            <PanelLeftOpen className="w-5 h-5" />
          ) : (
            <PanelLeftClose className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation menu */}
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              title={item.label}
              className={navLinkClass(item.path, item.exact)}
            >
              <Icon className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span className={sidebarLabelClass}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer controls */}
      <div className="p-4 border-t border-gray-200 space-y-1.5 flex-shrink-0 bg-white dark:border-gray-800 dark:bg-gray-900">
        <Link
          to="/app"
          title="Return to App"
          className={`group w-full flex items-center ${
            collapsed ? "justify-center px-3" : "gap-3 px-4"
          } py-3 rounded-lg border border-transparent text-gray-600 hover:bg-sky-50 hover:text-sky-500 transition-all dark:text-gray-300 dark:hover:bg-sky-950/40`}
        >
          <Home className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
          <span className={sidebarLabelClass}>Return to App</span>
        </Link>

        <button
          onClick={handleLogout}
          title="Logout"
          className={`group w-full flex items-center ${
            collapsed ? "justify-center px-3" : "gap-3 px-4"
          } py-3 rounded-lg border border-transparent text-red-500 hover:bg-red-50 transition-all dark:hover:bg-red-950/40`}
        >
          <LogOut className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
          <span className={sidebarLabelClass}>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
