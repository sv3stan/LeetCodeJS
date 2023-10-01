// Нам дан массив астероидов целых чисел, представляющих астероиды подряд.
// Для каждого астероида абсолютное значение представляет его размер, 
// а знак представляет его направление(положительное значение означает право, 
// отрицательное значение означает лево).Каждый астероид движется с одинаковой скоростью.
// Узнайте состояние астероидов после всех столкновений.Если два астероида встретятся, 
// взорвется меньший из них.Если оба имеют одинаковый размер, оба взорвутся.Два астероида, 
// движущиеся в одном направлении, никогда не встретятся.
// 735

asteroids = [5, 10, -5]
asteroids = [5, 10, -15, 7, -4, 12, 8, 6, -10]
//asteroids = [10, 2, -5]
//asteroids = [8, -8]
//asteroids = [-2, -1, 1, 2]
asteroids = [-2, -2, 1, -2]
var asteroidCollision = function (asteroids) {
    const answer = []

    for (let pointer = 0; pointer < asteroids.length; pointer++) {
        const last = answer[answer.length - 1]
        const current = asteroids[pointer]

        if (!answer.length || last < 0 || current > 0) {
            answer.push(current)
        } else if (-current == last) {
            answer.pop()
        } else if (-current > last) {
            answer.pop()
            pointer--
        }
    }

    return answer

};

console.log(asteroidCollision(asteroids));












// var asteroidCollision = function (asteroids) {
//     const crash = [];

//     let pointer = 1;
//     crash[0] = asteroids[0];
//     while (pointer <= asteroids.length - 1) {



//         if (asteroids[pointer] > 0) {
//             while (asteroids[pointer] > 0) {
//                 crash.push(asteroids[pointer]);
//                 pointer++;
//                 // console.log(crash)
//             }
//         }

//         if (asteroids[pointer] < 0 && crash.length === 0) {
//             while (asteroids[pointer] < 0) {
//                 crash.push(asteroids[pointer]);
//                 pointer++;
//                 // console.log(crash)
//             }
//         }

//         console.log(crash)

//         if (asteroids[pointer] < 0 && crash.length > 0) {
//             console.log(Math.abs(asteroids[pointer]) + ' - Math.abs(asteroids[pointer]) - ' + crash[crash.length - 1] + ' - crash[crash.length - 1] - ')
//             //console.log('++++++++++')
//             if (Math.abs(asteroids[pointer]) > crash[crash.length - 1]) {
//                 //while (Math.abs(asteroids[pointer]) > crash[crash.length - 1]) {
//                 crash.pop();
//             } else {
//                 // crash.push(asteroids[pointer])
//                 pointer++;

//             }


//             console.log(crash)

//         }
//     }
//     console.log(crash)

// };