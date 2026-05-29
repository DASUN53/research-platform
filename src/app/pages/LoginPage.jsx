import { Link } from "react-router-dom";
import { Sparkles, Mail, Lock } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d9f1ff] via-[#e8f2ff] to-[#f3d9ff] text-gray-900 flex items-center justify-center px-6 py-12 relative overflow-hidden">
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
          <h1 className="text-3xl mb-2 text-gray-900">Welcome Back</h1>
          <p className="text-gray-600">
            Sign in to continue your research journey
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-xl p-8 shadow-xl">
          <form className="space-y-5">
            <div className="form-1">
              <label className="block mb-2 text-sm text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                />
              </div>
              <div className="form-2">
                <label className="block mb-2 text-sm text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full pl-11 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-[#0ea5e9] hover:underline">
                  Forgot password?
                </a>
              </div>
              <Link
                to="/app"
                className="block w-full py-3 rounded-lg bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] text-white hover:opacity-90 transition-opacity text-center shadow-lg shadow-blue-500/30"
              >
                Sign In
              </Link>
            </div>
          </form>
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-500">Or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
              <FaGithub className="w-5 h-5" />
              GitHub
            </button>
            <button className="flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
              <FaGoogle className="w-5 h-5" />
              Google
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#0ea5e9] hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
