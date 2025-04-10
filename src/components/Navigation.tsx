'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  // スクロール処理の追加
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300 ${
      hidden ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ロゴ */}
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider text-black">
            Saira
          </Link>

          {/* メインナビゲーション - コンテナを右揃えに */}
          <div className="hidden md:flex items-center justify-end flex-1">
            <div className="flex items-center space-x-8 lg:space-x-10">
              <Link 
                href="/about" 
                className={`text-black hover:text-black relative py-2 group font-bold ${
                  pathname === '/about' ? 'font-bold' : ''
                }`}
              >
                私たちについて
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/services" 
                className={`text-black hover:text-black relative py-2 group font-bold ${
                  pathname === '/services' ? 'font-bold' : ''
                }`}
              >
                事業・サービス
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/news" 
                className={`text-black hover:text-black relative py-2 group font-bold ${
                  pathname === '/news' ? 'font-bold' : ''
                }`}
              >
                ニュース
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-5 py-2 md:px-6 md:py-2 rounded-full hover:bg-blue-700 transition-colors text-sm md:text-base ml-4"
              >
                お問い合わせ
              </Link>
            </div>
          </div>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button 
              className="text-black p-2" 
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-b-lg shadow-lg">
              <Link 
                href="/about" 
                className={`block px-3 py-2 text-base font-bold text-black hover:bg-blue-50 rounded-md ${
                  pathname === '/about' ? 'border-l-4 border-blue-600 pl-2' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                私たちについて
              </Link>
              <Link 
                href="/services" 
                className={`block px-3 py-2 text-base font-bold text-black hover:bg-blue-50 rounded-md ${
                  pathname === '/services' ? 'border-l-4 border-blue-600 pl-2' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                事業・サービス
              </Link>
              <Link 
                href="/news" 
                className={`block px-3 py-2 text-base font-bold text-black hover:bg-blue-50 rounded-md ${
                  pathname === '/news' ? 'border-l-4 border-blue-600 pl-2' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                ニュース
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 mt-4 bg-blue-600 text-center text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
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