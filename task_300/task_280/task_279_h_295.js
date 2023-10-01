// Медиана — это среднее значение в упорядоченном целочисленном списке.Если размер списка четный, 
// среднего значения нет, а медиана — это среднее значение двух средних значений.
// Например, для arr = [2, 3, 4] медиана равна 3.
// Например, для arr = [2, 3] медиана равна(2 + 3) / 2 = 2, 5.
// Реализуйте класс MedianFinder:
// MedianFinder() инициализирует объект MedianFinder.
// void addNum(int num) добавляет целое число из потока данных в структуру данных.
// double findMedian() возвращает медиану всех элементов на данный момент.
// Принимаются ответы в пределах 10 - 5 от фактического ответа.

// 295




var MedianFinder = function () {
    this.array = [];
};


MedianFinder.prototype.addNum = function (num) {

    this.array.push(num)
    console.log(this.array)

};

MedianFinder.prototype.findMedian = function () {
    const length = this.array.length;

    this.array.sort((a, b) => a - b);

    if (length % 2 === 0) {

        console.log(length + ' ---- lengh --------------')
        var middle1 = this.array[(length >> 1) - 1];
        var middle2 = this.array[length >> 1];
        console.log(middle1 + ' = middle1')
        console.log(middle2 + ' = middle2')
        return (middle1 + middle2) / 2;


    } else {
        // console.log(length + ' ---- lengh')
        // console.log(this.array[length >> 1])
        return this.array[length >> 1];

    }



};
var obj = new MedianFinder()

num = 1;

obj.addNum(num)
num = 2;
obj.addNum(num)
console.log(obj.findMedian())
num = 3;
obj.addNum(num)
console.log(obj.findMedian())



// num = 6;
// obj.addNum(num)
// console.log(obj.findMedian() + ' ------ obj.findMedian()')

// num = 10;
// obj.addNum(num)
// console.log(obj.findMedian())

// num = 2;
// obj.addNum(num)
// console.log(obj.findMedian())

// num = 6;
// obj.addNum(num)
// console.log(obj.findMedian())

// num = 5;
// obj.addNum(num)
// console.log(obj.findMedian())
