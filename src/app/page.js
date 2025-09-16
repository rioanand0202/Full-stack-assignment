// app/page.js
// Landing page with hero and features.

import Container from "@/components/Container";
import Button from "@/components/Button";

export default function Home() {
  return (
    <Container>
      {/* Hero */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Secure & Performant Fullstack App
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Authentication, encrypted APIs, logging, rate-limiting, and a
          mobile-first UI.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/signup">Get Started</Button>
          <Button href="#features" variant="ghost">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features grid */}
      <section
        id="features"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12"
      >
        {[
          { title: "Secure Auth", body: "JWT + refresh tokens with rotation." },
          { title: "Formik + Yup", body: "Robust form validation." },
          { title: "Logging", body: "Winston logs with rotation." },
          { title: "Rate Limit", body: "Protect endpoints with middleware." },
          { title: "Responsive UI", body: "Tailwind + Radix UI." },
          { title: "Performance", body: "SSR/SSG, caching, code-splitting." },
        ].map((f, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.body}</p>
          </div>
        ))}
      </section>
    </Container>
  );
}
