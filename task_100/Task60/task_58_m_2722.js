// Учитывая два массива arr1 и arr2, вернуть новый массивjoinArray.
// Все объекты в каждом из двух входных массивов будут содержать поле id 
// с целочисленным значением.joinedArray — это массив, образованный 
// объединением arr1 и arr2 на основе их id - ключа.Длина joinArray 
// должна быть длиной уникальных значений id.Возвращаемый массив должен 
// быть отсортирован в порядке возрастания на основе ключа id.
// Если данный идентификатор существует в одном массиве, но не существует
// в другом, единственный объект с этим идентификатором должен быть включен
// в массив результатов без изменений.
// Если два объекта имеют общий идентификатор, их свойства должны быть 
// объединены в один объект:
// Если ключ существует только в одном объекте, эта единственная пара 
// ключ - значение должна быть включена в объект.
// Если ключ включен в оба объекта, значение в объекте из arr2 должно 
// переопределять значение из arr1.
//2722

// let arr1 = [
//     { "id": 1, "x": 1 },
//     { "id": 2, "x": 9 }
// ];
// let arr2 = [
//     { "id": 3, "x": 5 }

// ];

// let arr1 = [{ "id": 1, "x": 6 }];
// let arr2 = [{ "id": 1, "x": 15, "y": 7 }, { "id": 2, "x": 9, "y": 18 }];

let arr1 = [
    { "id": 1, "x": 2, "y": 8 },
    { "id": 2, "x": 3, "y": 6 },
    { "id": 6, "x": 4, "y": 36 },
    { "id": 3, "x": 0, "y": 0, "z": 4 },
    { "id": 4, "x": 8, "y": 7 },
    { "id": 5, "x": 13, "y": 26 }
];
let arr2 = [
    { "id": 8, "x": 23, "y": 118, "k": 811 },
    { "id": 2, "x": 10, "y": 20 },
    { "id": 3, "x": 0, "y": 5 },
    { "id": 4, "x": 13, "y": 18 },
    { "id": 7, "x": 23, "y": 118 }
];

// let arr1 = [
//     { "id": 1, "b": { "b": 94 }, "v": [4, 3], "y": 48 }
// ];
// let arr2 = [
//     { "id": 1, "b": { "c": 84 }, "v": [1, 3] }
// ];

function join(arr1, arr2) {

    arr1.sort((a, b) => a.id - b.id);
    arr2.sort((a, b) => a.id - b.id);
    let left = 0;
    let right = 0;

    const joinArray = [];

    while (left < arr1.length && right < arr2.length) {

        if (arr1[left].id === arr2[right].id) {
            joinArray.push({ ...arr1[left], ...arr2[right] });
            left++;
            right++;
            continue;
        };

        if (arr1[left].id < arr2[right].id) {
            joinArray.push({ ...arr1[left] });
            left++;
            continue;
        };

        joinArray.push({ ...arr2[right] });
        right++;
    };

    while (left < arr1.length) {
        joinArray.push({ ...arr1[left] });
        left++;
    };

    while (right < arr2.length) {
        joinArray.push({ ...arr2[right] });
        right++;
    };

    return joinArray;
}





console.log(join(arr1, arr2));












    // let hashTable = {};

    // arr1.forEach(item => {
    //     hashTable[item.id] = item;
    // });

    // arr2.forEach(item => {
    //     let existingItem = hashTable[item.id];
    //     if (existingItem) {
    //         Object.assign(existingItem, item);
    //     } else {
    //         hashTable[item.id] = item;
    //     }
    // });

    // let joinArray = Object.values(hashTable);
    // let idArray = joinArray.map(item => item.id);
    // joinArray.sort((a, b) => {
    //     return idArray.indexOf(a.id) - idArray.indexOf(b.id);
    // });

    // return joinArray;









// function join(arr1, arr2) {
//     let arrayId = [];
//     let joinArray = [];

//     arr1.forEach(item => arrayId.push(item.id));
//     arr2.forEach(item => {
//         if (!arrayId.includes(item.id)) {
//             arrayId.push(item.id)
//         }
//     });
//     arrayId.forEach(element => {
//         let foundItem1 = [];
//         let foundItem2 = [];
//         foundItem1 = arr1.find(item => item.id === element);
//         if (!foundItem1) {
//             joinArray.push(arr2.find(item => item.id === element));
//         }
//         foundItem2 = arr2.find(item => item.id === element);
//         if ((foundItem1) && (foundItem2)) {
//             keysItem2 = Object.keys(foundItem2);
//             keysItem1 = Object.keys(foundItem1);
//             for (let i = 0; i < keysItem2.length; i++) {
//                 for (let j = 0; j < keysItem1.length; j++) {
//                     foundItem1[keysItem2[i]] = foundItem2[keysItem2[i]];
//                 }
//             }
//         }
//         if (foundItem1) joinArray.push(foundItem1);
//     });
//     joinArray.sort((a, b) => a.id - b.id);
//     return joinArray;
// };
