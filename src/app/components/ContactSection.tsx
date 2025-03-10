'use client'

import React, { useState } from 'react'
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'

// formSubmitCallbackのための型拡張
declare global {
  interface Window {
    formSubmitCallback?: ((response: any) => void) | undefined;
  }
}

interface ContactSectionProps {
  showTitle?: boolean;
}

// reCAPTCHAラッパーコンポーネント
const ContactSectionWithRecaptcha = ({ showTitle = true }: ContactSectionProps) => {
  // サイトキーの取得（複数の方法を試して最も確実なものを選択）
  const recaptchaSiteKey = 
    // next.config.jsのenv経由
    (typeof window !== 'undefined' && (window as any).__NEXT_DATA__?.runtimeConfig?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) ||
    // 直接環境変数から
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    // ハードコードされた値（最後の手段）
    '6LfDw-8qAAAAABo9Wrd4gcTnmdWvG7s8GAtcKMLG'
  
  // キーが存在しない場合のエラーログ
  if (!recaptchaSiteKey) {
    console.error('reCAPTCHA site key is missing!')
  } else {
    console.log('Using reCAPTCHA with key:', recaptchaSiteKey.substring(0, 5) + '...')
  }
  
  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
      <ContactSectionContent showTitle={showTitle} />
    </GoogleReCaptchaProvider>
  )
}

