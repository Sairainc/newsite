'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const positions = [
  {
    id: 1,
    title: 'エンジニア',
    roles: ['AIエンジニア', 'フロントエンドエンジニア', 'バックエンドエンジニア'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 2,
    title: '企画・マーケティング',
    roles: ['プロダクトマネージャー', 'マーケティングマネージャー'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  },
  {
    id: 3,
    title: '営業',
    roles: ['法人営業', 'カスタマーサクセス'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
]

export default function RecruitSection() {
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
      y: 30,
      scale: 0.9
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
      y: -30
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

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.6
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
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
          variants={titleVariants}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg mb-4 block">Recruit</span>
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            採用情報
          </motion.h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            地域の未来を共に創る仲間を募集しています
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div 
                className="bg-gray-50 p-8 rounded-lg transition-all duration-300"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
              >
                <motion.div 
                  className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-sm mb-6 text-blue-600"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  {position.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  {position.title}
                </motion.h3>
                <motion.ul 
                  className="space-y-2 mb-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {position.roles.map((role, roleIndex) => (
                    <motion.li 
                      key={roleIndex} 
                      className="text-gray-600 text-sm"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      whileHover={{ x: 5 }}
                    >
                      {role}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center text-gray-900 text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  <Link href={`/recruit/${position.id}`}>
                    詳しく見る
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
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="text-center mt-16"
        >
          <Link
            href="/recruit"
            className="inline-flex items-center px-8 py-4 border border-blue-600 text-lg font-medium rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
          >
            採用情報一覧へ
            <motion.svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
} 