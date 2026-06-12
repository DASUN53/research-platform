import { Link } from "react-router-dom";
import { AppAlert } from "../components/AppAlert";
import {
  Users,
  Zap,
  Trophy,
  Search,
  BookOpen,
  ArrowRight,
  FileText,
} from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#eef6ff] via-[#f8fbff] to-[#f3efff] text-slate-900">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-[size:80px_80px] opacity-45" />

        <div className="absolute -top-40 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-blue-200/70 blur-3xl" />

        <div className="absolute top-52 -right-40 h-[460px] w-[460px] rounded-full bg-violet-200/70 blur-3xl" />

        <div className="absolute top-[720px] -left-40 h-[460px] w-[460px] rounded-full bg-cyan-200/70 blur-3xl" />

        <div className="absolute top-[1250px] right-10 h-[420px] w-[420px] rounded-full bg-indigo-200/60 blur-3xl" />

        <div className="absolute bottom-20 left-1/3 h-[460px] w-[460px] rounded-full bg-sky-200/60 blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-blue-500/20 bg-white">
              <img
                src="/collabsolve-logo.png"
                alt="CollabSolve Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-xl font-bold tracking-tight text-slate-950">
              CollabSolve
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
