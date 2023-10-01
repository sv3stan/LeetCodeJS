// Учитывая целочисленный массив nums и целое число k,
// вернуть k наиболее часто встречающихся элементов.
// Вы можете вернуть ответ в любом порядке.

// var topKFrequent = function (nums, k) {
//     let findObj = [];
//     let kArray = [];
//     for (let i = 0; i < nums.length; i++) {
//         const result = nums.reduce(
//             (acc, item) => {
//                 if (item == nums[i]) {
//                     acc.count++;
//                     acc.item = nums[i];
//                     //acc.index = i;
//                 }
//                 return acc;
//             },
//             { count: 0, item: 0 }
//         );
//         if (
//             !findObj.find(
//                 (obj) => obj.count === result.count && obj.item === result.item
//             )
//         ) {
//             findObj.push(result);
//         }
//     }

//     findObj.sort((a, b) => b.count - a.count);

//     for (let i = 0; i < k; i++) {
//         kArray.push(findObj[i].item);
//     }

//     //console.log(findObj);
//     console.log(kArray);
// };

numus = [1, 1, 1, 2, 2, 3];

var topKFrequent = function (nums, k) {
    const frequencyMap = new Map();

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const entries = Array.from(frequencyMap.entries());

    entries.sort((a, b) => b[1] - a[1]);

    const kArray = entries.slice(0, k).map(([item]) => item);

    console.log(kArray);
};

topKFrequent(numus, 2);
