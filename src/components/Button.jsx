// components/Button.jsx
// Reusable button with Tailwind variants.

import Link from "next/link";

export default function Button({
  children,
  href,
  className = "",
  variant = "solid",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const variants = {
    solid:
      "bg-teal-600 text-white hover:bg-teal-700 focus-visible:ring-teal-500",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };
  const classes = `${base} ${variants[variant] || variants.solid} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
