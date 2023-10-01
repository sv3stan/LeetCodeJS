// Учитывая многомерный массив целых чисел, верните объект генератора, 
// который дает целые числа в том же порядке, что и неупорядоченный обход.
// Многомерный массив — это рекурсивная структура данных, 
// содержащая как целые числа, так и другие многомерные массивы.
// неупорядоченный обход выполняет итерации по каждому массиву слева направо, 
// возвращая любые целые числа, которые он встречает, или применяя неупорядоченный 
// обход к любым массивам, которые он встречает.
//2649

let arr = [[[6]], [1, 3], []];

function* inorderTraversal(arr) {

    if (!Array.isArray(arr)) {
        yield arr
        return
    }

    for (let i = 0; i < arr.length; i++) {
        yield* inorderTraversal(arr[i])
    }

};

for (const num of inorderTraversal(arr)) {
    console.log(num);
}


//console.log(inorderTraversal(arr));

















// function* squareGenerator(n) {
//     for (let i = 0; i < n; i++) {
//         yield i ** 2;
//     }
// }


// gen = squareGenerator(5);

// let key = gen.next();
// console.log(key);
// key = gen.next();
// console.log(key);