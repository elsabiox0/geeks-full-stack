select * from customer;
select first_name || ' ' || last_name AS full_name  from customer;
select distinct create_date from customer;
select * from customer order by first_name desc;
select film_id,title , description, release_year, rental_rate from film order by rental_rate asc;

select address , phone from address 
where district = 'Texas';

select * from film where film_id in (15,150);

select film_id,title , description, length, rental_rate from film where  lower(title) = lower('interstellar');

select film_id,title , description, length, rental_rate from film where lower(title) like 'in%%';

select * from film 
order by rental_rate asc
limit 10;

select * from film 
order by rental_rate asc
offset 10
limit 10;

select customer.customer_id ,customer.first_name ,  customer.last_name ,payment.amount , payment.payment_date  from customer
inner join payment  on payment.customer_id=customer.customer_id
order by customer.customer_id;

select * from film 
left join inventory on film.film_id = inventory.film_id 
where inventory.film_id is null;

select city.city , country.country from city 
inner join country on country.country_id = city.country_id;


select customer.customer_id , customer.first_name, customer.last_name , payment.amount , payment.payment_date 
from customer
inner join payment on payment.customer_id= customer.customer_id
inner join staff on payment.staff_id = staff.staff_id
order by staff.staff_id














