/**
Вам дают 0-индексированные строковые блоки длины n, где блоки [i] либо «w», либо «B», представляющие цвет блока ITH. Персонажи «W» и «B» обозначают цвета белые и черные, соответственно. Вам также дается целое число K, которое является желаемым количеством последовательных черных блоков. В одной операции вы можете переформулировать белый блок, чтобы он становился черным блоком. Верните минимальное количество необходимых операций, чтобы, по крайней мере, один случай k последовательных черных блоков.
 */

function minimumRecolors(blocks: string, k: number): number {
    let currentQuantityWhite = 0;
    let minQuantityWhite = Infinity;
    for (let i = 0; i < k; i++) {
        if (blocks[i] === 'W') currentQuantityWhite++;
    }
    minQuantityWhite = currentQuantityWhite;
    for (let i = k; i < blocks.length; i++) {
        if (blocks[i] === 'B' && blocks[i - k] === 'W') {
            currentQuantityWhite--;
        }
        if (blocks[i] === 'W' && blocks[i - k] === 'B') {
            currentQuantityWhite++;
        }
        minQuantityWhite = Math.min(minQuantityWhite, currentQuantityWhite);
    }
    return minQuantityWhite;
}
