import Link from "next/link"
import Image from "next/image"
import { getAllArticles, NewsArticle } from "@/lib/news-data"

export default function News() {
  const articles = getAllArticles()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">News & Articles</h1>

      <div className="space-y-6">
        {articles.map((article: NewsArticle) => (
          <article key={article.id} className="border border-gray-200 p-6 rounded-lg">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                <Link href={`/news/${article.slug}`} className="text-gray-900 hover:text-blue-600">
                  {article.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm">Date: {article.date}</p>
            </div>

            <div className="mb-4">
              <Image
                src={article.image}
                alt={article.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
                draggable={false}
                style={{ userSelect: 'none' }}
              />
            </div>

            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>{article.excerpt}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
              <Link
                href={`/news/${article.slug}`}
                className="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Read more →
              </Link>
              <p className="text-sm text-gray-600">
                <strong>Source:</strong> <a href={article.source} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Rastrapati News</a>
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> These news articles are featured here because they mention Prashanti Academy. 
          The original articles were published by Rastrapati News and are not written by our school.
        </p>
      </div>
    </div>
  )
}
