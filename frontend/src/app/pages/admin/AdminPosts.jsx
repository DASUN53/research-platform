import { useState, useEffect } from "react";
import {
  Search,
  Trash2,
  Archive,
  Calendar,
  User,
  Layers,
  Tag,
} from "lucide-react";
import {
  getAdminPosts,
  deleteAdminPost,
  archiveAdminPost,
} from "../../services/adminService";
import { AppAlert } from "../../components/AppAlert";
import "./admin-css/AdminPosts.css";

const AdminPosts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
};
