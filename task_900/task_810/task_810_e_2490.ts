/**
Предложение — это список слов, разделенных одним пробелом, без начальных и конечных пробелов.
Например, «Hello World», «HELLO», «Hello World, Hello World» — все это предложения.
Слова состоят только из заглавных и строчных английских букв. Прописные и строчные английские буквы считаются разными.
Предложение является кольцевым, если:
Последний символ слова равен первому символу следующего слова.
Последний символ последнего слова равен первому символу первого слова.
Например, «упражнения по литкоду звучат восхитительно», «eetcode», «leetcode ест душу» — все это круговые предложения. Однако «Leetcode — это круто», «Счастливый Leetcode», «Leetcode» и «Мне нравится Leetcode» — это не круговые предложения.
Учитывая строковое предложение, верните true, если оно имеет циклическую форму. В противном случае верните false.
 */

function isCircularSentence(sentence: string): boolean {
    const firstChar = sentence[0];
    const lastChar = sentence[sentence.length - 1];
    const temp = sentence.split(' ');
    if (firstChar !== lastChar) return false;
    for (let i = 1; i < temp.length; i++) {
        if (temp[i - 1][temp[i - 1].length - 1] !== temp[i][0]) return false;
    }
    return true;
}
