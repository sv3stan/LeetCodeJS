// Вам дано целое число n.Имеется n комнат, пронумерованных от 0 до n - 1.
// Вам дан двухмерный целочисленный массив собраний, где встречи[i] = [starti, endi] означает, 
// что встреча будет проводиться в течение полузакрытого интервала времени[starti, endi). 
// Все значения starti уникальны.
// Совещания распределяются по помещениям следующим образом:
// Каждая встреча будет проходить в неиспользуемой комнате с наименьшим номером.
// Если свободных помещений нет, встреча будет отложена до тех пор, пока не освободится помещение.
// Отложенная встреча должна иметь ту же продолжительность, что и первоначальная встреча.
// Когда комната становится неиспользуемой, она должна быть предоставлена ​​собраниям, 
// у которых исходное время начала более раннее.
// Возвращает номер комнаты, в которой проводилось наибольшее количество собраний.
// Если комнат несколько, верните комнату с наименьшим номером.
// Полузамкнутый интервал[a, b) — это интервал между a и b, включающий a и не включающий b.

//     2402

n = 2, meetings = [[0, 10], [1, 5], [2, 7], [3, 4]]

n = 3, meetings = [[2, 10], [3, 5], [4, 9], [6, 8], [1, 20]]

var mostBooked = function (n, meetings) {

    let roomAvailability = new Array(n).fill(0);
    let count = new Array(n).fill(0);

    meetings.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < meetings.length; i++) {
        let [start, end] = meetings[i];
        let minRoomAvailabilityTime = Number.MAX_SAFE_INTEGER;
        let minAvailableTimeRoom = 0;
        let getUnusedRoom = false;

        for (let j = 0; j < n; j++) {
            if (roomAvailability[j] <= start) {
                getUnusedRoom = true;
                count[j]++;
                roomAvailability[j] = end;
                break;
            }

            if (minRoomAvailabilityTime > roomAvailability[j]) {
                minRoomAvailabilityTime = roomAvailability[j];
                minAvailableTimeRoom = j;
            }
        }

        if (!getUnusedRoom) {
            roomAvailability[minAvailableTimeRoom] += end - start;
            count[minAvailableTimeRoom]++;
        }
    }

    let maxMeetingCount = 0;
    let maxMeetingCountRoom = 0;

    for (let i = 0; i < n; i++) {
        if (count[i] > maxMeetingCount) {
            maxMeetingCount = count[i];
            maxMeetingCountRoom = i;
        }
    }

    return maxMeetingCountRoom;

};


console.log(mostBooked(n, meetings))