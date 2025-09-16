// app/layout.js
// Root layout: wraps all pages with Header, Footer, and accessibility helpers.

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";

export const metadata = {
  title: "MyApp",
  description: "Secure, performant Next.js 15 application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* Accessibility skip link */}
        <SkipToContent />

        {/* Global header */}
        <Header />

        {/* Main page content */}
        <main
          id="__next"
          className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          {children}
        </main>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}
