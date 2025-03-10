'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'

export default function HeroSection() {
  const textRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const visionRef = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const rafRef = useRef<number | null>(null)
  const ticking = useRef(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // スクロールハンドラを最適化
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      // 次のアニメーションフレームで処理を実行
      rafRef.current = requestAnimationFrame(() => {
        if (!textRef.current || !imageRef.current || !visionRef.current) {
          ticking.current = false;
          return;
        }
        
        const scrollPosition = window.scrollY
        const viewportHeight = window.innerHeight
        
        // ナビゲーションの表示制御（しきい値を高くして処理頻度を減らす）
        if (Math.abs(scrollPosition - lastScrollY) > 50) {
          const shouldHide = scrollPosition > lastScrollY && scrollPosition > 100;
          setHidden(shouldHide);
          setLastScrollY(scrollPosition);
        }

        // スケールと不透明度の計算を効率化
        const scale = 1 + Math.min(0.5, (scrollPosition / viewportHeight) * 0.5);
        const opacity = Math.max(0, 1 - (scrollPosition / viewportHeight));

        // スタイル更新を最小限に
        textRef.current.style.transform = `scale(${scale.toFixed(2)})`;
        textRef.current.style.opacity = opacity.toFixed(2);

        // 画像セクションの表示制御
        const imageOpacity = Math.max(0, Math.min(1, (scrollPosition - viewportHeight * 1.0) / (viewportHeight * 0.2)));
        imageRef.current.style.opacity = imageOpacity.toFixed(2);
        
        // より効率的なtransform
        if (imageOpacity < 0.99) {
          const translateY = Math.round(50 * (1 - imageOpacity));
          imageRef.current.style.transform = `translateY(${translateY}px)`;
        }

        // ビジョンセクションの表示制御
        const visionOpacity = Math.max(0, Math.min(1, (scrollPosition - viewportHeight * 0.8) / (viewportHeight * 0.2)));
        visionRef.current.style.opacity = visionOpacity.toFixed(2);
        
        if (visionOpacity < 0.99) {
          const translateY = Math.round(30 * (1 - visionOpacity));
          visionRef.current.style.transform = `translateY(${translateY}px)`;
        }
        
        ticking.current = false;
      });
    }
    
    ticking.current = true;
  }, [lastScrollY]);

  useEffect(() => {
    // パッシブオプションを使用してスクロールリスナーを最適化
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    }
  }, [handleScroll]);

  // テキスト分割の最適化（事前計算）
  const text1 = "AIのちからで"
  const text2 = "地方を元気にする。"
  const text1Chars = text1.split('');
  const text2Chars = text2.split('');

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
    <div className="relative min-h-[250vh] bg-white will-change-transform">
      {/* ヘッダー */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider text-gray-900">
              Saira
            </Link>
            
            {/* デスクトップナビゲーション */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-[#0066CC]">私たちについて</Link>
              <Link href="/services" className="text-gray-700 hover:text-[#0066CC]">事業・サービス</Link>
              <Link href="/news" className="text-gray-700 hover:text-[#0066CC]">ニュース</Link>
              <Link href="/contact" className="ml-4 px-5 py-2 md:px-6 md:py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm md:text-base">
                お問い合わせ
              </Link>
            </nav>
            
            {/* モバイルメニューボタン */}
            <button 
              className="md:hidden p-2 focus:outline-none" 
              aria-label="メニュー"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
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
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden pt-2 pb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-3 py-2 space-y-1">
                  <Link 
                    href="/about" 
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    私たちについて
                  </Link>
                  <Link 
                    href="/services" 
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    事業・サービス
                  </Link>
                  <Link 
                    href="/news" 
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ニュース
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block px-3 py-2 mt-3 text-center text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    お問い合わせ
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* 固定位置のテキストコンテナ */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 will-change-transform">
        <motion.h1 
          ref={textRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 text-center transition-transform duration-300 px-4"
          style={{ transformOrigin: 'center center' }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="mb-4 will-change-transform">
            {text1Chars.map((char, index) => {
              // テキストのカラーリングをインラインで最適化
              const isBlue = char === "ち" || char === "か" || char === "ら"; // "ちから" の部分
              return (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={`inline-block relative ${isBlue ? 'text-blue-600' : ''}`}
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
          <div className="relative inline-block will-change-transform">
            {text2Chars.map((char, index) => {
              // テキストのカラーリングをインラインで最適化
              const isBlue = char === "元" || char === "気"; // "げんき" の部分を "元気" に変更
              return (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={`inline-block relative ${isBlue ? 'text-blue-600' : ''}`}
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
        </motion.h1>
      </div>

      {/* ビジョンイメージ */}
      <div 
        ref={imageRef}
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden will-change-transform"
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
            loading="eager"
            decoding="async"
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg tracking-wider px-4 text-center">
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
        className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm transition-all duration-700 will-change-transform"
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