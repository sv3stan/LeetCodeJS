// 1. Найдите i, такое что inputArray[i] < inputArray[i + 1](если такого i нет, значит, 
//     массив отсортирован в обратном порядке, переставляем его в порядке возрастания и завершаем выполнение).
// 2. Найдите j, такое что inputArray[j] > inputArray[i](j будет всегда существовать, так как находимся в ситуации, где перестановка возможна).
// 3. Поменяйте местами inputArray[i] и inputArray[j].
// 4. Обратите порядок элементов от inputArray[i + 1] до конца массива.
// Дан массив целых чисел inputArray, найти следующую перестановку inputArray.
// Замена должна быть на месте и использовать только постоянную дополнительную память.
// 31
nums = [3, 2, 1];

function nextPermutation(nums) {


    const inputArray = [...nums]; // Создаем копию входного массива
    let firstPoint = -1;
    let secondPoint = -1;

    // Находим индекс первой точки
    for (let i = inputArray.length - 2; i >= 0; i--) {
        if (inputArray[i] < inputArray[i + 1]) {
            firstPoint = i;
            break;
        }
    }

    if (firstPoint === -1) {
        // Если первая точка не найдена, значит массив упорядочен в обратном порядке
        return inputArray.reverse();
    }

    // Находим индекс второй точки
    for (let j = inputArray.length - 1; j > firstPoint; j--) {
        if (inputArray[firstPoint] < inputArray[j]) {
            secondPoint = j;
            break;
        }
    }

    // Обмениваем элементы на месте, без дополнительного присваивания
    [inputArray[firstPoint], inputArray[secondPoint]] = [inputArray[secondPoint], inputArray[firstPoint]];

    // Сортируем суффикс в обратном порядке
    const suffix = inputArray.splice(firstPoint + 1);
    suffix.reverse();
    inputArray.push(...suffix);

    return inputArray;
    // 
};

console.log(nextPermutation(nums));






// Задача простая если знать алгоритм:
// 1. Найти первую точку обмена такую, что n[i] < n[i + 1].
//     Если такой комбинации нет значит массив упорядочен в обратном порядке.
//     Значит его нужно отсортировать по возрастанию.
// 2. Найти вторую точку обмена n[i] < n[j], причем j должен быть самым правым.
// 3. Меняем местами i элемент с j.
// 4. Оставшийся массив с элемента i + 1 нужно развернуть.





//function nextPermutation(inputArray) {
//     let i = inputArray.length;
//     let first;
//     let second;
//     while (i >= 0) {
//         if (inputArray[i - 1] < inputArray[i]) {
//             first = i - 1; break;
//         }
//         i--;
//     }
//     console.log('first')
//     console.log(first)
//     for (let j = inputArray.length - 1; j > first; j--) {
//         if (inputArray[first] < inputArray[j]) { second = j; break; }
//     }
//     console.log('second');
//     console.log(second);
//     [inputArray[first], inputArray[second]] = [inputArray[second], inputArray[first]];
//     console.log(inputArray)
//     //const inputArray = [1, 4, 5, 3, 2];
//     const suffix = inputArray.splice(first + 1); // Отрезаем суффикс, начиная с индекса 1 (включительно)
//     console.log(suffix)
//     //suffix.reverse()
//     console.log(suffix)
//     inputArray.push(...suffix.reverse()); // Разворачиваем суффикс и добавляем его в начало массива
//     //console.log(inputArray); // [ 1, 4, 2, 3, 5 ]




//     console.log(inputArray)

// };










//const inputArray = nums;
    // let i = inputArray.length - 1;
    // let firstPoint;
    // let secondPoint;

    // while (i >= 0) {
    //     if (inputArray[i - 1] < inputArray[i]) {
    //         firstPoint = i - 1;
    //         break;
    //     }
    //     i--;
    // }
    // if (firstPoint === undefined) return inputArray.sort((a, b) => a - b);
    // for (let j = inputArray.length - 1; j > firstPoint; j--) {
    //     if (inputArray[firstPoint] < inputArray[j]) {
    //         secondPoint = j;
    //         break;
    //     }
    // }

    // [inputArray[firstPoint], inputArray[secondPoint]] = [inputArray[secondPoint], inputArray[firstPoint]];

    // const suffix = inputArray.splice(firstPoint + 1);
    // inputArray.push(...suffix.reverse());
    // return inputArray;