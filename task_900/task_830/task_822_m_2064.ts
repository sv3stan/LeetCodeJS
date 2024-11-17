/**
Medium Topics Companies Hint You are given an integer n indicating there are n specialty retail stores.There are m product types of varying amounts, which are given as a 0-indexed integer array quantities, where quantities[i] represents the number of products of the ith product type. You need to distribute all products to the retail stores following these rules: A store can only be given at most one product type but can be given any amount of it. After distribution, each store will have been given some number of products (possibly 0).Let x represent the maximum number of products given to any store.You want x to be as small as possible, i.e., you want to minimize the maximum number of products that are given to any store. Return the minimum possible x.
Середина Темы Компании Намекать Вам дано целое число n, обозначающее, что существует n специализированных розничных магазинов. Существует m типов продуктов с различным количеством, которые задаются в виде целочисленного массива с нулевым индексом, где количество [i] представляет количество продуктов i-го типа продукта. Вам необходимо распространять всю продукцию в розничные магазины, соблюдая следующие правила: Магазину может быть предоставлен не более одного типа продукта, но может быть предоставлено любое его количество. После распределения каждому магазину будет предоставлено некоторое количество товаров (возможно, 0). Пусть x представляет максимальное количество товаров, поставляемых в любой магазин. Вы хотите, чтобы x было как можно меньшим, т. е. вы хотите минимизировать максимальное количество продуктов, поставляемых в любой магазин. Вернуть минимально
 */

let n = 7;
let quantities = [15, 10, 10];

function minimizedMaximum(n: number, quantities: number[]): number {
    let left = 1;
    let right = Math.max(...quantities);
    while (left < right) {
        const middle = Math.floor((left + right) >> 1);
        if (helper(n, middle, quantities)) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return left;

    function helper(n: number, x: number, quantities: number[]): boolean {
        let stores = 0;
        for (const quantity of quantities) {
            stores += Math.ceil(quantity / x);
            if (stores > n) return false;
        }
        return stores <= n;
    }
}

console.log(minimizedMaximum(n, quantities)); // 5
