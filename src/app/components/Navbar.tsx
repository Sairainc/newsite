'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
      hidden ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold tracking-wider text-gray-900">
            Saira
          </Link>
          <nav className="flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-[#0066CC]">
              私たちについて
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#0066CC]">
              事業・サービス
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-[#0066CC]">
              ニュース
            </Link>
            <Link href="/contact" className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              お問い合わせ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 