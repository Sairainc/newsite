import { NextResponse } from 'next/server';

// reCAPTCHAトークンを検証するAPI
export async function POST(request: Request) {
  try {
    // リクエストボディを解析
    const body = await request.json();
    const { token } = body;
    
    if (!token) {
      return NextResponse.json({ success: false, error: 'トークンが提供されていません' }, { status: 400 });
    }
    
    // reCAPTCHA検証APIにリクエスト
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: 'POST' }
    );
    
    const recaptchaResult = await recaptchaResponse.json();
    
    // reCAPTCHA検証結果を返す
    if (recaptchaResult.success) {
      // スコアを確認（0.0 〜 1.0、高いほど人間らしい）
      const score = recaptchaResult.score;
      
      // スコアが低すぎる場合（0.5未満）は拒否
      if (score < 0.5) {
        return NextResponse.json({
          success: false,
          error: 'スパムの可能性があります',
          score
        }, { status: 403 });
      }
      
      return NextResponse.json({
        success: true,
        score
      });
    } else {
      return NextResponse.json({
        success: false,
        error: recaptchaResult['error-codes'] || '検証に失敗しました',
      }, { status: 400 });
    }
    
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return NextResponse.json({
      success: false,
      error: '検証処理でエラーが発生しました'
    }, { status: 500 });
  }
} 