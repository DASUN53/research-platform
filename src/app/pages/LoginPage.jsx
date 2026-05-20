import { Link } from "react-router";
import { Sparkles, Mail, Lock, Chrome } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900 flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl" />
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#a855f7] flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-semibold text-gray-900">
              ResearchHub
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
