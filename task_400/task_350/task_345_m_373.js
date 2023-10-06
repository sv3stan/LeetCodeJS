// Вам даны два целочисленных массива nums1 и nums2, 
// отсортированные в порядке неубывания, и целое число k.
// Определите пару(u, v), состоящую из одного элемента 
// первого массива и одного элемента второго массива.
// Верните k пар(u1, v1), (u2, v2), ..., (uk, vk) 
// с наименьшими суммами.
// 373


nums1 = [1, 7, 11], nums2 = [2, 4, 6], k = 3


class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.size() === 0) {
            return null;
        }

        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.size() > 0) {
            this.heap[0] = last;
            this.sinkDown(0);
        }

        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex][0] + this.heap[parentIndex][1] <= this.heap[index][0] + this.heap[index][1]) {
                break;
            }

            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    sinkDown(index) {
        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let smallest = index;

            if (leftIndex < this.size() && this.heap[leftIndex][0] + this.heap[leftIndex][1] < this.heap[smallest][0] + this.heap[smallest][1]) {
                smallest = leftIndex;
            }

            if (rightIndex < this.size() && this.heap[rightIndex][0] + this.heap[rightIndex][1] < this.heap[smallest][0] + this.heap[smallest][1]) {
                smallest = rightIndex;
            }

            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

var kSmallestPairs = function (nums1, nums2, k) {


    if (nums1.length === 0 || nums2.length === 0) {
        return [];
    }

    const result = [];
    const minHeap = new MinHeap();

    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        minHeap.insert([nums1[i], nums2[0], 0]);
    }


    console.log(minHeap)

    while (k > 0 && minHeap.size() > 0) {
        const [u, v, index] = minHeap.extractMin();
        result.push([u, v]);

        if (index < nums2.length - 1) {
            minHeap.insert([u, nums2[index + 1], index + 1]);
        }

        k--;
    }

    return result;


};

console.log(kSmallestPairs(nums1, nums2, k))