'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ContactSection from '@/app/components/ContactSection'

export default function ContactPage() {
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

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* タイトルセクション */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-600 font-semibold text-lg mb-4 block">Contact</span>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">お問い合わせ</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AIを活用した地方創生に関するご質問や、ご協業、サービスに関するお問い合わせはこちらからお願いいたします。
                <br />担当者が丁寧にご対応させていただきます。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 問い合わせフォームセクション */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <ContactSection showTitle={false} />
      </motion.div>
    </div>
  )
} 