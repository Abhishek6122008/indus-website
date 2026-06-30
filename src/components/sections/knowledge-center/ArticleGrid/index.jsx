const articles = [
  {
    title: 'How Reliable Logistics Builds Stronger Businesses',
    category: 'Logistics',
    description:
      'Structured logistics systems improve delivery speed, cost control, and customer satisfaction.',
    readTime: '5 min read',
  },
  {
    title: 'Digital Enterprise Solutions for Growing Companies',
    category: 'Enterprise',
    description:
      'Technology-led enterprise support helps businesses streamline operations and scale efficiently.',
    readTime: '4 min read',
  },
  {
    title: 'Why Skill Development Matters for Modern Workforces',
    category: 'Skill Development',
    description:
      'Training programs improve employability, productivity, and long-term business performance.',
    readTime: '6 min read',
  },
  {
    title: 'Real Estate Infrastructure and Business Growth',
    category: 'Real Estate',
    description:
      'Planned infrastructure supports commercial expansion and long-term value creation.',
    readTime: '5 min read',
  },
  {
    title: 'Integrated Business Support Across Verticals',
    category: 'Enterprise',
    description:
      'The Indus Group supports clients across verticals with reliability, innovation, and integrity.',
    readTime: '5 min read',
  },
]

export function ArticleGrid({ activeCategory }) {
  const filteredArticles =
    activeCategory === 'All'
      ? articles
      : articles.filter((article) => article.category === activeCategory)

  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-slate-900">Latest Insights</h2>
        <p className="mt-2 text-slate-600">
          Showing {filteredArticles.length} article
          {filteredArticles.length !== 1 ? 's' : ''}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <article
              key={article.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {article.category}
              </span>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {article.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {article.description}
              </p>

              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="text-slate-500">{article.readTime}</span>
                <button className="font-semibold text-blue-600 hover:text-blue-800">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}