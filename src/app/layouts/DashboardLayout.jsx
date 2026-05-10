import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Home,
  PlusCircle,
  BookOpen,
  Trophy,
  User,
  Bell,
  Search,
  LogOut,
  Settings,
  Sparkles,
  MessageSquare,
  FileText,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function DashboardLayout() {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const notificationsRef = useRef(null);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => {
    if (path === "/app" && location.pathname === "/app") return true;
    if (path !== "/app" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const notifications = [
    {
      id: 1,
      text: "Sarah commented on your solution",
      time: "5m ago",
      unread: true,
    },
    {
      id: 2,
      text: "Your problem got a new answer",
      time: "1h ago",
      unread: true,
    },
    {
      id: 3,
      text: "You earned the 'Expert' badge!",
      time: "2h ago",
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
      <aside className="w-64 border-r border-gray-200 bg-white flex flex-col shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#a855f7] flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              ResearchHub
            </span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/app"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              isActive("/app") && location.pathname === "/app"
                ? "bg-gradient-to-r from-[#0ea5e9]/10 to-[#a855f7]/10 border border-[#0ea5e9]/30 text-[#0ea5e9] shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/app/post-problem"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              isActive("/app/post-problem")
                ? "bg-gradient-to-r from-[#0ea5e9]/10 to-[#a855f7]/10 border border-[#0ea5e9]/30 text-[#0ea5e9] shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <PlusCircle className="w-5 h-5" />
            <span>Post Problem</span>
          </Link>

          <Link
            to="/app/archive"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              isActive("/app/archive")
                ? "bg-gradient-to-r from-[#0ea5e9]/10 to-[#a855f7]/10 border border-[#0ea5e9]/30 text-[#0ea5e9] shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Knowledge Base</span>
          </Link>

          <Link
            to="/app/leaderboard"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              isActive("/app/leaderboard")
                ? "bg-gradient-to-r from-[#0ea5e9]/10 to-[#a855f7]/10 border border-[#0ea5e9]/30 text-[#0ea5e9] shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Trophy className="w-5 h-5" />
            <span>Leaderboard</span>
          </Link>

          <Link
            to="/app/profile/johndoe"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              isActive("/app/profile")
                ? "bg-gradient-to-r from-[#0ea5e9]/10 to-[#a855f7]/10 border border-[#0ea5e9]/30 text-[#0ea5e9] shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
          <Link
            to="/"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors text-red-500"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-gray-200 bg-white/80 backdrop-blur-xl flex items-center justify-between px-6 shadow-sm">
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search problems, discussions, users..."
                className="w-full pl-11 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all text-gray-900"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Bell className="w-5 h-5 text-gray-700" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#0ea5e9] rounded-full shadow-lg shadow-blue-500/50" />
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 rounded-xl border border-gray-200 bg-white backdrop-blur-xl shadow-xl overflow-hidden z-50">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">
                      Notifications
                    </h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                          notif.unread ? "bg-blue-50/50" : ""
                        }`}
                      >
                        <p className="text-sm mb-1 text-gray-900">
                          {notif.text}
                        </p>
                        <span className="text-xs text-gray-500">
                          {notif.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-gray-200 text-center bg-gray-50">
                    <button className="text-sm text-[#0ea5e9] hover:underline font-medium">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative pl-4 border-l border-gray-200"
              ref={userMenuRef}
            >
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-3 rounded-lg hover:bg-gray-100 transition-colors pr-2 py-1"
              >
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                  alt="User"
                  className="w-8 h-8 rounded-full ring-2 ring-gray-200"
                />
                <div className="text-sm text-left">
                  <div className="font-medium text-gray-900">John Doe</div>
                  <div className="text-gray-500 text-xs">
                    Level 12 Researcher
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${showUserMenu ? "rotate-180" : ""}`}
                />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white backdrop-blur-xl shadow-xl overflow-hidden z-50">
                  <div className="p-4 border-b border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="font-medium text-gray-900">John Doe</div>
                    <div className="text-sm text-gray-600">@johndoe</div>
                    <div className="mt-2 text-xs text-[#0ea5e9] font-medium">
                      1,240 Reputation
                    </div>
                  </div>

                  <div className="py-2">
                    <Link
                      to="/app/profile/johndoe"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-gray-700"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="w-4 h-4" />
                      <span>View Profile</span>
                    </Link>
                    <Link
                      to="/app"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-gray-700"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </Link>
                  </div>

                  <div className="border-t border-gray-200">
                    <Link
                      to="/"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-red-500"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/"
              className="px-4 py-2 rounded-lg bg-red-50 hover:bg-red-100 transition-colors text-red-500 flex items-center gap-2 border border-red-200"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Link>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
