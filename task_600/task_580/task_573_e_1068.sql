-- Напишите решение для сообщения  product_name, year, and price для каждого sale_id в таблице Sales.
-- Верните полученную таблицу в любом порядке.
-- Формат результата представлен в следующем примере.
-- 1068

SELECT Product.product_name, Sales.year, Sales.price 
FROM Product
JOIN Sales ON Sales.product_id = Product.product_id;