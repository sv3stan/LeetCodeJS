/**
You are given a 0-indexed 2D integer array pairs where pairs[i] = [starti, endi]. An arrangement of pairs is valid if for every index i where 1 <= i < pairs.length, we have endi-1 == starti. Return any valid arrangement of pairs. Note: The inputs will be generated such that there exists a valid arrangement of pairs.
Вам дан двумерный целочисленный массив с нулевым индексом, где пары[i] = [starti, endi]. Расположение пар допустимо, если для каждого индекса i, где 1 <= i <pairs.length, имеем endi-1 == starti. Верните любое допустимое расположение пар. Примечание. Входные данные будут сгенерированы таким образом, чтобы существовало допустимое расположение пар.
 */

function validArrangement(pairs: number[][]): number[][] {
    const graph: Map<number, number[]> = new Map();
    const inDegree: Map<number, number> = new Map();
    const outDegree: Map<number, number> = new Map();

    for (const [start, end] of pairs) {
        if (!graph.has(start)) graph.set(start, []);
        graph.get(start)!.push(end);

        outDegree.set(start, (outDegree.get(start) || 0) + 1);
        inDegree.set(end, (inDegree.get(end) || 0) + 1);
    }

    let startNode = pairs[0][0];
    for (const [node, outDeg] of outDegree.entries()) {
        const inDeg = inDegree.get(node) || 0;
        if (outDeg > inDeg) {
            startNode = node;
            break;
        }
    }

    const result: number[][] = [];
    const stack: number[] = [startNode];

    while (stack.length) {
        const node = stack[stack.length - 1];
        if (graph.has(node) && graph.get(node)!.length > 0) {
            const next = graph.get(node)!.pop()!;
            stack.push(next);
        } else {
            stack.pop();
            if (stack.length) {
                result.push([stack[stack.length - 1], node]);
            }
        }
    }

    return result.reverse();
}
