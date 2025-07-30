import { resultPatterns } from '../data/results.js';

export class ResultCalculator {
    static calculate(answers, maxScore) {
        const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0);
        const percentage = Math.round((totalScore / maxScore) * 100);

        // 結果パターンを検索
        const result = resultPatterns.find(pattern => percentage >= pattern.minScore) 
                    || resultPatterns[resultPatterns.length - 1];

        return {
            ...result,
            percentage: percentage,
            totalScore: totalScore,
            maxScore: maxScore
        };
    }

    // カテゴリ別の詳細分析
    static analyzeByCategory(answers) {
        const categories = {};
        answers.forEach(answer => {
            if (!categories[answer.category]) {
                categories[answer.category] = { total: 0, count: 0 };
            }
            categories[answer.category].total += answer.score;
            categories[answer.category].count += 1;
        });

        return Object.keys(categories).map(category => ({
            category: category,
            average: categories[category].total / categories[category].count,
            percentage: Math.round((categories[category].total / (categories[category].count * 3)) * 100)
        }));
    }
}