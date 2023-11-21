// Вам дан массив строк garbage с нулевым индексом,
// где garbage[i] представляет собой набор мусора в i - м доме.
// garbage[i] состоит только из символов «M», «P» и «G», 
// обозначающих одну единицу металлического, 
// бумажного и стеклянного мусора соответственно.
// Сбор одной единицы любого вида мусора занимает 1 минуту.
// Вам также дан массив целых чисел с индексом 0, 
// где travel[i] — это количество минут, 
// необходимое для перехода от дома i к дому i + 1.
// В городе три мусоровоза, каждый из которых отвечает 
// за вывоз одного вида мусора.Каждый мусоровоз начинается 
// с дома 0 и должен посетить каждый дом по порядку; 
// однако им не обязательно посещать каждый дом.
// В любой момент времени можно использовать только один мусоровоз.
// Пока один грузовик едет или собирает мусор, 
// два других ничего не могут сделать.
// Верните минимальное количество минут, 
// необходимое для того, чтобы собрать весь мусор.
// 2391


garbage = ["G", "P", "GP", "GG"], travel = [2, 4, 3]
//garbage = ["MMM", "PGM", "GP", "GGM"], travel = [3, 10, 5]
garbage = ["MMM", "PGM", "GP"], travel = [3, 10]
garbage = ["P", "P"], travel = [1]

var garbageCollection = function (garbage, travel) {
    let garbageM = [0, 0];
    let garbageP = [0, 0];
    let garbageG = [0, 0];
    let prefixSum = new Int32Array(travel.length + 1);
    // prefixSum[0] = 0;
    let count = 0;
    for (let i = 0; i < travel.length; i++) {
        count += travel[i];
        prefixSum[i + 1] = count;

    }
    console.log(prefixSum)
    for (let i = 0; i < garbage.length; i++) {
        for (let j = 0; j < garbage[i].length; j++) {
            if (garbage[i][j] === "M") {
                garbageM[0]++;
                garbageM[1] = i;
            } else if (garbage[i][j] === "P") {
                garbageP[0]++;
                garbageP[1] = i;
                console.log(garbageP)
            } else {
                garbageG[0]++;
                garbageG[1] = i;
            }
        }
    }
    return (garbageM[0] += prefixSum[garbageM[1]]) + (garbageP[0] += prefixSum[garbageP[1]]) + (garbageG[0] += prefixSum[garbageG[1]]);
};


console.log(garbageCollection(garbage, travel))