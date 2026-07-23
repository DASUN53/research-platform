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
