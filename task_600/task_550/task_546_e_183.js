// Напишите решение, позволяющее найти всех клиентов,
// которые никогда ничего не заказывают.
// Верните таблицу результатов в любом порядке.
// Формат результата представлен в следующем примере.

// 183

// Select Customers.name As Customers
// From Customers
// WHERE Customers.id NOT IN(SELECT Orders.customerId FROM Orders);