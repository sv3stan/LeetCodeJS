// Учитывая массив nums целых чисел, вернуть длину самой длинной 
// арифметической подпоследовательности в nums.
// Обратите внимание, что:
// Подпоследовательность — это массив, который может быть получен из другого 
// массива путем удаления некоторых элементов или их отсутствия без изменения порядка оставшихся элементов.
// Последовательность seq является арифметической, если все seq[i + 1] - seq[i] 
// являются одним и тем же значением(для 0 <= i < seq.length - 1).
// 1027

nums = [  20, 1, 15, 3, 10, 5, 8]
nums = [9, 4, 7, 2, 10]

function longestArithSeqLength(nums) {

     const n = nums.length;
    const dp = new Array(n).fill(null).map(() => new Map());

    let maximumSequence = 0;

    for (let i = 0; i < n; i++) {
      //  console.log(' +++++++++++++ ')
        for (let j = 0; j < i; j++) {
          //  console.log(' ------------ ') 
            const difference = nums[i] - nums[j];
          //  console.log(difference + ' - difference')
            if (dp[j].has(difference)) {
                dp[i].set(difference, dp[j].get(difference) + 1);
            } else {
                dp[i].set(difference, 2);
            }
          //  console.log(i + ' - i - ' + j + ' - j - ' + maximumSequence + ' - maximumSequence - ' + dp[i].get(difference) + ' - dp[i].get(difference)- ')
            maximumSequence = Math.max(maximumSequence, dp[i].get(difference));
          //  console.log(maximumSequence + ' - maximumSequence')
          //  console.log(dp)
        }
    }
  
    return maximumSequence;
};

console.log(longestArithSeqLength(nums))










  // //const dp = Array.from({ length: nums.length }).fill(1);

    // // for (let i = 1; i < nums.length; i++)
    // //     for (let j = 0; j < i; j++) {
    // //         if (nums[j] < nums[i]) dp[i]++;
    // //     }
    // // console.log(dp)




    // const n = nums.length;
    // const dp = new Array(n).fill(null).map(() => new Map());

    // let maximumSequence = 0;

    // for (let i = 0; i < n; i++) {
    //     console.log(' +++++++++++++ ')
    //     for (let j = 0; j < i; j++) {
    //         console.log(' ------------ ') 
    //         const difference = nums[i] - nums[j];
    //         console.log(difference + ' - difference')
    //         if (dp[j].has(difference)) {
    //             dp[i].set(difference, dp[j].get(difference) + 1);
    //         } else {
    //             dp[i].set(difference, 2);
    //         }
    //         console.log(i + ' - i - ' + j + ' - j - ' + maximumSequence + ' - maximumSequence - ' + dp[i].get(difference) + ' - dp[i].get(difference)- ')
    //         maximumSequence = Math.max(maximumSequence, dp[i].get(difference));
    //         console.log(maximumSequence + ' - maximumSequence')
    //         console.log(dp)
    //     }
    // }

    // return maximumSequence;
    // // const n = nums.length;
    // // const dp = new Array(n).fill(null).map(() => new Map());

    // // let maximumSequence = 0;

    // // for (let i = 1; i < n; i++) {
    // //    
    // //     for (let j = 0; j < i; j++) {
    // //         
    // //         const difference = nums[i] - nums[j];

    // //         if (dp[j].has(difference)) {
    // //             dp[i].set(difference, dp[j].get(difference) + 1);
    // //         } else {
    // //             dp[i].set(difference, 2);
    // //         }

    // //         console.log(i + ' - i - ' + j + ' - j - ' + maximumSequence + ' - maximumSequence - ' + dp[i].get(difference) + ' - dp[i].get(difference)- ')
    // //         maximumSequence = Math.max(maximumSequence, dp[i].get(difference));
    // //         console.log(maximumSequence + ' - maximumSequence')
    // //         console.log(dp)
    // //     }
    // // }

    // // return maximumSequence;
