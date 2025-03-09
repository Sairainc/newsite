'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold text-gray-900 mb-4 block">
              Saira
            </Link>
            <p className="text-gray-600 mt-4">
              AIのちからで地方を元気にする。<br />
              テクノロジーの力で地方の可能性を最大化し、<br />
              持続可能な地域社会を創造します。
            </p>
          </div>

          {/* サービス */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              サービス
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/ai-development" className="text-base text-gray-600 hover:text-gray-900">
                  AI・システム開発
                </Link>
              </li>
              <li>
                <Link href="/services/dx-support" className="text-base text-gray-600 hover:text-gray-900">
                  地域DX支援
                </Link>
              </li>
            </ul>
          </div>

          {/* 企業情報 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              企業情報
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-base text-gray-600 hover:text-gray-900">
                  私達について
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-base text-gray-600 hover:text-gray-900">
                  ニュース
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-base text-gray-600 hover:text-gray-900">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-600 hover:text-gray-900">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-600 text-center">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 