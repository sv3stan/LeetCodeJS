// Учитывая массив строковых слов и ширину maxWidth, отформатируйте текст так, 
// чтобы каждая строка содержала ровно символы maxWidth и была полностью(влево и вправо) выровнена.
// Вам следует жадно упаковывать свои слова; то есть упакуйте как можно больше слов в каждую строку.
// При необходимости добавьте дополнительные пробелы, чтобы каждая строка содержала ровно символы maxWidth.
// Лишние пробелы между словами должны быть распределены максимально равномерно.
// Если количество пробелов в строке не делится поровну между словами, 
// пустым местам слева будет назначено больше пробелов, чем местам справа.
// Последняя строка текста должна быть выровнена по левому краю, между словами не должно быть лишних пробелов.
//     Примечание:
// Слово определяется как последовательность символов, состоящая только из символов, не являющихся пробелами.
// Длина каждого слова гарантированно больше 0 и не превышает maxWidth.
// Слова входного массива содержат хотя бы одно слово.
// 68


words = ["Th", "is", "a", "n", "example", "of", "text", "justification."], maxWidth = 16
words = ["What", "must", "be", "acknowledgment", "shall", "be"], maxWidth = 16
//words = ["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"], maxWidth = 20

var fullJustify = function (words, maxWidth) {

    const answer = [];
    let currentLineLength = [];
    let currentWidth = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (currentWidth + currentLineLength.length + word.length <= maxWidth) {
            currentLineLength.push(word);
            currentWidth += word.length;
        } else {
            answer.push(justificatedLine(currentLineLength, currentWidth, maxWidth));
            currentLineLength = [word];
            currentWidth = word.length;
        }
    }

    if (currentLineLength.length > 0) {
        answer.push(leftJustification(currentLineLength, maxWidth));
    }

    return answer;
}

function justificatedLine(words, currentWidth, maxWidth) {
    if (words.length === 1) {
        return words[0].padEnd(maxWidth, ' ');
    }

    const tnumberOfSpaces = maxWidth - currentWidth;
    const gaps = words.length - 1;
    const spacesPerGap = Math.floor(tnumberOfSpaces / gaps);
    const extraSpaces = tnumberOfSpaces % gaps;

    let justifiedLine = '';

    for (let i = 0; i < words.length - 1; i++) {
        const spaces = spacesPerGap + (i < extraSpaces ? 1 : 0);
        justifiedLine += words[i] + ' '.repeat(spaces);
    }

    justifiedLine += words[words.length - 1];

    return justifiedLine;
}

function leftJustification(words, maxWidth) {
    const line = words.join(' ');
    return line + ' '.repeat(maxWidth - line.length);
}






console.log(fullJustify(words, maxWidth))

































 // const formatedArray = [];
    // let currentString = '';
    // let currentLength = 0;
    // for (let i = 0; i < words.length; i++) {
    //     console.log('  ++++++++++++++++++++++   ')
    //     let currentWord = words[i];
    //     console.log(currentWord + ' - currentWord - ' + currentWord.length)
    //     //  console.log(currentString + ' - currentString.length - ' + currentString.length)
    //     console.log(currentLength + ' - currentLength - ' + maxWidth)
    //     //console.log(currentLength + currentWord.length + '- currentLength + currentWord.length');
    //     if (currentLength + currentWord.length <= maxWidth) {
    //         console.log(' if ')
    //         currentString += currentWord + ' ';
    //         currentLength += currentWord.length + 1;
    //     } else {

    //         console.log(' else ')
    //         currentString = currentString.slice(0, -1);
    //         currentLength = currentWord.length - 1;
    //         console.log(currentLength + ' - currentLength - ')
    //         console.log(currentString + ' - currentString')
    //         formatedArray.push(currentString);
    //         currentString = '';
    //         currentString += currentWord + ' ';
    //         currentLength = currentString.length;
    //         if (currentLength > 0) formatedArray.push(currentString);



    //     }
    //     console.log(i + ' - i')
    //     console.log(formatedArray)

    //     console.log(currentString + ' - currentString Last')

    // }