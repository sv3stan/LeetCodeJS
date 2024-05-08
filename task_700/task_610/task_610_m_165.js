﻿/*
Учитывая два номера версий, version1 и version2, сравните их.
Номера версий состоят из одной или нескольких редакций, соединенных точкой «.». Каждая редакция состоит из цифр и может содержать ведущие нули. Каждая редакция содержит хотя бы один символ. Редакции нумеруются с индексом 0 слева направо, при этом самая левая ревизия имеет номер 0, следующая ревизия — это ревизия 1 и так далее. Например, 2.5.33 и 0.1 являются допустимыми номерами версий.
Чтобы сравнить номера версий, сравните их версии в порядке слева направо. Редакции сравниваются с использованием их целочисленных значений, игнорируя любые ведущие нули. Это означает, что версии 1 и 001 считаются равными. Если номер версии не указывает редакцию по индексу, тогда эту редакцию рассматривайте как 0. Например, версия 1.0 меньше версии 1.1, поскольку их нулевые номера ревизий одинаковы, но их ревизии 1 равны 0 и 1 соответственно и 0. < 1.
Верните следующее:
Если версия1 < версия2, верните -1.
Если версия1 > версия2, верните 1.
В противном случае верните 0.
*/

let version1 = '1.01.3';
let version2 = '1.001.2';
(version1 = '1.0'), (version2 = '1.0.0');
let compareVersion = function (version1, version2) {
    const ver1 = version1.split('.').map(Number);
    const ver2 = version2.split('.').map(Number);
    const length1 = ver1.length;
    const length2 = ver2.length;
    let point = 0;

    while (point < length1 && point < length2) {
        if (ver1[point] > ver2[point]) {
            return 1;
        }
        if (ver1[point] < ver2[point]) {
            return -1;
        }

        point++;
    }

    if (point === length1 && point === length2) {
        return 0;
    }
    if (point === length1) {
        while (point < length2) {
            if (ver2[point] !== 0) {
                return -1;
            }
            point++;
        }

        return 0;
    }

    if (point === length2) {
        while (point < length1) {
            if (ver1[point] !== 0) {
                return 1;
            }
            point++;
        }
        return 0;
    }
};

console.log(compareVersion(version1, version2));