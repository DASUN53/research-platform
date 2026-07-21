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
    </div>
  );
};
