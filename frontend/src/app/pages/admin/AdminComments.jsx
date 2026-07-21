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
import { AppAlert } from "../../components/AppAlert";
import "./admin-css/AdminComments.css";

const AdminComments = () => {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  
};
