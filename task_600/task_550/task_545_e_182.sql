﻿-- Напишите решение, позволяющее сообщать обо всех повторяющихся электронных письмах.
-- Обратите внимание: гарантировано, что поле электронной почты не равно NULL.
-- Верните таблицу результатов в любом порядке.
-- Формат результата представлен в следующем примере.

-- 182

Select email
From Person
Group by email
Having Count(email) > 1