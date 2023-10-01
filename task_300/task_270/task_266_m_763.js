// Вам дана строка s.Мы хотим разделить строку на как можно большее количество частей, 
// чтобы каждая буква появлялась не более чем в одной части.
// Обратите внимание, что разбиение выполнено так, что после объединения всех частей 
// по порядку результирующая строка должна быть s.
// Верните список целых чисел, представляющих размер этих частей.
// 763



s = "ababcbacadefegdehijhklij";

var partitionLabels = function (s) {

    const lastIndex = {};
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }

    const answer = [];
    let begin = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex[s[i]]);

        if (i === end) {
            answer.push(end - begin + 1);
            begin = i + 1;
        }
    }

    return answer;



};

console.log(partitionLabels(s))