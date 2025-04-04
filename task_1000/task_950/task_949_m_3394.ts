﻿/**
Вам дается целое число N, представляющее размеры сетки N x N, с началом начала левого нижнего угла сетки. Вам также дают 2D -массив координат прямоугольника, где прямоугольники [i] находятся в форме [Startx, Starty, Endx, Endy], представляя прямоугольник на сетке. Каждый прямоугольник определяется следующим образом: (Startx, Starty): нижний левый угол прямоугольника. (Endx, Endy): верхний правый уголок прямоугольника. Обратите внимание, что прямоугольники не перекрываются. Ваша задача состоит в том, чтобы определить, можно ли сделать либо два горизонтальных или двух вертикальных разреза на сетке, так что: Каждый из трех полученных разделов, образованных порезами, содержит по крайней мере один прямоугольник. Каждый прямоугольник принадлежит ровно одной секции. Вернуть истину, если такие разрезы могут быть сделаны; В противном случае вернуть ложь.
 */

function checkValidCuts(n: number, rectangles: number[][]): boolean {
    const hori: [number, number][] = [];
    const veri: [number, number][] = [];

    for (const rect of rectangles) {
        hori.push([rect[0], rect[2]]);
        veri.push([rect[1], rect[3]]);
    }

    return canMake(hori) || canMake(veri);
}

function canMake(arr: [number, number][]): boolean {
    arr.sort((a, b) => a[0] - b[0]);

    let count = 0;
    let e = arr[0][0] + 1;
    for (const [start, end] of arr) {
        if (start >= e) count++;
        e = Math.max(e, end);
    }

    return count >= 2;
}
