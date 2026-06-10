import { useState } from "react";
import {
  Upload,
  X,
  FileText,
  Image as ImageIcon,
  Code,
  Database,
} from "lucide-react";

export function PostProblem() {
  const [files, setFiles] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const availableTags = [
    "Machine Learning",
    "Data Science",
    "Web Development",
    "Python",
    "JavaScript",
    "Algorithms",
    "Database",
    "Cloud Computing",
    "Security",
    "DevOps",
    "Research",
    "Optimization",
  ];

  const addFile = (fileName) => {
    setFiles([...files, fileName]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-gray-900">Post a Problem</h1>
        <p className="text-gray-600">
          Share your challenge with the research community
        </p>
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
            Tip: Include code snippets, datasets, or research papers for better
            context
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <label className="block mb-4 text-gray-900">Attachments</label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer bg-gray-50">
            <Upload className="w-12 h-12 mx-auto mb-3 text-gray-400" />
            <p className="mb-2 text-gray-900">
              Drag and drop files here, or click to browse
            </p>
            <p className="text-sm text-gray-500">
              Support for PDFs, images, datasets (CSV, JSON), and code files
            </p>
            <button
              onClick={() => addFile(`sample-dataset-${Date.now()}.csv`)}
              className="mt-4 px-6 py-2 rounded-lg bg-gray-100 border border-gray-200 hover:bg-gray-200 transition-colors text-gray-700"
            >
              Upload Files
            </button>
          </div>

          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              {files.map((file, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0ea5e9]/10 to-[#a855f7]/10 flex items-center justify-center border border-blue-200">
                      {file.endsWith(".csv") ? (
                        <Database className="w-5 h-5 text-blue-600" />
                      ) : file.endsWith(".pdf") ? (
                        <FileText className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ImageIcon className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <span className="text-sm text-gray-900">{file}</span>
                  </div>
                  <button
                    onClick={() => removeFile(i)}
                    className="p-1 rounded hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <label className="block mb-4 text-gray-900">Tags</label>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  selectedTags.includes(tag)
                    ? "bg-gradient-to-r from-[#0ea5e9]/10 to-[#a855f7]/10 border border-[#0ea5e9] text-[#0ea5e9] shadow-sm"
                    : "bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <label className="block mb-2 text-gray-900">Difficulty Level</label>
            <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all text-gray-900">
              <option value="">Select difficulty...</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <label className="block mb-2 text-gray-900">
              Collaboration Type
            </label>
            <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all text-gray-900">
              <option value="open">Open Collaboration</option>
              <option value="invite">Invite Only</option>
              <option value="team">Team Project</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button className="px-6 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors">
            Save as Draft
          </button>
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30">
            Publish Problem
          </button>
        </div>
      </div>
    </div>
  );
}
