// Учитывая целое число n, верните количество строк длины n, 
// состоящих только из гласных(a, e, i, o, u) и отсортированных лексикографически.
// Строка s считается лексикографически отсортированной, 
// если для всех допустимых i s[i] совпадает с s[i + 1] в алфавите или стоит перед ним.

// 1641

n = 3

var countVowelStrings = function (n) {


    const vowels = 5;
    function generateStrings(currentLength, vowelIndex) {
        if (currentLength === n) return 1; // Когда достигнута нужная длина строки, возвращаем 1 комбинацию.

        let count = 0;
        for (let i = vowelIndex; i < vowels; i++) count += generateStrings(currentLength + 1, i);

        return count;
    }

    return generateStrings(0, 0);

    // const vovels = ['a', 'e', 'i', 'o', 'e']
    // let count = 0;

    // for (let i = 0; i < n; i++) {
    //     for (let j = i; j < n; j++) {
    //         for (let k = j; k < n; k++) {
    //             console.log(i + ' -  i - ' + j + ' -  j - ' + k + ' -  k - ')
    //             count++
    //             console.log(count)
    //         }
    //     }
    // }




};


console.log(countVowelStrings(n))