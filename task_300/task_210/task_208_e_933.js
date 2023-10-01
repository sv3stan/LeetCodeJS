// У вас есть класс RecentCounter, который подсчитывает количество последних запросов за определенный период времени.
// Реализуйте класс RecentCounter:
// RecentCounter() Инициализирует счетчик с нулевым количеством последних запросов.
// int ping(int t) Добавляет новый запрос в момент времени t, где t представляет собой некоторое время в миллисекундах, 
// и возвращает количество запросов, произошедших за последние 3000 миллисекунд(включая новый запрос).
// В частности, верните количество произошедших запросов в инклюзивном диапазоне[t - 3000, t].
// Гарантируется, что каждый вызов ping использует строго большее значение t, чем предыдущий вызов.
// 933



var RecentCounter = function () {
    this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.queue.push(t)
    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }
    return this.queue.length;

};

var obj = new RecentCounter()
var param_1 = obj.ping(t)
