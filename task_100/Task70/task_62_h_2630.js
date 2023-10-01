// Учитывая функцию fn, вернуть запомненную версию этой функции.
// Запоминаемая функция — это функция, которая никогда не будет 
// вызываться дважды с одними и теми же входными данными.
// Вместо этого он вернет кэшированное значение.
// fn может быть любой функцией, и нет никаких ограничений на то, 
// какие типы значений она принимает.Входные данные считаются 
// идентичными, если они === друг другу.
// 2630

// function prepareArgs(arg) {
//   let keys = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] === null) {
//       return keysStr = 'null';
//     }
//     if (arg[i] === undefined) {
//       return keysStr = 'undefined';
//     }
//     if (typeof arg[i] === 'object' && Object.keys(arg[i].length === 0)) {
//       return keysStr = {};
//     }
//     if (typeof arg[i] === 'number' || typeof arg[i] === 'boolean') {
//       keys.push(arg[i]);
//     }
//   }
//   return keysStr = keys.toString();
// }



// function memoize(fn) {
//   let cache = new Map();
//   return function () {
//     let preparedArgs;
//     for (let i = 0; i < arguments.length; i++) {
//       preparedArgs = prepareArgs(arguments);
//     }
//     if (cache.has(preparedArgs)) {
//       return cache.get(preparedArgs);
//     } else {
//       const result = fn(...arguments);
//       cache.set(preparedArgs, result);
//       return result;
//     }
//   }
// }


const RES = Symbol("result");

/**
 * @param {Function} fn
 */
function memoize(fn) {
  const globalCache = new Map();

  return (...arguments) => {
    let currentCache = globalCache;

    for (const Arg of arguments) {
      if (!currentCache.has(Arg)) {
        currentCache.set(Arg, new Map());
      }
      currentCache = currentCache.get(Arg);
    }

    if (currentCache.has(RES)) {
      return currentCache.get(RES);
    } else {
      const result = fn(...arguments);
      currentCache.set(RES, result);
      return result;
    }

  }
}

let callCount = 0;



// const memoizedFn = memoize(function (...arr) {
//   callCount += 1;
//   return arr.reduce((a, b) => a + b, 0);
// })

// console.log(memoizedFn(1, 1, 1, 1)); // 5
// console.log(memoizedFn(1, 1, 1)); // 5
// console.log(memoizedFn(1, 1)); // 5
// console.log(memoizedFn(1)); // 5
// console.log(memoizedFn(1, 1)); // 5
// console.log(memoizedFn(1, 1, 1)); // 5
// console.log(memoizedFn(1, 1, 1, 1)); // 5




// const memoizedFn = memoize(function (a) {
//   callCount += 1;
//   return !!a;
// });
// console.log(memoizedFn(null)); // 5
// console.log(memoizedFn(undefined)); // 5
// console.log(memoizedFn(null)); // 5
// console.log(memoizedFn(undefined)); // 5



// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// })
// console.log(memoizedFn(3, 2)); // 5
// console.log(memoizedFn(2, 2)); // 5
// console.log(memoizedFn(2, 2)); // 5
// console.log(memoizedFn(2, 1)); // 5
// console.log(memoizedFn({}, {})); // 5
// console.log(memoizedFn({}, {})); // 5
// console.log(memoizedFn(4, 5)); // 5 

// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return ({ ...a, ...b });
// })
// console.log(memoizedFn({}, {})); // 5
// console.log(memoizedFn({}, {})); // 5
// console.log(memoizedFn({}, {})); // 5
// console.log(memoizedFn({}, {})); // 5


const memoizedFn = memoize(function fn(a, b) {
  callCount += 1;
  return { ...a, ...b };
})

function getInputs() {
  const o = {};
  return [[o, o], [o, o], [o, o]];
}

console.log(...getInputs())
console.log(memoizedFn(...getInputs()[0]));
console.log(memoizedFn(...getInputs()[1]));
console.log(memoizedFn(...getInputs()[2]));



//memoizedFn({}, {}) // 5
console.log(callCount) // 1



















// const RES = Symbol("result");

// /**
//  * @param {Function} fn
//  */
// function memoize(fn) {
//   const globalCache = new Map();

//   return (...params) => {
//     let currentCache = globalCache;
//     //let fnArgs = [];
//     console.log(params.length);
//     console.log(params);
//     // for (let i = 0; i < params.length - 1; i++) {
//     //   fnArgs.push(...params);
//     // }
//     // console.log('fnArgs');
//     // console.log(fnArgs);
//     for (const fnArgs of params) {
//       if (!currentCache.has(fnArgs)) {
//         currentCache.set(fnArgs, new Map());
//       }
//       currentCache = currentCache.get(fnArgs);
//     }


//     if (currentCache.has(RES)) {
//       console.log('+++++++++++++');
//       console.log('currentCache');
//       console.log(currentCache);
//       return currentCache.get(RES);
//     } else {
//       console.log('---------------');
//       const result = fn(...params);
//       currentCache.set(RES, result);
//       console.log('currentCache');
//       console.log(currentCache);
//       return result;
//     }

//     // //console.log(globalCache);
//     // if (currentCache.has(RES)) return currentCache.get(RES);
//     // // console.log('=+++++++++++++');
//     // const result = fn(...params);

//     // currentCache.set(RES, result);
//     // return result;
//   }
// }









// function prepareArgs(arg) {
//     let keys = [];
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] === null) {
//             return keysStr = 'null';
//         }
//         if (arg[i] === undefined) {
//             return keysStr = 'undefined';
//         }
//         if (typeof arg[i] === 'object' && Object.keys(arg[i].length === 0)) {
//             return keysStr = {};
//         }
//         if (typeof arg[i] === 'number' || typeof arg[i] === 'boolean') {
//             keys.push(arg[i]);
//         }
//     }
//     return keysStr = keys.toString();
// }



// function memoize(fn) {
//     let cache = new Map();
//     return function () {
//         let preparedArgs;
//         for (let i = 0; i < arguments.length; i++) {
//             preparedArgs = prepareArgs(arguments);
//         }
//         if (cache.has(preparedArgs)) {
//             return cache.get(preparedArgs);
//         } else {
//             const result = fn(...arguments);
//             cache.set(preparedArgs, result);
//             return result;
//         }
//     }
// }











// function memoize(fn) {
//   let cache = [];
//   //let map = new Map();
//   //let map = new WeakMap();
//   return function () {
//     let fnArgs = [];
//     //let fnArgs = arguments;
//     for (let i = 0; i < arguments.length; i++) {
//       fnArgs[i] = arguments[i];
//     }

//     // //fnArgs = JSON.stringify(arguments);

//     // if (!map.has(fnArgs)) {
//     //   let res = fn(...fnArgs);
//     //   map.set(fnArgs, { res });
//     // } else {
//     //   console.log('----------------');
//     // }
//     // console.log(map);


//     const point = cache.findIndex(item => {
//       const itemWithoutLast = item.slice(0, -1);
//       if (itemWithoutLast.length !== fnArgs.length) {
//         return false;
//       }
//       for (let i = 0; i < fnArgs.length; i++) {
//         if (itemWithoutLast[i] !== fnArgs[i]) {
//           return false;
//         }
//       }
//       return true;
//     });

//     if (point > -1) {
//       return cache[point][cache[point].length - 1];
//     } else {
//       fnArgs.push(fn(...arguments));
//       cache.push(fnArgs);
//       return fnArgs[fnArgs.length - 1];
//     }
//   }
// }

