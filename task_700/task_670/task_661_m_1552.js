/**
Во вселенной Земля C-137 Рик обнаружил особую форму магнитной силы между двумя шариками, если их положить в его новую изобретенную корзину. У Рика n пустых корзин, i-я корзина находится в позиции [i], у Морти есть m шаров, и ему нужно распределить шары по корзинам так, чтобы минимальная магнитная сила между любыми двумя шарами была максимальной.
Рик заявил, что магнитная сила между двумя разными шарами в положениях x и y равна |x - y|.
Учитывая позицию целочисленного массива и целое число m. Верните необходимую силу
 */

let position = [1, 2, 3, 4, 7];
let m = 3;

let maxDistance = function (position, m) {
    position.sort((a, b) => a - b);

    function helper(minForce) {
        let count = 1;
        let lastPosition = position[0];

        for (let i = 1; i < position.length; i++) {
            if (position[i] - lastPosition >= minForce) {
                count++;
                lastPosition = position[i];
                if (count >= m) {
                    return true;
                }
            }
        }
        return false;
    }

    let left = 1;
    let right = position[position.length - 1] - position[0];
    let ans = 0;

    while (left <= right) {
        let middle = (left + right) >> 1;
        if (helper(middle)) {
            ans = middle;
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return ans;
};

console.log(maxDistance(position, m));
