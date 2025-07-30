// 英語のアーティスト名言リスト（20種）
export const ARTIST_QUOTES = [
    'I’d rather be hated for who I am, than loved for who I am not. ― Kurt Cobain',
            'Music is a safe kind of high. ― Jimi Hendrix',
            'If you want to be a rock star, just do what you want. ― Freddie Mercury',
            'I’m not a prophet or a stone aged man, just a mortal with potential of a superman. ― David Bowie',
            'If you’re going to kick authority in the teeth, you might as well use two feet. ― Keith Richards',
            'I don’t need to be a hero. I just have to be myself. ― Dave Grohl',
            'It’s better to burn out than to fade away. ― Neil Young',
            'You can’t change the world by worrying about what people think. ― Eddie Van Halen',
            'I’m just a musical prostitute, my dear. ― Freddie Mercury',
            'The show must go on. ― Queen',
            'If you don’t live for something, you’ll die for nothing. ― Dave Lombardo',
            'Rock and roll keeps you in a constant state of juvenile delinquency. ― Eddie Spaghetti',
            'Without deviation from the norm, progress is not possible. ― Frank Zappa',
            'We’re more popular than Jesus now. ― John Lennon',
            'Excuse me while I kiss the sky. ― Jimi Hendrix',
            'You don’t have to be a star to be in my show. ― Marilyn Manson',
            'I won’t be a rock star. I will be a legend. ― Freddie Mercury',
            'I’m just a singer in a rock and roll band. ― Justin Hayward',
            'I’m not in it for the money. I’m in it for the music. ― Steven Tyler',
            'I’m the man in the box. ― Layne Staley',
            'It’s only rock and roll but I like it. ― Mick Jagger',
];
import { questions } from './questions.js';
// 結果パターン
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

