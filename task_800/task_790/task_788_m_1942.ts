/**
Идет вечеринка, на которой присутствуют len friends с номерами от 0 до len - 1. На этой вечеринке бесконечное количество chairs, пронумерованных от 0 до бесконечности. Когда на вечеринку приходит friend, он садится на свободный chair с наименьшим номером.
Например, если chairs 0, 1 и 5 заняты, когда приходит friend, он сядет на chair номер 2.
Когда друг покидает вечеринку, его стул становится свободным в момент его ухода. Если в тот же момент придет еще один друг, он сможет сесть в это кресло.
Вам дан двумерный целочисленный массив times с индексом 0, где times[i] = [arrivali, Leavei], указывающий время прибытия и ухода i-го друга соответственно, и целочисленный targetFriend. Все времена прибытия различны.
Возвращает номер стула, на котором будет сидеть друг с номером targetFriend.
 */

let times = [
    [1, 4],
    [2, 3],
    [4, 6],
];
let targetFriend = 1;
function smallestChair(times, targetFriend) {
    let len = times.length;

    // Create a list of events with friend index
    let events = [];
    for (let i = 0; i < len; i++) {
        events.push([times[i][0], i]);
    }

    // Sort friends by arrival time
    events.sort((a, b) => a[0] - b[0]);

    // Min-Heap to track available chairs
    let chairs = new MinPriorityQueue({ priority: x => x });
    for (let i = 0; i < len; i++) {
        chairs.enqueue(i);
    }

    // Priority queue to track when chairs are freed
    let queue = new MinPriorityQueue({ priority: x => x[0] });

    // Iterate through each friend based on arrival
    for (let [arrivalTime, friendIndex] of events) {
        // Free chairs that are vacated before the current arrival time
        while (!queue.isEmpty() && queue.front().element[0] <= arrivalTime) {
            chairs.enqueue(queue.dequeue().element[1]);
        }

        // Assign the smallest available chair
        let chair = chairs.dequeue().element;

        // If this is the target friend, return their chair number
        if (friendIndex === targetFriend) {
            return chair;
        }

        // Mark the chair as being used until the friend's leave time
        queue.enqueue([times[friendIndex][1], chair]);
    }

    return -1;
}

console.log(smallestChair(times, targetFriend)); // Output: 1
