// Последовательность преобразования слова BeginWord в слово EndWord с 
// использованием словаря wordList — это последовательность слов 
// BeginWord -> s1 -> s2 -> ... -> sk такая, что:
// Каждая соседняя пара слов отличается одной буквой.
// Каждый si для 1 <= i <= k находится в WordList. Обратите внимание, 
// что BeginWord не обязательно должен находиться в списке слов.
//     sk == EndWord
// Учитывая два слова, BeginWord и EndWord, и словарь WordList, 
// возвращает количество слов в кратчайшей последовательности 
// преобразования от BeginWord до EndWord или 0, 
// если такой последовательности не существует.
// 127

beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log", "cog"]


var ladderLength = function (beginWord, endWord, wordList) {
    // Преобразуем список слов в множество для более эффективного поиска.
    const hash = new Set(wordList);

    if (!hash.has(endWord)) {
        // Если конечное слово не находится в списке, невозможно достичь цели.
        return 0;
    }

    const queue = [];
    queue.push(beginWord);
    let answer = 1; // Уровень начинается с 1 (начальное слово).

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const current = queue.shift();

            // Перебираем все возможные слова, которые можно получить из текущего слова
            for (let j = 0; j < current.length; j++) {
                for (let k = 0; k < 26; k++) {
                    const newWord = current.slice(0, j) + String.fromCharCode(97 + k) + current.slice(j + 1);

                    if (hash.has(newWord)) {
                        if (newWord === endWord) {
                            // Если найдено конечное слово, возвращаем длину пути.
                            return answer + 1;
                        }
                        // Если слово можно использовать, добавляем его в очередь и удаляем из множества.
                        queue.push(newWord);
                        hash.delete(newWord);
                    }
                }
            }
        }
        answer++;
    }

    // Если не удалось найти путь.
    return 0;
};

console.log(ladderLength(beginWord, endWord, wordList))