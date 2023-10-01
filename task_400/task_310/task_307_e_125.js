// Фраза является палиндромом, если после преобразования всех заглавных букв в строчные 
// и удаления всех небуквенно - цифровых символов она читается одинаково и вперед, и назад.
// Буквенно - цифровые символы включают буквы и цифры.
// Учитывая строку s, верните true, если это палиндром, или false в противном случае.
// 125


s = "A man, a plan, a canal: Panama";
s = '0P';

var isPalindrome = function (s) {

    const arr = [...s.toLowerCase()];
    for (let i = 0; i < s.length; i++) {
        if (!/[a-z0-9]/.test(arr[i])) {
            arr.splice(i, 1)
            i--;
        }
    }

    for (let i = 0; i < arr.length / 2; i++) if (arr[i] !== arr[arr.length - i - 1]) return false;



    console.log(arr)
    return true;
};



console.log(isPalindrome(s))


