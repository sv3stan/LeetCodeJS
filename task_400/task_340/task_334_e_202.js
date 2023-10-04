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

    const hash = new Set();
    function helper(n) {
        let digits = n.toString().split('').map(item => item * item);
        let sum = digits.reduce((acc, item) => acc + item, 0);
        console.log(digits + ' - digits')
        if (sum === 1) {
            console.log('++++++++++++')
            return true;
        }
        if (hash.has(sum)) {
            return false;
        } else {
            hash.add(sum);
            return helper(sum)
        }
        //return helper(n);
    }
    return helper(n);
};

console.log(isHappy(n))


