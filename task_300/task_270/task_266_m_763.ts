// Вам дана строка s.Мы хотим разделить строку на как можно большее количество частей,
// чтобы каждая буква появлялась не более чем в одной части.
// Обратите внимание, что разбиение выполнено так, что после объединения всех частей
// по порядку результирующая строка должна быть s.
// Верните список целых чисел, представляющих размер этих частей.
// 763

function partitionLabels(s: string): number[] {
    const last: { [key: string]: number } = {};

    for (let i = 0; i < s.length; i++) {
        last[s[i]] = i;
    }

    const ans: number[] = [];

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, last[s[i]]);
        if (i === end) {
            ans.push(end - start + 1);
            start = i + 1;
        }
    }

    return ans;
}
