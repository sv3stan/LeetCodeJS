// Учитывая объект или массив obj, вернуть компактный объект.
// Компактный объект аналогичен исходному объекту, за исключением того, 
// что в нем удалены ключи, содержащие ложные значения.Эта операция 
// применяется к объекту и любым вложенным объектам.Массивы считаются объектами, 
// где индексы являются ключами.Значение считается ложным, если Boolean(value) возвращает false.
// Вы можете предположить, что obj является результатом JSON.parse.Другими словами, это действительно JSON.
// 2705


//let obj = [null, 0, false, 1];
//let obj = null;
//let obj = { "a": null, "b": [false, 1] };
const obj = { a: null, b: { c: 5, d: null }, e: [1, 2, null, 3] };
//let obj = [null, 0, 5, [0], [false, 16]];


function compactObject(obj) {
    if (Array.isArray(obj)) {
        let result = [];
        for (let item of obj) {
            let subItem = compactObject(item);
            if (subItem) {
                result.push(subItem);
            }
        }
        return result;
    }
    if (typeof obj === 'object' && obj !== null) {
        let result = {};
        for (let [key, item] of Object.entries(obj)) {
            let subItem = compactObject(item);
            if (subItem) {
                result[key] = subItem;
            }
        }
        return result;
    }
    if (Boolean(obj) === true) {
        return obj;
    }
    return undefined;
}


console.log(compactObject(obj));
