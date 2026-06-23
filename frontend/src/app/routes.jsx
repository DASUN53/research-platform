import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";
import { PostProblem } from "./pages/PostProblem";
import { ProblemDetails } from "./pages/ProblemDetails";
import { UserProfile } from "./pages/UserProfile";
import { Leaderboard } from "./pages/Leaderboard";
import { KnowledgeArchive } from "./pages/KnowledgeArchive";
import { NotFound } from "./pages/NotFound";

import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./components/admin/AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/app",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "post-problem", Component: PostProblem },
      { path: "problem/:id", Component: ProblemDetails },
      { path: "profile/:username", Component: UserProfile },
      { path: "leaderboard", Component: Leaderboard },
      { path: "archive", Component: KnowledgeArchive },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
