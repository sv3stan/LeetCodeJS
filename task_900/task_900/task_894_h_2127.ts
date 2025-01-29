/**
 Компания организует встречу и имеет список из n сотрудников, ожидающих приглашения. Они устроили большой круглый стол, за которым может поместиться любое количество сотрудников. Сотрудники пронумерованы от 0 до n - 1. У каждого сотрудника есть любимый человек, и они придут на встречу только в том случае, если смогут сесть рядом со своим любимым человеком за столом. Любимый человек сотрудника — не он сам. Учитывая целочисленный массив с индексом 0, где Favorite[i] обозначает любимого человека i-го сотрудника, верните максимальное количество сотрудников, которых можно пригласить на встречу.
 */

function maximumInvitations(favorite: number[]): number {
    const n = favorite.length;
    const reversedGraph: number[][] = Array.from({ length: n }, () => []);

    for (let person = 0; person < n; ++person) {
        reversedGraph[favorite[person]].push(person);
    }

    const bfs = (startNode: number, visitedNodes: Set<number>): number => {
        const queue: [number, number][] = [[startNode, 0]];
        let maxDistance = 0;

        while (queue.length > 0) {
            const [currentNode, currentDistance] = queue.shift()!;
            for (const neighbor of reversedGraph[currentNode]) {
                if (visitedNodes.has(neighbor)) continue;
                visitedNodes.add(neighbor);
                queue.push([neighbor, currentDistance + 1]);
                maxDistance = Math.max(maxDistance, currentDistance + 1);
            }
        }
        return maxDistance;
    };

    let longestCycle = 0;
    let twoCycleInvitations = 0;
    const visited: boolean[] = Array(n).fill(false);

    for (let person = 0; person < n; ++person) {
        if (!visited[person]) {
            const visitedPersons: Map<number, number> = new Map();
            let current = person;
            let distance = 0;

            while (true) {
                if (visited[current]) break;
                visited[current] = true;
                visitedPersons.set(current, distance++);
                const nextPerson = favorite[current];

                if (visitedPersons.has(nextPerson)) {
                    const cycleLength =
                        distance - visitedPersons.get(nextPerson)!;
                    longestCycle = Math.max(longestCycle, cycleLength);

                    if (cycleLength === 2) {
                        const visitedNodes: Set<number> = new Set([
                            current,
                            nextPerson,
                        ]);
                        twoCycleInvitations +=
                            2 +
                            bfs(nextPerson, visitedNodes) +
                            bfs(current, visitedNodes);
                    }
                    break;
                }
                current = nextPerson;
            }
        }
    }

    return Math.max(longestCycle, twoCycleInvitations);
}
