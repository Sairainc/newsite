import Image from 'next/image'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* サービス概要セクション */}
      <section className="pt-32 pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-blue-600 font-semibold text-lg mb-4 block">Our Services</span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">サービス一覧</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              地域の課題解決と発展を支援する多様なサービスを展開しています
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* サービス1: AIコンサルティング & システム開発 */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-64 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
                <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-40 h-40 text-white opacity-90 transform transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">AIコンサルティング & システム開発</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  地域特有の課題に対して、AIを活用した最適なソリューションを提案・開発します。データ分析から実装まで一貫したサポートを提供します。
                </p>
              </div>
            </div>

            {/* サービス2: 地域DX支援 */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-teal-600/5 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-64 bg-gradient-to-r from-green-600 to-teal-600 relative">
                <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-40 h-40 text-white opacity-90 transform transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">地域DX支援</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  地域企業や自治体のデジタルトランスフォーメーションを支援します。業務効率化から新規サービス創出まで、包括的なDXソリューションを提供します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 導入事例セクション */}
      <section className="py-32 bg-gray-50/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-24">
            <span className="text-blue-600 font-semibold text-lg mb-4 block">Case Studies</span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">導入事例</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              私たちのサービスを活用した地域活性化の成功事例をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* 事例1 */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-full w-full bg-gradient-to-br from-blue-100 to-blue-50 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-24 h-24 text-blue-500 opacity-90 transform transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-2">新規事業</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">合コンマッチングのシステム構築</h3>
                  <p className="text-gray-600 leading-relaxed">
                    効率的なマッチングアルゴリズムを活用し、新しい出会いの場を創出するシステムを開発しました。
                  </p>
                </div>
              </div>
            </div>

            {/* 事例2 */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-full w-full bg-gradient-to-br from-green-100 to-green-50 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-24 h-24 text-green-500 opacity-90 transform transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="uppercase tracking-wide text-sm text-green-600 font-semibold mb-2">DX支援</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">群馬県 LoRaWANを活用した温度、湿度の可視化</h3>
                  <p className="text-gray-600 leading-relaxed">
                    IoTセンサーとLoRaWAN技術を組み合わせ、環境データのリアルタイムモニタリングシステムを構築しました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="px-8 py-16 md:p-16 text-center md:text-left md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">サービスについてのご相談・お問い合わせ</h2>
                <p className="text-blue-100 max-w-3xl text-lg leading-relaxed">
                  地域の課題解決に向けたご相談から、具体的なサービス導入のお問い合わせまで、お気軽にご連絡ください。
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0">
                <Link href="#contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-full text-white hover:bg-white hover:text-blue-600 transition-all duration-300">
                  お問い合わせ
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 