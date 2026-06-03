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

      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <button
            onClick={() => setTimeframe("week")}
            className={`px-4 py-2 rounded-lg transition-all ${
              timeframe === "week"
                ? "bg-gradient-to-r from-[#0ea5e9]/10 to-[#a855f7]/10 border border-[#0ea5e9] text-[#0ea5e9] shadow-sm"
                : "border border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            This week
          </button>
          <button
            onClick={() => setTimeframe("month")}
            className={`px-4 py-2 rounded-lg transition-all ${
              timeframe === "month"
                ? "bg-gradient-to-r from-[#0ea5e9]/10 to-[#a855f7]/10 border border-[#0ea5e9] text-[#0ea5e9] shadow-sm"
                : "border border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            This Month
          </button>
          <button
            onClick={() => setTimeframe("all")}
            className={`px-4 py-2 rounded-lg transition-all ${
              timeframe === "all"
                ? "bg-gradient-to-r from-[#0ea5e9]/10 to-[#a855f7]/10 border border-[#0ea5e9] text-[#0ea5e9] shadow-sm"
                : "border border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Time
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <TrendingUp className="w-4 h-4" />
          Updated live
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {topUsers.slice(0, 3).map((user, i) => (
          <div
            key={user.rank}
            className={`rounded-xl border overflow-hidden shadow-lg ${
              i === 0
                ? "border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50"
                : i === 1
                  ? "border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100"
                  : "border-orange-300 bg-gradient-to-br from-orange-50 to-red-50"
            }`}
          >
            <div
              className={`h-2 ${
                i === 0
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                  : i === 1
                    ? "bg-gradient-to-r from-gray-300 to-gray-400"
                    : "bg-gradient-to-r from-orange-400 to-red-400"
              }`}
            />
            <div className="p-6 text-center">
              <div className="relative inline-block mb-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full ring-4 ring-white"
                />
                <div
                  className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${
                    i === 0
                      ? "bg-gradient-to-br from-yellow-400 to-orange-500"
                      : i === 1
                        ? "bg-gradient-to-br from-gray-300 to-gray-400"
                        : "bg-gradient-to-br from-orange-400 to-red-400"
                  } flex items-center justify-center text-white shadow-lg`}
                >
                  {i === 0 ? <Trophy className="w-4 h-4" /> : i + 1}
                </div>
              </div>
              <h3 className="text-xl mb-1 text-gray-900">{user.name}</h3>
              <p className="text-sm text-gray-600 mb-3">@{user.username}</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${getBadgeColor(user.badge)} text-white shadow-sm`}
                >
                  {user.badge}
                </span>
                <span className="text-sm text-gray-600">
                  Level {user.level}
                </span>
              </div>
              <h3 className="text-xl mb-1 text-gray-900">{user.name}</h3>
              <p className="text-sm text-gray-600 mb-3">@{user.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-sm text-gray-600">
                  Rank
                </th>
                <th className="px-6 py-4 text-left text-sm text-gray-600">
                  User
                </th>
                <th className="px-6 py-4 text-left text-sm text-gray-600">
                  Badge
                </th>
                <th className="px-6 py-4 text-right text-sm text-gray-600">
                  Level
                </th>
                <th className="px-6 py-4 text-right text-sm text-gray-600">
                  Reputation
                </th>
                <th className="px-6 py-4 text-right text-sm text-gray-600">
                  Solutions
                </th>
                <th className="px-6 py-4 text-right text-sm text-gray-600">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody>
              {topUsers.map((user, i) => (
                <tr
                  key={user.rank}
                  key={user.rank}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    user.username === "johndoe" ? "bg-blue-50/50" : ""
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {i < 3 ? (
                        <Trophy
                          className={`w-5 h-5 ${
                            i === 0
                              ? "text-yellow-500"
                              : i === 1
                                ? "text-gray-400"
                                : "text-orange-500"
                          }`}
                        />
                      ) : (
                        <span className="text-gray-600">#{user.rank}</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
