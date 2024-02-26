// Вам дано целое число n, указывающее, что есть n людей с номерами от 0 до n - 1. 
// Вам также дан двумерный целочисленный массив с нулевым индексом, 
// где Meetings[i] = [xi, yi, timei] указывает на то, что человек xi и человек yi 
// встречаются во время timei.
// Человек может присутствовать на нескольких встречах одновременно.
// Наконец, вам дается целое число firstPerson.
// У человека 0 есть секрет, и он первоначально делится этим секретом с человеком 
// firstPerson в момент 0. Этот секрет затем передается каждый раз, когда происходит 
// встреча с человеком, у которого есть секрет.Более формально, на каждой встрече, 
// если у человека xi есть секрет в timei, то он поделится секретом с человеком yi, и наоборот.
// Секреты передаются мгновенно.То есть человек может получить секрет и поделиться им с людьми 
// на других собраниях в течение того же периода времени.
// Верните список всех людей, у которых есть секрет, после того, как все встречи состоялись.
// Вы можете вернуть ответ в любом порядке.

// 2092


n = 6, meetings = [[1, 2, 5], [2, 3, 8], [1, 5, 10]], firstPerson = 1

var findAllPeople = function (n, meetings, firstPerson) {

    const graph = new Map();
    for (const meeting of meetings) {
        const [x, y, t] = meeting;
        if (!graph.has(x)) graph.set(x, []);
        if (!graph.has(y)) graph.set(y, []);
        graph.get(x).push([t, y]);
        graph.get(y).push([t, x]);
    }

    // Earliest time at which a person learned the secret
    // as per the current state of knowledge. If due to some new information,
    // the earliest time of knowing the secret changes, we will update it
    // and again process all the people whom he/she meets after the time
    // at which he/she learned the secret.
    const earliest = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    earliest[0] = 0;
    earliest[firstPerson] = 0;

    // Stack for DFS. It will store (person, time of knowing the secret)
    const stack = [];
    stack.push([0, 0]);
    stack.push([firstPerson, 0]);

    // Do DFS
    while (stack.length > 0) {
        const [person, time] = stack.pop();
        for (const [t, nextPerson] of graph.get(person) || []) {
            if (t >= time && earliest[nextPerson] > t) {
                earliest[nextPerson] = t;
                stack.push([nextPerson, t]);
            }
        }
    }

    // Since we visited only those people who know the secret
    // we need to return indices of all visited people.
    const ans = [];
    for (let i = 0; i < n; ++i) {
        if (earliest[i] !== Number.MAX_SAFE_INTEGER) {
            ans.push(i);
        }
    }
    return ans;

};

console.log(findAllPeople(n, meetings, firstPerson))