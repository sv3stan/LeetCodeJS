/**
You are given two strings start and target, both of length n. Each string consists only of the characters 'L', 'R', and '_' where: The characters 'L' and 'R' represent pieces, where a piece 'L' can move to the left only if there is a blank space directly to its left, and a piece 'R' can move to the right only if there is a blank space directly to its right. The character '_' represents a blank space that can be occupied by any of the 'L' or 'R' pieces. Return true if it is possible to obtain the string target by moving the pieces of the string start any number of times. Otherwise, return false.
Вам даны две строки start и target, обе длины n. Каждая строка состоит только из символов «L», «R» и «_», где: Символы «L» и «R» обозначают фигуры, причем фигура «L» может двигаться влево, только если слева от нее есть пустое место, а фигура «R» может двигаться вправо, только если есть пустое место справа от него. Символ «_» представляет собой пустое пространство, которое может быть занято любой из частей «L» или «R». Возвращайте true, если можно получить цель строки, перемещая части начала строки любое количество раз. В противном случае верните false.
 */

function canChange(start: string, target: string): boolean {
    const n = start.length;

    let startLCount = 0,
        targetLCount = 0;
    let startRCount = 0,
        targetRCount = 0;

    for (let i = 0; i < n; i++) {
        if (start[i] === 'L') startLCount++;
        if (target[i] === 'L') targetLCount++;
        if (start[i] === 'R') startRCount++;
        if (target[i] === 'R') targetRCount++;
    }

    if (startLCount !== targetLCount || startRCount !== targetRCount) {
        return false;
    }

    let i = 0,
        j = 0;

    while (i < n && j < n) {
        while (i < n && start[i] === '_') i++;
        while (j < n && target[j] === '_') j++;

        if (i === n && j === n) return true;

        if (i === n || j === n) return false;

        if (start[i] !== target[j]) return false;

        if (start[i] === 'L' && i < j) return false;
        if (start[i] === 'R' && i > j) return false;

        i++;
        j++;
    }

    return true;
}
