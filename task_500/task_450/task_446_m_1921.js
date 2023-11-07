﻿// Вы играете в видеоигру, в которой защищаете свой город от группы из n монстров.
// Вам дан целочисленный массив dist размера n с индексом 0, 
// где dist[i] — начальное расстояние в километрах i - го монстра от города.
// Монстры идут к городу с постоянной скоростью.Скорость каждого монстра 
// предоставляется вам в виде целочисленного массиваspeed размера n, 
// где скорость[i] — скорость i - го монстра в километрах в минуту.
// У вас есть оружие, которое после полной зарядки способно уничтожить одного монстра.
// Однако для зарядки оружия требуется одна минута.
// Оружие полностью заряжено в самом начале.
// Вы проигрываете, когда любой монстр достигает вашего города.
// Если монстр достигает города именно в тот момент, когда оружие полностью заряжено, 
// это засчитывается как проигрыш, и игра заканчивается до того, 
// как вы сможете использовать свое оружие.
// Возвращает максимальное количество монстров, которых вы сможете уничтожить до того, 
// как проиграете, или n, если вы сможете уничтожить всех монстров до того, 
// как они достигнут города.
// 1921


dist = [1, 3, 4], speed = [1, 1, 1]
//dist = [1, 1, 2, 3], speed = [1, 1, 1, 1]
//dist = [3, 2, 4], speed = [5, 3, 2]

var eliminateMaximum = function (dist, speed) {

    const nums = dist.map((d, i) => d / speed[i]);
    nums.sort((a, b) => a - b);
    console.log(nums)
    let answer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= i) {
            break;
        }
        answer++;
    }

    return answer;

};

console.log(eliminateMaximum(dist, speed))