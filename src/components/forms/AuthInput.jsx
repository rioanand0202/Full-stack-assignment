// components/forms/AuthInput.jsx
// Reusable input with label + error message (Formik-compatible)

export default function AuthInput({ label, name, type = "text", formik }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
          formik.touched[name] && formik.errors[name]
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-teal-500"
        }`}
      />
      {formik.touched[name] && formik.errors[name] && (
        <p className="mt-1 text-sm text-red-600">{formik.errors[name]}</p>
      )}
    </div>
  );
}
