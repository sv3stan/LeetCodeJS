// Для заданного положительного целого числа миллисекунд 
// напишите асинхронную функцию, которая бездействует в 
// течение миллисекунд миллисекунд.Он может разрешить любое значение
//2621

let millis = 2000;

async function sleep(millis) {
    return new Promise(resolve =>
        setTimeout(resolve, millis)
    );
}


let t = Date.now()
sleep(2100).then(() => console.log(Date.now() - t)) // 100


