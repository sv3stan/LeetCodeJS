// Генная строка может быть представлена ​​8 - символьной длинной строкой 
// с возможностью выбора из «A», «C», «G» и «T».
// Предположим, нам нужно исследовать мутацию генной строки startGene в 
// генную строку endGene, где одна мутация определяется как изменение 
// одного символа в генной строке.
// Например, «AACCGGTT» --> «AACCGGTA» — это одна мутация.
// Существует также банк генов, в котором регистрируются все действительные 
// мутации генов.Чтобы генная строка была действительной, ген должен находиться в банке.
// Учитывая две генные строки startGene и endGene и банк генного банка, 
// верните минимальное количество мутаций, необходимых для мутации от 
// startGene до endGene.Если такой мутации нет, верните - 1.
// Обратите внимание: предполагается, что отправная точка действительна, 
// поэтому она может не быть включена в банк.
// 433

startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA", "AACCGCTA", "AAACGGTA"]


var minMutation = function (startGene, endGene, bank) {
    const genBank = new Set(bank);
    console.log(genBank)
    if (!genBank.has(endGene)) {
        return -1;
    }

    const mutations = ['A', 'C', 'G', 'T'];
    const queue = [[startGene, 0]];

    while (queue.length > 0) {
        const [current, mutationsCount] = queue.shift();

        if (current === endGene) {
            return mutationsCount;
        }

        for (let i = 0; i < current.length; i++) {
            for (const item of mutations) {
                if (item !== current[i]) {
                    const newGene = current.slice(0, i) + item + current.slice(i + 1);
                    if (genBank.has(newGene)) {
                        queue.push([newGene, mutationsCount + 1]);
                        genBank.delete(newGene); // Помечаем мутацию как посещенную
                    }
                }
            }
        }
    }

    return -1; // Если не удалось найти мутацию
};


console.log(minMutation(startGene, endGene, bank))