// Учитывая массив целых чисел arr, верните true, 
// если количество вхождений каждого значения в массиве уникально, или false в противном случае.
// 1207


arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0, 0]
arr = [1, 2, 2, 1, 1, 3]
//arr = [1, 2]
var uniqueOccurrences = function (arr) {
    //const length = arr.length - 1;
    const hash = new Map();
    const unique = new Set();
    arr.forEach(element => hash.set(element, (hash.get(element) ?? 0) + 1));

    // for (let i = 0; i <= length; i++) {
    //     hash.set(arr[i], (hash.get(arr[i]) ?? 0) + 1);
    // }

    for (const value of hash.values()) {
        console.log(value)
        if (unique.has(value)) {
            return false;
        } else {
            unique.add(value)
        }
    }
    console.log(hash)

    return true;

};


console.log(uniqueOccurrences(arr))