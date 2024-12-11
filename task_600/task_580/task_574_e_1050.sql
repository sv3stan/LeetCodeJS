-- Напишите решение, позволяющее найти все пары (actor_id, Director_id), 
-- в которых актер сотрудничал с режиссером не менее трех раз.
-- Верните таблицу результатов в любом порядке.
-- Формат результата представлен в следующем примере.
-- 1050

SELECT actor_id, director_id
FROM ActorDirector
GROUP BY actor_id, director_id
HAVING COUNT(*) >= 3;