'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const solutions = [
  {
    id: 1,
    title: 'AI・システム開発',
    description: '最新のAI技術を活用し、地域特有の課題に対する革新的なソリューションを提供。効率的なシステム開発で、地域のデジタル化を推進します。',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    link: '/solutions/ai'
  },
  {
    id: 2,
    title: '地域DX支援',
    description: '地域の企業や自治体のデジタルトランスフォーメーションを包括的に支援。持続可能な地域社会の実現に向けて、最適なソリューションを提供します。',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    link: '/solutions/dx'
  },
  {
    id: 3,
    title: 'データ分析・活用',
    description: '地域データの収集・分析から、実用的なインサイトの導出まで。データドリブンな地域活性化を支援します。',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    link: '/solutions/data'
  }
]

export default function SolutionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const titleVariants = {
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
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          variants={titleVariants}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-blue-600 font-semibold text-base sm:text-lg mb-3 sm:mb-4 block">Solutions</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">ソリューション</h2>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">地域課題を解決するAIソリューション</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={solution.link} className="block group">
                <motion.div 
                  className="bg-gray-50 p-6 sm:p-8 rounded-lg transition-all duration-300"
                  whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <motion.div 
                    className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-sm mb-5 sm:mb-6 text-blue-600"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {solution.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    {solution.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-5 sm:mb-6 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  <motion.div 
                    className="flex items-center text-gray-900 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300"
                    whileHover={{ x: 10 }}
                  >
                    詳しく見る
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 