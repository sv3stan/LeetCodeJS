// Дана строка s, состоящая только из символов «a», «b» и «c». 
// Вас попросят применить следующий алгоритм к строке любое количество раз:

// Выберите непустой префикс из строки s, в которой все символы префикса равны.
// Выберите непустой суффикс из строки s, в котором все символы этого суффикса равны.
// Префикс и суффикс не должны пересекаться ни по одному индексу.
// Символы префикса и суффикса должны быть одинаковыми.
// Удалите префикс и суффикс.
// Возвращает минимальную длину s после выполнения вышеуказанной 
// операции любое количество раз(возможно, ноль раз).

// 1750


s = "aabccabba";
s = "cabaabac"
s = "bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb"
// s = 'a';

var minimumLength = function (s) {

    console.log(s)

    if (s[0] !== s[s.length - 1] || s.length === 1) return s.length;

    while (s[0] === s[s.length - 1]) {

        const ch = s[0];

        while (s[0] === ch) {
            s = s.slice(1);
            //left++;
        }
        console.log(s + ' - left')
        while (s[s.length - 1] === ch) {
            s = s.slice(0, - 1)
            // right--;
        }

        console.log(s + ' - right')

        len = s.length;
        console.log(s.length)

        if (s.length === 1) return 1;
        if (s.length === 0) return 0;

    }

    return s.length;

};


console.log(minimumLength(s))