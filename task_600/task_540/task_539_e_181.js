
// Напишите решение, чтобы найти сотрудников, которые зарабатывают больше, чем их менеджеры.
// Верните таблицу результатов в любом порядке.
// Формат результата представлен в следующем примере.

// 181

// SELECT employ.name AS Employee
// FROM Employee employ
// JOIN Employee manager ON employ.managerId = manager.id
// WHERE employ.salary > manager.salary;