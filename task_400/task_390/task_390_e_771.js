// Вам даны цепочки драгоценных камней, представляющие типы камней, 
// которые являются драгоценными камнями, и камни, представляющие те камни, 
// которые у вас есть.Каждый персонаж в камнях — это тип камня, 
// который у вас есть.
// Вы хотите знать, сколько камней у вас тоже являются драгоценностями.
// Буквы чувствительны к регистру, поэтому «а» считается другим типом камня, чем «А».
// 771


jewels = "aA", stones = "aAAbbbb";
jewels = "z", stones = "ZZ"

var numJewelsInStones = function (jewels, stones) {
    const hash = new Set(jewels);
    let count = 0;
    for (const stone of stones) if (hash.has(stone)) count++
    return count
};


console.log(numJewelsInStones(jewels, stones))


