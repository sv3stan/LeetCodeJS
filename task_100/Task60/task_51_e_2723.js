// Учитывая два обещания promise1 и promise2, вернуть новое обещание.
// обещание1 и обещание2 будут разрешаться числом.Возвращаемое обещание 
// должно разрешаться суммой двух чисел.
//2723

let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 200));
let promise2 = new Promise(resolve => setTimeout(() => resolve(5), 300));

async function addTwoPromises(promise1, promise2) {

    const resultPromise1 = await promise1;
    const resultPromise2 = await promise2;

    return new Promise((resolve) => {
        const sum = resultPromise1 + resultPromise2;
        resolve(sum);
    });

};


addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4


//addTwoPromises(promise1, promise2)