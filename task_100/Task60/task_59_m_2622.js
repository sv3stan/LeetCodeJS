// Напишите класс, который позволяет получать и устанавливать пары ключ - значение, 
// однако время до истечения срока действия связано с каждым ключом.
// Класс имеет три общедоступных метода:
// set(key, value, duration): принимает целочисленный ключ, целочисленное значение и 
// продолжительность в миллисекундах.По истечении этого времени ключ должен быть недоступен.
// Метод должен возвращать true, если такой же неистекший ключ уже существует, 
// и false в противном случае.И значение, и продолжительность должны быть перезаписаны, если ключ уже существует.
// get(key): если существует ключ с неистекшим сроком действия, он должен вернуть соответствующее значение.
// В противном случае он должен вернуть - 1.
// count(): возвращает количество неистекших ключей.
//2622

var TimeLimitedCache = function () {
    this.cache = [];
    this.timerId;
    setInterval(() => console.log(this.cache), 100)
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
    const existingIndex = this.cache.findIndex(subarray => subarray[0] === key);
    if (existingIndex !== -1) {
        clearTimeout(this.cache[existingIndex][3]);
        console.log(...arguments)
        this.cache[existingIndex] = [key, value, duration];
    } else {

        this.cache.push([key, value, duration]);
    }

    this.timerId = setTimeout(() => {

        const index = this.cache.findIndex(subarray => subarray[0] === key);
        if (index !== -1) {
            this.cache.splice(index, 1);
        }
    }, duration);
    let subarray = this.cache.find(arr => arr.includes(key));
    subarray.push(this.timerId);

    return existingIndex !== -1;
};
TimeLimitedCache.prototype.get = function (key) {

    if (this.cache.some(subarray => subarray[0] === key)) {
        let index = this.cache.findIndex(subarray => subarray[0] === key);

        return this.cache[index][1];
    } else {
        return -1;
    }

};
TimeLimitedCache.prototype.count = function () {
    return this.cache.length;
};


var obj = new TimeLimitedCache()
obj.set(1, 42, 500); // false
obj.set(2, 54, 600); // false

obj.set(1, 842, 800); // false
obj.set(4, 82, 1000); // false
obj.set(7, 118, 200); // false
obj.set(3, 76, 700); // false
console.log(obj.get(2)); // 42
console.log(obj.count()); // 1


//setTimeout(obj.count(), 200)

















// TimeLimitedCache.prototype.set = function (key, value, duration) {

//     if (this.cache.some(subarray => subarray[0] === key)) {
//         let index = this.cache.findIndex(subarray => subarray[0] === key);
//         this.cache[index] = [key, value, duration];
//         clearTimeout(this.timerId);
//         this.timerId = setTimeout(() => {
//             let index = this.cache.findIndex(subarray => subarray[0] === key);
//             if (index !== -1) {
//                 this.cache.splice(index, 1);
//             }
//         }, duration);
//         return true;
//     } else {
//         this.cache.push([key, value, duration]);
//         this.timerId = setTimeout(() => {
//             let index = this.cache.findIndex(subarray => subarray[0] === key);
//             if (index !== -1) {
//                 this.cache.splice(index, 1);
//             }
//         }, duration);
//         return false;
//     }
// };