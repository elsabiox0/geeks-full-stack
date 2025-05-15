-- q1
select * from language ;
-- q2
select film.title, film.description, language.name from film 
inner join language on language.language_id=film.language_id;
-- q3
select film.title, film.description, language.name from language 
left join film on language.language_id=film.language_id;
-- q4
create table new_film (
    id serial primary key,
    name varchar(100)
);
insert into new_film (name) 
values 
('Inception'),
('Interstellar'),
('The Matrix'),
('Parasite');

-- q5

create table customer_review(
	review_id serial not null primary key,
	film_id int not null,
	language_id int not null,
	title varchar(255),
	score int check (score between 1 and 10),
	review_text text,
	last_update timestamp default current_timestamp,
	foreign key (film_id) references new_film(id) on delete cascade,
	foreign key (language_id) references language(language_id)
)

-- q6
insert into customer_review (film_id, language_id, title, score, review_text)
values 
(1, 1, 'Mind-blowing!', 9, 'A brilliant concept with stunning visuals.'),
(2, 1, 'Epic sci-fi adventure', 8, 'Deep and emotional with great performances.'),
(3, 3, 'Masterpiece', 10, 'A genius critique of class struggle.'),
(1, 2, 'Incroyable', 9, 'Un film spectaculaire et intelligent.');
-- q7
delete from  new_film 
where id = 1;
select * from customer_review
-- when was deleted the film even the review for this film was also deleted