// アーティスト詳細データ（拡張版）考えてもキリがないので仮で（変更予定）
const ARTIST_DATA = {
  vocal: [
    {
      name: 'Kurt Cobain',
      band: 'Nirvana',
      country: 'USA',
      song: 'Breed',
      songUrl: 'https://www.youtube.com/watch?v=xdTa6BiGXO0&list=RDxdTa6BiGXO0&start_radio=1',
      description: 'グランジを象徴するカリスマ的存在',
      era: '1990s',
      genre: 'Grunge / Alternative Rock'
    },
    {
      name: 'Billie Joe Armstrong',
      band: 'Green Day',
      country: 'USA',
      song: 'Welcome To Paradise',
      songUrl: 'https://www.youtube.com/watch?v=SOa-lJWeQ4Q&list=RDSOa-lJWeQ4Q&start_radio=1',
      description: 'ポップパンクのカリスマ',
      era: '1990s-現在',
      genre: 'Punk Rock'
    },
    {
      name: 'Robert Plant',
      band: 'Led Zeppelin',
      country: 'UK',
      song: 'Whole Lotta Love',
      songUrl: 'https://www.youtube.com/watch?v=fIQMktyP90s&list=RDfIQMktyP90s&start_radio=1',
      description: 'ロックの象徴的存在、神秘的かつパワフルな歌声',
      era: '1960s-1980s',
      genre: 'Rock'
    },
    {
      name: 'James Hetfield',
      band: 'Metallica',
      country: 'USA',
      song: 'Enter Sandman',
      songUrl: 'https://www.youtube.com/watch?v=87by1DjfxLw&list=RD87by1DjfxLw&start_radio=1',
      description: '重厚なリフとパワフルな歌声',
      era: '1980s-現在',
      genre: 'Metal'
    },
    {
      name: 'Corey Taylor',
      band: 'Slipknot',
      country: 'USA',
      song: 'Before I Forget',
      songUrl: 'https://www.youtube.com/watch?v=2fDFyTl7nwE&list=RD2fDFyTl7nwE&start_radio=1',
      description: 'パワフルで多彩な声域のメタルボーカル',
      era: '1990s-現在',
      genre: 'Metal'
    },
  ],
  guitarist: [
    {
      name: 'Jimi Hendrix',
      band: '',
      country: 'USA',
      song: 'Voodoo Child',
      songUrl: 'https://www.youtube.com/watch?v=qFfnlYbFEiE&list=RDqFfnlYbFEiE&start_radio=1',
      description: 'ギター革命児、唯一無二のサウンドで歴史を変えた',
      era: '1960s-1970s',
      genre: 'Rock / Psychedelic Rock'
    },
    {
      name: 'Eric Clapton',
      band: '',
      country: 'UK',
      song: 'Layla',
      songUrl: 'https://www.youtube.com/watch?v=-KG2O5PSCSs&list=RD-KG2O5PSCSs&start_radio=1',
      description: 'ブルースとロックを融合したギターの神様',
      era: '1960s-現在',
      genre: 'Blues Rock'
    },
    {
      name: 'Steve Vai',
      band: '',
      country: 'USA',
      song: 'Teeth of the Hydra',
      songUrl: 'https://www.youtube.com/watch?v=46qjDJ0lLdE&list=RD46qjDJ0lLdE&start_radio=1',
      description: '超絶技巧と独創性で知られるインストゥルメンタル・ギターの巨匠',
      era: '1980s-現在',
      genre: 'Instrumental Rock / Progressive'
    },
    {
      name: 'Matthew Bellamy',
      band: 'Muse',
      country: 'UK',
      song: 'Plug In Baby',
      songUrl: 'https://www.youtube.com/watch?v=XCUZSS54drI&list=RDXCUZSS54drI&start_radio=1',
      description: '独創的なギタープレイとハイトーンボイス',
      era: '2000s-現在',
      genre: 'Alternative / Progressive Rock'
    },
    {
      name: 'Tom Morello',
      band: 'Rage Against The Machine',
      country: 'USA',
      song: 'Killing In The Name',
      songUrl: 'https://www.youtube.com/watch?v=0W6WZK3AfKE&list=RD0W6WZK3AfKE&start_radio=1',
      description: '革新的なエフェクトとリフで新時代を築いた',
      era: '1990s-現在',
      genre: 'Alternative / Rap Metal'
    },
    {
      name: 'Phil Sgrosso',
      band: 'As I Lay Dying',
      country: 'USA',
      song: 'An Ocean Between Us',
      songUrl: 'https://www.youtube.com/watch?v=pU1hcNTLEN4',
      description: 'メタルコアシーンを代表するテクニカルかつメロディアスなギタリスト',
      era: '2000s-現在',
      genre: 'Metalcore'
    },
  ],
  drummer: [
    {
      name: 'Keith Moon',
      band: 'The Who',
      country: 'UK',
      song: 'Baba O’Riley',
      songUrl: 'https://www.youtube.com/watch?v=Gu9HhYv0C7E&list=RDGu9HhYv0C7E&start_radio=1',
      description: '破天荒なパフォーマンスと独創的なドラミング',
      era: '1960s-1970s',
      genre: 'Rock'
    },
    {
      name: 'Ringo Starr',
      band: 'The Beatles',
      country: 'UK',
      song: 'Come Together',
      songUrl: 'https://www.youtube.com/watch?v=OEo9Bh679wM&list=RDOEo9Bh679wM&start_radio=1',
      description: 'ビートルズのリズムを支えた世界的ドラマー',
      era: '1960s-現在',
      genre: 'Rock'
    },
    {
      name: 'Travis Barker',
      band: 'Blink-182',
      country: 'USA',
      song: 'All The Small Things',
      songUrl: 'https://www.youtube.com/watch?v=LPslbMEeqHo&list=RDLPslbMEeqHo&start_radio=1',
      description: '超絶技巧のポップパンクドラマー',
      era: '1990s-現在',
      genre: 'Punk Rock'
    },
    {
      name: 'Dave Lombardo',
      band: 'Slayer',
      country: 'USA',
      song: 'Raining Blood',
      songUrl: 'https://www.youtube.com/watch?v=K6_zsJ8KPP0',
      description: 'スラッシュメタル界屈指の高速ツーバスとパワフルなドラミングで知られる伝説的ドラマー',
      era: '1980s-現在',
      genre: 'Thrash Metal'
    },
    {
      name: 'Matt Greiner',
      band: 'August Burns Red',
      country: 'USA',
      song: 'Composure',
      songUrl: 'https://www.youtube.com/watch?v=iSoU9fs4Umo',
      description: 'メタルコア界屈指のテクニカルかつパワフルなドラミングで知られる現役ドラマー',
      era: '2000s-現在',
      genre: 'Metalcore'
    },
    {
      name: 'Mario Duplantier',
      band: 'Gojira',
            country: 'France',
      song: 'The Art of Dying',
      songUrl: 'https://www.youtube.com/watch?v=R2zTNT2YPZE',
      description: '現代メタルを代表するテクニカルドラマー',
      era: '2000s-現在',
      genre: 'Metal'
    }
  ],
  bassist: [
    {
      name: 'Paul McCartney',
      band: 'The Beatles',
      country: 'UK',
      song: 'Come Together',
      songUrl: 'https://www.youtube.com/watch?v=OEo9Bh679wM&list=RDOEo9Bh679wM&start_radio=1',
      description: 'メロディアスなベースラインでロック史に名を刻む',
      era: '1960s-現在',
      genre: 'Rock / Pop'
    },
    {
      name: 'John Entwistle',
      band: 'The Who',
      country: 'UK',
      song: 'My Generation',
      songUrl: 'https://www.youtube.com/watch?v=_5WJWfOoi-k&list=RD_5WJWfOoi-k&start_radio=1',
      description: 'ロックベースの礎を築いた',
      era: '1960s-2000s',
      genre: 'Rock'
    },
    {
      name: 'Mike Dirnt',
      band: 'Green Day',
      country: 'USA',
      song: 'Longview',
      songUrl: 'https://www.youtube.com/watch?v=42BBdzzgPNM&list=RD42BBdzzgPNM&start_radio=1',
      description: 'パンクロックの低音を支える存在',
      era: '1990s-現在',
      genre: 'Punk Rock'
    },
    {
      name: 'Cliff Burton',
      band: 'Metallica',
      country: 'USA',
      song: 'For Whom the Bell Tolls',
      songUrl: 'https://www.youtube.com/watch?v=HNybmS3xNAQ&list=RDHNybmS3xNAQ&start_radio=1',
      description: 'メタル界に多大な影響を与えた伝説的ベーシスト',
      era: '1980s',
      genre: 'Metal'
    },
    {
      name: 'Flea',
      band: 'Red Hot Chili Peppers',
      country: 'USA',
      song: 'Can’t Stop',
      songUrl: 'https://www.youtube.com/watch?v=8DyziWtkfBw&list=RD8DyziWtkfBw&start_radio=1',
      description: 'ファンキーで超絶技巧のベースプレイ',
      era: '1980s-現在',
      genre: 'Funk Rock'
    },
  ]
};


export function getBandRoleResult(answers) {
    const roleCount = { vocal: 0, guitarist: 0, drummer: 0, bassist: 0 };

    answers.forEach(ans => {
        const q = questions.find(q => q.id === ans.questionId);
        if (q && q.category === 'rock_type') {
            const opt = q.options[ans.optionIndex];
            if (opt && opt.role) {
                roleCount[opt.role] = (roleCount[opt.role] || 0) + 1;
            }
        }
    });

    // 最多のroleを返す（同数ならvocal→guitarist→drummer→bassistの順）
    return Object.entries(roleCount).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}

export function getRecommendedArtistsDetailByRole(role) {
    return ARTIST_DATA[role] || [];
}

export function getRoleInfo(role) {
    return ROLE_INFO[role] || null;
}

export function getResultByScore(percentage) {
    return resultPatterns.find(pattern => percentage >= pattern.minScore) 
          || resultPatterns[resultPatterns.length - 1];
}