// app/pricing/page.js
import PricingGrid from "@/components/pricing/PricingGrid";

export const metadata = {
  title: "Pricing - MyApp",
};

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
        <p className="text-gray-600">
          Choose the plan that fits your business. No hidden fees, cancel
          anytime.
        </p>
      </div>

      <PricingGrid />

      {/* Extra Section */}
      <div className="mt-16 bg-teal-50 rounded-lg p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a custom plan?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4">
          Contact our sales team for enterprise needs, custom SLAs, or volume
          discounts.
        </p>
        <a
          href="/contact"
          className="inline-block bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700"
        >
          Contact Sales
        </a>
      </div>
    </div>
  );
}
