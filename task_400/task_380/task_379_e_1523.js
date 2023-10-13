// Даны два неотрицательных целых числа, низкое и высокое.
// Возвращает количество нечетных чисел между младшим и старшим(включительно).
// 1523

low = 3, high = 7


var countOdds = function (low, high) {


    //   let quantity = 0;
    const lowEven = (low % 2) ? false : true;
    const highEven = (high % 2) ? false : true;

    // if (lowEven && highEven) {

    //     quantity = (high - low) / 2;
    // } else {
    //     quantity = (Math.floor((high - low) / 2)) + 1;
    // }

    return (lowEven && highEven) ? (high - low) / 2 : (Math.floor((high - low) / 2)) + 1;


    //console.log(quantity)
};



console.log(countOdds(low, high))