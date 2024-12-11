-- Напишите решение, позволяющее сообщать идентификаторы 
-- всех сотрудников с недостающей информацией. 
-- Сведения о работнике отсутствуют, если:
-- Имя сотрудника отсутствует или
-- Заработная плата сотрудника отсутствует.
-- Верните таблицу результатов, упорядоченную по идентификатору 
-- сотрудника в порядке возрастания.
-- Формат результата представлен в следующем примере.

-- 1965


SELECT employee_id
FROM employees
WHERE employee_id not in (SELECT employee_id FROM salaries)
UNION
SELECT employee_id
FROM salaries
WHERE employee_id not in (select employee_id FROM Employees)
ORDER BY 1