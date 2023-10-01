// Напишите функцию генератора, которая возвращает объект генератора, 
// который дает последовательность Фибоначчи.
// Последовательность Фибоначчи определяется соотношением Xn = Xn - 1 + Xn - 2.
// Первые несколько чисел ряда: 0, 1, 1, 2, 3, 5, 8, 13.
//2648

function* fibGenerator() {
    let current = 1;
    let sum = 0;
    let initial = 0;
    while (true) {
        sum = current + initial;
        yield initial;
        current = initial;
        initial = sum;
    }
};


const gen = fibGenerator();
console.log(gen.next().value); // 0
gen.next().value; // 1
