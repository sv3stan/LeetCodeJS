﻿// Вам задан целевой массив целых чисел и целое число n.
// У вас есть пустой стек с двумя следующими операциями:
// «Push»: помещает целое число на вершину стека.
// «Pop»: удаляет целое число из вершины стека.
// У вас также есть поток целых чисел в диапазоне[1, n].
// Используйте две операции со стеком, чтобы сделать числа в 
// стеке(снизу вверх) равными целевому значению.
// Вам следует следовать следующим правилам:
// Если поток целых чисел не пуст, выберите следующее целое 
// число из потока и поместите его на вершину стека.
// Если стек не пуст, вытолкните целое число вверху стека.
// Если в любой момент элементы в стеке(снизу вверх) равны целевым, 
// не читайте новые целые числа из потока 
// и не выполняйте больше операций со стеком.
// Верните операции стека, необходимые для построения цели в 
// соответствии с упомянутыми правилами.Если существует несколько 
// правильных ответов, верните любой из них.
// 1441


target = [1, 3], n = 3

var buildArray = function (target, n) {

    const answer = [];;
    let index = 0;

    for (const num of target) {
        while (index < num - 1) {
            answer.push("Push");
            answer.push("Pop");
            index++;
        }

        answer.push("Push");
        index++;
    }

    return answer;

};


console.log(buildArray(target, n))