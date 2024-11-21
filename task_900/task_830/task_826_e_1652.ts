/**
You have a bomb to defuse, and your time is running out!Your informer will provide you with a circular array code of length of n and a key k. To decrypt the code, you must replace every number.All the numbers are replaced simultaneously. If k > 0, replace the ith number with the sum of the next k numbers. If k < 0, replace the ith number with the sum of the previous k numbers. If k == 0, replace the ith number with 0. As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1]. Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!
Вам нужно обезвредить бомбу, а ваше время истекает! Ваш информер предоставит вам код кольцевого массива длиной n и ключ k. Чтобы расшифровать код, необходимо заменить каждую цифру. Все цифры заменяются одновременно. Если k > 0, замените i-е число суммой следующих k чисел. Если k < 0, замените i-е число суммой предыдущих k чисел. Если k == 0, замените i-е число на 0. Поскольку код является циклическим, следующим элементом кода[n-1] является код[0], а предыдущим элементом кода[0] является код[n-1]. Учитывая код кругового массива и целочисленный ключ k, верните расшифрованный код, чтобы обезвредить бомбу!
 */

function decrypt(code: number[], k: number): number[] {
    const codeLength = code.length;
    const answer: number[] = Array.from({ length: codeLength }, () => 0);

    if (k == 0) return answer;

    let sum = 0;
    let start: number;
    let end: number;

    if (k > 0) {
        start = 1;
        end = k;
        for (let i = start; i <= end; i++) sum += code[i % codeLength];
    } else {
        start = codeLength + k;
        end = codeLength - 1;
        for (let i = start; i <= end; i++) sum += code[i % codeLength];
    }

    for (let i = 0; i < codeLength; i++) {
        answer[i] = sum;
        sum -= code[start % codeLength];
        sum += code[(end + 1) % codeLength];
        start++;
        end++;
    }

    return answer;
}
