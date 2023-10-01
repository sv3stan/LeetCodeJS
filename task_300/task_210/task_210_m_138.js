// Связный список длины n дан таким образом, что каждый узел содержит дополнительный случайный указатель, 
// который может указывать на любой узел в списке или на ноль.
// Создайте глубокую копию списка.Глубокая копия должна состоять ровно из n совершенно новых узлов, 
// где каждому новому узлу присваивается значение, равное значению соответствующего исходного узла.И следующий, 
// и случайный указатель новых узлов должны указывать на новые узлы в скопированном списке так, 
// чтобы указатели в исходном списке и скопированном списке представляли одно и то же состояние списка.
// Ни один из указателей в новом списке не должен указывать на узлы исходного списка.
// Например, если в исходном списке есть два узла X и Y, где X.random-- > Y, 
// то для соответствующих двух узлов x и y в скопированном списке x.random-- > y.
// Верните заголовок скопированного связанного списка.
// Связанный список представляется на входе / выходе как список из n узлов.Каждый узел представлен парой[val, random_index], где:
// val: целое число, представляющее Node.val
// Случайный_индекс: индекс узла(диапазон от 0 до n - 1), на который указывает случайный указатель, или ноль, если он не указывает ни на один узел.
// Вашему коду будет присвоен только заголовок исходного связанного списка.
// 138

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}



// Создаем узлы
let node5 = new Node(1, null);
let node4 = new Node(10, node5);
let node3 = new Node(11, node4);
let node2 = new Node(13, node3);
let node1 = new Node(7, node2);

// Устанавливаем указатели next
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Устанавливаем указатели random
node1.random = null;    // Ваш первый элемент [7, null]
node2.random = node1;   // Второй элемент [13, 0]
node3.random = node4;   // Третий элемент [11, 4]
node4.random = node2;   // Четвертый элемент [10, 2]
node5.random = node1;   // Пятый элемент [1, 0]


let head = node1;



var copyRandomList = function (head) {
    if (head === null) return null;

    const hash = new Map();

    let current = head;
    while (current) {
        hash.set(current, new Node(current.val));
        current = current.next;
    }

    current = head;
    while (current) {
        hash.get(current).next = hash.get(current.next) || null;
        hash.get(current).random = hash.get(current.random) || null;
        current = current.next;
    }

    return hash.get(head);
};

console.log(copyRandomList(head))