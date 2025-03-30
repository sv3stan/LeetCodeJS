/**
Вам дают целочисленные ряды, представляющие ряды некоторых механиков. Ранки - это звание механика. Механик с рангом R может отремонтировать N автомобилей за r * n2 минуты. Вам также дают целочисленные автомобили, представляющие общее количество автомобилей, ожидающих ремонта в гараже. Верните минимальное время, необходимое для ремонта всех автомобилей. Примечание: все механики могут восстановить автомобили одновременно.
 */

function repairCars(ranks: number[], cars: number): number {
    function canRepair(time: number): boolean {
        let total_cars = 0;
        for (const rank of ranks) {
            total_cars += Math.floor(Math.sqrt(time / rank));
            if (total_cars >= cars) {
                return true;
            }
        }
        return total_cars >= cars;
    }
    let low = 0;
    let high = Math.max(...ranks) * cars * cars;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (canRepair(mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}
