// Вам дан целочисленный массив чисел с нулевым индексом, 
// и вам разрешено перемещаться между его индексами.
// Вы можете перемещаться между индексом i и индексом j, i != j, 
// тогда и только тогда, когда gcd(nums[i], nums[j]) > 1, 
// где gcd — наибольший общий делитель.
// Ваша задача — определить, существует ли для каждой пары индексов i и j в nums, 
// где i < j, последовательность обходов, которая может привести нас от i к j.
// Возвращайте true, если можно перемещаться между всеми такими парами индексов, или false в противном случае.


// 2709

nums = [2, 3, 6]




var canTraverseAllPairs = function (nums) {

    if (nums.length === 1) return true;
    if (nums.includes(1)) return false;
    const max = Math.max(...nums) + 1;
    const sieve = Array.from({ length: max }, (_, i) => i);

    for (let i = 4; i < max; i += 2) {
        sieve[i] = 2;
    }

    for (let i = 3; i < Math.ceil(Math.sqrt(max)); i++) {
        if (sieve[i] !== i) continue;
        for (let j = i * i; j < max; j += i) {
            if (sieve[j] === j) {
                sieve[j] = i;
            }
        }
    }

    function* factorize(num) {
        while (num !== 1) {
            yield sieve[num];
            num = Math.floor(num / sieve[num]);
        }
    }

    const g = new Map();
    const seen = new Set();

    for (const num of new Set(nums)) {
        for (const p of factorize(num)) {
            if (!g.has(num)) g.set(num, new Set());
            if (!g.has(p)) g.set(p, new Set());
            g.get(num).add(p);
            g.get(p).add(num);
        }
    }

    const dq = [nums[0]];
    seen.add(nums[0]);

    while (dq.length) {
        const num = dq.shift();
        for (const nxt of g.get(num)) {
            if (seen.has(nxt)) continue;
            seen.add(nxt);
            dq.push(nxt);
        }
    }

    return seen.size === g.size;

};

console.log(canTraverseAllPairs(nums))