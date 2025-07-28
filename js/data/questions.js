// 質問データを管理（今後50問でも100問でも対応可能）
export const questions = [
  // 【反骨精神度】
  {
    id: 1,
    category: 'rebellion',
    question: '理不尽なルールに遭遇した時、あなたは？',
    options: [
      { text: '堂々と異議を唱える', score: 3 },
      { text: '周りの人と相談して対応を考える', score: 2 },
      { text: '内心は反対だが表面上は従う', score: 1 },
      { text: '特に疑問を感じずに従う', score: 0 }
    ]
  },
  {
    id: 2,
    category: 'rebellion',
    question: '周りと違う意見を持った時の行動は？',
    options: [
      { text: '自分の意見を積極的に主張する', score: 3 },
      { text: 'タイミングを見て意見を伝える', score: 2 },
      { text: '求められれば意見を言う', score: 1 },
      { text: '波風を立てないよう黙っている', score: 0 }
    ]
  },
  {
    id: 3,
    category: 'rebellion',
    question: '「空気を読む」ことについてどう思う？',
    options: [
      { text: '空気なんて読まない、自分らしくいる', score: 3 },
      { text: '時と場合によるが、基本は自分を優先', score: 2 },
      { text: 'ある程度は必要だと思う', score: 1 },
      { text: 'とても大切、常に周りに合わせる', score: 0 }
    ]
  },
  {
    id: 4,
    category: 'rebellion',
    question: '自分の信念を貫くことについて',
    options: [
      { text: '何があっても絶対に曲げない', score: 3 },
      { text: '基本的には貫くが、柔軟性も大切', score: 2 },
      { text: '状況によっては妥協も必要', score: 1 },
      { text: '周りとの調和を最優先する', score: 0 }
    ]
  },

  // 【ロックスタータイプ】
  // {
  //   id: 5,
  //   category: 'rock_type',
  //   question: 'ライブで一番注目したいのは？',
  //   options: [
  //     { text: 'ボーカルの歌声とパフォーマンス', role: 'vocal' },
  //     { text: 'ギターの技術と音色', role: 'guitarist' },
  //     { text: 'ドラムのリズムとパワー', role: 'drummer' },
  //     { text: 'ベースの重低音と安定感', role: 'bassist' }
  //   ]
  // },
  // {
  //   id: 6,
  //   category: 'rock_type',
  //   question: 'バンドでやりたいポジションは？',
  //   options: [
  //     { text: '観客を魅了するフロントマン', role: 'vocal' },
  //     { text: '印象的なリフを奏でるギタリスト', role: 'guitarist' },
  //     { text: 'バンドの心臓部を支えるドラマー', role: 'drummer' },
  //     { text: '縁の下の力持ちベーシスト', role: 'bassist' }
  //   ]
  // },
  // {
  //   id: 7,
  //   category: 'rock_type',
  //   question: '音楽で最も重要だと思うのは？',
  //   options: [
  //     { text: '歌詞とメロディーで心に響くこと', role: 'vocal' },
  //     { text: '印象的なギターフレーズ', role: 'guitarist' },
  //     { text: '力強いリズムとグルーヴ', role: 'drummer' },
  //     { text: 'しっかりとした土台となる低音', role: 'bassist' }
  //   ]
  // },
  // {
  //   id: 8,
  //   category: 'rock_type',
  //   question: 'ステージでの理想の立ち振る舞いは？',
  //   options: [
  //     { text: '観客と一体になって盛り上げる', role: 'vocal' },
  //     { text: 'クールに技を決めて魅せる', role: 'guitarist' },
  //     { text: '情熱的にパワフルに演奏する', role: 'drummer' },
  //     { text: '安定感を保ちながらさりげなく支える', role: 'bassist' }
  //   ]
  // },

  // 【カリスマ性】
  {
    id: 9,
    category: 'charisma',
    question: 'パーティーでのあなたの立ち位置は？',
    options: [
      { text: '中心になって場を盛り上げる', score: 3 },
      { text: '面白い話で周りを楽しませる', score: 2 },
      { text: '友達と楽しく過ごす', score: 1 },
      { text: '隅の方で静かに過ごす', score: 0 }
    ]
  },
  {
    id: 10,
    category: 'charisma',
    question: '人前で話すことについて',
    options: [
      { text: '大勢の前でも堂々と話せる', score: 3 },
      { text: '準備すれば自信を持って話せる', score: 2 },
      { text: '少し緊張するが何とかできる', score: 1 },
      { text: 'とても苦手で避けたい', score: 0 }
    ]
  },
  {
    id: 11,
    category: 'charisma',
    question: 'グループでの役割は？',
    options: [
      { text: 'リーダーとして全体をまとめる', score: 3 },
      { text: 'アイデアマンとして提案する', score: 2 },
      { text: '実行役として作業を進める', score: 1 },
      { text: 'サポート役として支える', score: 0 }
    ]
  },
  {
    id: 12,
    category: 'charisma',
    question: '注目されることについてどう思う？',
    options: [
      { text: '注目されるのが好きで、積極的に求める', score: 3 },
      { text: '良いことで注目されるなら嬉しい', score: 2 },
      { text: '適度な注目なら気にならない', score: 1 },
      { text: '注目されるのは苦手', score: 0 }
    ]
  }
];


export function getMaxScore() {
    return questions.reduce((total, question) => {
        const maxQuestionScore = Math.max(...question.options.map(option => option.score));
        return total + maxQuestionScore;
    }, 0);
}

export function getTotalQuestions() {
    return questions.length;
}


// 質問をカテゴリ別に取得する関数
export function getQuestionsByCategory(category) {
    return questions.filter(q => q.category === category);
}

// ランダムに質問を取得する関数
export function getRandomQuestions(count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 総質問数を取得
export function getQuestionCount() {
    return questions.length;
}

// IDで質問を取得
export function getQuestionById(id) {
    return questions.find(question => question.id === id);
}