import { useState, useEffect } from "react";
import {
  MessageSquare,
  Search,
  Trash2,
  Calendar,
  User,
  FileText,
} from "lucide-react";
import {
  getAdminComments,
  deleteAdminComment,
} from "../../services/adminService";
import "./admin-css/AdminComments.css";

const AdminComments = () => {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleDelete = async (id, author) => {
    if (
      !window.confirm(
        `Are you sure you want to permanently delete this comment by ${author}?`,
      )
    ) {
      return;
    }

    try {
      setError("");
      setSuccess("");
      await deleteAdminComment(id);
      setSuccess("Comment deleted successfully.");
      setComments(comments.filter((c) => c.comment_id !== id));
    } catch (err) {
      setError(err.message || "Failed to delete comment");
    }
  };

  return (
    <div className="admin-comments-container">
      <div className="admin-comments-header">
        <div>
          <h1 className="admin-comments-title">Manage Comments</h1>
          <p className="admin-comments-subtitle">
            Review and moderate community discussions on problem listings.
          </p>
        </div>
        <div className="admin-comments-badge">
          <MessageSquare className="admin-comments-badge-icon" />
          <span className="admin-comments-badge-text">
            {comments.length} Total Comments
          </span>
        </div>
      </div>
    </div>
  );
};
