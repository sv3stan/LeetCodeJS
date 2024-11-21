/**
You are given a string s consisting of the characters 'a', 'b', and 'c' and a non-negative integer k.Each minute, you may take either the leftmost character of s, or the rightmost character of s. Return the minimum number of minutes needed for you to take at least k of each character, or return -1 if it is not possible to take k of each character.
Вам дана строка s, состоящая из символов «a», «b» и «c» и неотрицательного целого числа k. Каждую минуту вы можете взять либо самый левый символ s, либо самый правый символ s. Возвращает минимальное количество минут, необходимое для того, чтобы взять хотя бы k каждого символа, или возвращает -1, если невозможно взять k каждого символа.
 */

let s = 'aabaaaacaabc';
let k = 2;

function takeCharacters(s: string, k: number): number {
    const n = s.length;

    // Инициализация подсчёта символов
    const abc = new Map([
        ['a', 0],
        ['b', 0],
        ['c', 0],
    ]);

    // Шаг 1: Подсчёт общего количества каждого символа
    for (const char of s) {
        if (abc.has(char)) {
            abc.set(char, abc.get(char)! + 1);
        }
    }

    // Шаг 2: Проверка, хватает ли символов для условия
    for (const [_, value] of abc) {
        if (value < k) return -1; // если хотя бы одного символа меньше k
    }

    // Шаг 3: Инициализация переменных для скользящего окна
    const window = [0, 0, 0]; // текущее количество символов в окне
    let left = 0;
    let max = 0;

    // Шаг 4: Поиск максимального окна, которое оставляет >= k каждого символа снаружи
    for (let right = 0; right < n; right++) {
        // Увеличиваем счётчик символов в окне
        window[s[right].charCodeAt(0) - 'a'.charCodeAt(0)]++;

        // Если условие нарушено, сдвигаем левый указатель
        while (
            left <= right &&
            (abc.get('a')! - window[0] < k ||
                abc.get('b')! - window[1] < k ||
                abc.get('c')! - window[2] < k)
        ) {
            window[s[left].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            left++;
        }

        // Обновляем максимальный размер окна
        max = Math.max(max, right - left + 1);
    }

    // Шаг 5: Ответ — длина строки минус размер максимального окна
    return n - max;
}

console.log(takeCharacters(s, k));
