-- // Напишите SQL - запрос, который сообщает средний стаж всех 
-- // сотрудников по каждому проекту, округленный до двух цифр.
-- // Верните таблицу результатов в любом порядке.
-- // Формат результата запроса приведен в следующем примере.

-- // 1065

SELECT project_id, ROUND(AVG(experience_years), 2) AS average_years
FROM Project
JOIN Employee ON Project.employee_id = Employee.employee_id
GROUP BY project_id;