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

        <div className="prose prose-gray max-w-none mb-6">
          <p className="text-gray-700 whitespace-pre-line">{problem.description}</p>
        </div>
 
        {problem.files.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm text-gray-600 mb-2">Attachments</h3>
            {problem.files.map((file, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0ea5e9]/10 to-[#a855f7]/10 flex items-center justify-center border border-blue-200">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">{file.name}</div>
                    <div className="text-xs text-gray-500">{file.size}</div>
                  </div>
                </div>
                <button className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                  <Download className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

       <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("discussion")}
            className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 transition-all ${
              activeTab === "discussion"
                ? "bg-gradient-to-r from-[#0ea5e9]/10 to-[#a855f7]/10 border-b-2 border-[#0ea5e9] text-[#0ea5e9]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            Discussion ({problem.stats.responses})
          </button>
          <button
            onClick={() => setActiveTab("solutions")}
            className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 transition-all ${
              activeTab === "solutions"
                ? "bg-gradient-to-r from-[#0ea5e9]/10 to-[#a855f7]/10 border-b-2 border-[#0ea5e9] text-[#0ea5e9]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            Solutions ({problem.stats.solutions})
          </button>
        </div>

        <div className="p-6">
          {activeTab === "discussion" && (
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <textarea
                  rows={4}
                  placeholder="Share your thoughts, suggestions, or questions..."
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all resize-none mb-3 text-gray-900"
                />
                <div className="flex justify-end gap-2">
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
                    Post Comment
                  </button>
                </div>
              </div>

              {discussions.map((comment) => (
                <div key={comment.id} className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full ring-2 ring-gray-200" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-900 font-medium">{comment.author}</span>
                        <span className="text-sm text-[#0ea5e9] font-medium">{comment.reputation} rep</span>
                        {comment.isVerified && (
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs">
                            <CheckCircle className="w-3 h-3" />
                            Verified Solution
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{comment.timeAgo}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{comment.content}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <button className="flex items-center gap-1 hover:text-[#0ea5e9] transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      {comment.upvotes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-[#0ea5e9] transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "solutions" && (
            <div className="space-y-6">
              {solutions.map((solution) => (
                <div
                  key={solution.id}
                  className="rounded-lg border-2 border-green-200 bg-gradient-to-br from-green-50 to-transparent p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-medium">Verified Solution</span>
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{solution.title}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <img src={solution.avatar} alt={solution.author} className="w-8 h-8 rounded-full ring-2 ring-gray-200" />
                    <span className="text-gray-900">{solution.author}</span>
                    <span className="text-sm text-[#0ea5e9] font-medium">{solution.reputation} rep</span>
                    <span className="text-sm text-gray-500">{solution.timeAgo}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{solution.summary}</p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-gray-600 hover:text-[#0ea5e9] transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      {solution.upvotes}
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
                      View Full Solution
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
