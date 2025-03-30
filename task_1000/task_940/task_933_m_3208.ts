/**
Есть круг красной и синей плитки. Вам дается множество цветов целых чисел и целое число k. Цвет плитки I представлен цветами [i]: Цвета [i] == 0 означает, что плитка I красная. Цвета [i] == 1 означает, что плитка I синяя. Чередственная группа - это каждая K -смежная плитка в круге с чередующимися цветами (каждая плитка в группе, за исключением первого и последнего, имеет другой цвет от левой и правой плитки). Вернуть количество чередующихся групп. Обратите внимание, что, поскольку цвета представляют собой круг, первые и последние плитки считаются рядом друг с другом.
 */

function numberOfAlternatingGroups(colors: number[], k: number): number {
    const n = colors.length;
    if (k === 1) return n;
    const m = k - 1;
    const bad: number[] = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
        if (colors[j] === colors[(j + 1) % n]) {
            bad[j] = 1;
        }
    }

    const prefix: number[] = new Array(2 * n + 1).fill(0);
    for (let i = 0; i < 2 * n; i++) {
        prefix[i + 1] = prefix[i] + bad[i % n];
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        const end = i + m;
        const total = prefix[end] - prefix[i];
        if (total === 0) {
            count++;
        }
    }
    return count;
}
