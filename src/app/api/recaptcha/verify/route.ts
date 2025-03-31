import { NextResponse } from 'next/server';

// reCAPTCHA検証APIエンドポイント
export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'reCAPTCHAトークンが提供されていません' },
        { status: 400 }
      );
    }

    // reCAPTCHAの検証
    const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify';
    const formData = new URLSearchParams();
    formData.append('secret', process.env.RECAPTCHA_SECRET_KEY || '');
    formData.append('response', token);

    const verificationResponse = await fetch(verificationUrl, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const verificationResult = await verificationResponse.json();

    if (!verificationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: verificationResult['error-codes']?.[0] || 'reCAPTCHAの検証に失敗しました' 
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      score: verificationResult.score,
    });
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return NextResponse.json(
      { success: false, error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
} 