// Напишите решение, сообщающее имя и сумму бонуса каждого сотрудника с бонусом менее 1000.
// Верните таблицу результатов в любом порядке.
// Формат результата представлен в следующем примере.

// 577

// SELECT Employee.name, Bonus.bonus
// FROM Employee
// LEFT JOIN Bonus ON Employee.empId = Bonus.empId
// WHERE Bonus.bonus < 1000 or Bonus.bonus IS NULL;