// Реализуйте класс RandomizedSet:
// RandomizedSet() Инициализирует объект RandomizedSet.
// bool Insert(int val) Вставляет элемент val в набор, 
// если он отсутствует.Возвращает true, 
// если элемент отсутствует, в противном случае — false.
// bool Remove(int val) Удаляет элемент val из набора, 
// если он присутствует.Возвращает true, если элемент присутствовал, 
// и false в противном случае.
// int getRandom() Возвращает случайный элемент из текущего набора 
// элементов(гарантируется, что при вызове этого метода существует 
// хотя бы один элемент).
// Каждый элемент должен иметь одинаковую вероятность возврата.
// Вы должны реализовать функции класса так, чтобы каждая функция 
// работала со средней временной сложностью O(1).
// 380


var RandomizedSet = function () {
    this.hash = new Set();
    this.array = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (!this.hash.has(val)) {
        this.hash.add(val);
        this.array.push(val); // Добавляем элемент в массив для getRandom
        return true;
    } else {
        return false;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.hash.has(val)) {
        this.hash.delete(val);

        // Удаляем элемент из массива для getRandom
        const index = this.array.indexOf(val);
        if (index !== -1) {
            this.array.splice(index, 1);
        }

        return true;
    } else {
        return false;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {

    if (this.array.length === 0) {
        return false;
    }

    const randomIndex = Math.floor(Math.random() * this.array.length);
    return this.array[randomIndex];

};





const randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(randomizedSet)
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
console.log(randomizedSet)
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
console.log(randomizedSet)

console.log(randomizedSet.getRandom());// getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
console.log(randomizedSet)
randomizedSet.insert(2); // 2 was already in the set, so return false.
console.log(randomizedSet)
console.log(randomizedSet.getRandom()); // Since 2 is the only number in the set, getRandom() will always return 2.





/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */