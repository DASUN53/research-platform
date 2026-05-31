import { useParams } from "react-router";

export function UserProfile() {
  const { username } = useParams();
  const [activeTab, setActiveTab] =
    (useState < "activity") | "solutions" | ("badges" > "activity");
}
