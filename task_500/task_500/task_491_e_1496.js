// Дан строковый путь, где path[i] = «N», «S», «E» или «W», 
// каждый из которых представляет перемещение на одну единицу 
// на север, юг, восток или запад соответственно.Вы начинаете 
// с начала координат(0, 0) на 2D - плоскости и идете по пути, 
// указанному в параметре path.
// Возвращайте true, если путь пересекает сам себя в любой точке, 
// то есть если в любой момент вы находитесь в месте, 
// которое ранее посещали.В противном случае верните false.

// 1496


path = "NESWW"

path = "NES"

var isPathCrossing = function (path) {

    const coordinate = new Set();

    let x = 0;
    let y = 0;

    coordinate.add(`${x},${y}`)

    for (let i = 0; i < path.length; i++) {

        if (path[i] === "N") {
            y++;
        } else if (path[i] === "S") {
            y--;
        } else if (path[i] === "E") {
            x++;
        } else {
            x--;
        }

        if (coordinate.has(`${x},${y}`)) {
            return true;
        }

        coordinate.add(`${x},${y}`)
    }

    return false;

};


console.log(isPathCrossing(path))