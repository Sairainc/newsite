import { NextResponse } from 'next/server';

// reCAPTCHA検証APIエンドポイント
export async function POST(request: Request) {
  try {
    // リクエストボディからトークンを取得
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'invalid-input-response' },
        { status: 400 }
      );
    }

    // 環境変数からreCAPTCHAシークレットキーを取得
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      console.error('reCAPTCHA secret key is missing!');
      return NextResponse.json(
        { success: false, error: 'recaptcha-configuration-error' },
        { status: 500 }
      );
    }

    // Google reCAPTCHA APIに検証リクエストを送信
    const verificationURL = 'https://www.google.com/recaptcha/api/siteverify';
    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', token);

    const verificationResponse = await fetch(verificationURL, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const verificationResult = await verificationResponse.json();
    
    console.log('reCAPTCHA verification result:', verificationResult);

    if (!verificationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: verificationResult['error-codes']?.[0] || 'recaptcha-verification-failed' 
        },
        { status: 400 }
      );
    }

    // スコアに基づいた処理（オプション）
    const score = verificationResult.score;
    const isHuman = score >= 0.5; // 0.5以上を人間と判断（調整可能）

    return NextResponse.json({
      success: true,
      score,
      isHuman,
      hostname: verificationResult.hostname,
      challenge_ts: verificationResult.challenge_ts
    });

  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return NextResponse.json(
      { success: false, error: 'server-error' },
      { status: 500 }
    );
  }
} 