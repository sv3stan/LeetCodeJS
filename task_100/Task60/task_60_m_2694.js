// Создайте класс EventEmitter.Этот интерфейс похож(но с некоторыми отличиями) на тот, который можно найти в Node.js 
// или на интерфейсе Event Target модели DOM.EventEmitter должен разрешать подписку на события и их отправку.
// Ваш класс EventEmitter должен иметь следующие два метода:
// subscribe — этот метод принимает два аргумента: имя события в виде строки и функцию обратного вызова.
// Эта функция обратного вызова будет позже вызвана, когда будет сгенерировано событие.
// Событие должно иметь возможность иметь несколько слушателей для одного и того же события.
// При отправке события с несколькими обратными вызовами каждый из них должен вызываться в том порядке, 
// в котором они были подписаны.Должен быть возвращен массив результатов.Вы можете предположить, 
// что никакие обратные вызовы, переданные для подписки, не идентичны ссылочно.
// Метод подписки также должен возвращать объект с методом отмены подписки, который позволяет пользователю 
// отказаться от подписки.При его вызове обратный вызов должен быть удален из списка подписок и возвращено значение undefined.
// emit — этот метод принимает два аргумента: имя события в виде строки и необязательный массив аргументов, 
// которые будут переданы в функции обратного вызова.Если на данное событие не подписаны обратные вызовы, 
// вернуть пустой массив.В противном случае верните массив результатов всех вызовов обратного вызова в том порядке, 
// в котором они были подписаны.

//2694

actions = ["EventEmitter", "subscribe", "emit", "emit"];
values = [[], ["firstEvent", "function cb1(...args) { return args.join(','); }"], ["firstEvent", [1, 2, 3]], ["firstEvent", [3, 4, 6]]]

class EventEmitter {
    constructor() {
        this.events = {};
    }
    subscribe(event, cb) {
        const subscription = {
            event,
            cb
        };
        this.events[event] = this.events[event] || [];
        this.events[event].push(subscription);
        console.log("Subscribed to", event);
        return {
            unsubscribe: () => {
                const index = this.events[event].indexOf(subscription);
                if (index !== -1) {
                    this.events[event].splice(index, 1);
                    console.log("Unsubscribed from", event);
                }
            }
        };
    }

    emit(event, args = []) {
        const subscriptions = this.events[event];
        if (!subscriptions) {
            console.log("No subscriptions for", event);
            return [];
        }

        const results = [];
        for (const subscription of subscriptions) {
            results.push(subscription.cb(...args));
        }
        console.log("Emitted", event, "with args", args);
        return results;
    }
}


const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);

emitter.emit('onClick'); // [99]
sub.unsubscribe(); // undefined
emitter.emit('onClick'); // []

// const emitter = new EventEmitter();

// const subscription1 = emitter.subscribe('event1', (arg) => {
//     console.log(`Event 1 - Argument: ${arg}`);
// });

// const subscription2 = emitter.subscribe('event2', () => {
//     console.log('Event 2');
// });

// emitter.emit('event1', 'Hello'); // Вывод: Event 1 - Argument: Hello
// emitter.emit('event2'); // Вывод: Event 2

// subscription1.unsubscribe();

// emitter.emit('event1', 'World'); // Больше ничего не выводится, так как подписчик subscription1 отписался от события event1