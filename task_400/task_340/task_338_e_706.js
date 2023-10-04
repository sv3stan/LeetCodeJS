// Создайте HashMap без использования каких - либо встроенных библиотек хэш - таблиц.
// Реализуйте класс MyHashMap:
// MyHashMap() инициализирует объект пустой картой.
// void put(int key, int value) вставляет пару(ключ, значение) в HashMap.
// Если ключ уже существует в карте, обновите соответствующее значение.
// int get(int key) возвращает значение, которому сопоставлен указанный ключ, 
// или - 1, если эта карта не содержит сопоставления для ключа.
// void Remove(key) удаляет ключ и соответствующее ему значение, 
// если карта содержит сопоставление ключа.
// 706


var MyHashMap = function () {
    this.hash = [];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    // MyHashMap.prototype.put = function (key, value) {
    //     if (this.hash.some(item => item[0] === key)) {
    //         const index = this.hash.findIndex(item => item[0] === key)
    //         this.hash[index][1] = value;
    //     } else {
    //         this.hash.push([key, value])
    //     }
    // };

    const index = this.hash.findIndex(item => item[0] === key);
    return index !== -1 ? (this.hash[index][1] = value) : this.hash.push([key, value]);

    //return this.hash.findIndex(item => item[0] === key) ? (this.hash[this.hash.findIndex(item => item[0] === key)][1] = value) : this.hash.push([key, value])


};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    if (this.hash.some(item => item[0] === key)) {
        console.log('--------------')
        const index = this.hash.findIndex(item => item[0] === key)
        console.log(index)
        return this.hash[index][1];
    } else {
        // console.log(index)
        return -1;
    }

};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    if (this.hash.some(item => item[0] === key)) {
        const index = this.hash.findIndex(item => item === key)
        this.hash.splice(index, 1);
    }
    console.log(this.hash)
};


hashMap = new MyHashMap();
hashMap.put(1, 1); // The map is now [[1,1]]
console.log(this.hash)
hashMap.put(2, 2); // The map is now [[1,1], [2,2]]
console.log(this.hash)
hashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
console.log(this.hash)
hashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
console.log(this.hash)
hashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
console.log(this.hash)
hashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
console.log(this.hash)
hashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
console.log(this.hash)
hashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
console.log(this.hash)




// var obj = new MyHashMap()
//  obj.put(key,value)
//  var param_2 = obj.get(key)
//  obj.remove(key)
