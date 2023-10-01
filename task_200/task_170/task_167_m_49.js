// Учитывая массив строк strs, сгруппируйте анаграммы вместе.Вы можете вернуть ответ в любом порядке.
// 49

strs = ["eat", "tea", "tan", "ate", "nat", "bat", "nat", "tea"]
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]


var groupAnagrams = function (strs) {

    const anagram = {}; // Хэш-таблица для группировки анаграмм

    // Проход по каждому слову в массиве strs
    for (const word of strs) {
        // Преобразование слова в отсортированную строку букв
        const sorted = word.split('').sort().join('');

        // Если ключ уже существует в хэш-таблице, добавляем слово в список
        if (anagram[sorted]) {
            anagram[sorted].push(word);
        } else {
            // Иначе создаем новую запись с ключом и списком
            anagram[sorted] = [word];
        }
    }

    // Преобразование значений хэш-таблицы в список списков анаграмм
    const result = Object.values(anagram);

    return result;
    // const answer = [];
    // const hashStrs = new Map();
    // const hashUnique = new Set;
    // //const hashTemp = new Map();
    // strsArray = [];
    // for (let i = 0; i < strs.length; i++) {
    //     strsArray.push(strs[i].split('').sort())
    // }
    // for (let i = 0; i < strs.length; i++) {
    //     //hashStrs.set(i, strsArray[i]);strsArray[i].join(',')
    //     hashUnique.add(strsArray[i]);
    // }

    // console.log(hashUnique)
    // for (let i = 0; i < strs.length; i++) {
    //     //hashStrs.set(i, strsArray[i]);strsArray[i].join(',')
    //     hashStrs.set(strsArray[i].join(','), (hashStrs.get(strsArray[i].join(',')) || 0) + 1);
    // }

    // console.log(strsArray)
    // console.log(hashStrs)

    // let numberGroup = 0;
    // //for (let i = 0; i < strs.length; i++) {
    // for (let i = 0; i < strs.length; i++) {
    //     answer.push([]);
    //     // for (const [keys, value] of hashStrs.entries()) {
    //     //     console.log(keys)
    //     if (hashStrs.has(strsArray[i])) {
    //         console.log(strsArray[i])
    //         console.log(true)
    //         answer.push(strs[i]);
    //         hashStrs.delete(strsArray[i])

    //     }


    //     numberGroup++;
    //     console.log(numberGroup + '  -- numberGroup')





    //     //}
    //     console.log(hashStrs)

    //     console.log(answer)
    //     //}
    // }

};


console.log(groupAnagrams(strs))