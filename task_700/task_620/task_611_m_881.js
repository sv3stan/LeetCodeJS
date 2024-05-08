/*
Вам дан массив люди, где люди[i] — это вес i-го человека, и бесконечное количество лодок, каждая из которых может перевозить максимальный вес. Каждая лодка перевозит не более двух человек одновременно, при условии, что сумма веса этих людей не превышает предела.
Верните минимальное количество лодок, способных перевезти каждого данного человека.
*/

let people = [3, 5, 3, 4];

people = [5, 4, 3, 3, 3, 2, 1];
people = [2, 4];
people = [2, 2];
let limit = 5;

let numRescueBoats = function (people, limit) {
    people.sort((a, b) => b - a);

    let left = 0;
    let right = people.length - 1;
    let count = 0;

    while (left <= right) {
        if (people[left] < limit) {
            if (
                people[left] + people[right] === limit ||
                people[left] + people[right] < limit
            ) {
                count++;
                left++;
                right--;
            } else {
                count++;
                left++;
            }
        } else {
            count++;
            left++;
        }
    }
    return count;
};

console.log(numRescueBoats(people, limit));
