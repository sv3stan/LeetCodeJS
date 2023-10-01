// Вы профессиональный грабитель, планирующий ограбить дома вдоль улицы.
// В каждом доме спрятана определенная сумма денег.Все дома в этом месте расположены по кругу.
// Это означает, что первый дом является соседом последнего.
// Между тем, в соседних домах подключена система безопасности, и она автоматически свяжется с полицией, 
// если два соседних дома были взломаны в одну и ту же ночь.
// Учитывая целочисленный массив nums, представляющий сумму денег в каждом доме, верните максимальную сумму денег, 
// которую вы можете ограбить сегодня вечером, не предупредив полицию.
// 213



let nums = [1, 2, 3, 1];
//let nums = [2, 7, 9, 3, 1];
//let nums = [1];
//let nums = [2, 1];
//let nums = [2, 3, 2];
//let nums = [];
//let nums = [6, 1, 2, 10, 4]; 
nums = [6, 3, 2, 8, 4, 1, 7];
//nums = [2, 1];
//nums = [2, 3, 2]
//nums = [1, 2, 3]
//nums = [1]
//nums = [1, 2, 1, 1]


function rob(nums) {
    function robRank(nums, start, end) {
        let previousMax = 0;
        let currentMax = 0;

        for (let i = start; i <= end; i++) {
            const temp = currentMax;
            currentMax = Math.max(currentMax, previousMax + nums[i]);
            previousMax = temp;
        }

        return currentMax;

    };

    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    return Math.max(robRank(nums, 0, n - 2), robRank(nums, 1, n - 1));
}



console.log(rob(nums));








    // const length = nums.length;
    // // if (length === 0) return 0;
    // // if (length === 1) return nums[0];
    // if (length < 4) return Math.max(...nums);
    // console.log(' --- ')
    // //const dp = Array.from({ length: length }).fill(0);
    // prevPrevZero = nums[0];
    // prevZero = Math.max(nums[0], nums[1]);
    // currentZero = 0;
    // for (let i = 2; i < length - 1; i++) {
    //     console.log(prevZero + ' - prevZero - ' + prevPrevZero + ' - prevPrevZero - ' + nums[i] + ' - nums[i]')
    //     currentZero = Math.max(prevPrevZero + nums[i], prevZero);
    //     prevPrevZero = prevZero;
    //     prevZero = currentZero;
    //     console.log(currentZero)
    // }

    // prevPrevFirst = nums[1];
    // prevFirst = Math.max(nums[1], nums[2]);
    // currentFirst = 0;
    // for (let i = 3; i < length; i++) {
    //     console.log(prevFirst + ' - prevZero - ' + prevPrevFirst + ' - prevPrevZero - ' + nums[i] + ' - nums[i]')
    //     currentFirst = Math.max(prevPrevFirst + nums[i], prevFirst);
    //     prevPrevFirst = prevFirst;
    //     prevFirst = currentFirst;
    //     console.log(currentFirst)
    // }




    // //console.log(currentZero)
    // return Math.max(currentZero, currentFirst);