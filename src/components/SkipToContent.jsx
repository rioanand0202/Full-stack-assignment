// components/SkipToContent.jsx
// Accessibility skip link.

export default function SkipToContent() {
  return (
    <a
      href="#__next"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white p-2 rounded-md shadow z-50"
    >
      Skip to content
    </a>
  );
}
