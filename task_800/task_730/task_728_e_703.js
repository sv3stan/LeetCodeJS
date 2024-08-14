/**
Разработайте класс для поиска k-го наибольшего элемента в потоке. Обратите внимание, что это k-й наибольший элемент в отсортированном порядке, а не k-й отдельный элемент.
Реализуйте класс KthLargest:
KthLargest(int k, int[] nums) Инициализирует объект целым числом k и потоком целых чисел nums. int add(int val) Добавляет целое число val в поток и возвращает элемент, представляющий k-й наибольший элемент в потоке.
 */

/**
 * @param {number} k
 * @param {number[]} nums
 */
let KthLargest = function (k, nums) {
    this.k = k;
    this.minHeap = new MinPriorityQueue();
    for (let num of nums) {
        this.add(num);
    }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.minHeap.size() < this.k) {
        this.minHeap.enqueue(val);
    } else if (val > this.minHeap.front().element) {
        this.minHeap.dequeue();
        this.minHeap.enqueue(val);
    }
    return this.minHeap.front().element;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// class KthLargest {
//     constructor(k, nums) {
//         this.k = k;
//         this.minHeap = new MinPriorityQueue();
//         for (let num of nums) {
//             this.add(num);
//         }
//     }

//     add(val) {
//         if (this.minHeap.size() < this.k) {
//             this.minHeap.enqueue(val);
//         } else if (val > this.minHeap.front().element) {
//             this.minHeap.dequeue();
//             this.minHeap.enqueue(val);
//         }
//         return this.minHeap.front().element;
//     }
// }
