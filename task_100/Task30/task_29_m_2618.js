// Напишите функцию, которая проверяет, является ли данное значение экземпляром данного класса или суперкласса.
// В этой проблеме объект считается экземпляром данного класса, если этот объект имеет доступ к методам этого класса.
// Нет никаких ограничений на типы данных, которые могут быть переданы в функцию.Например, значение или класс могут быть неопределенными.
//2618

function checkIfInstanceOf(obj, classFunction) {

    if (obj == null || obj == undefined || typeof classFunction != 'function') {
        return false;
    }

    let potentialPrototype = Object.getPrototypeOf(obj);

    while (potentialPrototype != null) {
        if (potentialPrototype === classFunction.prototype) {
            return true;
        }
        potentialPrototype = Object.getPrototypeOf(potentialPrototype);
    }

    return false;

};

console.log(checkIfInstanceOf(obj, classFunction));