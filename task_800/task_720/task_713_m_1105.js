﻿/**
Вам дан массив books, в котором books[i] = [thicknessi, heighti] обозначает толщину и высоту i-й книги. Мы хотим разместить эти книги по порядку на полках книжного шкафа, которые имеют общую ширину shelfWidth. Мы выбираем несколько книг для размещения на этой полке так, чтобы сумма их толщин была меньше или равна shelfWidth, затем строим еще один уровень полок книжного шкафа так, чтобы общая высота книжного шкафа увеличилась на максимальную высоту книг, которые мы только что положили. Мы повторяем этот процесс до тех пор, пока не останется книг для размещения. Обратите внимание, что на каждом шаге этого процесса порядок размещения книг соответствует заданной последовательности книг. Например, если у нас есть упорядоченный список из 5 книг, мы можем разместить первую и вторую книгу на первой полке, третью книгу на второй полке, а четвертую и пятую книгу на последней полке. Верните минимально возможную высоту, которую может иметь общий книжный шкаф после размещения полок таким образом.
 */

let books = [
    [1, 1],
    [2, 3],
    [2, 3],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 2],
];
let shelfWidth = 4;

let minHeightShelves = function (books, shelfWidth) {
    const n = books.length;
    const dp = Array.from({ length: n + 1 }).fill(0);

    dp[0] = 0;
    dp[1] = books[0][1];

    for (let i = 1; i <= n; ++i) {
        let remainingWidth = shelfWidth - books[i - 1][0];
        let maxHeight = books[i - 1][1];
        dp[i] = dp[i - 1] + maxHeight;

        let j = i - 1;

        while (j > 0 && remainingWidth - books[j - 1][0] >= 0) {
            remainingWidth -= books[j - 1][0];
            maxHeight = Math.max(maxHeight, books[j - 1][1]);
            dp[i] = Math.min(dp[i], dp[j - 1] + maxHeight);
            j--;
        }
    }

    return dp[n];
};

console.log(minHeightShelves(books, shelfWidth)); // Output: 4
