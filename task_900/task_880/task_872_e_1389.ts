/**
Даны два массива целых чисел nums и index. Ваша задача — создать целевой массив по следующим правилам: Изначально целевой массив пуст. Слева направо прочитайте nums[i] и index[i], вставьте в индекс index[i] значение nums[i] в целевой массив. Повторяйте предыдущий шаг до тех пор, пока не останется элементов для чтения в числах и индексах. Верните целевой массив. Гарантируется, что операции вставки будут действительными.
 */

function createTargetArray(nums: number[], index: number[]): number[] {
    const answer: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (answer.length < index[i]) {
            answer.push(nums[index[i]]);
        } else {
            answer.splice(index[i], 0, nums[i]);
        }
    }
    return answer;
}
