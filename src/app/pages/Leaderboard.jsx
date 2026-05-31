import { Trophy, TrendingUp, Award, Zap } from "lucide-react";
import { useState } from "react";

export function Leaderboard() {
  const [timeframe, setTimeframe] = useState("week");
  const topUsers = [
    {
      rank: 1,
      name: "Dr. Emily Watson",
      username: "emilywatson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      reputation: 4560,
      solutions: 89,
      badge: "Expert",
      level: 28,
      trend: "+12%",
    }, 
    {
      rank: 2,
      name: "Alex Rivera",
      username: "alexrivera",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      reputation: 3200,
      solutions: 67,
      badge: "Mentor",
      level: 22,
      trend: "+8%",
    },
    {
      rank: 3,
      name: "Sarah Chen",
      username: "sarahchen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      reputation: 2340,
      solutions: 54,
      badge: "Collaborator",
      level: 18,
      trend: "+15%",
    },
    {
      rank: 4,
      name: "Mike Johnson",
      username: "mikejohnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      reputation: 1890,
      solutions: 43,
      badge: "Problem Solver",
      level: 15,
      trend: "+5%",
    },
    {
      rank: 5,
      name: "John Doe",
      username: "johndoe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      reputation: 1240,
      solutions: 47,
      badge: "Collaborator",
      level: 12,
      trend: "+10%",
    },
  ];
  const getBadgeColor = (badge) => {
    const colors = {
      Expert: "from-[#a855f7] to-[#0ea5e9]",
      Mentor: "from-[#f59e0b] to-[#0ea5e9]",
      Collaborator: "from-[#0ea5e9] to-[#a855f7]",
      "Problem Solver": "from-[#06b6d4] to-[#10b981]",
    };
    return colors[badge] || "from-[#0ea5e9] to-[#06b6d4]";
  };
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-gray-900">Leaderboard</h1>
        <p className="text-gray-600">
          Top contributors in the research community
        </p>
      </div>
      
    </div>
  );
}
