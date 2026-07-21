import { useState, useEffect } from "react";
import {
  Lightbulb,
  Search,
  Trash2,
  Calendar,
  User,
  FileText,
} from "lucide-react";
import {
  getAdminSolutions,
  deleteAdminSolution,
} from "../../services/adminService";
import "./admin-css/AdminSolutions.css";

const AdminSolutions = () => {
  const [solutions, setSolutions] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleDelete = async (id, author) => {
    if (
      !window.confirm(
        `Are you sure you want to permanently delete this solution attempt by ${author}? This action is irreversible.`,
      )
    ) {
      return;
    }

    try {
      setError("");
      setSuccess("");
      await deleteAdminSolution(id);
      setSuccess("Solution attempt deleted successfully.");
      setSolutions(solutions.filter((s) => s.solution_id !== id));
    } catch (err) {
      setError(err.message || "Failed to delete solution");
    }
  };

  const filteredSolutions = solutions.filter((sol) => {
    const query = search.toLowerCase();
    return (
      sol.content?.toLowerCase().includes(query) ||
      sol.author_name?.toLowerCase().includes(query) ||
      sol.post_title?.toLowerCase().includes(query) ||
      sol.solution_id?.toString().includes(query)
    );
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
    <div className="admin-solutions-container">
      <div className="admin-solutions-header">
        <div>
          <h1 className="admin-solutions-title">Manage Solutions</h1>
          <p className="admin-solutions-subtitle">
            Review and moderate community solution proposals and experiment
            logs.
          </p>
        </div>
        <div className="admin-solutions-badge">
          <Lightbulb className="admin-solutions-badge-icon" />
          <span className="admin-solutions-badge-text">
            {solutions.length} Total Solutions
          </span>
        </div>
      </div>

      <div className="admin-solutions-filter-section">
        <div className="admin-solutions-search-wrapper">
          <Search className="admin-solutions-search-icon" />
          <input
            type="text"
            placeholder="Search by solution content, author, post title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="admin-solutions-search-input"
          />
        </div>
      </div>
    </div>
  );
};
