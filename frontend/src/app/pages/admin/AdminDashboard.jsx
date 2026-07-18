import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  FileText,
  MessageSquare,
  Lightbulb,
  Layers,
  Archive,
  Bell,
  ArrowRight,
  TrendingUp,
  ShieldAlert,
} from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout";
import {
  getAdminUsers,
  getAdminPosts,
  getAdminComments,
  getAdminSolutions,
  getAdminFields,
  getAdminArchive,
} from "../../services/adminService";
import { AppAlert } from "../../components/AppAlert";
import "./admin-css/AdminDashboard.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    posts: 0,
    comments: 0,
    solutions: 0,
    fields: 0,
    archive: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const [
          users,
          posts,
          comments,
          solutions,
          fields,
          archive,
          notifications,
        ] = await Promise.all([
          getAdminUsers(),
          getAdminPosts(),
          getAdminComments(),
          getAdminSolutions(),
          getAdminFields(),
          getAdminArchive(),
        ]);

        setStats({
          users: users.length,
          posts: posts.length,
          comments: comments.length,
          solutions: solutions.length,
          fields: fields.length,
          archive: archive.length,
        });
      } catch (err) {
        setError(err.message || "Failed to load dashboard statistics");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      label: "Total Users",
      value: stats.users,
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      shadow: "shadow-blue-500/20",
      link: "/admin/users",
    },
    {
      label: "Total Posts",
      value: stats.posts,
      icon: FileText,
      color: "from-sky-500 to-cyan-500",
      shadow: "shadow-sky-500/20",
      link: "/admin/posts",
    },
    {
      label: "Comments",
      value: stats.comments,
      icon: MessageSquare,
      color: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-500/20",
      link: "/admin/comments",
    },
    {
      label: "Solutions",
      value: stats.solutions,
      icon: Lightbulb,
      color: "from-emerald-500 to-teal-500",
      shadow: "shadow-emerald-500/20",
      link: "/admin/solutions",
    },
    {
      label: "Fields",
      value: stats.fields,
      icon: Layers,
      color: "from-amber-500 to-orange-500",
      shadow: "shadow-amber-500/20",
      link: "/admin/fields",
    },
    {
      label: "Archived Posts",
      value: stats.archive,
      icon: Archive,
      color: "from-rose-500 to-red-500",
      shadow: "shadow-rose-500/20",
      link: "/admin/archive",
    },
  ];
  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-header">
        <h1 className="admin-dashboard-title">Admin Dashboard</h1>
        <p className="admin-dashboard-subtitle">
          Overview and analytics of CollabSolve platform operations.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
