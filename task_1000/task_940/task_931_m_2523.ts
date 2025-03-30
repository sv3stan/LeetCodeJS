/**
Учитывая два положительных целых числа влево и вправо, найдите два целых числа num1 и num2, такие как: слева <= num1 <num2 <= справа. Как NUM1, так и NUM2 являются основными числами. num2 - num1 - минимум среди всех других пар, удовлетворяющих вышеуказанным условиям. Вернуть положительный целый массив ans = [num1, num2]. Если есть несколько пар, удовлетворяющих этими условиями, верните одно с наименьшим значением NUM1. Если таких чисел не существует, вернуть [-1, -1].
 */

function closestPrimes(left: number, right: number): number[] {
    const primes: number[] = [];
    for (let num = left; num <= right; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    if (primes.length < 2) {
        return [-1, -1];
    }
    let minDiff = Infinity;
    let result: number[] = [-1, -1];
    for (let i = 0; i < primes.length - 1; i++) {
        const currentDiff = primes[i + 1] - primes[i];
        if (currentDiff < minDiff) {
            minDiff = currentDiff;
            result = [primes[i], primes[i + 1]];
        }
    }
    return result;
}

function isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
