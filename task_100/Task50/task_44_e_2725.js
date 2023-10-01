// Учитывая функцию fn, массив аргументов args и интервал времени t, 
// вернуть функцию отмены cancelFn.Функция fn должна вызываться с 
// аргументами немедленно, а затем снова вызываться каждые t миллисекунд, 
// пока не будет вызвана функция cancelFn.
//2725

// let fn = (x) => x * 2;
// let args = [4];
// let t = 20;
// let cancelT = 110;


// let fn = (x1, x2) => (x1 * x2);
// let args = [2, 5];
// let t = 25;
// let cancelT = 140;

let fn = (x1, x2, x3) => (x1 + x2 + x3);
let args = [5, 1, 3];
let t = 50;
let cancelT = 180;

// function logs(result) {

//     let logged = {
//         time:

//     }
//     console.log(result)

// };

function cancellable(fn, args, t) {

    // result = fn(...args);
    // console.log(result);
    // //console.log(fn(...args));
    // let timerId = setInterval(() => console.log(result), t);
    // //let cancelT = () => clearInterval(timerId);

    // setTimeout(() => {
    //     clearInterval(timerId);
    // }, cancelT);
    // //    return cancelT;


    fn(...args);
    let timerId = setInterval(() => { fn(...args) }, t);
    let cancelT = () => clearInterval(timerId);
    return cancelT;

};

// result = fn(...args);
// let timerId = setInterval(() => console.log(result), t);
// setTimeout(() => {
//     clearInterval(timerId);
// }, cancelT);



//console.log(cancellable(fn, args, t));
cancellable(fn, args, t);
/**
 *  const result = []
 *
 *  const fn = (x) => x * 2
 *  const args = [4], t = 20, cancelT = 110
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *		const val = fn(...argsArr)
 *      result.push({"time": Math.floor(performance.now() - start), "returned": fn(...argsArr)})
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *           
 *  setTimeout(() => {
 *     cancel()
 *     console.log(result) // [
 *                         //      {"time":0,"returned":8},
 *                         //      {"time":20,"returned":8},
 *                         //      {"time":40,"returned":8},           
 *                         //      {"time":60,"returned":8},
 *                         //      {"time":80,"returned":8},
 *                         //      {"time":100,"returned":8}
 *                         //  ]
 *  }, cancelT)
 */