﻿-- Одиночное число — это число, которое появилось в таблице MyNumbers только один раз.
-- Найдите самое большое одно число. Если единого номера нет, сообщите ноль.
-- Формат результата представлен в следующем примере.
-- 619
SELECT MAX(num) num
FROM (
    SELECT num
    FROM MyNumbers
    GROUP BY num
    HAVING COUNT(num) = 1
) x;