// Иногда у вас есть длительная задача, и вы можете отменить ее до ее завершения.
// Чтобы помочь с этой целью, напишите отмену функции, которая принимает объект - 
// генератор и возвращает массив из двух значений: функция отмены и обещание.
// Вы можете предположить, что функция генератора будет давать только промисы.
// Ваша функция несет ответственность за передачу значений, разрешенных промисом, 
// обратно в генератор.Если обещание отклонено, ваша функция должна вернуть эту ошибку обратно в генератор.
// Если обратный вызов отмены вызывается до завершения работы генератора, ваша функция 
// должна возвращать генератору ошибку.Эта ошибка должна быть строкой «Отменено» (не объект ошибки). 
// Если ошибка была обнаружена, возвращенное обещание должно разрешиться со следующим значением, 
// которое было передано или возвращено.В противном случае обещание должно быть отклонено с выданной ошибкой.
// Код больше не должен выполняться.
// Когда генератор завершится, обещание, возвращенное вашей функцией, должно разрешать значение, 
// возвращенное генератором.Однако если генератор выдает ошибку, возвращенное обещание должно быть отклонено с ошибкой.
// 2650



var cancellable = function (generator) {
    var cancel;

    const cancelPromise = new Promise((_, reject) => {
        cancel = () => reject("Cancelled");
    });

    cancelPromise.catch(() => { });

    const promise = (async () => {
        let next = generator.next;
        while (!next.done) {
            try {
                next = generator.next(await Promise.race([next.value, cancelPromise]));
            } catch (e) {
                next = generator.throw(e);
            }
        }
        return next.value;
    })();
    return [cancel, promise];
};

// function* tasks() {
//     const val = yield new Promise(resolve => resolve(2 + 2));
//     yield new Promise(resolve => setTimeout(resolve, 100));
//     return val + 1;
// }

const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 350);
promise.then(console.log).catch(console.log); // logs "Cancelled" at t=50ms


function* tasks() {
    function* inner() {

        let a = yield new Promise(r => r(2));
        console.log('=====');
        let b = yield new Promise(r => r(5));
        console.log('=====');
        let c = yield new Promise(r => r(a + b));
        console.log('=====');
        yield new Promise(res => setTimeout(res, 250));
        console.log('=====');
        return c;
    };
    console.log('-------------');
    const x = yield* inner();
    console.log('+++++++++');
    return yield new Promise(r => r(x * x));
}









