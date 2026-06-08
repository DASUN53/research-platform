import { useParams } from "react-router-dom";
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
import { useState } from "react";

export function UserProfile() {
  const [activeTab, setActiveTab] = useState("activity");
  const profile = {
    name: "John Doe",
    username: "johndoe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    bio: "Machine Learning Engineer | PhD Candidate | Open Source Enthusiast",
    location: "San Francisco, CA",
    website: "johndoe.dev",
    email: "john@example.com",
    joinedDate: "January 2024",
    reputation: 1240,
    level: 12,
    stats: {
      problems: 23,
      solutions: 47,
      discussions: 156,
      upvotes: 342,
    },
    streak: 12,
  };

  const badges = [
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
          <div className="h-32 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7]" />
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

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
