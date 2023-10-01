// Есть n детей с конфетами.Вам дан целочисленный массив конфет, где каждая конфета[i] представляет количество конфет, 
// которое есть у i - го ребенка, и целое число extraCandies, обозначающее количество дополнительных конфет, которые у вас есть.
// Возвращает результат логического массива длины n, где результат[i] равен true, 
// если после передачи i - му ребенку всех extraCandies у него будет наибольшее количество конфет среди всех детей, или false в противном случае.
// Обратите внимание, что несколько детей могут иметь наибольшее количество конфет.
// 1431

candies = [2, 3, 5, 1, 3];
extraCandies = 3

function kidsWithCandies(candies, extraCandies) {
    const maximumСandies = Math.max(...candies);
    const result = [];
    for (let i = 0; i < candies.length; i++) {
        if (maximumСandies <= (candies[i] + extraCandies)) {
            result.push(true)
        } else {
            result.push(false);
        }
    }
    return result;
};


console.log(kidsWithCandies(candies, extraCandies))