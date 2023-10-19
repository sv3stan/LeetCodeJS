// Дан массив целых чисел nums, отсортируйте массив в порядке 
// возрастания в зависимости от частоты значений.
// Если несколько значений имеют одинаковую частоту, 
// отсортируйте их в порядке убывания.
// Вернуть отсортированный массив.
// 1636


nums = [2, 3, 1, 3, 2];

var frequencySort = function (nums) {

    const hash = new Map();
    for (const num of nums) hash.set(num, (hash.get(num) || 0) + 1);

    //console.log(hash);

    //  const entry = hash.entries();
    // console.log(entry)
    //const sorted = [...entry].sort((a, b) => hash.get(a[0]) - hash.get(b[0]));

    const sorted = nums.slice();
    sorted.sort((a, b) => {

        if (hash.get(a) !== hash.get(b)) {
            return hash.get(a) - hash.get(b)
        } else {
            return b - a;
        }


    })

    //console.log(sorted)
    return sorted;


    // //sorted.reduce((acc, item) => acc += item.repeat(hash.get(item)), '')

    // // Шаг 1: Создаем объект для подсчета частоты чисел
    // const frequencyMap = {};

    // // Шаг 2: Заполняем frequencyMap
    // for (const num of nums) {
    //     frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    // }

    // // Шаг 3: Создаем новый массив и сортируем его
    // const sortedNums = nums.slice(); // Копируем массив, чтобы не изменять исходный
    // sortedNums.sort((a, b) => {
    //     if (frequencyMap[a] !== frequencyMap[b]) {
    //         return frequencyMap[a] - frequencyMap[b]; // По частоте (возрастание)
    //     } else {
    //         return b - a; // По значению (убывание)
    //     }
    // });

    // // Шаг 4: Возвращаем отсортированный массив
    // return sortedNums;



};


console.log(frequencySort(nums))