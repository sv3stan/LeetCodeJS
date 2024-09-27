﻿/**
Вы реализуете программу, которая будет использоваться в качестве календаря. Мы можем добавить новое мероприятие, если добавление мероприятия не приведет к двойному бронированию.
Двойное бронирование происходит, когда два события имеют некоторое непустое пересечение (т. е. некоторый момент является общим для обоих событий).
Событие можно представить в виде пары целых чисел start и end, которая представляет бронирование на полуоткрытом интервале [start, end), диапазоне действительных чисел x, таких, что start <= x < end.
Реализуйте класс MyCalendar:
MyCalendar() Инициализирует объект календаря.
boolean book(int start, int end) Возвращает true, если событие можно успешно добавить в календарь, не вызывая двойного резервирования. В противном случае верните false и не добавляйте событие в календарь.
 */

let MyCalendar = function () {
    this.events = [];
};

MyCalendar.prototype.book = function (start, end) {
    // проверяем пересечения с уже существующими событиями
    for (let [s, e] of this.events) {
        if (start < e && end > s) {
            return false; // пересечение найдено
        }
    }
    // если пересечений нет, добавляем событие в календарь
    this.events.push([start, end]);
    return true;
};