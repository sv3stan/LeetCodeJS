/**
Учитывая список папок, верните папки после удаления всех подпапок в этих папках. Вы можете вернуть ответ в любом порядке.
Если папка[i] находится внутри другой папки[j], она называется ее подпапкой. Подпапка папки [j] должна начинаться с папки [j], за которой следует знак «/». Например, «/a/b» является подпапкой «/a», но «/b» не является подпапкой «/a/b/c».
Формат пути представляет собой одну или несколько объединенных строк вида: '/', за которыми следует одна или несколько строчных английских букв.
Например, «/leetcode» и «/leetcode/problems» являются допустимыми путями, а пустая строка и «/» — нет.
 */

let folder = ['/a', '/a/b', '/c/d', '/c/d/e', '/c/f'];

function removeSubfolders(folder: string[]): string[] {
    const ans = [];
    const hash = new Set(folder);

    for (let path of folder) {
        let isSub = false;
        let tempPath = path;

        // Проверка каждого родительского пути
        while (tempPath.includes('/')) {
            tempPath = tempPath.substring(0, tempPath.lastIndexOf('/'));
            if (hash.has(tempPath)) {
                isSub = true;
                break;
            }
        }

        if (!isSub) {
            ans.push(path);
        }
    }

    return ans;
}

console.log(removeSubfolders(folder));
