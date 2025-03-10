'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

const newsArticles = [
  {
    id: 1,
    date: '2024.10.17',
    category: 'プレスリリース',
    title: '株式会社Saira設立のお知らせ',
    content: `ノーコードWebアプリケーション開発×生成AIのサービスを提供するため、株式会社Saira（サイラ、本社：神奈川県相模原市中央区、代表取締役：佐藤遼河）は、2024年10月17日に設立いたしました。
当社は、ノーコードWebアプリケーション開発とデジタル人材育成を軸に、企業のデジタルトランスフォーメーション（DX）を包括的に支援してまいります。

【設立の背景】
近年、企業のDXへの取り組みが加速する中、技術的なハードルや人材不足が課題となっています。特に、中小企業においては、高額な開発コストや専門人材の確保が困難であり、デジタル化の遅れが競争力低下の要因となっています。

こうした課題に対し、当社は最新のノーコード開発技術と生成AI（ChatGPT、V0等）を組み合わせることで、従来よりも迅速かつ低コストなシステム開発を実現。さらに、デジタル人材の育成支援を通じて、クライアント企業の持続的な成長をサポートいたします。

【ミッション】
"ノーコード開発と人材戦略を融合し、企業のデジタル変革と持続的成長を支援する。"

【社名に込めた想い】
社名の「Saira（サイラ）」には、「再来（サイライ）」という意味が込められています。かつて世界をリードしていた日本のテクノロジーの再興という想いを込め、グローバルでの認知を見据えて「Saira」と名付けました。

【事業内容】
当社は、ノーコードWebアプリケーション開発を主軸に、企業のデジタル変革を包括的に支援します。業務効率化ツールから顧客向けプロダクトまで、最新の生成AI技術を活用することで、開発効率を最大限に高めた開発サービスを提供いたします。

また、企業のデジタルトランスフォーメーションを成功に導くため、DX推進のための人材戦略立案から新卒採用支援、組織変革支援まで、包括的なコンサルティングサービスを展開。企業の持続的な成長をサポートいたします。

さらに、デジタルマーケティングの観点から、企業のSNS運用代行サービスも提供しております。アカウント運用の最適化やコンテンツ制作支援を通じて、企業のデジタルプレゼンスの向上を支援いたします。

【代表メッセージ】
代表取締役 佐藤 遼河

"ノーコード開発と人材戦略を融合し、企業のデジタル変革と持続的成長を支援する。"ことをミッションに、若い世代だからこそできる革新的なアプローチで世界をリードした日本を再び取り戻します。`
  },
  {
    id: 2,
    date: '2024.03.01',
    category: 'プレスリリース',
    title: '地方自治体向けAIソリューションの提供を開始',
    content: '地方自治体のデジタル化を支援するAIソリューションの提供を開始しました。'
  }
]

export default function NewsDetail() {
  const params = useParams()
  const article = newsArticles.find(article => article.id === Number(params.slug))

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">記事が見つかりませんでした</h1>
          <Link href="/news" className="text-blue-600 hover:text-blue-800">
            ニュース一覧に戻る
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen pt-24">
      <motion.div 
        className="max-w-3xl mx-auto px-4 py-12 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <Link 
            href="/news"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            ニュース一覧に戻る
          </Link>
        </div>

        <article className="text-gray-900">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-gray-500">{article.date}</span>
            <span className="px-3 py-1 bg-[#0066CC] text-white text-sm rounded-full">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {article.title}
          </h1>

          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </motion.div>
    </div>
  )
} 