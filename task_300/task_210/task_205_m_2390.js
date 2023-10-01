// Вам дана строка s, содержащая звездочки *.
// За одну операцию вы сможете:
// Выберите звезду в с.
// Удалите ближайшего незвездного персонажа слева от него, а также удалите саму звезду.
// Верните строку после того, как все звезды были удалены.
//     Примечание:
// Входные данные будут сгенерированы таким образом, что операция всегда будет возможна.
// Можно показать, что результирующая строка всегда будет уникальной.
// 2390


s = "leet**cod*e";
//s = "erase*****"

var removeStars = function (s) {

    const temp = [];
    let left = 0;
    while (left < s.length) {
        if (s[left] !== '*') {
            temp.push(s[left]);
        }
        else
        //if (s[left] === '*') 

        {
            temp.pop();
            //left++;
        }

        //console.log(temp)
        left++;
        //console.log(left)
        //console.log(s)

    }
    //console.log(temp)
    if (temp.length > 0) { return temp.join(""); }
    else { return ''; }

};

console.log(removeStars(s))