﻿
-- Напишите решение, позволяющее сообщать о фильмах с нечетным идентификатором и нескучным описанием.

-- Верните таблицу результатов, упорядоченную по рейтингу в порядке убывания.

-- Формат результата представлен в следующем примере.

-- 620


select id, movie, description, rating 
from Cinema
where id % 2 != 0 and description != 'boring'
order by rating desc