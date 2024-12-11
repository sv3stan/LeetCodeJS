﻿-- Напишите решение для поиска customer_number для клиента, 
-- разместившего наибольшее количество заказов.
-- Тестовые примеры создаются таким образом, 
-- чтобы ровно один клиент разместил больше заказов, чем любой другой клиент.
-- Формат результата представлен в следующем примере.

-- 586

SELECT customer_number
FROM Orders
GROUP BY customer_number
ORDER BY COUNT(customer_number) DESC
LIMIT 1;

