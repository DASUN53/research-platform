import { useState, useEffect } from "react";
import {
  Search,
  Trash2,
  RotateCcw,
  Calendar,
  User,
  Layers,
  Archive,
} from "lucide-react";
import {
  getAdminArchive,
  restoreAdminArchivePost,
  deleteAdminPost,
} from "../../services/adminService";
import "./admin-css/AdminArchive.css";

const AdminArchive = () => {
  const [archivedPosts, setArchivedPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRestore = async (id, title) => {
    if (
      !window.confirm(
        `Are you sure you want to restore "${title}" back to active status?`,
      )
    ) {
      return;
    }

    try {
      setError("");
      setSuccess("");
      await restoreAdminArchivePost(id);
      setSuccess(`Post "${title}" has been restored successfully.`);
      setArchivedPosts(archivedPosts.filter((p) => p.post_id !== id));
    } catch (err) {
      setError(err.message || "Failed to restore post");
    }
  };

  const handleDeletePermanently = async (id, title) => {
    if (
      !window.confirm(
        `WARNING: Are you sure you want to PERMANENTLY delete archived post "${title}"? This will delete all comments and solutions. This action cannot be undone.`,
      )
    ) {
      return;
    }

    try {
      setError("");
      setSuccess("");
      await deleteAdminPost(id);
      setSuccess(`Post "${title}" deleted permanently.`);
      setArchivedPosts(archivedPosts.filter((p) => p.post_id !== id));
    } catch (err) {
      setError(err.message || "Failed to delete post permanently");
    }
  };
  return (
    <div className="admin-archive-container">
      <div className="admin-archive-header">
        <div>
          <h1 className="admin-archive-title">Archived Knowledge Base</h1>
          <p className="admin-archive-subtitle">
            View, restore, or permanently delete research problems moved to the
            archive.
          </p>
        </div>
        <div className="admin-archive-badge">
          <Archive className="admin-archive-badge-icon" />
          <span className="admin-archive-badge-text">
            {archivedPosts.length} Archived Posts
          </span>
        </div>
      </div>
    </div>
  );
};
