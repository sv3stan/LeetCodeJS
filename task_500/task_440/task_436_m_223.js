// Учитывая координаты двух прямолинейных прямоугольников 
// в 2D - плоскости, верните общую площадь, покрытую этими 
// двумя прямоугольниками.
// Первый прямоугольник определяется его левым нижним 
// углом(ax1, ay1) и правым верхним углом(ax2, ay2).
// Второй прямоугольник определяется левым нижним углом(bx1, by1) 
// и правым верхним углом(bx2, by2).
// 223


ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2;

ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2

var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {

    const square1 = (ax2 - ax1) * (ay2 - ay1);
    const square2 = (bx2 - bx1) * (by2 - by1);
    const mergeSquare = Math.max(Math.min(ax2, bx2) - Math.max(ax1, bx1), 0) * Math.max(Math.min(ay2, by2) - Math.max(ay1, by1), 0);
    return square1 + square2 - mergeSquare;

};


console.log(computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2))

