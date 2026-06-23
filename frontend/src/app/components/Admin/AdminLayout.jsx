import { Outlet, Link, useNavigate } from "react-router-dom";
import { LogOut, Home, Shield } from "lucide-react";
import AdminSidebar from "./AdminSidebar";
import { getCurrentUser, logoutUser } from "../../services/authService";
import API_BASE_URL from "../../services/api";

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
    if (!imagePath) {
      return "/default-profile.png";
    }
    if (imagePath.startsWith("http")) {
      return imagePath;
    }
    return `${API_BASE_URL.replace("/api", "")}${imagePath}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
      {/* CSS keyframe for smooth entrance */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* Admin Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Admin Header */}
        <header className="relative z-50 h-16 border-b border-gray-200 bg-white/80 backdrop-blur-xl flex items-center justify-between px-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/80">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-sky-500 animate-pulse" />
            <h2 className="text-sm font-semibold tracking-wider uppercase text-gray-700 dark:text-gray-300">
              Admin Workspace
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Go to App Link */}
            <Link
              to="/app"
              title="Return to Dashboard"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm bg-sky-50 text-sky-600 hover:bg-sky-100 transition-all dark:bg-sky-950/40 dark:text-sky-400 dark:hover:bg-sky-900/60"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Go to App</span>
            </Link>

            {/* Profile Info */}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-800">
              <img
                src={getProfileImageUrl(currentUser?.profile_picture)}
                alt="Admin Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-sky-100 dark:ring-sky-900/50"
              />
              <div className="text-sm text-left hidden md:block">
                <div className="font-semibold text-gray-800 dark:text-gray-200">
                  {displayName}
                </div>
                <div className="text-gray-400 text-xs uppercase font-medium">
                  {currentUser?.role || "Admin"}
                </div>
              </div>
            </div>

            {/* Quick Logout Button */}
            <button
              onClick={handleLogout}
              title="Logout"
              className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors dark:hover:bg-red-950/30"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Dynamic page container */}
        <main className="relative z-0 flex-1 overflow-y-auto bg-gray-50 p-6 md:p-8 dark:bg-gray-950 transition-colors duration-300">
          <div className="animate-[fadeIn_0.25s_ease-in-out]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
