/**
В английском языке есть понятие, называемое корнем, за которым может следовать какое-либо другое слово, образуя еще одно более длинное слово - давайте назовем это слово производным. Например, когда за корнем "help" следует слово "full", мы можем образовать производное "helpful".
При наличии словаря, состоящего из множества корней, и предложения, состоящего из слов, разделенных пробелами, замените все производные в предложении на корень, который их образует. Если производное может быть заменено более чем одним корнем, замените его корнем, который имеет наименьшую длину.
Верните предложение после замены.
 */

let dictionary = ['cat', 'bat', 'rat'];
let sentence = 'the cattle was rattled by the battery';

let replaceWords = function (dictionary, sentence) {
    const hash = new Set(dictionary);
    const words = sentence.split(' ');
    const result = [];

    for (const word of words) {
        let isFound = false;
        for (let i = 1; i <= word.length; i++) {
            const prefix = word.slice(0, i);
            if (hash.has(prefix)) {
                result.push(prefix);
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            result.push(word);
        }
    }

    return result.join(' ');
};

console.log(replaceWords(dictionary, sentence));
