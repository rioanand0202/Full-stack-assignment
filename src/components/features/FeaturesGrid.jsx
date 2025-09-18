// components/features/FeaturesGrid.jsx
import FeatureCard from "./FeatureCard";
import { Shield, Zap, Users, BarChart } from "lucide-react";

const features = [
  {
    icon: <Shield size={20} />,
    title: "Enterprise-grade Security",
    description:
      "Protect your data with top-notch encryption, secure sessions, and audit logs.",
  },
  {
    icon: <Zap size={20} />,
    title: "Blazing Fast Performance",
    description:
      "Optimized for speed and efficiency to handle thousands of requests per second.",
  },
  {
    icon: <Users size={20} />,
    title: "Team Collaboration",
    description:
      "Invite your team, assign roles, and collaborate in real-time across projects.",
  },
  {
    icon: <BarChart size={20} />,
    title: "Analytics Dashboard",
    description:
      "Get insights into your data with charts, KPIs, and exportable reports.",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((f, i) => (
        <FeatureCard key={i} {...f} />
      ))}
    </div>
  );
}
