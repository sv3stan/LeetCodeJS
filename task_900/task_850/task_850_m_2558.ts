/**
You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following: Choose the pile with the maximum number of gifts. If there is more than one pile with the maximum number of gifts, choose any. Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts. Return the number of gifts remaining after k seconds.
Вам дан целочисленный массив подарков, обозначающий количество подарков в различных стопках. Каждую секунду вы делаете следующее: Выберите стопку с максимальным количеством подарков. Если стопок с максимальным количеством подарков больше одной, выбирайте любую. Оставьте после себя пол квадратного корня из количества подарков в стопке. Возьмите остальные подарки. Возвращает количество подарков, оставшихся через k секунд.
 */

function pickGifts(gifts: number[], k: number): number {
    const maxHeap = new MaxHeap();
    let result = 0;

    gifts.forEach(el => maxHeap.push(el));

    while (k > 0) {
        let item = maxHeap.pop();
        let sqrt = Math.floor(Math.sqrt(item));
        maxHeap.push(sqrt);
        k--;
    }

    while (maxHeap.size() > 0) {
        result += maxHeap.pop();
    }

    return result;
}

class MaxHeap {
    private heap: number[] = [];

    push(val: number) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop(): number {
        if (this.heap.length === 1) return this.heap.pop()!;
        const root = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this._heapifyDown();
        return root;
    }

    size(): number {
        return this.heap.length;
    }

    private _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] <= this.heap[parentIdx]) break;
            [this.heap[idx], this.heap[parentIdx]] = [
                this.heap[parentIdx],
                this.heap[idx],
            ];
            idx = parentIdx;
        }
    }

    private _heapifyDown() {
        let idx = 0;
        while (2 * idx + 1 < this.heap.length) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let largerChildIdx = leftChildIdx;

            if (
                rightChildIdx < this.heap.length &&
                this.heap[rightChildIdx] > this.heap[leftChildIdx]
            ) {
                largerChildIdx = rightChildIdx;
            }

            if (this.heap[idx] >= this.heap[largerChildIdx]) break;
            [this.heap[idx], this.heap[largerChildIdx]] = [
                this.heap[largerChildIdx],
                this.heap[idx],
            ];
            idx = largerChildIdx;
        }
    }
}
