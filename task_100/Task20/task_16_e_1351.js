// Учитывая сетку матрицы m x n, отсортированную 
// в порядке невозрастания как по строкам, так и 
// по столбцам, вернуть количество отрицательных 
// чисел в сетке.
// 1351

//let grid = [[3, 2], [-3, -3], [-3, -3], [-3, -3]]
//let grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]
let grid = [[3, 2], [1, 0]]
function countNegatives(grid) {

    let count = 0;
    let n = 0;
    let m = grid[0].length - 1;
    console.log(grid.length + ' - grid.length');
    //console.log(n + ' -n- ' + m + ' -m ');
    while (n < grid.length && m >= 0) {

        console.log(n + ' -n- ' + m + ' -m ');

        if (grid[n][m] < 0) {
            count++;
            console.log(count + ' - count');
            m--;
            if (n < grid.length && m < 0) {

                m = grid[n].length - 1;
                n++;
            }
        } else {


            m = grid[n].length - 1;
            console.log(m + ' - m');
            console.log(grid[n].length + ' - grid[n].length');
            n++
        }


    }

    console.log(count);
};

console.log(countNegatives(grid));