-- Напишите решение, чтобы найти идентификаторы всех дат 
-- с более высокими температурами по сравнению с предыдущими датами (вчера).
-- Верните таблицу результатов в любом порядке.
-- Формат результата представлен в следующем примере.

-- 197

SELECT
    w1.id
FROM
    Weather w1
JOIN
    Weather w2 ON w1.recordDate = DATE_ADD(w2.recordDate, INTERVAL 1 DAY)
WHERE
    w1.temperature > w2.temperature;