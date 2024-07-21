/**
Имеется n роботов с индексом 1, каждый из которых имеет положение на линии, здоровье и направление движения.
Вам даны позиции целочисленных массивов с нулевым индексом, состояние здоровья и строковые направления (направления [i] — это либо «L» для левого, либо «R» для правого). Все целые числа в позициях уникальны.
Все роботы начинают двигаться по линии одновременно с одинаковой скоростью в заданных направлениях. Если два робота когда-нибудь займут одно и то же положение во время движения, они столкнутся.
При столкновении двух роботов робот с меньшим здоровьем удаляется с линии, а здоровье другого робота уменьшается на единицу. Выживший робот продолжает двигаться в том же направлении, в котором шел. Если у обоих роботов одинаковое здоровье, они оба удаляются с линии.
Ваша задача — определить здоровье роботов, переживших столкновения, в том же порядке, в котором они были заданы, т. е. окончательное здоровье робота 1 (если выжил), окончательное здоровье робота 2 (если выжил) и так далее. Если выживших нет, верните пустой массив.
Возвращает массив, содержащий сведения о состоянии остальных роботов (в том порядке, в котором они были указаны во входных данных), после того, как дальнейшие столкновения не могут произойти.
Примечание. Позиции могут быть несортированными.
 */

let positions = [5, 4, 3, 2, 1];
let healths = [2, 17, 9, 15, 10];
let directions = 'RRRRR';

let survivedRobotsHealths = function (positions, healths, directions) {
    const robots = positions.map((p, index) => {
        return {
            index,
            position: p,
            health: healths[index],
            direction: directions[index],
        };
    });
    robots.sort((a, b) => a.position - b.position);

    let stack = [];
    for (let robot of robots) {
        if (robot.direction === 'R') {
            stack.push(robot);
            continue;
        }

        let gone = false;
        while (
            stack[stack.length - 1]?.health <= robot.health &&
            stack[stack.length - 1]?.direction === 'R'
        ) {
            if (stack[stack.length - 1].health === robot.health) {
                stack.pop();
                gone = true;
                break;
            }

            robot.health -= 1;
            stack.pop();
        }

        if (
            !gone &&
            stack[stack.length - 1]?.direction === 'R' &&
            stack[stack.length - 1]?.health > robot.health
        ) {
            stack[stack.length - 1].health -= 1;
            gone = true;
        }

        if (!gone) {
            stack.push(robot);
        }
    }

    stack.sort((a, b) => a.index - b.index);
    return stack.map(s => s.health);
};

console.log(survivedRobotsHealths(positions, healths, directions));
