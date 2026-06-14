'use client'

import { useState } from 'react'
import { ArticleGrid } from '@/components/sections/knowledge-center/ArticleGrid'

const categories = [
  'All',
  'Logistics',
  'Enterprise',
  'Skill Development',
  'Real Estate',
  'Franchise',
]

export function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <>
      <section className="bg-white px-6 pb-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-7 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <ArticleGrid activeCategory={activeCategory} />
    </>
  )
}