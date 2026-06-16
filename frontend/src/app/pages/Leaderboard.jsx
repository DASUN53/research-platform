import { Trophy, TrendingUp, Award, Zap } from "lucide-react";
import { getLeaderboard } from "../services/reputationService";
import { useState } from "react";
import { AppAlert } from "../AppAlert";

export function Leaderboard() {
  const [timeframe, setTimeframe] = useState("week");
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSwitching, setIsSwitching] = useState(false);
  const [error, setError] = useState("");

  const getBadgeColor = (badge) => {
    const colors = {
      Expert: "from-[#a855f7] to-[#0ea5e9]",
      Mentor: "from-[#f59e0b] to-[#0ea5e9]",
      Collaborator: "from-[#0ea5e9] to-[#a855f7]",
      "Problem Solver": "from-[#06b6d4] to-[#10b981]",
    };
    return colors[badge] || "from-[#0ea5e9] to-[#06b6d4]";
  };

  const mostActive = topUsers[0]?.full_name || "No users yet";
  const topContributor = topUsers[1]?.full_name || "No users yet";
  const risingStar = topUsers[2]?.full_name || "No users yet";
  
  return (
    <div className="p-6 max-w-6xl mx-auto text-gray-900 dark:text-gray-100">
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-gray-900 dark:text-gray-100">
          Leaderboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
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
          {isSwitching ? "Updating..." : "Updated from database"}
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
              <div className="text-2xl bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
                {user.reputation.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">reputation</div>
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
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full ring-2 ring-gray-200"
                      />
                      <div>
                        <div className="text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">
                          @{user.username}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs bg-gradient-to-r ${getBadgeColor(user.badge)} text-white shadow-sm`}
                    >
                      {user.badge}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-[#0ea5e9] font-medium">
                      Level {user.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent font-medium">
                      {user.reputation.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-900">
                    {user.solutions}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="flex items-center justify-end gap-1 text-green-600 font-medium">
                      <TrendingUp className="w-4 h-4" />
                      {user.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-gray-100">Most Active</h3>
              <p className="text-sm text-gray-600  dark:text-gray-400">
                {mostActive}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#a855f7] flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-gray-100">
                Top Contributor
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {topContributor}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#0ea5e9] flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-gray-100">Rising Star</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {risingStar}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
