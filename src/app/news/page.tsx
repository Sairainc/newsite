'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const newsArticles = [
  {
    id: 1,
    date: '2024.10.17',
    category: 'プレスリリース',
    title: '株式会社Saira設立のお知らせ',
  },
  {
    id: 2,
    date: '2024.03.01',
    category: 'プレスリリース',
    title: '地方自治体向けAIソリューションの提供を開始',
  }
]

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        className="text-4xl font-bold text-gray-900 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ニュース一覧
      </motion.h1>

      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {newsArticles.map((article) => (
          <motion.div
            key={article.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={`/news/${article.id}`}>
              <div className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-gray-500">{article.date}</span>
                  <span className="px-3 py-1 bg-[#0066CC] text-white text-sm rounded-full">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-xl font-medium text-gray-900">
                  {article.title}
                </h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
} 