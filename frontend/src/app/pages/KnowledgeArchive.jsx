import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  CheckCircle,
  Clock,
  TrendingUp,
  Star,
  FileText,
  Download,
  User,
  Lightbulb,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getArchiveItems } from "../services/archiveService";
import { AppAlert } from "../components/AppAlert";

export function KnowledgeArchive() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [archiveItems, setArchiveItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = [
    { id: "all", name: "All Categories" },
    ...Array.from(
      new Set(
        archiveItems
          .map((item) => item.field_name)
          .filter((fieldName) => Boolean(fieldName))
      )
    ).map((fieldName) => ({
      id: fieldName,
      name: fieldName,
    })),
  ];
