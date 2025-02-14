/**
Разработайте алгоритм, который принимает поток целых чисел и извлекает продукт последних k целых чисел потока. Внедрить класс продукта: ProductOfNumbers () инициализирует объект с пустым потоком. void add (int num) добавляет целочисленное число в поток. int getProduct (int k) Возвращает продукт последних k номеров в текущем списке. Вы можете предположить, что всегда текущий список имеет как минимум k номеров. Тестовые примеры генерируются таким образом, что в любое время произведение любой смежной последовательности чисел вписывается в одно 32-разрядное целое число без переполнения.
 */

class ProductOfNumbers {
    private prefix: number[];
    private zeroIndex: number;

    constructor() {
        this.prefix = [1];
        this.zeroIndex = -1;
    }

    add(num: number): void {
        if (num === 0) {
            this.zeroIndex = this.prefix.length;
            this.prefix.push(1);
        } else {
            const lastProduct = this.prefix[this.prefix.length - 1];
            this.prefix.push(lastProduct * num);
        }
    }

    getProduct(k: number): number {
        const n = this.prefix.length - 1;
        if (this.zeroIndex >= n - k + 1) {
            return 0;
        }
        return this.prefix[n] / this.prefix[n - k];
    }
}
