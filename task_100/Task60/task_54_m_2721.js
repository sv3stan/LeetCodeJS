// Учитывая массив функций асинхронных функций, вернуть новое обещание promise.
// Каждая функция в массиве не принимает аргументов и возвращает обещание.
// обещание решает:
// Когда все промисы, возвращенные из functions, были успешно разрешены.
// Разрешенное значение обещания должно быть массивом всех разрешенных 
// значений обещаний в том же порядке, что и в функциях.
// обещание отвергает:
// Когда любое из обещаний, возвращенных из functions, было отклонено.
// обещание также должно быть отклонено с указанием причины первого отказа.
// Пожалуйста, решите ее, не используя встроенную функцию Promise.all.
//2721

// let functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
//     () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
//     () => new Promise(resolve => setTimeout(() => resolve(16), 100))
// ];

//let functions = [
//    () => new Promise(resolve => setTimeout(() => resolve(5), 200))
//];

let functions = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
];

var promiseAll = async function (functions) {
    return new Promise((resolve, reject) => {
        const promisesCount = functions.length;
        const results = new Array(promisesCount);
        let resolvedCount = 0;
        let rejected = false;

        functions.forEach((func, index) => {
            func()
                .then(result => {
                    if (!rejected) {
                        results[index] = result;
                        if (++resolvedCount === promisesCount) {
                            resolve(results);
                        }
                    }
                })
                .catch(function (error) {
                    if (!rejected) {
                        rejected = true;
                        reject(error);
                    }
                });
        });
    });
};


// return new Promise((resolve, reject) => {
//     let ans = [], j = functions.length;
//     functions.forEach((func, i) => {
//         func()
//         .then((res) => {
//             (ans[i] = res, --j === 0 && resolve(ans))
//         })
//             .catch(reject)
//     })
// })






// async function promiseAll(functions) {

//     return new Promise((resolve, reject) => {
//         const results = [];
//         let count = 0;

//         function processPromice(index) {

//             functions[index]()
//                 .then(result => {
//                     console.log(result);
//                     results[index] = { "t": 150, "resolved": [result] };
//                     count++;
//                     console.log(count);
//                     if (count === functions.length) {
//                         resolve(results);
//                     } else {
//                         processPromice(count);
//                     }
//                 })
//                 .catch(reject);
//         }
//         console.log(results);

//         if (functions.length === 0) {
//             resolve(results);
//         } else {
//             processPromice(0);
//         }


//     });

// };

// promiseAll(functions)
//     .then(results => {
//         console.log(results); // ['First', 'Second', 'Third']
//     })
//     .catch(reason => {
//         console.error(reason);
//     });



const promise = promiseAll(functions);
//const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]

//promiseAll(functions).then(console.log).catch(console.error);




// function promiseAll(functions) {
//     return new Promise((resolve, reject) => {
//         let resolved = [];
//         let rejected = false;
//         let rejectionReason = null;
//         let completed = 0;
//         let t = 0;

//         function handlePromise(index, result) {
//             if (rejected) {
//                 return;
//             }

//             resolved[index] = result;
//             completed++;

//             if (completed === functions.length) {
//                 resolve({ t, resolved });
//             }
//         }

//         function handleRejection(reason) {
//             if (rejected) {
//                 return;
//             }

//             rejected = true;
//             rejectionReason = reason;
//             reject({ t, rejected: rejectionReason });
//         }

//         for (let i = 0; i < functions.length; i++) {
//             setTimeout(() => {
//                 const promise = functions[i]();

//                 promise.then(result => {
//                     handlePromise(i, result);
//                 }).catch(reason => {
//                     handleRejection(reason);
//                 });
//             }, 0);
//         }
//     });
// }