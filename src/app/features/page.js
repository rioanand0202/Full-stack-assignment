// app/features/page.js
import FeaturesGrid from "@/components/features/FeaturesGrid";

export const metadata = {
  title: "Features - MyApp",
};

export default function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
        <p className="text-gray-600">
          Everything you need to scale your application securely and
          efficiently.
        </p>
      </div>

      <FeaturesGrid />

      {/* Extra section */}
      <div className="mt-16 bg-gray-50 rounded-lg p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Built for developers</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          MyApp offers REST APIs, WebSocket support, and SDKs for popular
          frameworks. We make it easy for you to integrate authentication,
          authorization, and analytics in minutes.
        </p>
      </div>
    </div>
  );
}
