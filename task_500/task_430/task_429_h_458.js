// Бывают buckets с жидкостью, из которых ровно одно из ведер ядовито.
// Чтобы выяснить, какой из них ядовит, вы кормите жидкостью некоторое
// количество(бедных) свиней и смотрите, умрут они или нет.К сожалению,
// у вас есть только minutesToTest, чтобы определить,
// какая корзина опасна.
// Кормить свиней можно следующим образом:
// 1. Выберите несколько живых свиней для кормления.
// 2. Для каждой свиньи выберите, в какие ведра ее кормить.
// 3. Свинья съест все выбранные ведра одновременно и не займет много времени.
// Каждую свинью можно кормить из любого количества ведер,
// а из каждого ведра можно кормить любое количество свиней.
// 4. Подождите minutesToDie.
// В это время нельзя кормить других свиней.
// По прошествии нескольких минут minutesToDie все свиньи,
// которых кормили ядовитым ведром, умрут, а все остальные выживут.
// Повторяйте этот процесс, пока у вас не закончится время.
// Учитывая buckets, minutesToDie и minutesToTest, верните минимальное 
// количество свиней, необходимое, чтобы выяснить, какое ведро является ядовитым, 
// в течение отведенного времени.
// 458



buckets = 4, minutesToDie = 15, minutesToTest = 15;
buckets = 4, minutesToDie = 15, minutesToTest = 30


var poorPigs = function (buckets, minutesToDie, minutesToTest) {

    const facktorial = Array.from({ length: 11 }).fill(1);
    for (let i = 1; i <= 10; i++) facktorial[i] = facktorial[i - 1] * i;

    minutesToTest = Math.floor(minutesToTest / minutesToDie);

    if (buckets === 1) return 0;

    const dp = Array.from({ length: 11 }, () => Array(minutesToTest + 1).fill(0));

    for (let i = 0; i <= 10; i++) dp[i][0] = 1;

    for (let i = 0; i <= minutesToTest; i++) dp[0][i] = 1;

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= minutesToTest; j++) {
            for (let k = 0; k <= i; k++) dp[i][j] += (facktorial[i] / (facktorial[i - k] * facktorial[k])) * dp[i - k][j - 1];
        }
        if (dp[i][minutesToTest] >= buckets) return i;
    }
    return 11;



};


console.log(poorPigs(buckets, minutesToDie, minutesToTest))