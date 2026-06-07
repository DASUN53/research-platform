import { useParams } from "react-router-dom";
import { Award, Star, Trophy, Flame, Target, CheckCircle } from "lucide-react";
import { useState } from "react";

export function UserProfile() {
  const { username = "" } = useParams();
  const [activeTab, setActiveTab] = useState<
  "activity" | "solutions" | "badges"
>("activity");

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
    <div>
      User Profile
      <h1>{username}</h1>
    </div>
  );
}
