import { useParams } from "react-router";
import { useState } from "react";

export function UserProfile() {
  const { username } = useParams();
  const [activeTab, setActiveTab] =
    (useState < "activity") | "solutions" | ("badges" > "activity");

  const profile = {
    name: "John Doe",
    username: "johndoe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    bio: "Machine Learning Engineer | PhD Candidate | Open Source Enthusiast",
    location: "San Francisco, CA",
    website: "johndoe.dev",
    email: "john@example.com",
    joinedDate: "January 2024",
    reputation: 1240,
    level: 12,
    stats: {
      problems: 23,
      solutions: 47,
      discussions: 156,
      upvotes: 342,
    },
    streak: 12,
  };

  
}
