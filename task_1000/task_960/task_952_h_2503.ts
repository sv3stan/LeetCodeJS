/**
Вам дают сетку с целочисленным матрицей M x N и массивные запросы размера K. Найдите массив ответа размера K, так что для каждой целочисленной запросов [i] вы начинаете в верхней левой ячейке матрицы и повторяете следующий процесс: Если запросы [i] строго больше, чем значение текущей ячейки, в которой вы находитесь, то вы получаете одну точку, если вы впервые посещаете эту ячейку, и вы можете перейти к любой соседней ячейке во всех 4 направлениях: вверх, вниз, влево и справа. В противном случае вы не получаете никаких очков, и вы закончите этот процесс. После процесса ответ [i] - это максимальное количество баллов, которые вы можете получить. Обратите внимание, что для каждого запроса вам разрешено посещать одну и ту же ячейку несколько раз. Вернуть полученный ответ на массив.
 */

function maxPoints(grid: number[][], queries: number[]): number[] {
    const rows = grid.length;
    const cols = grid[0].length;
    const qLen = queries.length;

    const indexedQueries: { val: number; idx: number }[] = queries.map(
        (val, idx) => ({ val, idx }),
    );
    indexedQueries.sort((a, b) => a.val - b.val);

    const minHeap: { val: number; row: number; col: number }[] = [];
    const heapPush = (element: { val: number; row: number; col: number }) => {
        minHeap.push(element);
        let current = minHeap.length - 1;
        while (current > 0) {
            const parent = Math.floor((current - 1) / 2);
            if (minHeap[current].val < minHeap[parent].val) {
                [minHeap[current], minHeap[parent]] = [
                    minHeap[parent],
                    minHeap[current],
                ];
                current = parent;
            } else {
                break;
            }
        }
    };

    const heapPop = (): { val: number; row: number; col: number } => {
        const top = minHeap[0];
        const last = minHeap.pop()!;
        if (minHeap.length > 0) {
            minHeap[0] = last;
            let current = 0;
            while (true) {
                const left = 2 * current + 1;
                const right = 2 * current + 2;
                let smallest = current;
                if (
                    left < minHeap.length &&
                    minHeap[left].val < minHeap[smallest].val
                ) {
                    smallest = left;
                }
                if (
                    right < minHeap.length &&
                    minHeap[right].val < minHeap[smallest].val
                ) {
                    smallest = right;
                }
                if (smallest !== current) {
                    [minHeap[current], minHeap[smallest]] = [
                        minHeap[smallest],
                        minHeap[current],
                    ];
                    current = smallest;
                } else {
                    break;
                }
            }
        }
        return top;
    };

    heapPush({ val: grid[0][0], row: 0, col: 0 });
    const visited: boolean[][] = new Array(rows)
        .fill(0)
        .map(() => new Array(cols).fill(false));
    visited[0][0] = true;
    const result: number[] = new Array(qLen).fill(0);
    let count = 0;

    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    for (const { val: query, idx } of indexedQueries) {
        while (minHeap.length > 0 && minHeap[0].val < query) {
            const { val, row, col } = heapPop();
            count++;
            for (const [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;
                if (
                    nr >= 0 &&
                    nr < rows &&
                    nc >= 0 &&
                    nc < cols &&
                    !visited[nr][nc]
                ) {
                    heapPush({ val: grid[nr][nc], row: nr, col: nc });
                    visited[nr][nc] = true;
                }
            }
        }
        result[idx] = count;
    }

    return result;
}
