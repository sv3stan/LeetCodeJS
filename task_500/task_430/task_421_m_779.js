// Строим таблицу из n строк(1 - индексированную).
// Начнем с записи 0 в 1 - й строке.Теперь в каждой 
// последующей строке мы смотрим на предыдущую строку 
// и заменяем каждое вхождение 0 на 01, 
// а каждое вхождение 1 на 10.
// Например, для n = 3 первая строка — 0, вторая строка — 01, 
// а третья строка — 0110.
// Учитывая два целых числа n и k, верните k - й(с индексом 1) 
// символ в n - й строке таблицы из n строк.
// 779

n = 2, k = 2

var kthGrammar = function (n, k) {


    let dfs = (n, k, rootVal) => {
        if (n === 1) return rootVal;

        let total = Math.pow(2, n - 1);

        // Target node will be present in the right half sub-tree of the current root node.
        if (k > total / 2) {
            let nextVal = (rootVal === 0) ? 1 : 0;
            return dfs(n - 1, k - (total / 2), nextVal);
        }
        // Otherwise, the target node is in the left sub-tree of the current root node.
        else {
            let nextVal = (rootVal === 0) ? 0 : 1;
            return dfs(n - 1, k, nextVal);
        }
    };

    return dfs(n, k, 0)



};


console.log(kthGrammar(n, k))