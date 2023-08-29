create table products(
	id int not null auto_increment,
    name varchar(50) not null,
    created_by int not null,
    marca varchar(50) not null,
    primary key(id),
    foreign key(created_by) references user(id)
);
rename table products to product;  -- cambiar nombre tabla 

-- insertar multiples valores
insert into product (name, created_by, marca)
values
	('ipad', 1, 'apple'),
    ('iphone', 1, 'apple'),
    ('watch', 2, 'apple'),
    ('macbook', 1, 'apple'),
    ('imac', 3, 'apple'),
    ('ipad mmini', 2, 'apple');
-- corrijo typo
update product set name = 'ipad mini' where id = 12;    
    
select * from product; 

-- LEFT JOIN
select u.id, u.email, p.name from user u left join product p on u.id = p.created_by;

-- RIGHT JOIN
select u.id, u.email, p.name from user u right join product p on u.id = p.created_by;

-- INNER JOIN
select u.id, u.email, p.name from user u inner join product p on u.id = p.created_by;

-- CROSS JOIN
select u.id, u.name, p.id, p.name from user u cross join product p;

-- GROUP BY
select count(id), marca from product group by marca;

-- GROUP BY AFTER LEFT JOIN
select count(p.id), u.name from product p left join user u on p.created_by = u.id group by u.name; 

-- GROUP BY with condition
select count(p.id), u.name from product p left join user u 
on p.created_by = u.id group by u.name
having count(p.id) > 1;

-- BORRAR TABLA
drop table product;