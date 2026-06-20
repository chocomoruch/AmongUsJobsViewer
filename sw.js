// サービスワーカーのインストールイベント（必須処理）
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
});

// アクティベートイベント
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
});

// フェッチイベント（オフラインキャッシュなどを拡張したい場合はここに書きます）
self.addEventListener('fetch', (event) => {
    // 今回は何もせずそのままリクエストを通す
});