// Twitterでシェア
export function shareToTwitter(resultType, percentage) {
    const text = `ロック度診断の結果は「${resultType}」でした！\nロック度: ${percentage}%\n\n#ロック度診断 #診断アプリ`;
    const url = encodeURIComponent(window.location.href);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`;

    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

