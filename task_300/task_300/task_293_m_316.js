// Учитывая строку s, удалите повторяющиеся буквы так, 
// чтобы каждая буква встречалась один и только один раз.
// Вы должны убедиться, что ваш результат
// самый маленький в лексикографическом порядке
// среди всех возможных результатов.
// 316


s = "cbacdcbc";
//s = "bcabc"

var removeDuplicateLetters = function (s) {
    const count = {}; // Хранит количество вхождений букв
    const stack = [];     // Хранит уникальные буквы

    for (let i = 0; i < s.length; i++) count[s[i]] = count[s[i]] ? count[s[i]] + 1 : 1;

    const visited = []; // Хранит информацию, посетили ли мы уже букву

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // Уменьшаем счетчик буквы
        count[s[i]]--;

        if (visited[s[i]]) continue; // Если буква уже была посещена, пропускаем ее


        while (
            stack.length > 0 &&
            s[i] < stack[stack.length - 1] &&
            count[stack[stack.length - 1]] > 0
        ) {
            // Если текущая буква меньше последней в стеке и она еще встречается в строке,
            // удаляем последнюю букву из стека и помечаем ее как не посещенную
            //const removedChar = stack.pop();
            visited[stack.pop()] = false;
        }

        // Добавляем текущую букву в стек и помечаем ее как посещенную
        stack.push(s[i]);
        visited[s[i]] = true;
    }

    return stack.join('');
};


console.log(removeDuplicateLetters(s))





















// const hashTable = new Set();
// let arr = s.split('');
// for (let i = 0; i < arr.length; i++) {

//     if (hashTable.has(arr[i])) {
//         arr.splice(i, 1);
//         i--;
//     } else {
//         hashTable.add(arr[i]);
//     }
// }
// let result = '';
// for (const key of hashTable.keys()) {
//     result += key;
// }
// console.log(result)

// let answer = arr.join('');


// console.log(hashTable)
// return answer