// Учитывая две строки s и t, верните true, если они равны, 
// когда обе вводятся в пустые текстовые редакторы. '#' означает символ возврата.
// Обратите внимание, что после возврата пустого текста текст останется пустым.
// 844

s = "ab##", t = "c#d#"
//s = "ab##c", t = "c#d#z"
s = "xywrrmp"
t = "xywrrmu#p"
var backspaceCompare = function (s, t) {


    const sStack = [];
    const tStack = [];


    let point = 0;

    while (point < Math.max(s.length, t.length)) {


        if (point < s.length) (s[point] !== '#') ? sStack.push(s[point]) : sStack.pop();

        console.log('sStack');
        console.log(sStack);
        if (point < t.length) (t[point] !== '#') ? tStack.push(t[point]) : tStack.pop();

        point++
        console.log('tStack');
        console.log(tStack)

    }

    console.log('sStack');
    console.log(sStack);
    console.log('tStack');
    console.log(tStack)


    return JSON.stringify(sStack) === JSON.stringify(tStack);
};


console.log(backspaceCompare(s, t))