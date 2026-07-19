import { useState, useEffect } from "react";
import { Users, Search, Trash2, Shield, Calendar, Mail } from "lucide-react";
import { getAdminUsers, deleteAdminUser } from "../../services/adminService";
import "./admin-css/AdminUsers.css";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getAdminUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || "Failed to load users list");
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (id, name, role) => {
    if (role === "admin") {
      setError("Cannot delete an administrator account");
      return;
    }

    if (
      !window.confirm(
        `Are you sure you want to delete user ${name}? This action is permanent.`,
      )
    ) {
      return;
    }

    try {
      setError("");
      setSuccess("");
      await deleteAdminUser(id);
      setSuccess(`User "${name}" has been deleted successfully.`);
      setUsers(users.filter((u) => u.user_id !== id));
    } catch (err) {
      setError(err.message || "Failed to delete user");
    }
  };
  const filteredUsers = users.filter((user) => {
    const query = search.toLowerCase();
    const matchesSearch =
      user.name?.toLowerCase().includes(query) ||
      user.email?.toLowerCase().includes(query) ||
      user.user_id?.toString().includes(query);

    const matchesRole = roleFilter === "all" || user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="admin-users-container">
      <div className="admin-users-header">
        <div>
          <h1 className="admin-users-title">Manage Users</h1>
          <p className="admin-users-subtitle">
            View, search, and delete registered member accounts.
          </p>
        </div>
        <div className="admin-users-badge">
          <Users className="admin-users-badge-icon" />
          <span className="admin-users-badge-text">
            {users.length} Total Users
          </span>
        </div>
      </div>
      <div className="admin-users-filter-section">
        <div className="admin-users-search-wrapper">
          <Search className="admin-users-search-icon" />
          <input
            type="text"
            placeholder="Search by name, email, or user ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="admin-users-search-input"
          />
        </div>

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="admin-users-select"
        >
          <option value="all">All Roles</option>
          <option value="admin">Administrator</option>
          <option value="user">Standard User</option>
        </select>
      </div>
    </div>
  );
};
