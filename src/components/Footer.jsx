// components/Footer.jsx
// Global footer with credits and links.

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Rio Anand — Fullstack App
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rioanand0202"
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/thanapal-anand-34aa47248"
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:underline"
          >
            LinkedIn
          </a>
          <a href="mailto:you@example.com" className="text-sm hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
