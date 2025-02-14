/**
Вам дают 0-индексированные целочисленные массивы и целое число k. Вам разрешено выполнить некоторые операции на Nums, где за одну операцию вы можете: Выберите два самых маленьких целых числа x и y из Nums. Удалить x и y из Nums. Вставьте (мин (x, y) * 2 + max (x, y)) в любом положении в массиве. Обратите внимание, что вы можете применить описанную операцию только в том случае, если NUM содержит как минимум два элемента. Возврат минимальное количество операций, необходимые для того, чтобы все элементы массива были больше или равны K.
 */

class MinHeap {
    private heap: number[];

    constructor(arr: number[]) {
        this.heap = [...arr];
        this.buildHeap();
    }

    private buildHeap() {
        if (this.heap.length <= 1) return;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    private heapifyDown(index: number) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let smallest = index;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (
            right < this.heap.length &&
            this.heap[right] < this.heap[smallest]
        ) {
            smallest = right;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[index],
            ];
            this.heapifyDown(smallest);
        }
    }

    private heapifyUp(index: number) {
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index] < this.heap[parent]) {
            [this.heap[index], this.heap[parent]] = [
                this.heap[parent],
                this.heap[index],
            ];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    extractMin(): number | null {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop()!;

        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown(0);

        return min;
    }

    insert(value: number) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    peek(): number | null {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size(): number {
        return this.heap.length;
    }
}

function minOperations(nums: number[], k: number): number {
    const heap = new MinHeap(nums);
    let operations = 0;

    while (heap.size() > 1 && heap.peek()! < k) {
        let x = heap.extractMin()!;
        let y = heap.extractMin()!;
        let newValue = x * 2 + y;
        heap.insert(newValue);
        operations++;
    }

    return heap.peek()! >= k ? operations : -1;
}
