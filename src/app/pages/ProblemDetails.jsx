import { useParams } from "react-router";
import {
  ThumbsUp, MessageSquare, Share2, Bookmark, CheckCircle,
  Clock, TrendingUp, Award, FileText, Download, Eye
} from "lucide-react";
import { useState } from "react";

export function ProblemDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<"discussion" | "solutions">("discussion");

  const problem = {
    title: "Optimizing Neural Network Training on Limited Hardware",
    author: "Sarah Chen",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    reputation: 2340,
    postedAt: "2 hours ago",
    difficulty: "Advanced",
    tags: ["Machine Learning", "Optimization", "Python"],
    description: `I'm working on training a large transformer model (500M parameters) but only have access to a single GPU with 16GB VRAM. The model requires at least 24GB for standard training.

I've tried:
- Gradient accumulation (helps but training is very slow)
- Mixed precision training (FP16)
- Reducing batch size to 1 (still OOM errors)

Looking for optimization techniques or alternative architectures that could work within these constraints while maintaining model performance. Any experience with gradient checkpointing or model parallelism on limited hardware?`,
    files: [
      { name: "training_config.py", size: "4.2 KB", type: "code" },
      { name: "memory_profile.pdf", size: "890 KB", type: "pdf" }
    ],
    stats: {
      views: 1240,
      upvotes: 34,
      responses: 23,
      solutions: 5
    }
  };

  const discussions = [
    {
      id: 1,
      author: "Mike Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      reputation: 1890,
      content: "Have you considered using DeepSpeed's ZeRO optimization? It can significantly reduce memory footprint while maintaining training efficiency.",
      upvotes: 12,
      timeAgo: "1 hour ago",
      replies: 3
    },
    {
      id: 2,
      author: "Dr. Emily Watson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      reputation: 4560,
      verified: true,
      content: "I'd recommend gradient checkpointing with PyTorch's checkpoint wrapper. We reduced memory usage by 40% on similar models. Here's a code snippet...",
      upvotes: 28,
      timeAgo: "45 minutes ago",
      isVerified: true,
      replies: 1
    }
  ];

  const solutions = [
    {
      id: 1,
      author: "Alex Rivera",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      reputation: 3200,
      verified: true,
      title: "Gradient Checkpointing + LoRA Fine-tuning",
      summary: "Achieved 60% memory reduction using gradient checkpointing combined with LoRA for parameter-efficient training.",
      upvotes: 45,
      timeAgo: "30 minutes ago",
      code: true
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="rounded-xl border border-gray-200 bg-white p-8 mb-6 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div
              className={`inline-block px-3 py-1 rounded-full text-xs mb-3 ${
                problem.difficulty === "Expert"
                  ? "bg-purple-100 text-purple-700"
                  : problem.difficulty === "Advanced"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {problem.difficulty}
            </div>
            <h1 className="text-3xl mb-4 text-gray-900">{problem.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <img src={problem.authorAvatar} alt={problem.author} className="w-6 h-6 rounded-full ring-2 ring-gray-200" />
                <span>{problem.author}</span>
                <span className="text-[#0ea5e9] font-medium">{problem.reputation} rep</span>
              </div>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {problem.postedAt}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {problem.stats.views} views
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
              <ThumbsUp className="w-5 h-5" />
              <span className="text-sm">{problem.stats.upvotes}</span>
            </button>
            <button className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {problem.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>   