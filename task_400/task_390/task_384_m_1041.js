// На бесконечной плоскости робот изначально стоит в точке(0, 0) 
// и смотрит на север.Обратите внимание, что:
// Северное направление является положительным направлением оси Y.
// Южное направление является отрицательным направлением оси Y.
// Восточное направление является положительным направлением оси X.
// Западное направление является отрицательным направлением оси X.
// Робот может получить одну из трёх инструкций:
// «G»: идти прямо 1 единицу.
// «L»: поворот на 90 градусов влево(т.е.против часовой стрелки).
// «R»: поворот на 90 градусов вправо(т.е.по часовой стрелке).
// Робот выполняет данные по порядку инструкции и повторяет их бесконечно.
// Возвращает true тогда и только тогда, когда на плоскости существует круг, 
// из которого робот никогда не выходит.
// 1041

instructions = "GGLLGG"

instructions = "GRLRLLLG"

instructions = "GL"

var isRobotBounded = function (instructions) {

    let axisX = 0;
    let axisY = 0;
    // let direction = ['west', 'north', 'east', 'south'];
    let direct = 1;

    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === 'L') {
            direct = (direct + 3) % 4;  // Модуль 4 для корректного обновления направления
        }
        if (instructions[i] === 'R') {
            direct = (direct + 1) % 4;  // Модуль 4 для корректного обновления направления
        }

        if (instructions[i] === 'G') {
            if (direct === 0) {
                axisX--;
            } else if (direct === 1) {
                axisY++;
            } else if (direct === 2) {
                axisX++;
            } else {
                axisY--;
            }
        }
    }

    return (axisX === 0 && axisY === 0) || direct !== 1;
    // let axisX = 0;
    // let axisY = 0;
    // let direction = ['west', 'north', 'east', 'south'];
    // let direct = 1;
    // for (let i = 0; i < instructions.length; i++) {


    //     if (instructions[i] === 'L') {
    //         direct = (direct - 1) % 4;
    //         console.log('+++++++++++++++')
    //     }
    //     if (instructions[i] === 'R') {
    //         direct = (direct + 1) % 4;
    //         console.log('---------')
    //     }
    //     console.log(direct)
    //     if (instructions[i] === 'G') {
    //         if (direct === 0) {
    //             axisX--;
    //         } else {
    //             if (direct === 1) {
    //                 axisY++;
    //             } else {
    //                 if (direct === 2) {
    //                     axisX++;
    //                 } else {
    //                     axisY--;
    //                 }
    //             }
    //         }
    //     }

    //     console.log(axisX + ' - ' + axisY)
    // }

    // return (axisX === 0 && axisY === 0) ? true : false;

};


console.log(isRobotBounded(instructions))