// Имеется n человек, которые разбиты на некоторое неизвестное количество групп.
// Каждому человеку присвоен уникальный идентификатор от 0 до n – 1.
// Вам дан целочисленный массив groupSizes, где groupSizes[i] — размер группы, в которой находится человек i.
// Например, если groupSizes[1] = 3, то человек 1 должен находиться в группе размера 3.
// Возвращает список групп, в которых каждый человек i находится в группе размером groupSizes[i].
// Каждый человек должен появиться ровно в одной группе, и каждый человек должен быть в группе.
// Если ответов несколько, верните любой из них.Гарантируется, что для заданных входных данных будет хотя бы одно допустимое решение.
// 1282

groupSizes = [3, 3, 3, 3, 3, 1, 3]

var groupThePeople = function (groupSizes) {
    const answer = [];
    const sizeGroup = {};
    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];
        if (!sizeGroup[size]) {
            sizeGroup[size] = [];
        }
        sizeGroup[size].push(i);
        if (sizeGroup[size].length === size) {
            answer.push(sizeGroup[size]);
            sizeGroup[size] = [];
        }
    }
    return answer;
};

console.log((groupThePeople(groupSizes)))