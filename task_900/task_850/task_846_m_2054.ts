/**
You are given a 0-indexed 2D integer array of events where events[i] = [startTimei, endTimei, valuei]. The ith event starts at startTimei and ends at endTimei, and if you attend this event, you will receive a value of valuei. You can choose at most two non-overlapping events to attend such that the sum of their values is maximized. Return this maximum sum. Note that the start time and end time is inclusive: that is, you cannot attend two events where one of them starts and the other ends at the same time. More specifically, if you attend an event with end time t, the next event must start at or after t + 1.
Вам предоставляется 2D-целочисленный массив событий с нулевым индексом, где event[i] = [startTimei, endTimei, valuei]. i-е событие начинается в startTimei и заканчивается в endTimei, и если вы посетите это событие, вы получите значение valuei. Вы можете выбрать не более двух непересекающихся событий для посещения так, чтобы сумма их значений была максимальной. Верните эту максимальную сумму. Обратите внимание, что время начала и время окончания являются инклюзивными: то есть вы не можете посетить два мероприятия, где одно из них начинается, а другое заканчивается одновременно. Точнее, если вы посещаете мероприятие со временем окончания t, следующее мероприятие должно начаться в момент t + 1 или после него.
 */
function maxTwoEvents(events: number[][]): number {
    events.sort((a, b) => a[1] - b[1]);

    const n = events.length;
    const maxValues: number[] = new Array(n).fill(0);

    maxValues[0] = events[0][2];
    for (let i = 1; i < n; i++) {
        maxValues[i] = Math.max(maxValues[i - 1], events[i][2]);
    }

    let result = 0;

    const findLastNonOverlapping = (index: number): number => {
        let low = 0,
            high = index - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (events[mid][1] < events[index][0]) {
                if (events[mid + 1][1] < events[index][0]) {
                    low = mid + 1;
                } else {
                    return mid;
                }
            } else {
                high = mid - 1;
            }
        }
        return -1;
    };

    for (let i = 0; i < n; i++) {
        result = Math.max(result, events[i][2]);
        const lastNonOverlap = findLastNonOverlapping(i);
        if (lastNonOverlap !== -1) {
            result = Math.max(result, events[i][2] + maxValues[lastNonOverlap]);
        }
    }

    return result;
}
