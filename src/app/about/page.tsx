'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div>
      {/* ヒーローセクション */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-90"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              AIのちからで地方を元気にする
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              私たちは、最先端のテクノロジーを活用して地域の課題を解決し、<br />
              持続可能な地域社会の実現に貢献します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 代表メッセージセクション */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden">
                <Image
                  src="/images/L1410380.jpg"
                  alt="代表取締役CEO 山田 太郎"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-50 rounded-full -z-10"></div>
            </div>
            <div>
              <span className="text-blue-600 font-medium mb-4 block">Message from CEO</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                テクノロジーの力で、<br />
                地域に新たな価値を
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  私たちは、AIと先端テクノロジーを通じて、地域社会が直面する課題に革新的なソリューションを提供することを使命としています。
                </p>
                <p className="mb-6">
                  日本の地方には、豊かな文化や伝統、そして無限の可能性が眠っています。しかし、人口減少や高齢化、産業の衰退など、様々な課題も抱えています。
                </p>
                <p>
                  テクノロジーの力を活用し、地域の皆様と共に、これらの課題を一つひとつ解決していくことで、持続可能で活力ある地域社会の実現を目指してまいります。
                </p>
              </div>
              <div className="mt-8">
                <p className="text-xl font-bold text-gray-900">山田 太郎</p>
                <p className="text-gray-600">代表取締役CEO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ミッションセクション */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ミッション</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              テクノロジーの力で、地域の可能性を最大限に引き出し、<br />
              誰もが活き活きと暮らせる社会を創造します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* バリューセクション */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">バリュー</h2>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">イノベーション</h3>
              <p className="text-gray-600">
                常に最新のテクノロジーを追求し、革新的なソリューションを生み出します。
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">地域共創</h3>
              <p className="text-gray-600">
                地域の皆様と共に考え、共に創り、共に成長していきます。
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">持続可能性</h3>
              <p className="text-gray-600">
                長期的な視点で、持続可能な地域社会の実現に貢献します。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">会社概要</h2>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row border-b border-gray-200 pb-6">
                <div className="w-full md:w-1/3 font-medium text-gray-700">会社名</div>
                <div className="w-full md:w-2/3 text-gray-900">株式会社〇〇〇〇</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-gray-200 pb-6">
                <div className="w-full md:w-1/3 font-medium text-gray-700">設立</div>
                <div className="w-full md:w-2/3 text-gray-900">2020年4月</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-gray-200 pb-6">
                <div className="w-full md:w-1/3 font-medium text-gray-700">代表者</div>
                <div className="w-full md:w-2/3 text-gray-900">代表取締役CEO 山田 太郎</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-gray-200 pb-6">
                <div className="w-full md:w-1/3 font-medium text-gray-700">所在地</div>
                <div className="w-full md:w-2/3 text-gray-900">
                  〒150-0002<br />
                  東京都渋谷区渋谷2-1-1 渋谷スクエアビル 15F
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 font-medium text-gray-700">事業内容</div>
                <div className="w-full md:w-2/3 text-gray-900">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>AIを活用した地方創生ソリューションの開発・提供</li>
                    <li>地域データ分析・コンサルティングサービス</li>
                    <li>地方自治体向けDX支援</li>
                    <li>地域産業のデジタル化支援</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">お問い合わせ</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              AIの力で地方創生に取り組む私たちに、お気軽にご相談ください。
              地域の課題解決に向けて、最適なソリューションを提案いたします。
            </p>
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-medium shadow-lg inline-flex items-center space-x-2"
              >
                <span>お問い合わせ</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 