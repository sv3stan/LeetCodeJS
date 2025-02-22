/**
У вас есть n -плитка, где на каждой плите есть одна буква плитка [i], напечатанная на ней. Верните количество возможных непустых последовательностей букв, которые вы можете сделать, используя буквы, напечатанные на этих плитках.
 */
function numTilePossibilities(tiles: string): number {
    const used = new Array(tiles.length).fill(false);
    const uniqueSequences = new Set<string>();

    function backtrack(path: string) {
        if (path.length > 0) {
            uniqueSequences.add(path);
        }

        for (let i = 0; i < tiles.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            backtrack(path + tiles[i]);

            used[i] = false;
        }
    }

    backtrack('');

    return uniqueSequences.size;
}
