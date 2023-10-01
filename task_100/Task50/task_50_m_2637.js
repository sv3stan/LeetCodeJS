// Учитывая асинхронную функцию fn и время t в миллисекундах, вернуть новую ограниченную по времени 
// версию входной функции.fn принимает аргументы, предоставленные ограниченной по времени функции.
// Ограниченная по времени функция должна соответствовать следующим правилам:
// Если fn завершается в течение времени t миллисекунд, функция с ограничением по времени должна разрешаться с результатом.
// Если выполнение fn превышает ограничение по времени, функция с ограничением по времени должна быть отклонена со строкой «Превышено время».
//2637

// let fn = async (n) => {
//     await new Promise(res => setTimeout(res, 600));
//     return n * n;
// };
let inputs = [5];
let t = 50;
let fn = async (n) => { await new Promise(res => setTimeout(res, 100)); return n * n; }

var timeLimit = function (fn, t) {
    return async function (...args) {

        return new Promise((resolve, reject) => {
            let timerId;

            fn(...args)
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                });

            timerId = setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t);
        });


        // if (inputs.length === 0) {
        //     result = { "rejected": "Error", "time": 0 };
        //     console.log(result);
        //     return result;
        // }

        // const start = Date.now();

        // try {
        //     const result = await Promise.race([
        //         fn(...inputs),
        //         new Promise((resolve) => setTimeout(resolve, t))
        //     ]);

        //     console.log({ resolved: result, time: Date.now() - start });
        //     return result;
        // } catch (error) {
        //     console.log({ rejected: error, time: Date.now() - start });
        //     throw 'Time Limit Exceeded';
        // }


        // const start = Date.now()
        // console.log(t + ' - t');

        // let result;

        // const timeoutPromise = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         reject('Time Limit Exceeded');
        //     }, t);
        // });
        // const asyncOperationPromise = fn(...inputs);

        // return Promise.race([asyncOperationPromise, timeoutPromise])
        //     .then((data) => {
        //         result = { "resolved": data, "time": t};
        //         console.log(result);
        //     })
        //     .catch(error => {
        //         result = { "rejected": error, "time": Math.floor(Date.now() - start) };
        //         console.log(result);
        //     });

    }

};



//const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
const limited = timeLimit(fn, 1000);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
//limited(150);

//console.log(fn(4));

// const limited = timeLimit(async (x, y) => {
//     console.log(x + y); // Выполнение кода асинхронной функции
// }, 100);

// console.log(limited(5, 10));
