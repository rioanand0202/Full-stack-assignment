// components/features/FeatureCard.jsx
export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
      <div className="flex items-center justify-center w-12 h-12 bg-teal-100 text-teal-600 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
