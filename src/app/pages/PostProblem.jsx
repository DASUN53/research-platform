import { useState } from "react";
import { Upload, X, FileText, Image as ImageIcon, Code, Database } from "lucide-react";

export function PostProblem() {
  const [files, setFiles] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = [
    "Machine Learning", "Data Science", "Web Development", "Python",
    "JavaScript", "Algorithms", "Database", "Cloud Computing",
    "Security", "DevOps", "Research", "Optimization"
  ];

  const addFile = (fileName: string) => {
    setFiles([...files, fileName]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-gray-900">Post a Problem</h1>
        <p className="text-gray-600">Share your challenge with the research community</p>
      </div>

      <div className="space-y-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <label className="block mb-2 text-gray-900">Problem Title</label>
          <input
            type="text"
            placeholder="Describe your problem in one clear sentence..."
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all text-gray-900"
          />
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <label className="block mb-2 text-gray-900">Description</label>
          <div className="mb-3 flex gap-2 p-2 rounded-lg bg-gray-50 border border-gray-200">
            <button className="px-3 py-1 rounded hover:bg-gray-200 transition-colors text-gray-700">
              <strong>B</strong>
            </button>
            <button className="px-3 py-1 rounded hover:bg-gray-200 transition-colors text-gray-700">
              <em>I</em>
            </button>
            <button className="px-3 py-1 rounded hover:bg-gray-200 transition-colors text-gray-700">
              <Code className="w-4 h-4" />
            </button>
            <button className="px-3 py-1 rounded hover:bg-gray-200 transition-colors text-gray-700">
              <FileText className="w-4 h-4" />
            </button>
          </div>
          <textarea
            rows={10}
            placeholder="Provide detailed context, what you've tried, error messages, expected vs actual results..."
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all resize-none text-gray-900"
          />
          <p className="mt-2 text-sm text-gray-500">
            Tip: Include code snippets, datasets, or research papers for better context
          </p>
        </div>
