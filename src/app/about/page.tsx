'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* ヒーローセクション */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] opacity-10 bg-[length:20px_20px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              AIのちからで<span className="text-blue-600">地方</span>を<br className="md:hidden" />元気にする
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              私たちは、最先端のテクノロジーを活用して地域の課題を解決し、<br className="hidden md:inline" />
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
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-xl relative">
                <img 
                  src="/images/社長顔.jpg" 
                  alt="代表取締役CEO 佐藤 遼河" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-50 rounded-full -z-10"></div>
            </div>
            <div>
              <div className="inline-block bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-medium mb-6">Message from CEO</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
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
              <div className="mt-8 flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-1 bg-blue-600"></div>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">佐藤 遼河</p>
                  <p className="text-gray-600">代表取締役CEO</p>
                </div>
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
            <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-blue-600 font-medium mb-4">Our Mission</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">ミッション</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AIのちからで地方を元気にする
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
            <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-blue-600 font-medium mb-4">Our Values</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">バリュー</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              私たちが大切にしている価値観です。
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* バリュー1: LOCAL FIRST */}
            <motion.div 
              className="bg-white p-8 md:p-10 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-blue-600 font-semibold text-lg mb-2">01</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">LOCAL FIRST</h3>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">地域への深い共感</h4>
              <p className="text-gray-600 flex-grow">
                わたしたちは地域の文化や価値観を尊重し、地元の人々と一緒になって課題に向き合います。当事者の視点で考え、共に行動する姿勢を大切にします。
              </p>
            </motion.div>
            
            {/* バリュー2: CO-CREATION */}
            <motion.div 
              className="bg-white p-8 md:p-10 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-blue-600 font-semibold text-lg mb-2">02</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CO-CREATION</h3>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">共創するマインド</h4>
              <p className="text-gray-600 flex-grow">
                AIやテクノロジーは単なるツールに過ぎません。地域企業や行政、住民と共に課題を共有し、一緒に答えを見つけ出すことこそ、真のDXと地方創生につながります。
              </p>
            </motion.div>
            
            {/* バリュー3: BE BOLD */}
            <motion.div 
              className="bg-white p-8 md:p-10 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-blue-600 font-semibold text-lg mb-2">03</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">BE BOLD</h3>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">大胆に挑戦しよう</h4>
              <p className="text-gray-600 flex-grow">
                新しい技術や未知の分野に臆することなく飛び込み、大胆な挑戦を歓迎します。スピード感を持って積極的にトライし、成功も失敗も次のステップへの糧にします。
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
            <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-blue-600 font-medium mb-4">Company Profile</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">会社概要</h2>
          </motion.div>
          <motion.div 
            className="bg-white p-8 md:p-10 rounded-xl shadow-lg max-w-4xl mx-auto border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row border-b border-gray-200 pb-6">
                <div className="w-full md:w-1/3 font-medium text-gray-700">会社名</div>
                <div className="w-full md:w-2/3 text-gray-900 font-semibold">株式会社Saira</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-gray-200 pb-6">
                <div className="w-full md:w-1/3 font-medium text-gray-700">設立</div>
                <div className="w-full md:w-2/3 text-gray-900">2024年 10月</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-gray-200 pb-6">
                <div className="w-full md:w-1/3 font-medium text-gray-700">代表者</div>
                <div className="w-full md:w-2/3 text-gray-900">代表取締役CEO 佐藤 遼河</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-gray-200 pb-6">
                <div className="w-full md:w-1/3 font-medium text-gray-700">所在地</div>
                <div className="w-full md:w-2/3 text-gray-900">
                  〒252-0201<br />
                  神奈川県相模原市中央区上矢部5-3
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 font-medium text-gray-700">事業内容</div>
                <div className="w-full md:w-2/3 text-gray-900">
                  <ul className="list-disc pl-5 space-y-3">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">お問い合わせ</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              AIの力で地方創生に取り組む私たちに、お気軽にご相談ください。<br className="hidden md:inline" />
              地域の課題解決に向けて、最適なソリューションを提案いたします。
            </p>
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-medium shadow-lg inline-flex items-center space-x-2 transition-all"
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