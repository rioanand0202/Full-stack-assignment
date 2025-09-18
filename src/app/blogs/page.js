// app/blogs/page.js
"use client";

import { useEffect, useState } from "react";

const PAGE_SIZE_OPTIONS = [5, 10, 20];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadBlogs(1, pageSize, true);
  }, [pageSize]);

  const loadBlogs = async (pageNum, size, reset = false) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonfakery.com/blogs/paginated?page=${pageNum}&limit=${size}`,
      );
      const data = await res.json();

      if (reset) {
        setBlogs(data.data);
      } else {
        setBlogs((prev) => [...prev, ...data.data]);
      }

      setHasMore(data.data.length === size);
      setPage(pageNum);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Latest Blogs</h1>

        {/* Filter */}
        <div>
          <label className="mr-2 font-medium">Show:</label>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="border rounded p-2"
          >
            {PAGE_SIZE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt} per page
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={blog.featured_image}
              alt={blog.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <span className="text-sm text-teal-600 font-semibold uppercase">
                {blog.category}
              </span>
              <h2 className="text-lg font-bold mt-2 line-clamp-2">
                {blog.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-8">
        {hasMore && (
          <button
            onClick={() => loadBlogs(page + 1, pageSize)}
            disabled={loading}
            className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
        {!hasMore && (
          <p className="text-gray-500 text-sm">No more blogs to load</p>
        )}
      </div>
    </div>
  );
}
