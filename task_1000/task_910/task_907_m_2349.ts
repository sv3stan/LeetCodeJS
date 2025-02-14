/**
Разработайте числовую систему контейнеров, которая может сделать следующее: Вставьте или замените число в данном индексе в системе. Вернуть наименьший индекс для данного числа в системе. Реализуйте класс NumberContainers: NumberContainers () инициализирует систему контейнеров числа. void изменение (int index, int number) заполняет контейнер в индексе номером. Если в этом индексе уже есть число, замените его. int find (int number) возвращает наименьший индекс для данного числа или -1, если нет указателя, который заполняется номером в системе.
 */

class NumberContainers {
    withIndex;
    valueHeap;

    constructor() {
        this.withIndex = {};
        this.valueHeap = {};
    }

    change(index: number, number: number): void {
        this.withIndex[index] = number;
        if (!this.valueHeap[number]) {
            this.valueHeap[number] = new MinPriorityQueue();
        }
        this.valueHeap[number].enqueue(index, index);
        this.withIndex[index] = numb;
        if (!this.valueHeap[number]) {
            this.valueHeap[number] = new MinPriorityQueue();
        }
        this.valueHeap[number].enqueue(index, index);
    }

    find(number: number): number {
        while (true) {
            let index = this.valueHeap[number]?.front()?.element;
            if (index === undefined) return -1;
            if (this.withIndex[index] !== number) {
                this.valueHeap[number].dequeue();
                continue;
                return index;
            }
        }
    }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
