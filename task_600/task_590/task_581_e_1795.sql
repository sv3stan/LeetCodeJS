-- Напишите решение, позволяющее переупорядочить таблицу «Продукты» так, 
-- чтобы каждая строка содержала (product_id, магазин, цена). 
-- Если продукт недоступен в магазине, не включайте строку 
-- с этим Product_id и комбинацией магазина в таблицу результатов.
-- Верните таблицу результатов в любом порядке.
-- Формат результата представлен в следующем примере.

-- 1795


select product_id, 'store1' AS store, store1 AS price
from Products
where store1 != 0
union
select product_id, 'store2' AS store, store2 AS price
from Products
where store2 != 0
union
select product_id, 'store3' AS store, store3 AS price
from Products
where store3 != 0