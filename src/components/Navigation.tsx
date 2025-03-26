'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/" className="text-xl font-bold">
            Company Logo
          </Link>

          {/* メインナビゲーション */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="hover:text-blue-400">
              私たちについて
            </Link>
            <Link href="/services" className="hover:text-blue-400">
              事業・サービス
            </Link>
            <Link href="/news" className="hover:text-blue-400">
              ニュース
            </Link>
            <Link href="/careers" className="hover:text-blue-400">
              採用情報
            </Link>
          </div>

          {/* 右側のボタン */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
            >
              お問い合わせ
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button 
              className="text-white p-2" 
              onClick={toggleMenu}
              aria-label="メニュー"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 rounded-b-lg shadow-lg">
              <Link 
                href="/about" 
                className="block px-3 py-2 text-base font-medium hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                私たちについて
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-base font-medium hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                事業・サービス
              </Link>
              <Link 
                href="/news" 
                className="block px-3 py-2 text-base font-medium hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                ニュース
              </Link>
              <Link 
                href="/careers" 
                className="block px-3 py-2 text-base font-medium hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                採用情報
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 mt-4 bg-gray-800 text-center rounded-md font-medium hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 