-- Напишите решение, позволяющее сообщать имя и баланс 
-- пользователей с балансом выше 10 000. Баланс учетной 
-- записи равен сумме сумм всех транзакций, 
-- связанных с этой учетной записью.

-- 1587


SELECT Users.NAME, SUM(Transactions.amount) as BALANCE
FROM Transactions
JOIN Users ON Transactions.account = Users.account
GROUP BY Transactions.account
HAVING SUM(Transactions.amount) > 10000;