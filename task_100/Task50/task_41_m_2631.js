// Напишите код, улучшающий все массивы, чтобы вы могли вызывать метод array.groupBy(fn) для любого массива, 
// и он возвращал сгруппированную версию массива.
// Сгруппированный массив — это объект, в котором каждый ключ является результатом функции fn(arr[i]), 
// а каждое значение — это массив, содержащий все элементы исходного массива с этим ключом.
// Предоставленный обратный вызов fn примет элемент в массиве и вернет строковый ключ.
// Порядок каждого списка значений должен быть порядком, в котором элементы появляются в массиве.
// Допустим любой порядок ключей.
// Пожалуйста, решите это без функции lodash _.groupBy.
// 2631

// let arr = [
//     { "id": "1" },
//     { "id": "1" },
//     { "id": "2" }
// ];
// let fn = function (item) {
//     return item.id;
// }

let arr = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9],
    [2, 4, 6],
];
let fn = function (list) {
    return String(list[0]);
}


//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let fn = function (n) {
//   return String(n > 5);
//};

Array.prototype.groupBy = function (fn) {
    const grouped = {};
    for (let element = 0; element < this.length; element++) {

        const temp = this[element];
        //const item = fn(temp);
        (grouped[fn(temp)]) ? grouped[fn(temp)].push(temp) : grouped[fn(temp)] = [temp];
        //(grouped[item]) ? grouped[item].push(temp) : grouped[item] = [temp];

    }
    console.log(grouped);
    return grouped;
};
//const numbers = [1, 2, 3, 4, 5, 6];
//const groups = numbers.groupBy((num) => num % 2 === 0 ? 'even' : 'odd');

//console.log(groups);

arr.groupBy(fn) // {"1":[1],"2":[2],"3":[3]}

