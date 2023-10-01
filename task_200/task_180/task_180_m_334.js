// Учитывая целочисленный массив nums, верните true, если существует тройка индексов(i, j, k) такая, 
// что i < j < k и nums[i] < nums[j] < nums[k].Если таких индексов не существует, верните false.
// 334

nums = [2, 1, 5, 5, 4, 6]

var increasingTriplet = function (nums) {

    let firstItem = Infinity;
    let secondItem = Infinity;

    for (const num of nums) {
        if (num <= firstItem) {
            firstItem = num;
        } else if (num <= secondItem) {
            secondItem = num;
        } else {
            console.log(firstItem + ' - firstItem -' + secondItem + ' - secondItem ------------------------')
            return true;
        }
        console.log(firstItem + ' - firstItem -' + secondItem + ' - secondItem -')
    }

    return false;

};

console.log(increasingTriplet(nums))