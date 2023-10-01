// Учитывая объект или массив, возврат, если он пуст.
// Пустой объект не содержит пар ключ - значение.
// Пустой массив не содержит элементов.
// Вы можете предположить, что объект или массив являются выходными данными JSON.parse.
//2727

const obj = { "x": 5, "y": 42 };
//const obj = [];
//const obj = [null, false, 0];
//const obj = {};

function isEmpty(obj) {

    if (Array.isArray(obj)) {
        if (obj.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    if (typeof obj === 'object') {
        if (Object.keys(obj).length === 0) {
            return true;
        } else {
            return false;
        }
    }


};

console.log(isEmpty(obj));