create database bootcamp;
create table student(
	id serial primary key ,
	last_name varchar(50) not null,
	first_name varchar(50) not null,
	birth_date date not null
)

 insert into student (first_name, last_name, birth_date) values
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');
select * from student ;
select first_name,last_name from student;
select first_name,last_name from student where student_id=2;
select first_name,last_name from student where first_name='Marc' and last_name='Benichou';
select first_name,last_name from student where first_name like '%a%'
select first_name,last_name from student where lower(first_name) like 'a%%'
select first_name,last_name from student where lower(first_name) like '%%a'
select first_name,last_name from student where lower(first_name) like '%a_'
select first_name,last_name from student where student_id=1 or student_id=3
select * from student where birth_date >= '1/01/2000'




