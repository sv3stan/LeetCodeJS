/**
Вам дают положительные целые дни, представляющие общее количество дней, которые работник доступен для работы (начиная со 1). Вам также дают 2D -массивы встречи размера n, где, встречи [i] = [start_i, end_i] представляют начальные и окончательные дни встречи I (включительно). Верните счет дни, когда сотрудник доступен для работы, но встречи не запланированы. Примечание: встречи могут перекрываться.
 */

function countDays(days: number, meetings: number[][]): number {
    meetings.sort((a, b) => a[0] - b[0]);

    const mergedMeetings: number[][] = [];

    for (const meeting of meetings) {
        if (
            mergedMeetings.length === 0 ||
            mergedMeetings[mergedMeetings.length - 1][1] < meeting[0]
        ) {
            mergedMeetings.push(meeting);
        } else {
            mergedMeetings[mergedMeetings.length - 1][1] = Math.max(
                mergedMeetings[mergedMeetings.length - 1][1],
                meeting[1],
            );
        }
    }

    let availableDaysCount = 0;
    let lastEnd = 0;

    for (const [start, end] of mergedMeetings) {
        availableDaysCount += Math.max(0, start - lastEnd - 1);
        lastEnd = end;
    }

    availableDaysCount += Math.max(0, days - lastEnd);

    return availableDaysCount;
}
