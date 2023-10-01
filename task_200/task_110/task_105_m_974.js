// Дан целочисленный массив nums и целое число k, вернуть количество непустых подмассивов, 
// сумма которых делится на k.
// Подмассив — это непрерывная часть массива.
// 974


//nums = [4, 5, 0, -2, -3, 1];
nums = [23, 2, 6, 1, 4, 7]
k = 5;

function subarraysDivByK(nums, k) {
    let count = 0;
    let sum = 0;
    const prefixSum = { 0: 1 };

    for (const num of nums) {
        sum += num;
        const mod = (sum % k + k) % k;

        if (prefixSum[mod]) {
            count += prefixSum[mod];
        }

        prefixSum[mod] = (prefixSum[mod] || 0) + 1;
        console.log(prefixSum)
    }

    return count;

};

console.log(subarraysDivByK(nums, k));