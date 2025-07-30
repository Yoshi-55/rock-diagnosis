import { questions, getTotalQuestions, getMaxScore } from '../data/questions.js';
import { getBandRoleResult, getRecommendedArtistsDetailByRole } from '../data/results.js';
import { getResultByScore } from '../data/results.js';
import { shareToTwitter } from '../utils/share.js';

export class DiagnosisApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.totalQuestions = getTotalQuestions();
        this.maxScore = getMaxScore();

        this.init();
    }

    init() {
        this.showQuestion();
        this.updateProgress();
    }

    showQuestion() {
        const question = questions[this.currentQuestionIndex];

        document.getElementById('question-text').textContent = question.question;
        document.getElementById('question-number').textContent = `質問 ${this.currentQuestionIndex + 1}`;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option.text;
            button.onclick = () => this.selectAnswer(option, question.category);
            optionsContainer.appendChild(button);
        });
    }

    selectAnswer(selectedOption, category) {
        // 答えを記録
        this.answers.push({
            questionId: questions[this.currentQuestionIndex].id,
            category: category,
            score: selectedOption.score,
            text: selectedOption.text
        });

        // 次の質問へ
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.totalQuestions) {
            this.showQuestion();
            this.updateProgress();
        } else {
            this.showResult();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex) / this.totalQuestions) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = 
            `${this.currentQuestionIndex}/${this.totalQuestions}`;
    }

    showResult() {
        const totalScore = this.answers.reduce((sum, answer) => sum + answer.score, 0);
        const percentage = Math.round((totalScore / this.maxScore) * 100);
        const result = getResultByScore(percentage);

        // バンドメンバータイプ集計
        const bandRoleAnswers = this.answers
            .filter(ans => {
                const q = questions.find(q => q.id === ans.questionId);
                return q && q.category === 'rock_type';
            })
            .map(ans => {
                const q = questions.find(q => q.id === ans.questionId);
                const idx = q ? q.options.findIndex(opt => opt.text === ans.text) : -1;
                return { questionId: ans.questionId, optionIndex: idx };
            });
        let bandRole = '-';
        let bandArtist = '';
        let bandArtistDetailHtml = '';
        if (bandRoleAnswers.length > 0) {
            bandRole = getBandRoleResult(bandRoleAnswers);
            if (bandRole && bandRole !== '-') {
                const artists = getRecommendedArtistsDetailByRole(bandRole);
                if (artists.length > 0) {
                    bandArtist = artists.map(a => a.name + (a.band ? ` (${a.band})` : '')).join(', ');
                    bandArtistDetailHtml = '<ul style="margin:0.5em 0 0 0;padding:0 0 0 1.2em;text-align:left;">' +
                      artists.map(a => `<li><b>${a.name}</b>${a.band ? `（${a.band}）` : ''} / ${a.country} / <span style='font-size:0.95em;'>おすすめ曲: ${a.songUrl ? `<a href='${a.songUrl}' class='song-link' target='_blank' rel='noopener noreferrer'><b>${a.song}</b></a>` : `<b>${a.song}</b>`}</span><br><span style='font-size:0.92em;color:#aaa;'>${a.description ? a.description + ' / ' : ''}${a.era ? a.era + ' / ' : ''}${a.genre ? a.genre : ''}</span></li>`).join('') + '</ul>';
                }
            }
        }

        // 結果画面
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';

        // 結果の内容
        document.getElementById('result-type').textContent = result.type;
        document.getElementById('result-description').textContent = result.description;
        document.getElementById('result-advice').textContent = result.advice;
        document.getElementById('score-percentage').textContent = `${percentage}%`;

        // バンドメンバータイプとおすすめアーティスト
        document.getElementById('band-role-result').textContent = bandRole;
        document.getElementById('band-role-artist').innerHTML = bandArtistDetailHtml
            ? `おすすめアーティスト${bandArtistDetailHtml}`
            : '';

        // 結果の色を設定（もしresult.colorがあれば）
        if (result.color) {
            document.getElementById('result-type').style.color = result.color;
        }

        // シェアボタンのイベント設定
        document.getElementById('share-button').onclick = () => {
            shareToTwitter(result.type, percentage);
        };

        // リスタートボタンのイベント設定
        document.getElementById('restart-button').onclick = () => {
            this.restart();
        };
    }

    restart() {
        this.currentQuestionIndex = 0;
        this.answers = [];

        document.getElementById('result-container').style.display = 'none';
        document.getElementById('question-container').style.display = 'block';

        this.showQuestion();
        this.updateProgress();
    }
}