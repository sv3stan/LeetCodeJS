﻿/**
Вам предоставляется список строк одинаковой длины и целевая строка. Ваша задача — сформировать цель, используя данные слова, по следующим правилам: мишень должна формироваться слева направо. Чтобы сформировать i-й символ (с индексом 0) цели, вы можете выбрать k-й символ j-й строки в словах, если target[i] = word[j][k]. Как только вы используете k-й символ j-й строки слов, вы больше не можете использовать x-й символ любой строки в словах, где x <= k. Другими словами, все символы слева от индекса k становятся непригодными для каждой строки. Повторяйте процесс, пока не сформируете целевую строку. Обратите внимание, что вы можете использовать в словах несколько символов из одной строки при условии соблюдения вышеуказанных условий. Возвращает количество способов образовать цель из слов. Поскольку ответ может быть слишком большим, верните его по модулю 109 + 7.
 */

function numWays(words: string[], target: string): number {
    const MOD = 1_000_000_007;
    const m = words.length; // количество строк
    const n = words[0].length; // длина строк в words
    const t = target.length; // длина target

    // Подсчитаем частоту символов для каждой позиции в words
    const freq = Array.from({ length: n }, () => new Map<string, number>());
    for (let j = 0; j < n; j++) {
        for (const word of words) {
            const char = word[j];
            freq[j].set(char, (freq[j].get(char) || 0) + 1);
        }
    }

    // Динамическое программирование
    const dp = Array.from({ length: t + 1 }, () => Array(n + 1).fill(0));
    dp[0][0] = 1;

    for (let i = 0; i <= t; i++) {
        for (let j = 0; j < n; j++) {
            if (i < t) {
                const char = target[i];
                if (freq[j].has(char)) {
                    dp[i + 1][j + 1] =
                        (dp[i + 1][j + 1] + dp[i][j] * freq[j].get(char)) % MOD;
                }
            }
            dp[i][j + 1] = (dp[i][j + 1] + dp[i][j]) % MOD;
        }
    }

    return dp[t][n];
}
