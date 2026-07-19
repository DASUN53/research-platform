import { useState, useEffect } from "react";
import { Users, Search, Trash2, Shield, Calendar, Mail } from "lucide-react";
import { getAdminUsers, deleteAdminUser } from "../../services/adminService";
import { AppAlert } from "../../components/AppAlert";
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
};
