// Учитывая функцию fn, массив или аргументы args и время 
// ожидания t в миллисекундах, вернуть функцию отмены cancelFn.
// После задержки t fn должна быть вызвана с аргументами, 
// переданными в качестве параметров, если только сначала 
// не была вызвана функция cancelFn.В этом случае никогда не следует вызывать fn.
//2715

let fn = (x) => x * 5;
let args = [2];
let t = 20;
let cancelT = 50;

function cancellable(fn, args, t) {

    let timerId;

    const cancelFn = () => {
        clearTimeout(timerId)
    };

    timerId = setTimeout(() => {
        fn(...args)
    }, t);

    return cancelFn;

};

//console.log(cancellable(fn, args, t));


const result = []


const start = performance.now()
const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ "time": diff, "returned": fn(...argsArr) })
}

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelT)

setTimeout(() => {
    cancel()
}, cancelT)

setTimeout(() => {
    console.log(result) // [{"time":20,"returned":10}]
}, maxT + 15)
