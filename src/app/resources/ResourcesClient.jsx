"use client";

import { useState, useMemo } from "react";
import { FileText, Search, Download } from "lucide-react";

const RESOURCES = [
  {
    title: "Company Profile",
    desc: "Indus Group overview document with structure, mission and services.",
    category: "PDFs",
  },
  {
    title: "Logistics Guide",
    desc: "Complete step-by-step logistics operations workflow guide.",
    category: "Guides",
  },
  {
    title: "Business Brochure",
    desc: "Official client-facing brochure for partnerships.",
    category: "PDFs",
  },
  {
    title: "Service Overview",
    desc: "Full breakdown of all services provided by Indus Group.",
    category: "Documents",
  },
];

const CATEGORIES = ["All", "PDFs", "Guides", "Documents"];

export default function ResourcesClient() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return RESOURCES.filter((r) => {
      const matchCategory =
        filter === "All" || r.category === filter;

      const matchSearch =
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.desc.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [filter, search]);

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative max-w-2xl mx-auto mb-10">
          <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />

          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "bg-white hover:bg-blue-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-20">
              No resources found.
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.title}
                className="group relative bg-white border rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 mb-4 group-hover:bg-blue-100 transition">
                  <FileText className="text-blue-600 w-5 h-5" />
                </div>

                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                    {item.category}
                  </span>

                  <button
                    disabled
                    className="flex items-center gap-1 text-sm text-gray-400 cursor-not-allowed"
                  >
                    <Download className="w-4 h-4" />
                    Coming Soon
                  </button>
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-blue-50 blur-2xl -z-10 transition"></div>
              </div>
            ))
          )}

        </div>
      </div>
    </section>
  );
}