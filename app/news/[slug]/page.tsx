import Image from "next/image"
import Link from "next/link"
import { getArticleBySlug } from "@/lib/news-data"
import { notFound } from "next/navigation"

interface Props {
  params: {
    slug: string
  }
}

export default function NewsArticle({ params }: Props) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <Link href="/news" className="text-blue-600 hover:text-blue-800 text-sm">
          ← Back to News
        </Link>
      </div>

      <article className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
          <p className="text-gray-600 text-sm">Date: {article.date}</p>
        </div>

        <div>
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg"
            draggable={false}
            style={{ userSelect: 'none' }}
          />
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            <strong>Source:</strong> <a href={article.source} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Rastrapati News</a>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Note:</strong> This news article is featured here because it mentions Prashanti Academy. 
            The original article was published by Rastrapati News and is not written by our school.
          </p>
        </div>
      </article>
    </div>
  )
}
