import { DiagnosisApp } from './components/DiagnosisApp.js';

// DOMが読み込まれたらアプリを初期化
document.addEventListener('DOMContentLoaded', function() {
    // グローバルにアクセスできるようにする（デバッグ用）
    window.app = new DiagnosisApp();
    
    // ページ読み込み時のアニメーション（オプション）
    document.body.classList.add('loaded');
});

// ページを離れる前の確認（回答途中の場合）
window.addEventListener('beforeunload', function(e) {
    if (window.app && 
        window.app.currentQuestionIndex > 0 && 
        window.app.currentQuestionIndex < window.app.totalQuestions) {
        e.preventDefault();
        e.returnValue = '診断が途中です。本当にページを離れますか？';
        return '診断が途中です。本当にページを離れますか？';
    }
});

// エラーハンドリング（オプション）
window.addEventListener('error', function(e) {
    console.error('アプリケーションエラー:', e.error);
    // 本番環境では適切なエラー処理を追加
});