// Учитывая целочисленный массив nums, отсортированный
// в неубывающем порядке, удалите дубликаты на месте, 
// чтобы каждый уникальный элемент появлялся только один раз.
// Относительный порядок элементов должен быть сохранен.
// Затем верните количество уникальных элементов в nums.
// Считайте, что количество уникальных элементов nums равно k,
// чтобы вас приняли, вам нужно сделать следующее:
// Измените массив nums так, чтобы первые k элементов nums 
// содержали уникальные элементы в том порядке, в котором они 
// изначально присутствовали в nums.Остальные элементы nums 
// не важны, как и размер nums.
// Вернуться к.
// 26

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
//let nums = [1, 1, 2];

function removeDuplicates(nums) {

    let i = 0;
    let pointer = nums[0];
    if (nums.length == 0) {
        return 0;
    }
    while (i < nums.length - 1) {
        if (pointer == nums[i + 1]) {
            nums.splice(i + 1, 1)
        } else {
            i++;
            pointer = nums[i];
        }
    }

    console.log(nums);
    return nums.length;


    // let i = 0;
    // let pointer = nums[0];
    // let numsLength = nums.length;
    // if (nums.length == 0){
    //     return 0;
    // }


    // let count = 1; // количество уникальных элементов
    // let prev = nums[0]; // предыдущий элемент

    // for (let i = 1; i < nums.length; i++) {
    //     if (prev !== nums[i]) {
    //         nums[count] = nums[i]; // записываем уникальный элемент на текущую позицию
    //         count++;
    //         prev = nums[i]; // обновляем предыдущий элемент
    //     }
    // }
    // console.log(nums);
    // return count;


    // while (i < nums.length - 1) {
    //     if (pointer == nums[i + 1]) {
    //         nums.splice(i + 1, 1)
    //         //console.log(nums);
    //         //console.log(nums.length);
    //         //nums[numsLength - 1] = '_';
    //         //console.log(nums);
    //         //console.log(nums.length);

    //     } else {
    //         i++;
    //         pointer = nums[i];
    //     }
    // }
    // //nums.sort((a, b) => a - b);
    // console.log(nums);

    // return nums.length;

    // while (i < nums.length - 1) {
    //     if (pointer == nums[i + 1]) {
    //         nums[i + 1] = '';
    //         i++;
    //     } else {
    //         i++;
    //         pointer = nums[i];
    //     }
    // }
    // nums.sort((a, b) => a - b);
    // console.log(nums);
    // if (nums.length < 2) return nums.length;
    // let slow = 0;
    // for (let fast = 1; fast < nums.length; fast++) {
    //     if (nums[slow] != nums[fast]) {
    //         slow++;
    //         nums[slow] = nums[fast];
    //     }
    // }
    // console.log(nums);
    // return slow + 1;



};

console.log(removeDuplicates(nums));