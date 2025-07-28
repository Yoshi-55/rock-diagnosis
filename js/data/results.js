// 結果パターンのデータ
export const resultPatterns = [
    {
        minScore: 80,
        type: "🎸 真のロックスター",
        description: "あなたは生まれながらのロックスター！自分の信念を貫き、情熱的に生きています。周りに流されず、自分らしさを大切にする姿は多くの人を魅了します。",
        advice: "その情熱とカリスマ性を活かして、リーダーシップを発揮していきましょう！",
        color: "#ff6b6b"
    },
    {
        minScore: 60,
        type: "🎵 ロック魂保持者",
        description: "あなたの中には確かなロック魂が宿っています！自分の価値観を持ちながらも、周りとのバランスも取れる素晴らしい人です。",
        advice: "もう少し自分の意見を積極的に表現してみると、さらにロック度がアップするかも！",
        color: "#4ecdc4"
    },
    {
        minScore: 40,
        type: "🎼 ロック予備軍",
        description: "ロックの素質は十分にあります！もう少し自分の気持ちに正直になることで、内なるロック魂が覚醒するでしょう。",
        advice: "好きなことに情熱を注いだり、自分の意見をもっと表現してみましょう！",
        color: "#45b7d1"
    },
    {
        minScore: 0,
        type: "🌸 穏やかな心の持ち主",
        description: "あなたは協調性があり、周りとの調和を大切にする優しい人です。ロックとは違う魅力がたくさんあります。",
        advice: "時には自分の気持ちを大切にして、やりたいことに挑戦してみるのも良いかもしれません！",
        color: "#96ceb4"
    }
];

// スコアに基づいて結果を取得
export function getResultByScore(percentage) {
    return resultPatterns.find(pattern => percentage >= pattern.minScore) 
           || resultPatterns[resultPatterns.length - 1];
}