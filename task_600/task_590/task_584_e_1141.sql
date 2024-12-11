-- Напишите решение для определения ежедневного количества 
-- активных пользователей за период в 30 дней, заканчивающийся 
-- 27 июля 2019 г. включительно. Пользователь был активен в 
-- какой-то день, если он совершил хотя бы одно действие в этот день.

-- 1141

SELECT activity_date AS day, COUNT(DISTINCT user_id) AS active_users
FROM Activity
WHERE activity_date BETWEEN DATE_SUB('2019-07-28', INTERVAL 30 DAY) AND '2019-07-27'
GROUP BY activity_date;