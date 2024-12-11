-- Напишите решение, чтобы найти имена всех продавцов, 
-- у которых не было заказов, связанных с компанией с названием «RED».
-- Верните таблицу результатов в любом порядке.
-- Формат результата представлен в следующем примере.

-- 607


select sp.name
from SalesPerson sp
where sp.name not in
    (select sp.name
    from SalesPerson sp
        left join Orders o on sp.sales_id = o.sales_id
        left join Company c on o.com_id = c.com_id
    where c.name = 'Red')