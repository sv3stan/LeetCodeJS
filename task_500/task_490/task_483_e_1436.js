// Вам дан массив путей, где paths[i] = [cityAi, cityBi] означает,
// что существует прямой путь, ведущий из cityAi в cityBi.
// Возвращает город назначения, то есть город без какого - либо пути,
// ведущего в другой город.
// Гарантируется, что граф путей образует прямую без петель,
// следовательно, город назначения будет ровно один.

// 1436


paths = [["B", "C"], ["D", "B"], ["C", "A"]];
paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]
paths = [["A", "Z"]]

var destCity = function (paths) {

    const hashSource = new Set(paths.map(element => element[0]));
    const hashDest = new Set(paths.map(element => element[1]));

    for (const value of hashDest) {
        if (!hashSource.has(value)) return value;
    }

};


console.log(destCity(paths))