import { Link } from "react-router-dom";
import {
  Sparkles,
  Users,
  Zap,
  Trophy,
  Search,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-purple-50/20 text-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#a855f7] flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              ResearchHub
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="px-6 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-6xl mb-6 bg-gradient-to-r from-gray-900 via-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
              Collaborative Problem Solving
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Where researchers, engineers, and students unite to tackle complex
              challenges together
            </p>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] text-white hover:opacity-90 transition-opacity shadow-xl shadow-blue-500/30"
            >
              Start Collaborating <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/10 to-[#a855f7]/10 blur-3xl" />
            <div className="relative rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-xl p-8 shadow-xl">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-2 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] bg-clip-text text-transparent">
                    10K+
                  </div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="text-4xl mb-2 bg-gradient-to-r from-[#06b6d4] to-[#a855f7] bg-clip-text text-transparent">
                    5K+
                  </div>
                  <div className="text-gray-600">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2 bg-gradient-to-r from-[#a855f7] to-[#0ea5e9] bg-clip-text text-transparent">
                    15K+
                  </div>
                  <div className="text-gray-600">Collaborations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-center mb-16 text-gray-900">
            Why ResearchHub?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Collaborative",
                desc: "Work together with experts worldwide",
                color: "from-[#0ea5e9] to-[#06b6d4]",
              },
              {
                icon: Zap,
                title: "Real-time",
                desc: "Instant discussions and updates",
                color: "from-[#06b6d4] to-[#a855f7]",
              },
              {
                icon: Trophy,
                title: "Gamified",
                desc: "Earn reputation and achievements",
                color: "from-[#a855f7] to-[#0ea5e9]",
              },
              {
                icon: Search,
                title: "Smart Search",
                desc: "AI-powered recommendations",
                color: "from-[#0ea5e9] to-[#a855f7]",
              },
              {
                icon: BookOpen,
                title: "Knowledge Base",
                desc: "Access thousands of solutions",
                color: "from-[#06b6d4] to-[#0ea5e9]",
              },
              {
                icon: Sparkles,
                title: "Advanced Tools",
                desc: "Rich editor, file uploads, datasets",
                color: "from-[#a855f7] to-[#06b6d4]",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-xl p-6 hover:border-blue-300 hover:shadow-xl transition-all shadow-lg"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-blue-50/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl mb-6 text-gray-900">Ready to Start?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of researchers solving complex problems together
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] text-white hover:opacity-90 transition-opacity shadow-xl shadow-blue-500/30"
          >
            Create Free Account <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-8 px-6 bg-white">
        <div className="container mx-auto text-center text-gray-600">
          <p>
            &copy; 2026 ResearchHub. Building the future of collaborative
            research.
          </p>
        </div>
      </footer>
    </div>
  );
}
