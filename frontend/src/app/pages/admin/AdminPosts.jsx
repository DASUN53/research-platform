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

  const handleDelete = async (id, title) => {
    if (
      !window.confirm(
        `Are you sure you want to permanently delete post: "${title}"? This cannot be undone.`,
      )
    ) {
      return;
    }

    try {
      setError("");
      setSuccess("");
      await deleteAdminPost(id);
      setSuccess(`Post "${title}" deleted successfully.`);
      setPosts(posts.filter((p) => p.post_id !== id));
    } catch (err) {
      setError(err.message || "Failed to delete post");
    }
  };

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

      <div className="admin-posts-filter-section">
        <div className="admin-posts-search-wrapper">
          <Search className="admin-posts-search-icon" />
          <input
            type="text"
            placeholder="Search by title, author, field..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="admin-posts-search-input"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="admin-posts-select"
        >
          <option value="all">All Statuses</option>
          <option value="open">Open</option>
          <option value="solved">Solved</option>
          <option value="closed">Closed</option>
        </select>
      </div>
    </div>
  );
};
