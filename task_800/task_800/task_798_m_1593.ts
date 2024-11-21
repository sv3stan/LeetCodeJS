﻿/**
 Учитывая строку s, верните максимальное количество уникальных подстрок, на которые можно разбить данную строку.
Вы можете разделить строку на любой список непустых подстрок, где объединение подстрок образует исходную строку. Однако вам необходимо разделить подстроки так, чтобы все они были уникальными.
Подстрока — это непрерывная последовательность символов внутри строки.
 */
let s = 'ababccc';
function maxUniqueSplit(s: string): number {
    // Рекурсивная функция для поиска максимального количества уникальных подстрок
    function backtrack(start: number, hash: Set<string>): number {
        // Если достигли конца строки, возвращаем размер множества уникальных подстрок
        if (start === s.length) return hash.size;
        let max = 0;

        // Пробуем разделить строку на подстроки разной длины, начиная с позиции start
        for (let end = start + 1; end <= s.length; end++) {
            const substr = s.slice(start, end);

            // Если подстрока уникальна, добавляем её в множество
            if (!hash.has(substr)) {
                hash.add(substr);
                // Рекурсивно продолжаем разделять строку и выбираем максимальное значение
                max = Math.max(max, backtrack(end, hash));
                // Удаляем подстроку из множества для поиска других комбинаций
                hash.delete(substr);
            }
        }

        return max;
    }

    // Вызываем рекурсивную функцию с начальной позицией и пустым множеством
    return backtrack(0, new Set<string>());
}

console.log(maxUniqueSplit(s)); // Output: 5