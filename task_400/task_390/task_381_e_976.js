// Учитывая целочисленный массив nums, верните наибольший периметр 
// треугольника с ненулевой площадью, образованный из трех из этих длин.
// Если невозможно сформировать треугольник ненулевой площади, верните 0.
// 976

nums = [2, 1, 2];
nums = [9, 8, 7, 6, 5, 4, 3];
var largestPerimeter = function (nums) {

    const sorted = nums.sort((a, b) => b - a)

    let max = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = nums.length; k > j; k--) {
                console.log()
                if (k + j <= i && k + j + i > max) max = k + j + i;

            }
        }
    }


    return max

};



console.log(largestPerimeter(nums))