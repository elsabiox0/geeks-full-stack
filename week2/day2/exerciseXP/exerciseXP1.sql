
SELECT * FROM items ORDER BY item_price ASC;

SELECT * FROM items WHERE item_price >= 80 ORDER BY item_price DESC;

SELECT customer_firstname, customer_lastname
	FROM customers ORDER BY customer_firstname ASC FETCH FIRST 3 ROWS ONLY ;

SELECT customer_lastname
	FROM customers ORDER BY customer_lastname DESC;
