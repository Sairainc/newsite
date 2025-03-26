import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function POST(request: Request) {
  try {
    // リクエストボディを解析
    const body = await request.json();
    const { name, email, company, message } = body;
    
    // 必須フィールドの検証
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }
    
    // 環境変数が設定されている場合のみ実行
    const tasks = [];
    
    if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && 
        process.env.GOOGLE_PRIVATE_KEY && 
        process.env.GOOGLE_SHEET_ID) {
      tasks.push(saveToGoogleSheet(body));
    }
    
    if (process.env.SLACK_WEBHOOK_URL) {
      tasks.push(sendToSlack(body));
    }
    
    if (tasks.length > 0) {
      await Promise.all(tasks);
    }
    
    return NextResponse.json({ 
      success: true,
      message: 'お問い合わせを受け付けました。内容を確認次第、ご連絡させていただきます。'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: '送信処理中にエラーが発生しました' },
      { status: 500 }
    );
  }
}

// Google Sheetsにデータを保存する関数
async function saveToGoogleSheet(data: any) {
  try {
    // スプレッドシートの初期化
    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID!,
      {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')!,
      } as any
    );
    
    // スプレッドシートの情報を読み込む
    await doc.loadInfo();
    
    // 最初のシートを使用
    const sheet = doc.sheetsByIndex[0];
    
    // タイムスタンプを追加
    const timestamp = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
    
    // 行を追加
    await sheet.addRow({
      Timestamp: timestamp,
      Name: data.name,
      Email: data.email,
      Company: data.company || '',
      Message: data.message,
    });
    
    console.log('Data saved to Google Sheet successfully');
    
  } catch (error) {
    console.error('Error saving to Google Sheet:', error);
    throw error;
  }
}

// Slackにメッセージを送信する関数
async function sendToSlack(data: any) {
  try {
    const timestamp = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
    
    // Slackメッセージのフォーマット
    const message = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '🔔 新しいお問い合わせが届きました',
            emoji: true
          }
        },
        {
          type: 'divider'
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*お名前:*\n${data.name}`
            },
            {
              type: 'mrkdwn',
              text: `*メールアドレス:*\n${data.email}`
            }
          ]
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*会社名:*\n${data.company || '記入なし'}`
            },
            {
              type: 'mrkdwn',
              text: `*送信日時:*\n${timestamp}`
            }
          ]
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*お問い合わせ内容:*\n${data.message}`
          }
        }
      ]
    };
    
    // Slackウェブフックへのリクエスト
    const response = await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    
    if (!response.ok) {
      throw new Error(`Slack API error: ${response.statusText}`);
    }
    
    console.log('Message sent to Slack successfully');
    
  } catch (error) {
    console.error('Error sending to Slack:', error);
    throw error;
  }
} 