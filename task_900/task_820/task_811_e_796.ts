/**
Учитывая две строки s и target, возвращайте true тогда и только тогда, когда s может стать целью после некоторого количества сдвигов s.
Сдвиг по s заключается в перемещении самого левого символа s в крайнее правое положение.
Например, если s = «abcde», то после одной смены будет «bcdea».
 */

function rotateString(s: string, goal: string): boolean {
    let hash = new Set<string>([goal]);
    let temp = s.split('');
    for (let i = 0; i < s.length; i++) {
        s = s.slice(1) + s[0];
        if (hash.has(s)) return true;
    }
    return false;
}
