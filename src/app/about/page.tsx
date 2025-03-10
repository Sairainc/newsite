'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* タイトルセクション */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-blue-600 font-semibold text-lg mb-4 block">About Us</span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">私たちについて</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ミッション・ビジョンセクション */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#E1F5FF,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center md:text-left bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-8">ミッション</h2>
              <p className="text-2xl text-gray-700 leading-relaxed">
                AIのちからで地方を元気にする
              </p>
            </motion.div>
            <motion.div 
              className="text-center md:text-left bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-8">ビジョン</h2>
              <p className="text-2xl text-gray-700 leading-relaxed">
                テクノロジーの力で地方の可能性を最大化し、<br />
                持続可能な地域社会を創造する
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* バリューセクション */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F0F9FF,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">バリュー</h2>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                number: "1",
                title: "LOCAL FIRST",
                subtitle: "地域への深い共感",
                description: "わたしたちは地域の文化や価値観を尊重し、地元の人々と一緒になって課題に向き合う。当事者の視点で考え、共に行動する姿勢を大切にする。"
              },
              {
                number: "2",
                title: "CO-CREATION",
                subtitle: "共創するマインド",
                description: "AIやテクノロジーは単なるツールに過ぎない。地域企業や行政、住民と共に課題を共有し、一緒に答えを見つけ出すことこそ、真のDXと地方創生につながる。"
              },
              {
                number: "3",
                title: "BE BOLD",
                subtitle: "大胆に挑戦しよう",
                description: "新しい技術や未知の分野に臆することなく飛び込み、大胆な挑戦を歓迎する。スピード感を持って積極的にトライし、成功も失敗も次のステップへの糧にする。"
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                  <span className="text-2xl font-bold text-white">{value.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <h4 className="text-lg font-medium text-blue-600 mb-4">{value.subtitle}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 代表メッセージセクション */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#E1F5FF,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="relative group"
              variants={fadeInUp}
            >
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/L1410380.jpg"
                  alt="代表取締役CEO 佐藤 遼河"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-50 rounded-full -z-10 transform group-hover:scale-110 transition-transform duration-300" />
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
            >
              <span className="text-blue-600 font-medium mb-4 block">Message from CEO</span>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
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
              <div className="mt-8 flex items-center gap-4">
                <div>
                  <p className="text-xl font-bold text-gray-900">佐藤 遼河</p>
                  <p className="text-gray-600">代表取締役CEO</p>
                </div>
                <div className="flex-grow border-t border-gray-200" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F0F9FF,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">会社概要</h2>
          </motion.div>
          <motion.div 
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-4xl mx-auto hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {[
                { label: "会社名", value: "株式会社Saira" },
                { label: "設立", value: "2024年10月" },
                { label: "代表者", value: "代表取締役CEO 佐藤 遼河" },
                { label: "所在地", value: "〒252-0201\n神奈川県相模原市 中央区上矢部" },
                { 
                  label: "事業内容",
                  value: [
                    "AIを活用した地方創生ソリューションの開発・提供",
                    "地域データ分析・コンサルティングサービス",
                    "地方自治体向けDX支援",
                    "地域産業のデジタル化支援"
                  ]
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="w-full md:w-1/3 font-medium text-gray-700">{item.label}</div>
                  <div className="w-full md:w-2/3 text-gray-900">
                    {Array.isArray(item.value) ? (
                      <ul className="list-disc pl-5 space-y-2">
                        {item.value.map((v, i) => (
                          <li key={i}>{v}</li>
                        ))}
                      </ul>
                    ) : (
                      item.value.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white/10,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
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
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-medium shadow-lg inline-flex items-center gap-2 group"
              >
                <span>お問い合わせ</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
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