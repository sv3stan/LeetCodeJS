// Создайте класс калькулятора. Класс должен обеспечивать математические операции сложения, 
// вычитания, умножения, деления и возведения в степень. Он также должен позволять выполнять 
// последовательные операции с использованием цепочки методов. Конструктор класса Calculator 
// должен принимать число, которое служит начальным значением результата.

// Ваш класс Calculator должен иметь следующие методы:

// add — этот метод добавляет заданное числовое значение к результату и возвращает обновленный калькулятор.
// вычитание — этот метод вычитает заданное числовое значение из результата и возвращает обновленный калькулятор.
// умножить — этот метод умножает результат на заданное числовое значение и возвращает обновленный калькулятор.
// разделить — этот метод делит результат на заданное числовое значение и возвращает обновленный калькулятор. 
// Если переданное значение равно 0, должна быть выдана ошибка «Деление на ноль не допускается».
// power — этот метод возводит результат в степень заданного числового значения и возвращает обновленный калькулятор.
// getResult — этот метод возвращает результат.
// Решения в пределах 10-5 от фактического результата считаются правильными.
//2726

class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.value += value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.value -= value;
        return this;

    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.value *= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) { return 'Division by zero is not allowed'; }
        this.value /= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value **= value;
        return this;
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.value;

    }
}

//let sum = new Calculator(11).add(5).subtract(7).add(18).multiply(3).divide(27).power(4).getResult();
let sum = new Calculator(2).multiply(5).power(2).getResult()

console.log(sum);


// class Calculator {

//     /**
//      * @param {number} value
//      */
//     constructor(value) {

//     }

//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     add(value) {

//     }

//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     subtract(value) {

//     }

//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     multiply(value) {

//     }

//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     divide(value) {

//     }

//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     power(value) {

//     }

//     /**
//      * @return {number}
//      */
//     getResult() {

//     }
// }