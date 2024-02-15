// Учитывая массив строковых слов, верните первую палиндромную строку в массиве.
// Если такой строки нет, верните пустую строку «».
// Строка является палиндромной, если она читается одинаково и вперед, и назад.

// 2108


words = ["abc", "car", "adceda", "racecar", "cool"]

var firstPalindrome = function (words) {


    function isPalindrome(str) {
        console.log('++++++++++')
        let i = 0;
        let j = str.length - 1;
        while (i < j) {
            console.log(str[i] + ' -  str[i] - ' + str[j] + ' - str[j]')
            if (str[i] !== str[j]) {
                return false;
            }
            i++;
            j--;

        }
        return true;
    }


    for (let i = 0; i < words.length; i++) {

        if (isPalindrome(words[i])) {
            return words[i]
        }

    }

    return "";
};

console.log(firstPalindrome(words))