import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 簡易的なレート制限の実装（インメモリストレージ）
// 実際の本番環境では Redis などの外部ストレージを使用することを推奨
const rateLimits: { [ip: string]: { count: number; timestamp: number } } = {};

// IPアドレスごとの最大リクエスト数とタイムウィンドウ（秒）
const MAX_REQUESTS = 5;
const TIME_WINDOW = 60; // 1分

// レート制限の確認
function isRateLimited(ip: string): boolean {
  const now = Math.floor(Date.now() / 1000);
  
  // IPアドレスの記録がなければ新規作成
  if (!rateLimits[ip]) {
    rateLimits[ip] = { count: 1, timestamp: now };
    return false;
  }
  
  const record = rateLimits[ip];
  
  // タイムウィンドウが経過していたらリセット
  if (now - record.timestamp > TIME_WINDOW) {
    rateLimits[ip] = { count: 1, timestamp: now };
    return false;
  }
  
  // リクエスト数が上限以上ならレート制限
  if (record.count >= MAX_REQUESTS) {
    return true;
  }
  
  // リクエスト数を増やして記録を更新
  record.count += 1;
  return false;
}

// ミドルウェア関数
export function middleware(request: NextRequest) {
  // リクエストURLからパスを取得
  const path = request.nextUrl.pathname;
  
  // コンタクトフォームのAPIエンドポイントに対してのみ適用
  if (path.startsWith('/api/contact') || path.startsWith('/api/recaptcha')) {
    // IPアドレスを取得
    const ip = request.ip || 'unknown';
    
    // 不正なIPアドレスは制限
    if (ip === 'unknown') {
      return NextResponse.json(
        { error: 'IPアドレスを特定できません' },
        { status: 400 }
      );
    }
    
    // レート制限チェック
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'リクエスト制限を超えました。しばらく経ってから再度お試しください' },
        { status: 429 }
      );
    }
  }
  
  // 制限がなければリクエストを続行
  return NextResponse.next();
}

// ミドルウェアを適用するパスを設定
export const config = {
  matcher: ['/api/contact/:path*', '/api/recaptcha/:path*'],
}; 