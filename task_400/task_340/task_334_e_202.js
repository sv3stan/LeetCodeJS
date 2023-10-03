// Напишите алгоритм, определяющий, является ли число n счастливым.
// Счастливое число — это число, определяемое следующим процессом:
// Начиная с любого положительного целого числа, 
// замените число суммой квадратов его цифр.
// Повторяйте процесс до тех пор, пока число не станет равным 1(где оно и останется), 
// или пока он не будет повторяться бесконечно в цикле, который не включает 1.
// Счастливыми являются те числа, для которых этот процесс заканчивается на 1.
// Возвращайте true, если n — счастливое число, и false, если нет.
// 202

n = 19

var isHappy = function (n) {

    let digits = [];


    digits = n.toString().split('').map(Number);


    function sumSquare(digits) {
        let sum = 0;
        console.log(digits)
        for (const item of digits) {
            // console.log('------------')
            console.log(item)
            sum += item * item;
            console.log(sum)
            if (sum === 1) return true;
        }

        digits = sum.toString().split('').map(Number);
        sumSquare(digits)
    }


    try {
        sumSquare(digits); // Рекурсивный вызов
    } catch (e) {
        if (e instanceof RangeError) {
            console.error("Стек вызовов рекурсии переполнен.");
        } else {
            throw e; // Если это не ошибка переполнения стека, выбрасываем ее дальше
        }
    }




    console.log(digits)

};

console.log(isHappy(n))


