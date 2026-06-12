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
