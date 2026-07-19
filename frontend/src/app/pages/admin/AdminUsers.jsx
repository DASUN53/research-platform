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
};
