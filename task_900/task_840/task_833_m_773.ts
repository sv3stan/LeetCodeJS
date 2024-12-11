/**
On an 2 x 3 board, there are five tiles labeled from 1 to 5, and an empty square represented by 0. A move consists of choosing 0 and a 4-directionally adjacent number and swapping it. The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]]. Given the puzzle board board, return the least number of moves required so that the state of the board is solved.If it is impossible for the state of the board to be solved, return -1.
На доске 2 x 3 есть пять плиток с номерами от 1 до 5 и пустой квадрат, обозначенный цифрой 0. Ход состоит из выбора 0 и соседнего в 4 направлениях числа и их замены. Состояние доски определяется тогда и только тогда, когда доска равна [[1,2,3],[4,5,0]]. Учитывая доску-головоломку, верните наименьшее количество ходов, необходимое для того, чтобы состояние доски было решено. Если состояние доски невозможно определить, верните -1.
 */

let board = [
    [4, 1, 2],
    [5, 0, 3],
];

function slidingPuzzle(board: number[][]): number {
    const target = '123450';
    const start = board.flat().join('');
    const border: number[][] = [
        [1, 3],
        [0, 2, 4],
        [1, 5],
        [0, 4],
        [1, 3, 5],
        [2, 4],
    ];

    function swap(state: string, i: number, j: number): string {
        const arr = state.split('');
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return arr.join('');
    }

    const queue: [string, number][] = [[start, 0]];
    const hash = new Set<string>();
    hash.add(start);

    while (queue.length > 0) {
        const [state, steps] = queue.shift()!;
        if (state === target) return steps;

        const zero = state.indexOf('0');
        for (const item of border[zero]) {
            const newState = swap(state, zero, item);
            if (!hash.has(newState)) {
                hash.add(newState);
                queue.push([newState, steps + 1]);
            }
        }
    }

    return -1;
}

console.log(slidingPuzzle(board));
