/*
Есть бутылки с водой numBottles, которые изначально полны воды. Вы можете обменять numExchange пустые бутылки с водой с рынка на одну полную бутылку с водой.
Выпивание полной бутылки с водой превращает ее в пустую бутылку.
Учитывая два целых числа numBottles и numExchange, верните максимальное количество бутылок с водой, которые вы можете выпить.
*/
let numBottles = 9;
let numExchange = 3;

let numWaterBottles = function (numBottles, numExchange) {
    let temp = numBottles;
    let remained = 0;
    let drunk = 0;

    while (temp >= numExchange) {
        remained = temp % numExchange;

        console.log('🚀 ~ numWaterBottles ~ remained:', remained);

        temp = Math.floor(temp / numExchange);

        console.log('🚀 ~ numWaterBottles ~ temp:', temp);

        drunk += temp;

        temp += remained;
    }
    return drunk + numBottles;
};

console.log(numWaterBottles(numBottles, numExchange));
