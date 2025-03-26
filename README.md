# 会社サイト

## 概要
会社の公式Webサイトです。企業情報、サービス紹介、ニュース、採用情報、お問い合わせフォームなどを提供しています。

## お問い合わせフォーム機能
当サイトのお問い合わせフォームには以下の機能があります：
- フォーム入力データのバリデーション
- Google Spreadsheetsへのデータ保存
- Slackへのリアルタイム通知

## セットアップ手順

### 必要条件
- Node.js 16以上
- npm または yarn

### インストール
```bash
# パッケージのインストール
npm install
# または
yarn install
```

### 環境変数の設定
`.env`ファイルを作成し、以下の環境変数を設定します：

```
# Google Sheets API設定
GOOGLE_SERVICE_ACCOUNT_EMAIL="your-service-account@your-project.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----"
GOOGLE_SHEET_ID="your-spreadsheet-id"

# Slack Webhook URL
SLACK_WEBHOOK_URL="https://hooks.slack.com/services/TXXXXXXXX/BXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXX"
```

### Google Sheets APIの設定手順

1. [Google Cloud Console](https://console.cloud.google.com/)にアクセスし、新しいプロジェクトを作成
2. Google Sheets APIを有効化
3. サービスアカウントを作成：
   - IAM & 管理 > サービスアカウント > サービスアカウントを作成
   - 適切な権限を付与（少なくともSpreadsheets編集者の権限）
   - 鍵を作成（JSON形式）
4. JSONファイルから以下の情報を取得：
   - `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`として設定
   - `private_key` → `GOOGLE_PRIVATE_KEY`として設定
5. 新しいGoogle Spreadsheetを作成し、サービスアカウントのメールアドレスを共有設定に追加（編集者権限）
6. スプレッドシートのURL（`https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit`）から`SPREADSHEET_ID`を取得し、`GOOGLE_SHEET_ID`として設定

### Slack Webhookの設定手順

1. [Slack API Apps](https://api.slack.com/apps)にアクセス
2. 「Create New App」を選択
3. アプリ名とワークスペースを設定
4. 「Incoming Webhooks」を有効化
5. 「Add New Webhook to Workspace」をクリック
6. お問い合わせ通知を送信するチャンネルを選択
7. 生成されたWebhook URLを`SLACK_WEBHOOK_URL`として設定

### 開発サーバーの起動
```bash
npm run dev
# または
yarn dev
```

### 本番ビルド
```bash
npm run build
npm run start
# または
yarn build
yarn start
```

## お問い合わせフォームのテスト方法

1. 開発サーバーを起動
2. ブラウザで`http://localhost:3000/contact`にアクセス
3. フォームに必要事項を入力して送信
4. 正常に動作していれば：
   - 指定したGoogle Spreadsheetに新しい行が追加される
   - 指定したSlackチャンネルに通知が投稿される 