// Вам дан вложенный список целых чисел nestedList. 
// Каждый элемент представляет собой либо целое число, либо список, 
// элементы которого также могут быть целыми числами или другими списками.
// Реализуйте итератор, чтобы сгладить его.

// Реализуйте класс NestedIterator:

// NestedIterator(List < NestedInteger > nestedList) 
// Инициализирует итератор с помощью вложенного списка nestedList.
// int next() Возвращает следующее целое число во вложенном списке.

// boolean hasNext() Возвращает true, если во вложенном списке еще 
// есть целые числа, и false в противном случае.

//341

nestedList = [[1, 1], 2, [1, 1]]

class NestedIterator {

    constructor(nestedList) {
        this.answer = this.flatten(nestedList);
        this.index = 0;
    }

    flatten = function (list) {
        const result = [];
        for (let item of list)
            (item.isInteger()) ? result.push(item.getInteger()) : result.push(...this.flatten(item.getList()));
        return result;
    }

    hasNext = function () {
        return this.index < this.answer.length;
    }

    next = function () {
        return this.answer[this.index++];
    }
}



let i = new NestedIterator(nestedList);
//i.next();
console.log(i)
asd = i.value;
console.log(asd)
asd = i.value;
console.log(asd)

let sdf = i.hasNext();
console.log(sdf)
//let a = [];
//while (i.hasNext()) a.push(i.next());
