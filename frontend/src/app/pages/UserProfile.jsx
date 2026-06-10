import { useParams } from "react-router-dom";
import { AppAlert } from "../pages/AppAlert";
import {
  Award,
  Star,
  Trophy,
  Flame,
  Target,
  CheckCircle,
  MapPin,
  LinkIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";
import {
  getUserProfile,
  getUserPosts,
  getUserSolutions,
  getUserFields,
  updateUserProfile,
  updateProfilePicture,
  refreshCurrentUser,
} from "../services/userService";

export function UserProfile() {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [userSolutions, setUserSolutions] = useState([]);
  const [userFields, setUserFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageUploading, setImageUploading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("activity");

  const [editForm, setEditForm] = useState({
    full_name: "",
    bio: "",
    university_or_organization: "",
  });

  const currentUser = getCurrentUser();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userId = username || currentUser?.user_id;

        if (!userId) {
          setError("User not found. Please login again.");
          setLoading(false);
          return;
        }

        const [profileData, postsData, solutionsData, fieldsData] =
          await Promise.all([
            getUserProfile(userId),
            getUserPosts(userId),
            getUserSolutions(userId),
            getUserFields(userId),
          ]);
        const finalPosts = Array.isArray(postsData)
          ? postsData
          : postsData.posts || [];
        const finalSolutions = Array.isArray(solutionsData)
          ? solutionsData
          : solutionsData.solutions || [];

        const finalFields = Array.isArray(fieldsData)
          ? fieldsData
          : fieldsData.fields || [];

        setProfile(profileData);
        setUserPosts(finalPosts);
        setUserSolutions(finalSolutions);
        setUserFields(finalFields);

        setEditForm({
          full_name: profileData.full_name || "",
          bio: profileData.bio || "",
          university_or_organization:
            profileData.university_or_organization || "",
        });
      } catch (err) {
        setError(err.message || "Failed to load user profile");
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, [username, currentUser?.user_id]);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "";

    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    if (imagePath.startsWith("/uploads")) {
      return `http://localhost:5000${imagePath}`;
    }

    return imagePath;
  };

  const defaultbadges = [
    {
      name: "First Solution",
      icon: CheckCircle,
      color: "from-[#10b981] to-[#06b6d4]",
      earned: true,
    },
    {
      name: "Collaborator",
      icon: Star,
      color: "from-[#0ea5e9] to-[#a855f7]",
      earned: true,
    },
    {
      name: "Expert",
      icon: Award,
      color: "from-[#a855f7] to-[#0ea5e9]",
      earned: true,
    },
    {
      name: "Problem Solver",
      icon: Target,
      color: "from-[#06b6d4] to-[#10b981]",
      earned: true,
    },
    {
      name: "Mentor",
      icon: Trophy,
      color: "from-[#f59e0b] to-[#0ea5e9]",
      earned: false,
    },
    {
      name: "Community Hero",
      icon: Flame,
      color: "from-[#0ea5e9] to-[#06b6d4]",
      earned: false,
    },
  ];
  if (loading) {
    return (
      <div className="p-6">
        <div className="max-w-6xl mx-auto rounded-xl border border-gray-200 bg-white p-8 shadow-sm text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
          Loading profile...
        </div>
      </div>
    );
  }
  if (error || !profile) {
    return (
      <div className="p-6">
        <div className="max-w-6xl mx-auto rounded-xl border border-red-200 bg-red-50 p-8 text-red-700 dark:border-red-900/70 dark:bg-red-950/40 dark:text-red-300">
          {error || "User profile not found"}
        </div>
      </div>
    );
  }
  const recentActivity = [
    {
      type: "solution",
      title: "Provided verified solution for 'GPU Memory Optimization'",
      time: "2 hours ago",
      upvotes: 23,
    },
    {
      type: "comment",
      title: "Commented on 'Data Pipeline Architecture'",
      time: "5 hours ago",
      upvotes: 8,
    },
    {
      type: "problem",
      title: "Posted 'Quantum Computing Algorithm Challenge'",
      time: "1 day ago",
      upvotes: 15,
    },
  ];
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
          <div className="h-32 bg-blue-900" />
          <div className="px-8 pb-8">
            <div className="flex items-end gap-6 -mt-16 mb-6">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-32 h-32 rounded-2xl border-4 border-white shadow-xl"
              />
              <div className="flex-1 mt-16">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl mb-1 text-gray-900">
                      {profile.name}
                    </h1>
                    <p className="text-gray-600">@{profile.username}</p>
                  </div>
                  <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
            <p className="text-lg mb-4 text-gray-700">{profile.bio}</p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
              <span className="flex items-center gap-2"></span>
              <span className="flex items-center gap-2"></span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                <div className="text-2xl mb-1 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] bg-clip-text text-transparent">
                  {profile.reputation}
                </div>
                <div className="text-sm text-gray-600">Reputation</div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                <div className="text-2xl mb-1 bg-gradient-to-r from-[#06b6d4] to-[#a855f7] bg-clip-text text-transparent">
                  {profile.stats.solutions}
                </div>
                <div className="text-sm text-gray-600">Solutions</div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                <div className="text-2xl mb-1 bg-gradient-to-r from-[#a855f7] to-[#0ea5e9] bg-clip-text text-transparent">
                  {profile.stats.problems}
                </div>
                <div className="text-sm text-gray-600">Problems</div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                <div className="text-2xl mb-1 bg-gradient-to-r from-[#10b981] to-[#06b6d4] bg-clip-text text-transparent">
                  {profile.streak}
                </div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                <div className="text-2xl mb-1 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
                  Level {profile.level}
                </div>
                <div className="text-sm text-gray-600">Researcher</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("activity")}
              className={`flex-1 px-6 py-4 transition-all ${
                activeTab === "activity"
                  ? "bg-blue-900 border-b-2 border-[#0ea5e9] text-[white]"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Recent Activity
            </button>
            <button
              onClick={() => setActiveTab("solutions")}
              className={`flex-1 px-6 py-4 transition-all ${
                activeTab === "solutions"
                  ? "bg-blue-900 border-b-2 border-[#0ea5e9] text-[white]"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Top Solutions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
