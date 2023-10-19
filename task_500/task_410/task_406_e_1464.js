// Учитывая массив целых чисел nums, вы выберете два разных 
// индекса i и j этого массива.Верните максимальное 
// значение(nums[i] - 1) * (nums[j] - 1).
// 1464

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    extractMax() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return max;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const element = this.heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (element <= parent) {
                break;
            }
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }
    sinkDown(index) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let largest = index;

        const length = this.heap.length;
        if (left < length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right < length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            const temp = this.heap[index];
            this.heap[index] = this.heap[largest];
            this.heap[largest] = temp;
            this.sinkDown(largest);
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}


const nums = [3, 4, 5, 2];

var maxProduct = function (nums) {

    const priorityHeap = new MinHeap();

    for (const num of nums) priorityHeap.insert(num);


    return (priorityHeap.extractMax() - 1) * (priorityHeap.extractMax() - 1);

};


console.log(maxProduct(nums))

