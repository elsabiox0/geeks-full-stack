
CREATE TABLE items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(100),
    price float
);
INSERT INTO items (item_name, price) VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

CREATE TABLE customers (
    first_name VARCHAR(100),
    last_name VARCHAR(100)
);

INSERT INTO customers (first_name, last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');
select * from items;
select * from items where price > 80;
select * from items where price <= 300;
select * from customers where last_name= 'Smith';
select * from customers where last_name= 'Jones';
select * from customers where last_name!= 'Scott';


