/**
You are given an m x n matrix of characters box representing a side-view of a box.Each cell of the box is one of the following: A stone '#' A stationary obstacle '*' Empty '.' The box is rotated 90 degrees clockwise, causing some of the stones to fall due to gravity.Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box.Gravity does not affect the obstacles' positions, and the inertia from the box's rotation does not affect the stones' horizontal positions. It is guaranteed that each stone in box rests on an obstacle, another stone, or the bottom of the box. Return an n x m matrix representing the box after the rotation described above.
Вам дана матрица символов размером m x n, представляющая вид коробки сбоку. Каждая ячейка поля представляет собой одно из следующих значений: Камень '#' Стационарное препятствие '*' Пустой '.' Коробка поворачивается на 90 градусов по часовой стрелке, в результате чего часть камней падает под действием силы тяжести. Каждый камень падает, пока не упадет на препятствие, другой камень или дно коробки. Гравитация не влияет на положение препятствий, а инерция от вращения ящика не влияет на горизонтальное положение камней. Гарантируется, что каждый камень в ящике опирается на препятствие, другой камень или дно ящика. Возвращает матрицу размера n x m, представляющую блок после поворота, описанного выше.
 */

let box = [['#', '.', '#']];
function rotateTheBox(box: string[][]): string[][] {
    let m = box.length;
    let n = box[0].length;
    let rotatedBox: string[][] = Array(n)
        .fill(null)
        .map(() => Array(m).fill('.'));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rotatedBox[j][m - 1 - i] = box[i][j];
        }
    }

    for (let j = 0; j < m; j++) {
        let emptyRow = n - 1;
        for (let i = n - 1; i >= 0; i--) {
            if (rotatedBox[i][j] === '*') {
                emptyRow = i - 1;
            } else if (rotatedBox[i][j] === '#') {
                rotatedBox[i][j] = '.';
                rotatedBox[emptyRow][j] = '#';
                emptyRow--;
            }
        }
    }

    return rotatedBox;
}

console.log(box);
