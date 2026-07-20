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
import "./admin-css/AdminPosts.css";

const AdminPosts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <div className="admin-posts-container">
      <div className="admin-posts-header">
        <div>
          <h1 className="admin-posts-title">Manage Posts</h1>
          <p className="admin-posts-subtitle">
            Monitor and moderate active problem and research posts.
          </p>
        </div>
        <div className="admin-posts-badge">
          <FileText className="admin-posts-badge-icon" />
          <span className="admin-posts-badge-text">
            {posts.filter((p) => !p.is_archived).length} Active Posts
          </span>
        </div>
      </div>
    </div>
  );
};
