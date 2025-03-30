﻿/**
Существует бесконечно большая двухмерная сетка неокрашенных элементов. Вам дается положительное целое число N, указывая на то, что вы должны выполнять следующую рутину в течение N минут: На первой минуте окрашивайте любую произвольную единицу ячейки синей. Каждую минуту после этого цветет синий каждую неокрашенную ячейку, которая касается синей ячейки. Ниже приведено изобразительное представление состояния сетки после минуты 1, 2 и 3. Верните количество цветных ячеек в конце n минут.
 */

function coloredCells(n: number): number {
    return n * n + (n - 1) * (n - 1);
}
