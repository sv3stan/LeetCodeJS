// Разработайте систему оценки продуктов питания,
//     которая может выполнять следующие функции:
// Измените рейтинг продукта, указанного в системе.
// Возвращает продукт с самым высоким рейтингом для типа кухни в системе.

// Реализуйте класс FoodRatings:
// FoodRatings(String[] foods, String[] cuisines, int[] ratings) Инициализирует систему.
// Продукты питания описываются foods, cuisines и ratings, каждая из которых имеет длину n.
//         food[i] — название i - го блюда,
//         cuisine[i] — это тип кухни i - го блюда, а
//         ratings[i] — начальный рейтинг i - го блюда.

//     voidchangeRating(String food, int newRating) Изменяет рейтинг продукта с названием food.

//     String highestRated(String cuisine) Возвращает название продукта, 
//     имеющего наивысший рейтинг для данного типа кухни.

//     Если есть ничья, верните элемент с лексикографически меньшим именем.
// Обратите внимание, что строка x лексикографически меньше строки y, 
// если x стоит перед y в словарном порядке, то есть либо x является префиксом y, 
// либо если i является первой позицией такой, 
// что x[i] != y[i], то x[i] предшествует y[i] в ​​алфавитном порядке.

// 2353


/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */

const foodRatings = [[["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7]], ["korean"], ["japanese"], ["sushi", 16], ["japanese"], ["ramen", 16], ["japanese"]]

var FoodRatings = function (inputFoods, inputCuisines, inputRatings) {
    const n = inputFoods.length

    const foodHash = new Map()
    const cuisineHash = new Map()
    const foodRatingHash = new Map()

    for (let i = 0; i < n; i++) {
        const food = inputFoods[i]
        const cuisine = inputCuisines[i]
        const rating = inputRatings[i]
        if (!foodHash.has(food)) foodHash.set(food, cuisine)
        if (!cuisineHash.has(cuisine)) {
            const foodRating = new PriorityQueue({ compare: (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]) })
            cuisineHash.set(cuisine, foodRating)
        }
        const foodRating = cuisineHash.get(cuisine)
        foodRating.enqueue([food, rating])
        foodRatingHash.set(food, rating)
    }

    /** 
     * @param {string} food 
     * @param {number} newRating
     * @return {void}
     */
    FoodRatings.prototype.changeRating = function (targetFood, updatedRating) {
        const cuisine = foodHash.get(targetFood)
        const foodRating = cuisineHash.get(cuisine)
        const [food, rating_unused] = foodRating.front()
        if (food === targetFood) foodRating.dequeue()
        foodRating.enqueue([targetFood, updatedRating])
        foodRatingHash.set(targetFood, updatedRating)
    };

    /** 
     * @param {string} cuisine
     * @return {string}
     */
    FoodRatings.prototype.highestRated = function (targetCuisine) {
        const foodRating = cuisineHash.get(targetCuisine)
        while (1) {
            const [food, rating] = foodRating.front()
            const newRating = foodRatingHash.get(food)
            if (rating === newRating) return food
            else {
                foodRating.dequeue()
                foodRating.enqueue([food, newRating])
            }
        }
    }
};



var obj = new FoodRatings(foods, cuisines, ratings)
obj.changeRating(food, newRating)
var param_2 = obj.highestRated(cuisine)


console.log(foodRatings.highestRated("korean"));