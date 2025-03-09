'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const textRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const visionRef = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current || !imageRef.current || !visionRef.current) return
      
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      const scale = 1 + (scrollPosition / viewportHeight) * 0.5
      const opacity = 1 - (scrollPosition / viewportHeight)

      // ナビゲーションの表示制御
      if (scrollPosition > lastScrollY && scrollPosition > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(scrollPosition)

      textRef.current.style.transform = `scale(${scale})`
      textRef.current.style.opacity = Math.max(opacity, 0).toString()

      // 画像セクションの表示制御
      const imageOpacity = Math.max(0, Math.min(1, (scrollPosition - viewportHeight * 1.0) / (viewportHeight * 0.2)))
      imageRef.current.style.opacity = imageOpacity.toString()
      imageRef.current.style.transform = `translateY(${50 * (1 - imageOpacity)}px)`

      // ビジョンセクションの表示制御
      const visionOpacity = Math.max(0, Math.min(1, (scrollPosition - viewportHeight * 0.8) / (viewportHeight * 0.2)))
      visionRef.current.style.opacity = visionOpacity.toString()
      visionRef.current.style.transform = `translateY(${30 * (1 - visionOpacity)}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const text1 = "AIのちからで"
  const text2 = "地方を元気にする。"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  }

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      }
    }
  }

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          type: "spring",
          duration: 1.5,
          bounce: 0,
          delay: 1.5
        },
        opacity: { 
          duration: 0.01,
          delay: 1.5
        }
      }
    }
  }

  const glowVariants = {
    hidden: {
      opacity: 0,
      scale: 1
    },
    visible: {
      opacity: [0.5, 0.3, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  }

  return (
    <div className="relative min-h-[250vh] bg-white">
      {/* ヘッダー */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-bold tracking-wider text-gray-900">
              Saira
            </Link>
            <nav className="flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-[#0066CC]">私たちについて</Link>
              <Link href="/services" className="text-gray-700 hover:text-[#0066CC]">事業・サービス</Link>
              <Link href="/news" className="text-gray-700 hover:text-[#0066CC]">ニュース</Link>
              <Link href="/contact" className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 固定位置のテキストコンテナ */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.h1 
          ref={textRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 text-center transition-transform duration-100"
          style={{ transformOrigin: 'center center' }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="mb-4">
            {"AIの".split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block relative"
              >
                {char}
              </motion.span>
            ))}
            {"ちから".split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block relative text-blue-600"
              >
                {char}
              </motion.span>
            ))}
            {"で".split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block relative"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="relative inline-block">
            {"地方を".split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block relative"
              >
                {char}
              </motion.span>
            ))}
            {"元気".split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block relative text-blue-600"
              >
                {char}
              </motion.span>
            ))}
            {"にする。".split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block relative"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.h1>
      </div>

      {/* ビジョンイメージ */}
      <div 
        ref={imageRef}
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: 0, transform: 'translateY(50px)' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-screen"
        >
          <img
            src="/images/白川郷 コスモス 無料写真.jpg"
            alt="白川郷のコスモス"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
          
          {/* テキストオーバーレイ */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg tracking-wider">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">AI</span>
                <span className="mx-4 text-white">×</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">地方創生</span>
              </h2>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ビジョン */}
      <div 
        ref={visionRef}
        className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm transition-all duration-700"
        style={{ opacity: 0, transform: 'translateY(50px)' }}
      >
        <div className="max-w-5xl w-full mx-auto">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-blue-600 text-xl font-medium mb-12"
            >
              Vision
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-bold text-gray-900 leading-normal tracking-wider mb-16"
            >
              テクノロジーの力で地方の可能性を最大化し、<br />
              持続可能な地域社会を創造する。
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center px-12 py-4 border border-blue-600 text-lg font-medium rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors group"
              >
                私たちについて
                <svg className="ml-2 w-5 h-5 stroke-blue-600 group-hover:stroke-white" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 