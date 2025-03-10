'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const news = [
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

export default function NewsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const headerVariants = {
    hidden: { 
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          variants={headerVariants}
          className="flex justify-between items-center mb-12"
        >
          <div className="text-center w-full mb-16">
            <span className="text-blue-600 font-semibold text-lg mb-4 block">News</span>
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              ニュース
            </motion.h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4"
            >
              <Link
                href="/news"
                className="text-gray-900 text-sm font-medium hover:text-blue-600 transition-colors flex items-center justify-center"
              >
                一覧を見る
                <motion.svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </motion.svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={containerVariants}
        >
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={`/news/${item.id}`}>
                <motion.div 
                  className="block bg-white p-6 rounded-lg transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    y: -5
                  }}
                >
                  <motion.div 
                    className="flex items-center space-x-4 mb-2"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.span 
                      className="text-gray-500"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.date}
                    </motion.span>
                    <motion.span 
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.category}
                    </motion.span>
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-medium text-gray-900"
                    whileHover={{ scale: 1.01 }}
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
} 