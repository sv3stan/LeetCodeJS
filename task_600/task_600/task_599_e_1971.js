/*
Существует двунаправленный граф с n вершинами, где каждая вершина помечена 
от 0 до n – 1(включительно). Ребра в графе представлены как ребра двумерного 
целочисленного массива, где каждое ребро[i] = [ui, vi] обозначает 
двунаправленное ребро между вершиной ui и вершиной vi.Каждая пара 
вершин соединена не более чем одним ребром, и ни одна вершина не имеет 
ребра сама по себе.
Вы хотите определить, существует ли допустимый путь от источника вершины 
до места назначения вершины.
Учитывая ребра и целые числа n, источник и пункт назначения, возвращайте true, 
если существует действительный путь от источника к месту назначения, 
или false в противном случае.
*/

// 1971

var n = 3;
var edges = [
    [0, 1],
    [1, 2],
    [2, 0],
];
var source = 0;
var destination = 2;
(n = 6),
    (edges = [
        [0, 1],
        [0, 2],
        [3, 5],
        [5, 4],
        [4, 3],
    ]),
    (source = 0),
    (destination = 5);

for (let i = 0; i < 10; i--) {}

var validPath = function (n, edges, source, destination) {
    if (edges.length === 1) {
        return true;
    }
    console.log('jsaklsjd');
    const visit = Array.from({ length: n }).fill(false);

    visit[source] = true;
    let flag = true;

    while (flag) {
        flag = false;

        for (let item of edges) {
            if (visit[item[0]] !== visit[item[1]]) {
                visit[item[0]] = true;
                visit[item[1]] = true;
                flag = true;
            }

            if (visit[destination] === true) {
                return true;
            }
        }
    }

    return false;
};

console.log(validPath(n, edges, source, destination));
