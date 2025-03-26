'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider text-black">
            Saira
          </Link>
          
          {/* デスクトップメニュー */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link 
              href="/about" 
              className={`text-black hover:text-black relative py-2 group ${
                pathname === '/about' ? 'font-medium' : ''
              }`}
            >
              私たちについて
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/services" 
              className={`text-black hover:text-black relative py-2 group ${
                pathname === '/services' ? 'font-medium' : ''
              }`}
            >
              事業・サービス
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/news" 
              className={`text-black hover:text-black relative py-2 group ${
                pathname === '/news' ? 'font-medium' : ''
              }`}
            >
              ニュース
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/contact" 
              className="ml-4 px-5 py-2 md:px-6 md:py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm md:text-base"
            >
              お問い合わせ
            </Link>
          </nav>
          
          {/* モバイルメニューボタン */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            <svg 
              className="w-6 h-6 text-black" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
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
        
        {/* モバイルメニュー */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-b-lg shadow-lg">
              <Link 
                href="/about" 
                className={`block px-3 py-2 text-base font-medium text-black hover:bg-blue-50 rounded-md ${
                  pathname === '/about' ? 'border-l-4 border-blue-600 pl-2' : ''
                }`}
              >
                私たちについて
              </Link>
              <Link 
                href="/services" 
                className={`block px-3 py-2 text-base font-medium text-black hover:bg-blue-50 rounded-md ${
                  pathname === '/services' ? 'border-l-4 border-blue-600 pl-2' : ''
                }`}
              >
                事業・サービス
              </Link>
              <Link 
                href="/news" 
                className={`block px-3 py-2 text-base font-medium text-black hover:bg-blue-50 rounded-md ${
                  pathname === '/news' ? 'border-l-4 border-blue-600 pl-2' : ''
                }`}
              >
                ニュース
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 mt-3 text-center text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-md"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 