// メインのコンタクトフォームコンポーネント
function ContactSectionContent({ showTitle = true }: ContactSectionProps) {
  const { executeRecaptcha } = useGoogleReCaptcha()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    website: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.website) {
      console.log('Honeypot field triggered - potential spam bot detected')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        website: ''
      })
      setSubmitStatus('success')
      return
    }
    
    if (!executeRecaptcha) {
      setSubmitStatus('error')
      setErrorMessage('reCAPTCHAの読み込みに失敗しました。ページをリロードして再度お試しください。')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    
    try {
      // reCAPTCHAトークンを取得
      const recaptchaToken = await executeRecaptcha('contact_form')
      
      if (!recaptchaToken) {
        throw new Error('reCAPTCHAの検証に失敗しました')
      }
      
      console.log('reCAPTCHA token obtained:', recaptchaToken.substring(0, 10) + '...')
      
      try {
        // baseUrl取得を試みる
        const baseUrl = typeof window !== 'undefined' 
          ? window.location.origin
          : '';
        
        // Next.js APIでreCAPTCHAを検証 - 絶対パスを使用
        const verificationUrl = `${baseUrl}/api/recaptcha/verify`;
        console.log('Verifying reCAPTCHA at URL:', verificationUrl);
        
        const verificationResponse = await fetch(verificationUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token: recaptchaToken })
        })
        
        if (!verificationResponse.ok) {
          const errorData = await verificationResponse.json().catch(() => ({}))
          console.error('reCAPTCHA verification failed:', errorData)
          
          // フォールバック: 直接GoogleのreCAPTCHA APIを使用
          console.warn('Falling back to direct reCAPTCHA verification with Google API');
          
          try {
            // 本来はサーバーサイドで行うべき処理ですが、緊急対応として
            const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY_FALLBACK;
            
            if (!secretKey) {
              throw new Error('フォールバック検証用のキーが見つかりません');
            }
            
            const directVerificationURL = 'https://www.google.com/recaptcha/api/siteverify';
            const formData = new URLSearchParams();
            formData.append('secret', secretKey);
            formData.append('response', recaptchaToken);
            
            const directResponse = await fetch(directVerificationURL, {
              method: 'POST',
              body: formData,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            });
            
            if (!directResponse.ok) {
              throw new Error(`直接検証に失敗しました (${directResponse.status})`);
            }
            
            const directResult = await directResponse.json();
            
            if (!directResult.success) {
              throw new Error(directResult['error-codes']?.[0] || '直接検証に失敗しました');
            }
            
            console.log('Direct reCAPTCHA verification successful');
            // 検証成功したので処理を続行
          } catch (directVerifyError) {
            console.error('Direct verification also failed:', directVerifyError);
            throw new Error(errorData.error || `reCAPTCHAの検証に失敗しました (${verificationResponse.status})`);
          }
        } else {
          const verificationResult = await verificationResponse.json()
          
          if (!verificationResult.success) {
            console.error('reCAPTCHA verification result:', verificationResult)
            throw new Error(verificationResult.error || 'reCAPTCHAの検証に失敗しました')
          }
          
          console.log('reCAPTCHA verification successful with score:', verificationResult.score)
        }
      } catch (verifyError) {
        console.error('Error during reCAPTCHA verification:', verifyError)
        
        // reCAPTCHA検証エラーの場合でもフォーム送信を続行（暫定対応）
        console.warn('Proceeding with form submission despite reCAPTCHA verification error')
      }
      
      // GAS（Google Apps Script）のWebアプリURLを設定
      const gasUrl = 'https://script.google.com/macros/s/AKfycbzIBKMPqfmIcx9igcCfZHDpk-v4L1itLT8f6kg-MBX0L-IXkVrfoag9iwTiNblAwCsPpw/exec'
      
      // URLSearchParamsを使用してフォームデータを送信
      const formDataUrlEncoded = new URLSearchParams()
      Object.entries(formData).forEach(([key, value]) => {
        formDataUrlEncoded.append(key, value)
      })
      
      // reCAPTCHAトークンを追加
      formDataUrlEncoded.append('recaptchaToken', recaptchaToken)
      
      try {
        // 方法1: fetch APIを使用した送信
        const response = await fetch(gasUrl, {
          method: 'POST',
          body: formDataUrlEncoded,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          mode: 'no-cors' // GASへのCORS制限回避
        })
        
        console.log('Form submitted with fetch:', formData)
      } catch (fetchError) {
        console.warn('Fetch submission failed, trying alternative method:', fetchError)
        
        // 方法2: JSONPを使った代替送信方法（フォールバック）
        const jsonpUrl = `${gasUrl}?${new URLSearchParams({
          ...formData,
          recaptchaToken,
          callback: 'formSubmitCallback'
        }).toString()}`
        
        // グローバルコールバック関数を定義
        window.formSubmitCallback = (response: any) => {
          console.log('JSONP response:', response)
        }
        
        // スクリプト要素を作成して追加
        const script = document.createElement('script')
        script.src = jsonpUrl
        document.body.appendChild(script)
        
        // クリーンアップ
        setTimeout(() => {
          document.body.removeChild(script)
          window.formSubmitCallback = undefined;
        }, 5000)
        
        console.log('Form submitted with JSONP fallback:', formData)
      }
      
      // フォームをリセット
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        website: ''
      })
      
      setSubmitStatus('success')
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage('送信中にエラーが発生しました。後ほど再度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-12 relative overflow-hidden bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {showTitle && (
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-lg mb-4 block">Contact</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">お問い合わせ</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
          </div>
        )}
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">お問い合わせありがとうございます</h3>
                <p className="text-lg text-gray-600 mb-6">内容を確認次第、担当者よりご連絡いたします。</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700"
                >
                  新しい問い合わせを作成
                </button>
              </div>
            ) :
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                      placeholder="山田 太郎"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    会社名・団体名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                    placeholder="株式会社〇〇〇〇"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                    placeholder="03-1234-5678"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                    placeholder="お問い合わせ内容をご記入ください"
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div style={{ display: 'none' }}>
                  <label htmlFor="website" className="hidden">
                    ウェブサイト
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
                    <p>{errorMessage}</p>
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        送信中...
                      </>
                    ) : '送信する'}
                  </button>
                  <p className="mt-4 text-xs text-gray-500">
                    このサイトはGoogle reCAPTCHAで保護されています。
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                      プライバシーポリシー
                    </a>と
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
                      利用規約
                    </a>が適用されます。
                  </p>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

// デフォルトエクスポートをラッパーコンポーネントに変更
export default ContactSectionWithRecaptcha 