// Учитывая две строки s и t длиной m и n соответственно, верните минимальное окно
// подстрока  из s так, что каждый символ из t(включая дубликаты) включен в окно.
// Если такой подстроки нет, верните пустую строку «».
// Тестовые примеры будут сгенерированы таким образом, чтобы ответ был уникальным.
// 76
// Используйте два указателя, чтобы создать окно с буквами s, 
// в котором будут все символы из t.
// Расширяйте правый указатель, пока не будут покрыты все символы t.
// Как только все символы будут покрыты, переместите левый указатель и убедитесь, 
// что все символы по - прежнему покрыты, чтобы минимизировать размер подмассива.
// Продолжайте расширять правый и левый указатели, пока не дойдете до конца s.




s = "ADOBECODEBANC", t = "ABC"

//s = "FSADOBEC", t = "ACG"

var minWindow = function (s, t) {

    const sMap = {}; // Хранит количество символов в s
    const tMap = {}; // Хранит количество символов в t
    let left = 0; // Левый указатель
    let minWindowLength = Infinity;
    let minWindowStart = 0;

    // Заполняем tMap
    for (const char of t) {
        tMap[char] = (tMap[char] || 0) + 1;
    }

    let requiredChars = Object.keys(tMap).length; // Количество уникальных символов в t
    let formedChars = 0; // Количество символов, которые уже включены в окно

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        sMap[char] = (sMap[char] || 0) + 1;

        if (tMap[char] !== undefined && sMap[char] === tMap[char]) {
            formedChars++;
        }

        // Пока все символы из t включены в окно, попробуем уменьшить его
        while (left <= right && formedChars === requiredChars) {
            // Проверяем, является ли текущее окно минимальным
            if (right - left + 1 < minWindowLength) {
                minWindowLength = right - left + 1;
                minWindowStart = left;
            }

            // Удаляем символ, соответствующий левому указателю, из окна
            const leftChar = s[left];
            sMap[leftChar]--;

            if (tMap[leftChar] !== undefined && sMap[leftChar] < tMap[leftChar]) {
                formedChars--;
            }

            // Перемещаем левый указатель вправо
            left++;
        }
    }

    return minWindowLength === Infinity ? "" : s.substr(minWindowStart, minWindowLength);
};



console.log(minWindow(s, t))
















// let leftChar = 0;
// let sPointer = 0;
// let tPointer = 0;
// let rightChar = 0;
// const result = [[]];
// let index = 0;

// //result.push([])
// while (sPointer < s.length && tPointer < t.length) {
//     console.log('==========================')
//     while (tPointer !== t.length) {
//         console.log('++++++++++++++')
//         console.log(t[tPointer] + ' - t[tPointer] - ' + s[sPointer] + '- s[sPointer] - ' + sPointer)
//         while (t[tPointer] !== s[sPointer]) {
//             if (sPointer === s.length) continue
//             console.log('------------- ')
//             console.log('tPointer - ' + tPointer + ' - s[sPointer] - ' + sPointer)
//             if (t[tPointer] !== s[sPointer]) {
//                 result[index].push(s[sPointer])
//             }
//             sPointer++;

//             console.log(result)
//         }

//         result[index].push(s[sPointer])
//         sPointer++;
//         tPointer++;
//         console.log(' - s[sPointer] - ' + sPointer)
//     }
//     sPointer++;
//     tPointer = 0;
//     result.push([]);
//     index++

//     console.log(result)
// }