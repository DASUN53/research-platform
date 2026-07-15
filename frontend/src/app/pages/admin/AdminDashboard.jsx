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
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Users</h3>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Posts</h3>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Comments</h3>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Solutions</h3>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
