// Есть n комнат, отмеченных цифрами от 0 до n - 1, и все комнаты, 
// кроме комнаты 0, заперты.Ваша цель — посетить все комнаты.
// Однако вы не можете войти в запертую комнату, не имея ключа.
// Когда вы посещаете комнату, вы можете найти в ней набор разных ключей.
// На каждом ключе есть номер, обозначающий, какую комнату он открывает, 
// и вы можете взять их все с собой, чтобы открыть другие комнаты.
// Учитывая массив комнат, где комнаты[i] — это набор ключей, 
// которые вы можете получить, если вы посетили комнату i, 
// верните true, если вы можете посетить все комнаты, или false в противном случае.
// 841

rooms = [[1], [2], [3], []]
rooms = [[1, 3], [3, 0, 1], [2], [0]]

var canVisitAllRooms = function (rooms) {

    // const room = new Set();
    // const stack = [];
    // for (let i = 0; i < rooms.length; i++) {
    //     stack.push(rooms[i])
    //     room.add(i);
    // }

    // while (stack.length !== 0) {

    //     const keyRoom = stack.pop()
    //     console.log(keyRoom[0])

    //     for (const key of keyRoom) {
    //         if (room.has(key)) {
    //             room.delete(key);
    //         }
    //     }
    // }

    // console.log(stack)
    // console.log(room)
    // return (room.size > 1) ? false : true;

    const visited = new Set();
    const stack = [0]; // Начнем с первой комнаты (индекс 0)

    while (stack.length !== 0) {
        const currentIndex = stack.pop();
        visited.add(currentIndex);

        //console.log(visited)
        for (const nextIndex of rooms[currentIndex]) {
            if (!visited.has(nextIndex)) {
                stack.push(nextIndex);
            }
        }
    }

    return visited.size === rooms.length;


};


console.log(canVisitAllRooms(rooms))