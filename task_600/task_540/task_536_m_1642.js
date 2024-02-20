// Вам дан целочисленный массив heights, представляющий высоту зданий, кирпичей и лестниц.
// Вы начинаете свое путешествие со здания 0 и переходите к следующему зданию, возможно, 
// используя кирпичи или лестницы.
// При переходе из здания i в здание i + 1(индекс 0),
// Если высота текущего здания больше или равна высоте следующего здания, вам не нужна лестница или кирпичи.
// Если высота текущего здания меньше высоты следующего здания, вы можете использовать одну лестницу или(h[i + 1] - h[i]) кирпичи.
// Возвращает самый дальний индекс здания(с индексом 0), которого вы можете достичь, если оптимально используете данные лестницы и кирпичи.

// 1642


heights = [4, 2, 7, 6, 9, 14, 12], bricks = 5, ladders = 1
heights = [4, 12, 2, 7, 3, 18, 20, 3, 19], bricks = 10, ladders = 2


class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop() {
        const max = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }

        return max;
    }

    heapifyUp() {
        let current = this.heap.length - 1;
        while (current > 0) {
            const parent = Math.floor((current - 1) / 2);
            if (this.heap[parent] >= this.heap[current]) {
                break;
            }
            [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
            current = parent;
        }
    }

    heapifyDown() {
        let current = 0;
        while (true) {
            let leftChild = 2 * current + 1;
            let rightChild = 2 * current + 2;
            let maxChild = leftChild;

            if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[leftChild]) {
                maxChild = rightChild;
            }

            if (leftChild >= this.heap.length || this.heap[current] >= this.heap[maxChild]) {
                break;
            }

            [this.heap[current], this.heap[maxChild]] = [this.heap[maxChild], this.heap[current]];
            current = maxChild;
        }
    }
}


var furthestBuilding = function (heights, bricks, ladders) {
    const priorityHeap = new MaxHeap();

    let i = 0, diff = 0;
    for (i = 0; i < heights.length - 1; i++) {
        diff = heights[i + 1] - heights[i];

        if (diff <= 0) {
            continue;
        }

        bricks -= diff;
        priorityHeap.push(diff);
        console.log(priorityHeap)
        if (bricks < 0) {
            bricks += priorityHeap.pop();
            ladders--;
        }

        if (ladders < 0) {
            break;
        }
    }

    return i;

};


console.log(furthestBuilding(heights, bricks, ladders))