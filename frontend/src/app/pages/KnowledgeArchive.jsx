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

  useEffect(() => {
    const fetchArchiveItems = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getArchiveItems();
        const archiveList = Array.isArray(data) ? data : data.archiveItems || [];

        setArchiveItems(archiveList);
      } catch (err) {
        setError(err.message || "Failed to load archive items");
      } finally {
        setLoading(false);
      }
    };

    fetchArchiveItems();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "Recently";

    return new Date(dateString).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getDifficultyStyle = (difficulty) => {
    if (difficulty === "advanced") {
      return "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300";
    }

    if (difficulty === "intermediate") {
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-950/40 dark:text-yellow-300";
    }

    return "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-300";
  };

   const getFileUrl = (filePath) => {
    if (!filePath) return "#";

    if (filePath.startsWith("http")) {
      return filePath;
    }

    return `http://localhost:5000${filePath}`;
  };

  const filteredArchiveItems = archiveItems.filter((item) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      item.title?.toLowerCase().includes(search) ||
      item.summary?.toLowerCase().includes(search) ||
      item.solution_text?.toLowerCase().includes(search) ||
      item.description?.toLowerCase().includes(search) ||
      item.field_name?.toLowerCase().includes(search) ||
      item.post_author?.toLowerCase().includes(search) ||
      item.solution_author?.toLowerCase().includes(search);

      const matchesDifficulty =
      selectedDifficulty === "all" ||
      item.difficulty_level === selectedDifficulty;

    const matchesCategory =
      selectedCategory === "all" || item.field_name === selectedCategory;

    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  return (
    <div className="p-6 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 text-gray-900 dark:text-gray-100">
            Knowledge Archive
          </h1>

          <p className="text-gray-600 dark:text-gray-400">
            Browse solved problems with verified solutions and supporting
            documents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-4 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                <Filter className="w-5 h-5" />
                Filters
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                    Difficulty
                  </label>

                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:focus:ring-blue-900/40"
                  >
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
            </div>