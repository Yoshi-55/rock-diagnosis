import { questions, getTotalQuestions, getMaxScore } from '../data/questions.js';
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
        
        // 結果画面の表示
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';
        
        // 結果の内容を設定
        document.getElementById('result-type').textContent = result.type;
        document.getElementById('result-description').textContent = result.description;
        document.getElementById('result-advice').textContent = result.advice;
        document.getElementById('score-percentage').textContent = `${percentage}%`;
        
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