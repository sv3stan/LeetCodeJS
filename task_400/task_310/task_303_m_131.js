// Дана строка s, раздел s такой, что каждый
// подстрока раздела представляет собой палиндром.
// Вернуть все возможные палиндромные разбиения s.
// 131

s = "asaabcaasa"
//s = 'efe'

var partition = function (s) {

    const answer = [];
    const length = s.length;

    const partitioning = [];

    function palindrome(substring) {
        const len = substring.length;
        for (let i = 0; i < (len >> 1); i++) {
            if (substring[i] !== substring[len - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    function backtrack(start) {
        if (start === length) {
            answer.push([...partitioning]);
        } else {
            for (let i = start; i < length; i++) {
                const substring = s.substring(start, i + 1);
                if (palindrome(substring)) {
                    partitioning.push(substring);
                    backtrack(i + 1);
                    partitioning.pop();
                }
            }
        }
    }

    backtrack(0);
    return answer;



};

console.log(partition(s))















// let left = 0;
// let right = s.length - 1;
// while (left < right) {
//     console.log(s[left] + ' - ' + s[right])
//     if (s[left] === s[right]) {
//         left++;
//         right--;
//     } else {
//         return false
//     }
// };
// return true;



















// const end = Array.from({ length: s.length }).fill([]);

// function backtracking(ahead, partitioningt, answer, s, end) {
//     if (ahead === s.length) {
//         answer.push(partitioningt.slice()); // Добавляем текущее разбиение в ответ
//         return;
//     }
//     for (const last of end[ahead]) {
//         partitioningt.push(s.slice(ahead, last + 1)); // Добавляем подстроку в разбиение
//         backtracking(last + 1, partitioningt, answer, s, end,);
//         partitioningt.pop(); // Убираем последнюю добавленную подстроку
//     }
// }
// // Инициализируем массив end
// for (let ahead = s.length - 1; ahead >= 0; ahead--) {
//     end[ahead] = [ahead];
//     if (ahead < s.length - 1 && s[ahead + 1] === s[ahead]) {
//         end[ahead].push(ahead + 1);
//     }
//     if (ahead > 0) {
//         for (const last of end[ahead]) {
//             if (last + 1 < s.length && s[ahead - 1] === s[last + 1]) {
//                 end[ahead - 1].push(last + 1);
//             }
//         }
//     }
// }

// console.log(end)

// const answer = [];
// const partitioningt = [];

// backtracking(0, partitioningt, answer, s, end);


// if (s === s.split("").reverse().join("")) {
//     answer.push([s]);
// }

// return answer;