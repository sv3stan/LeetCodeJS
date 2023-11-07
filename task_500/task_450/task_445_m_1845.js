// Разработайте систему, которая управляет состоянием 
// резервирования n мест, пронумерованных от 1 до n.
// Реализуйте класс SeatManager:
// SeatManager(int n) 
// Инициализирует объект SeatManager, 
// который будет управлять n местами, пронумерованными от 1 до n.
// Все места изначально доступны.
// int Reserve() 
// Извлекает незарезервированное место с наименьшим номером, 
// резервирует его и возвращает его номер.
// void unreserve(int SeatNumber) 
// Отменяет резервирование места с заданным номером сиденья.
// 1845


class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] < this.heap[parentIndex]) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return min;
    }

    sinkDown(index) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let smallest = index;
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.sinkDown(smallest);
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

n = 5;

class SeatManager {
    constructor(n) {
        this.heap = new MinHeap(); // Создаем мин-кучу для хранения доступных мест
        for (let seat = 1; seat <= n; seat++) {
            this.heap.insert(seat); // Начально все места доступны, добавляем их в кучу
        }
    }

    reserve() {
        if (!this.heap.isEmpty()) {
            // Извлекаем наименьшее доступное место и возвращаем его номер
            return this.heap.extractMin();
        }
        return -1; // Если нет доступных мест, возвращаем -1
    }

    unreserve(seat) {
        // При отмене резервирования добавляем место обратно в кучу
        this.heap.insert(seat);
    }
}

// var obj = new SeatManager(n);
// var param_1 = obj.reserve();
// //obj.unreserve(seat);


const seatManager = new SeatManager(5);
console.log(seatManager)
seatManager.reserve();
console.log(seatManager)
seatManager.reserve();
console.log(seatManager)
seatManager.unreserve(2);
console.log(seatManager)
seatManager.reserve();
console.log(seatManager)
seatManager.reserve();
console.log(seatManager)
seatManager.reserve();
console.log(seatManager)
seatManager.reserve();
console.log(seatManager)
seatManager.unreserve(5);
console.log(seatManager)