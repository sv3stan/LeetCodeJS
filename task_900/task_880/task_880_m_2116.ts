/**
Строка в круглых скобках — это непустая строка, состоящая только из символов «(» и «)». Он действителен, если выполняется любое из следующих условий: Это (). Его можно записать как AB (A, объединенное с B), где A и B — допустимые строки в круглых скобках. Его можно записать как (A), где A — допустимая строка в круглых скобках. Вам дана строка s в круглых скобках и заблокированная строка длиной n. locked — это двоичная строка, состоящая только из «0» и «1». Для каждого индекса i заблокированного Если lock[i] равен «1», вы не можете изменить s[i]. Но если lock[i] равен «0», вы можете изменить s[i] на «(» или «)». Верните true, если вы можете сделать s допустимой строкой в ​​круглых скобках. В противном случае верните false.
 */

function canBeValid(s: string, locked: string): boolean {
    if (s.length % 2 !== 0) {
        return false;
    }

    function isValid(str: string[], locked: string[], symbol: string): boolean {
        let balance = 0;

        for (let i = 0; i < str.length; i++) {
            const currentChar = str[i];

            if (currentChar === symbol || locked[i] === '0') {
                balance++;
            } else {
                balance--;
            }

            if (balance < 0) {
                return false;
            }
        }
        return true;
    }

    const strArr = s.split('');
    const lockedArr = locked.split('');

    return (
        isValid(strArr, lockedArr, '(') &&
        isValid(strArr.reverse(), lockedArr.reverse(), ')')
    );
}
